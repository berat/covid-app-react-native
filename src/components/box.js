import {View} from 'react-native';
import styled from 'styled-components';
import {compose, color, size, space, flexbox} from 'styled-system';

const Box = styled(View)(
  compose(
    color,
    size,
    flexbox,
    space,
  ),
);

export default Box;
