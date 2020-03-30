import {Button} from 'react-native';
import * as React from 'react';

function SearchView({navigation}) {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detail')}
    />
  );
}

export default SearchView;
