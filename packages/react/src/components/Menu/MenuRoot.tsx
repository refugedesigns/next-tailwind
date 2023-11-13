import React from 'react';
import PropTypes from 'prop-types';
import {
  useFloating,
  autoUpdate,
  flip,
  shift,
  offset as fuiOffset,
  FloatingNode,
  safePolygon,
  useClick,
  useDismiss,
  useInteractions,
  useFloatingNodeId,
  useHover,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
  useFloatingTree,
  useFloatingParentNodeId,
} from '@floating-ui/react';
import merge from 'deepmerge';
import { useTheme } from '../../context/theme';
import type {
  open,
  handler,
  placement,
  offset,
  animate,
  lockScroll,
  children,
  dismiss,
  allowHover,
  divide,
} from '../../types/components/menu';
import {
  propTypesOpen,
  propTypesHandler,
  propTypesPlacement,
  propTypesOffset,
  propTypesAnimate,
  propTypesLockScroll,
  propTypesChildren,
  propTypesDismiss,
  propTypesAllowHover,
  propTypesDivide,
} from '../../types/components/menu';
import { MenuContextProvider } from './MenuContext';

export interface MenuRootProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offset;
  animate?: animate;
  lockScroll?: lockScroll;
  dismiss?: dismiss;
  allowHover?: allowHover;
  divide?: divide;
  children?: children;
}

export const MenuRoot = React.forwardRef<
  HTMLButtonElement,
  MenuRootProps & React.HTMLProps<HTMLButtonElement>
>(
  (
    {
      open,
      handler,
      placement,
      offset,
      animate,
      lockScroll,
      dismiss,
      children,
      allowHover,
      divide,
    },
    ref,
  ) => {
    //1. init
    const {
      menu: { defaultProps },
    } = useTheme();
    const [internalOpen, setInternalOpen] = React.useState(false);

    //2. set default props
    open ??= internalOpen;
    handler ??= setInternalOpen;
    placement ??= defaultProps.placement;
    offset ??= defaultProps.offset;
    animate ??= defaultProps.animate;
    lockScroll ??= defaultProps.lockScroll;
    dismiss ??= defaultProps.dismiss;
    divide ??= defaultProps.divide;
    allowHover ??= defaultProps.allowHover;

    //3. set @floating-ui/react
    const [internalAllowHover, setInternalAllowHover] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const listItemsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
    const listContentRef = React.useRef(
      React.Children.map(children, (child) =>
        React.isValidElement(child) ? child.props.label : null,
      ) as Array<string | null>,
    );

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();

    const nested = parentId != null;

    const { x, y, strategy, context, refs } = useFloating({
      nodeId,
      open,
      onOpenChange: handler,
      placement,
      middleware: [fuiOffset(offset), flip(), shift()],
      whileElementsMounted: autoUpdate,
    });
    const hover = useHover(context, {
      handleClose: safePolygon({ blockPointerEvents: true }),
      enabled: allowHover || (nested && internalAllowHover),
      delay: { open: 75 },
    });
    const click = useClick(context, {
      event: 'mousedown',
      toggle: !nested || !internalAllowHover,
      ignoreMouse: nested,
    });
    const role = useRole(context, { role: 'menu' });
    const internalDismiss = useDismiss(context, dismiss);
    const typeahead = useTypeahead(context, {
      listRef: listContentRef,
      onMatch: open ? setActiveIndex : undefined,
      activeIndex,
    });
    const listNavigation = useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex,
      onNavigate: setActiveIndex,
      nested,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([
        hover,
        click,
        role,
        internalDismiss,
        typeahead,
        listNavigation,
      ]);

    const referenceRef = useMergeRefs([ref, refs.setReference]);

    React.useEffect(() => {
      if (!tree) return;

      function handleTreeClick() {
        if (dismiss?.itemPress) handler(false);
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          handler(false);
        }
      }

      tree.events.on('click', handleTreeClick);
      tree.events.on('menuopen', onSubMenuOpen);

      return () => {
        tree.events.off('click', handleTreeClick);
        tree.events.off('menuopen', onSubMenuOpen);
      };
    }, [tree, nodeId, parentId]);

    React.useEffect(() => {
      if (open) {
        tree.events.emit('menuopen', { nodeId, parentId });
      }
    }, [tree, open, nodeId, parentId]);

    React.useEffect(() => {
      function onPointerMove({ pointerType }: PointerEvent) {
        if (pointerType !== 'touch') {
          setInternalAllowHover(true);
        }
      }

      function onKeyDown() {
        setInternalAllowHover(false);
      }

      window.addEventListener('pointermove', onPointerMove, {
        once: true,
        capture: true,
      });

      window.addEventListener('keydown', onKeyDown, true);
      return () => {
        window.removeEventListener('pointermove', onPointerMove, {
          capture: true,
        });

        window.removeEventListener('keydown', onKeyDown, true);
      };
    }, [allowHover]);

    // animations
    const animation = {
      unmount: {
        opacity: 0,
        transformOrigin: 'top',
        transform: 'scale(0.95)',
        transition: { duration: 0.2 },
      },
      mount: {
        opacity: 1,
        transformOrigin: 'top',
        transform: 'scale(1)',
        transition: { duration: 0.2 },
      },
    };
    const appliedAnimation = merge(animation, animate);

    const contextValue = React.useMemo(
      () => ({
        open,
        handler,
        setInternalOpen,
        strategy,
        x,
        y,
        reference: referenceRef,
        floating: refs.setFloating,
        listItemsRef,
        internalAllowHover,
        getReferenceProps,
        getItemProps,
        getFloatingProps,
        divide,
        appliedAnimation,
        lockScroll,
        context,
        tree,
        allowHover,
        activeIndex,
        setActiveIndex,
        nested,
      }),
      [
        open,
        handler,
        setInternalOpen,
        strategy,
        x,
        y,
        referenceRef,
        refs.setFloating,
        listItemsRef,
        internalAllowHover,
        getReferenceProps,
        getItemProps,
        getFloatingProps,
        lockScroll,
        appliedAnimation,
        context,
        tree,
        allowHover,
        activeIndex,
        setActiveIndex,
        nested,
        divide,
      ],
    );
    return (
      <MenuContextProvider value={contextValue}>
        <FloatingNode id={nodeId}>{children}</FloatingNode>
      </MenuContextProvider>
    );
  },
);

MenuRoot.displayName = 'MenuRoot';

MenuRoot.propTypes = {
  open: propTypesOpen,
  handler: propTypesHandler,
  placement: PropTypes.oneOf(propTypesPlacement),
  offset: propTypesOffset,
  animate: propTypesAnimate,
  lockScroll: propTypesLockScroll,
  children: propTypesChildren,
  allowHover: propTypesAllowHover,
  divide: propTypesDivide,
  dismiss: propTypesDismiss,
};

export default MenuRoot;
