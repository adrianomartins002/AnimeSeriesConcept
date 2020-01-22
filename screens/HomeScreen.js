import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../components/atoms'
import { Card } from '../components/molecules'
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconLeft = () => <Icon name="chevron-left" size={30} color="#FFF" />
const IconRight = () => <Icon name="layer-group" size={30} color="#FFF" />

const arrayButtons = [
  {
    id: 1,
    title: "Popular",
  },
  {
    id: 2,
    title: "New",
  },
  {
    id: 3,
    title: "Name",
  }
]

export default function HomeScreen() {

  const [itemMenu, setItemMenu] = useState(1)

  const onPressItem = (id) => {
    
    setItemMenu(id)
  }

  const renderHeaderComponent = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.8 }}>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
            <IconLeft />
            <IconRight />
          </View>
          <View style={{ flex: 1.5, flexDirection: "row", paddingLeft: 12, alignItems: "center" }}>
            <Text style={{ color: "#B89200", fontSize: 40, textAlign: "left" }}>Anime</Text>
            <Text style={{ color: "#FFF", fontSize: 40, textAlign: "right" }}>Serials</Text>
          </View>
        </View>
        <View style={{ flex: 1, paddingLeft: 12, justifyContent: "flex-end" }}>
          <FlatList
            data={arrayButtons}
            renderItem={({ item, index }) => <Button id={item.id}
              title={item.title}
              onPress={onPressItem}
              index={index}
              itemMenuSelecionado={itemMenu}
              colorBackground={itemMenu == item.id ? "#B89200" :"#2F2F2F"} />
            }
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            showsHorizontalScrollIndicator={false}
          />
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
      {console.warn("renderizou")}
      {/* paliativo para o header */}
      <View style={{ width: "100%", height: 30, backgroundColor: "#0F0F13" }} />

      <StatusBar translucent={false} hidden={false} />
      <View style={styles.container}>

        <View style={{ flex: 2 }}>
          {renderHeaderComponent()}
        </View>
        <View style={{ flex: 4 }}>
          <FlatList
            data={new Array({}, {}, {}, {}, {}, {})}
            renderItem={Card}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            numColumns={2}
          >
          </FlatList>
          {/* <Card item={{color:"red"}}></Card> */}
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
