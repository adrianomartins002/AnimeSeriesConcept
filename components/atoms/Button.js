import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


export const Button = ({ id, title, onPress, itemMenuSelecionado, colorBackground }) => {


  return (
    <TouchableOpacity onPress={()=>onPress(id)}>
      <View style={[style.container, id==1?{marginLeft:8}:{}, { backgroundColor: colorBackground }]}>
        <Text style={[style.textButton]}>{title ? title : "title"}</Text>
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
