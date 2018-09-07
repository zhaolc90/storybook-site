// @flow
import React from 'react';

/* eslint-disable react/no-unused-prop-types,react/require-default-props */

const Message = {};

type PropsType = {
  /** A multi-type prop to be rendered in the button */
  label: string,
  /** Function to be called when the button is clicked */
  onClick?: Function,
  /** Boolean representing whether the button is disabled */
  disabled?: boolean,
  /** A plain object */
  obj?: Object,
  /** A complex Object with nested types */
  shape: {
    id: number,
    func?: Function,
    arr?: Array<{
      index: number,
    }>,
    shape?: {
      shape?: {
        foo?: string,
      },
    },
  },
  /** An array of numbers */
  arrayOf?: Array<number>,
  /** A custom type */
  msg?: typeof Message,
  /** `oneOf` as Enum */
  enm?: 'News' | 'Photos',
  /** `oneOf` A multi-type prop of string or custom Message */
  union?: string | typeof Message,
};

/** FlowTypeButton component description imported from comments inside the component file */
const FlowTypeButton = ({ label, onClick, disabled }: PropsType) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

FlowTypeButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default FlowTypeButton;
