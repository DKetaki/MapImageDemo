import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapComponent from './Components/MapComponent'

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
         <MapComponent></MapComponent>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
