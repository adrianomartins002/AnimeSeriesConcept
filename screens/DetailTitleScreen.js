import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { HeaderComponent, MenuHorizontal } from '../components/organisms';
import Carousel from 'react-native-snap-carousel'

export default function DetailTitleScreen(props) {
  return (
    <View style={{
      flex: 1,
    }}>
      {/* header */}
      <View style={{
        flex: 1,
        backgroundColor: "#0F0F13",
        paddingLeft: 20
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: "left",
          color: "#E8B944",
          fontWeight: "bold",
          fontFamily: ""
        }}>
          One Punch Man
        </Text>

        <View style={{
          flexDirection: "row",
        }}>
          <Text style={{
            fontSize: 15,
            textAlign: "left",
            color: "#FFF",
            fontWeight: "bold",
            fontFamily: "",
            textAlignVertical: "bottom",
          }}>
            4.9
        </Text>
          <Text style={{
            fontSize: 12,
            textAlign: "left",
            color: "#FFF",
            fontFamily: "",
            marginLeft: 4,
            marginBottom: 2,
            textAlignVertical: "bottom",
          }}>
            (12 423 votes)
        </Text>
        </View>

        <View style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          paddingVertical: 4
        }}>
          <Text
            style={{
              color: "#FFF",
              opacity: 0.4,
              fontSize: 14,
              borderRightWidth: 1,
              borderStyle: "solid",
              borderColor: "#C0C0C0",
              paddingRight: 8
            }}>
            2017
          </Text>
          <Text
            style={{
              color: "#FFF",
              opacity: 0.4,
              fontSize: 14,
              borderRightWidth: 1,
              borderStyle: "solid",
              borderColor: "#C0C0C0",
              paddingHorizontal: 8
            }}>
            2 seasons
          </Text>
          <Text
            style={{
              color: "#FFF",
              opacity: 0.4,
              fontSize: 14,
              borderColor: "#C0C0C0",
              paddingHorizontal: 8
            }}>
            Action Anime
          </Text>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1.5 }}>
            <Text style={{ color: "#FEFEFE", fontSize: 14, }}>
              The most powerful superhero in the world can kill anyone with one blow.
                But nothing can challenge him, so he struggles with ennui and depression.
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: "https://www.pngkey.com/png/full/226-2265278_a-transparent-genos-genos-one-punch-man-drawing.png" }}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
          </View>
        </View>

      </View>

      {/*  */}
      <View style={{
        flex: 2.5,
        backgroundColor: "#171717"
      }}>
        <View style={{ backgroundColor: "#171717", flex: 0.2, justifyContent: "center" }}>
          <MenuHorizontal />
        </View>
        <View style={{

        }}>
           <Carousel
              // ref={(c) => { this._carousel = c; }}
              data={[{}, {}, {}, {}]}
              renderItem={()=><CardVideo />}
              sliderWidth={400}
              itemWidth={200}
              loop={true}
            />
          
        </View>
      </View>
    </View>
  );
}

const CardVideo = () => {
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

DetailTitleScreen.navigationOptions = {
  header: <HeaderComponent />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
