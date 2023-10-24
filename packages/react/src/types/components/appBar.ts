import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

import type { colors, animation } from '../generics';
import { propTypesColors, propTypesAnimation } from '../generics';

//typescript types
export type variant = 'filled' | 'gradient' | 'outlined';
export type color = 'transparent' | 'white' | colors;
export type shadow = boolean;
export type blurred = boolean;
export type fullWidth = boolean;
export type className = string;
export type children = ReactNode;
export type open = boolean;
export type animate = animation;