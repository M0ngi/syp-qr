// @ts-nocheck
import * as React from "react";
import Svg, { Path, Rect, G } from "react-native-svg";
import Colors from "../../constants/Colors";

export default function PlusIcon({ ...props }) {
  return (
    <Svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width={25}
        height={25}
        viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" fill={Colors["primaryColor"]} >
        <Path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
            s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
            S39.604,28,38.5,28z"/>
    </Svg>
  );
}
