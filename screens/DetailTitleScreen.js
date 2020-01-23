import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { HeaderComponent } from '../components/organisms';

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
          <View style={{ flex: 1.4 }}>
            <Text style={{ color: "#FEFEFE", fontSize: 14, }}>
              The most powerful superhero in the world can kill anyone with one blow.
                But nothing can challenge him, so he struggles with ennui and depression.
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfa8b99b-29e6-401b-8b2f-9c35d70306d7/dd99x17-4d501058-2d4a-49cc-b0ec-e12dcc79a506.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmYThiOTliLTI5ZTYtNDAxYi04YjJmLTljMzVkNzAzMDZkN1wvZGQ5OXgxNy00ZDUwMTA1OC0yZDRhLTQ5Y2MtYjBlYy1lMTJkY2M3OWE1MDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RWpoapBjRlspxAcgDe6P2Srh-t4DLHDWpqIKs8coxO8" }}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
          </View>
        </View>

      </View>

      {/*  */}
      <View style={{
        flex: 2.5,
        backgroundColor: "#CECC"
      }}>

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
});
