import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>ParoquiaGO</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
