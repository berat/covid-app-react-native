import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {compose, color, size, space, flexbox, layout} from 'styled-system';

const Button = styled(TouchableOpacity)(compose(color, size, flexbox, space, layout));

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
