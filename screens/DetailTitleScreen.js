import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function DetailTitleScreen(props) {
  return (
      <View style={{
        flex:1,
        backgroundColor:"red"
      }}>
      </View>
  );
}

DetailTitleScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
