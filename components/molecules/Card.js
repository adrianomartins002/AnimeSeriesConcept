import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const Card = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={[style.container]}>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    width: 180,
    marginHorizontal:8,
    marginVertical:8,
    height: 260,
    backgroundColor: "#B89200",
    borderRadius: 24,
    justifyContent: "center"
  },
  
})
