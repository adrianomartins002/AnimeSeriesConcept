import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const Button = ({item, index}) => {
  return (
    <TouchableOpacity>
      <View style={[style.container, index==0? {backgroundColor:"#B89200"}:{}, item.style]}>
        <Text style={[style.textButton, item.style]}>{item.title ? item.title : "title"}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    width: 150,
    height: 44,
    backgroundColor: "#2F2F2F",
    borderRadius: 30,
    justifyContent: "center"
  },
  textButton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  }
})
