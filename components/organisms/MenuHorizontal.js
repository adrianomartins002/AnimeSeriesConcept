import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Button } from '../atoms'

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

export const MenuHorizontal = ({ }) => {

  const [itemMenu, setItemMenu] = useState(1)

  const onPressItem = (id) => {

    setItemMenu(id)
  }

  return (
    <View style={style.container}>
      <FlatList
        data={arrayButtons}
        renderItem={({ item, index }) => <Button id={item.id}
          title={item.title}
          onPress={onPressItem}
          index={index}
          itemMenuSelecionado={itemMenu}
          colorBackground={itemMenu == item.id ? "#E8B944" : "#2F2F2F"} />
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container:{ 
    width:"100%",
    height:48,
    justifyContent: "flex-end",
  }
})
