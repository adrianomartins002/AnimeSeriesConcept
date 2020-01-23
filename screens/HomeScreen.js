import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList
} from 'react-native';

import { Card } from '../components/molecules'
import { MenuHorizontal, HeaderComponent } from '../components/organisms'
import { cards } from '../constants/utils'

/**
 * HomeScreen Component
 * Page to render titles of animes
 */
export default function HomeScreen(props) {

  const renderHeaderList = () => {
    return (
      <View style={styles.headerListContainer}>
        <View style={styles.headerContainerIcons}>
          <Text style={styles.headerIconLeft}>Anime</Text>
          <Text style={styles.headerIconRight}>Serials</Text>
        </View>
        <MenuHorizontal />
      </View>
    )
  }

  function onPressCard(){
    // console.warn("teste")
    props.navigation.navigate('Detail')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} hidden={false} />
      <View style={styles.container}>
        <FlatList
          data={cards}
          renderItem={
            ({ item, index }) => {
              return <Card
                backgroundColor={item.backgroundColor}
                onPress={onPressCard}
                urlImage={item.urlImage}
                title={item.title}
                punctuation={item.punctuation}
              />
            }
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          numColumns={2}
          ListHeaderComponent={renderHeaderList}
          ListHeaderComponentStyle={{ height: 140, marginBottom: 30 }}
        />
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: <HeaderComponent />
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F13',
  },
  headerListContainer: { flex: 1 },
  headerContainerIcons: { flex: 1, flexDirection: "row", paddingLeft: 12, alignItems: "center" },
  headerIconLeft: {
    color: "#E8B944",
    fontSize: 40,
    textAlign: "left"
  },
  headerIconRight: {
    color: "#FFF",
    fontSize: 40,
    textAlign: "right"
  },
});
