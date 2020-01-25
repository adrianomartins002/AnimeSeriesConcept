import React from 'react'
import { View, Text, Image } from 'react-native'


export const CardVideo = (props) => {
    return (
      <View
        style={{
          width: 200,
          height: 200,
          marginLeft:10,
          backgroundColor: "#171717"
        }}
      >
        <Image
          source={{ uri: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/10/One-Punch-Man-4.jpg" }}
          style={{ height:150, borderRadius:30}}
          resizeMode="contain"
        />
        <View
        style={{
          height:50,
          flexDirection:"column",
          justifyContent:"flex-start"
        }}
        >
        <Text style={{fontSize:16, color:"#FFF"}}>Episode 1/12</Text>
        <Text style={{fontSize:16, color:"#FFF", fontWeight:"bold"}}>The Strongest man</Text>
        </View>
  
      </View>
    )
  }
