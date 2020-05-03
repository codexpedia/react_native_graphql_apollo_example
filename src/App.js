import * as React from 'react';
import { View } from 'react-native';
import commonStyles from './common.styles.js';
import Currency from './Currency';

export default function App() {
  return (
    <View style={commonStyles.container}>
      <Currency/>
    </View>
  );
}

