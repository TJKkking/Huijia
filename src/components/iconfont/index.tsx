/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'star' | 'comment' | 'heart' | 'search';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
