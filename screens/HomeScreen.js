import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

export default function HomeScreen() {


  const renderHeaderComponent = () => {
    return (
      <View>
        <View>
          <Text style={{ color: "#CFA900" }}>AnimeSerials</Text>
        </View>
        <View>
          <FlatList />
        </View>
      </View>
    )
  }

  const renderFooterComponent = () => {
    return (
      <View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <StatusBar hidden={false} translucent={false} barStyle="light-content" ></StatusBar> */}
        <View style={{ flex: 2 }}>
          {renderHeaderComponent()}
        </View>
        <View style={{flex:4}}>
          <FlatList
        >
        </FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F13',
  },

});
