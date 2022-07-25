// @ts-nocheck
import * as React from "react";
import Svg, { Path, Circle, G } from "react-native-svg";
import Colors from "../../constants/Colors";

export default function NotAllowedIcon({ ...props }) {
  return (
    <Svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2.5 2.5L12.5 12.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z" stroke="red"/>
    </Svg>
  )
}
