import PropTypes from 'prop-types';

export type className = string;
export type connectorProps = {
  [key: string]: any;
};

export const propTypesClassName = PropTypes.string;
export const propTypesConnector = PropTypes.instanceOf(Object);
