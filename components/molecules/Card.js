import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'

const width = Dimensions.get("window").width
const alturaCalculada = width * 9 / 20


export const Card = ({ onPress, backgroundColor, urlImage, title, punctuation }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style.container, { backgroundColor: backgroundColor }]}>
        <Text style={style.textTitle}>{title}</Text>
        <Text style={style.textPunctuation}>{punctuation}</Text>
        <Image
          source={{ uri: urlImage }}
          resizeMode="contain"
          style={{ flex: 1 }}
        />
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    width: alturaCalculada,
    marginHorizontal: 8,
    marginVertical: 8,
    height: 260,
    backgroundColor: "#B89200",
    borderRadius: 24,
    justifyContent: "center"
  },
  textTitle: {
    flex: 0.1, color: "#FFF",
    justifyContent: "center",
    textAlign: "left",
    marginLeft: 18,
    marginTop: 14,
    fontWeight: "bold",
    fontSize: 16
  },
  textPunctuation: {
    flex: 0.1,
    color: "#FFF",
    justifyContent: "center",
    textAlign: "left",
    marginLeft: 18,
    fontSize: 12
  }
})
