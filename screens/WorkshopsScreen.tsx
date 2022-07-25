// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Event from "../components/Event";

import data from "../workshops-data";
import moment from "moment";

import Svg, { Polygon } from "react-native-svg";

export default function WorkshopsScreen() {
  const [days, setDays] = useState([4, 5]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, days]);

  useEffect(() => {
    if (
      moment("2022-08-04 15:00:00").isBetween(
        "2022-08-03 00:00:00",
        "2022-08-07 23:59:59"
      )
    )
      setDays((prev) => {
        for (let idx = 0; idx <= moment("2022-08-04 15:00:00").day() - 4; idx++)
          prev.push(prev.shift() || 0);
        return [...prev];
      });
  }, []);

  return (
    <View style={{ backgroundColor: Colors["backgroundColor"], flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>August 2022</Text>
        <View style={styles.days}>
          {days.map((day, i) => (
            <View
              key={i}
              style={[styles.dayWarpper, i ? { flexDirection: "row" } : {}]}
            >
              {day === 3 && i ? <View style={styles.separator} /> : <></>}
              <Animated.Text
                onPress={() => {
                  fadeAnim.setValue(0);
                  setDays((prev) => {
                    for (let idx = 0; idx <= i - 1; idx++)
                      prev.push(prev.shift() || 0);
                    return [...prev];
                  });
                }}
                style={[styles.day, !i && styles.active, { opacity: fadeAnim }]}
                key={i}
              >
                {day}
              </Animated.Text>
              {!i && (
                <>
                  <Svg height="8" width="15">
                    <Polygon
                      points="0,0 7.5,10 15,0"
                      fill={Colors["primaryColor"]}
                    />
                  </Svg>
                  <View style={styles.line} />
                </>
              )}
            </View>
          ))}
        </View>
        <Animated.ScrollView style={[styles.events, { opacity: fadeAnim }]}>
          {data
            .filter((val: any) => val["day"] == days[0])
            .map((ev: any, i: number) => (
              <Event {...ev} day={days[0].toString()} key={i} />
            ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors["backgroundColor"],
    marginTop: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    //fontFamily: "futura",
    textTransform: "uppercase",
    color: Colors["tintColorLight"],
    letterSpacing: 2,
  },
  days: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: Layout.window.width,
    marginTop: 50,
  },
  day: {
    color: "#9D9D9D",
    fontSize: 17,
    //fontFamily: "futura",
  },
  active: {
    color: "#FFF4F4",
    backgroundColor: Colors["primaryColor"],
    paddingVertical: 2,
    paddingHorizontal: 18,
    borderRadius: 11,
  },
  dayWarpper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  separator: {
    width: 2,
    height: 20,
    backgroundColor: Colors["tintColorLight"],
    marginRight: 50,
  },
  line: {
    width: 2,
    height: Layout.window.height,
    backgroundColor: Colors["primaryColor"],
  },
  events: {
    marginTop: 70,
  },
});
