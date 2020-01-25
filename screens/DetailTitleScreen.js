import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { HeaderComponent, MenuHorizontal } from '../components/organisms';
import Carousel from 'react-native-snap-carousel'
import {CardVideo} from '../components/organisms'

export default function DetailTitleScreen(props) {
  return (
    <View style={{
      flex: 1,
      backgroundColor:'#0F0F13'
    }}>
      {/* header */}
      <View style={{
        flex: 1,
        backgroundColor: "#0F0F13",
        paddingLeft: 20
      }}>
        <Text style={styles.descTitle}>
          One Punch Man
          {props.title}
        </Text>

        <View style={{
          flexDirection: "row",
        }}>
          <Text style={styles.descVotes}>
            4.9
            {props.nota}
        </Text>
          <Text style={styles.descVotes2}>
            (12 423 votes)
            {props.votes}
        </Text>
        </View>

        <View style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          paddingVertical: 4
        }}>
          <Text
            style={styles.descInformations}>
            2017
            {props.year}
          </Text>
          <Text
            style={[styles.descInformations,{            
              paddingHorizontal: 8
            }]}>
            2 seasons
            {props.seasons}
          </Text>
          <Text
            style={[styles.descInformations,{
              borderRightWidth:0,
              paddingHorizontal: 8
            }]}>
            Action Anime
            {props.genre}
          </Text>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.description}>
              The most powerful superhero in the world can kill anyone with one blow.
                But nothing can challenge him, so he struggles with ennui and depression.
                {props.description}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri:  "https://www.pngkey.com/png/full/226-2265278_a-transparent-genos-genos-one-punch-man-drawing.png" }}
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
        <View>
           <Carousel
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


DetailTitleScreen.navigationOptions = {
  header: <HeaderComponent />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  descTitle:{
    fontSize: 30,
    textAlign: "left",
    color: "#E8B944",
    fontWeight: "bold"
  },
  descVotes:{
    fontSize: 15,
    textAlign: "left",
    color: "#FFF",
    fontWeight: "bold",
    textAlignVertical: "bottom",
  },
  descVotes2:{
    fontSize: 12,
    textAlign: "left",
    color: "#FFF",      
    marginLeft: 4,
    marginBottom: 2,
    textAlignVertical: "bottom",
  },
  descInformations:{
    color: "#FFF",
    opacity: 0.4,
    fontSize: 14,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#C0C0C0",
    paddingRight: 8
  },
  description:{ 
    color: "#FEFEFE", 
    fontSize: 14
  }
});
