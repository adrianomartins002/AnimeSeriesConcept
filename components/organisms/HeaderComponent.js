import React, {} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';


const IconLeft = () => <Icon name="chevron-left" size={30} color="#FFF" />
const IconRight = () => <Icon name="layer-group" size={30} color="#FFF" />


export const HeaderComponent = ({ }) => {


  return (
    <View style={{ flex:0.14, backgroundColor:"#0F0F13",justifyContent:"flex-end", paddingBottom:8}}>
          <View style={{  flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20}}>
            <IconLeft />
            <IconRight />
        </View>
      </View>
  )
}

const style = StyleSheet.create({
  
})
