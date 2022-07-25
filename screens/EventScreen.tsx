import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Animated, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import PlusIcon from "../assets/Icons/PlusIcon";
import QRScannerIcon from "../assets/Icons/QRScannerIcon";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { useEffect, useState } from "react";
import { getParticipants } from "../services/firestore";

export default function EventScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { time, title, location, Icon, doc_id }: any = route.params;
  const [participants, setParticipants] = useState([] as string[]);

  useEffect(()=>{
    getParticipants(doc_id).then((list) => {
        setParticipants(list);
    });
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.warpper}>
        {Icon && (
          <Icon
            fill="#fff"
            style={{
              position: "absolute",
              top: Layout.window.height * 0.07,
              right: Layout.window.width * 0.2,
              transform: [{ scale: 2.8 }, { rotate: "5deg" }],
              opacity: 0.4,
            }}
          />
        )}
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.time}> {time} </Text>
        <Text style={styles.location}> Location: {location} </Text>
      </View>
      <View style={styles.title_row}>
        <Pressable onPress={()=>{
          navigation.navigate("AddParticipant", {
            workshop_id: doc_id
          });
        }}>
          <PlusIcon />
        </Pressable>
        <Text style={styles.content_title}>Participants ID</Text>
        <Pressable onPress={()=>{
          navigation.navigate("QRVerifierScreen", {
            workshop_id: doc_id,
            participants: participants
          })
        }}>
          <QRScannerIcon />
        </Pressable>
      </View>
      <Animated.ScrollView style={[styles.events_container]}>
          {participants
            .map((value: any, i: number) => (
              <View style={styles.id_display} key={i}>
                <Text style={{
                  letterSpacing: 0.5,
                  fontSize: 15,
                }}>IEEE ID: {value}</Text>
              </View>
            ))}
        </Animated.ScrollView>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  id_display: {
    width: Layout.window.width - 70,
    marginTop: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors["backgroundColor"],
  },
  warpper: {
    height: 200,
    paddingTop: 100,
    justifyContent: "flex-end",
    width: Layout.window.width,
    backgroundColor: Colors["primaryColor"],
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  title_row: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#000",
    width: "80%"
  },
  title: {
    fontSize: 20,
    //fontFamily: "futura",
    color: Colors["backgroundColor"],
    textTransform: "uppercase",
    marginLeft: 50,
  },
  time: {
    fontSize: 11,
    //fontFamily: "futura",
    color: Colors["backgroundColor"],
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 50,
  },
  location:{
    fontSize: 18,
    color: Colors["backgroundColor"],
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  content_title: {
    fontSize: 22,
    fontWeight: "bold",
    //fontFamily: "futura",
    textTransform: "uppercase",
    color: Colors["tintColorLight"],
    letterSpacing: 2,
    //marginTop: 20
  },
  events_container: {
    marginTop: 30,
  },
});
