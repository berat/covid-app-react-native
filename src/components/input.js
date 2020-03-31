import {TextInput} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  flexbox,
  border,
  borderRadius,
} from 'styled-system';
import theme from '../utils/theme'

const Box = styled(TextInput).attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999',
}))(
  compose(
    color,
    size,
    flexbox,
    typography,
    border,
    borderRadius,
    space,
  ),
);

export default Box;
