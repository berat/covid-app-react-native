import * as React from 'react';
import {Text} from 'react-native';

function Logo({children, ...props}) {
  return <Text style={{...props}}>{children}</Text>;
}

export default Logo;
