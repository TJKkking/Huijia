/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'verified_2' | 'info_l' | 'campaign' | 'favorite' | 'notifications' | 'info' | 'mail' | 'chat_bubble' | 'verified' | 'feedback' | 'logout' | 'star' | 'edit_square' | 'settings' | 'search1' | 'arrow_back' | 'star_fill' | 'chat' | 'more' | 'favorite_fill' | 'comment' | 'heart' | 'search';

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
