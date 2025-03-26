/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';

export type IconNames = 'verified_2' | 'info_l' | 'campaign' | 'favorite' | 'notifications' | 'info' | 'mail' | 'chat_bubble' | 'verified' | 'feedback' | 'logout' | 'star' | 'edit_square' | 'settings' | 'search1' | 'arrow_back' | 'star_fill' | 'chat' | 'more' | 'favorite_fill' | 'comment' | 'heart' | 'search';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
