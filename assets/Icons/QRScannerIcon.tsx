// @ts-nocheck
import * as React from "react";
import Svg, { Path, Rect, G } from "react-native-svg";
import Colors from "../../constants/Colors";

export default function QRScannerIcon({ ...props }) {
  return (
    <Svg width="25" height="25" viewBox="0 0 15 15" fill="#FF7612" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1C1.67157 1 1 1.67157 1 2.5V5H0V2.5C0 1.11929 1.11929 0 2.5 0H5V1H2.5ZM12.5 1H10V0H12.5C13.8807 0 15 1.11929 15 2.5V5H14V2.5C14 1.67157 13.3284 1 12.5 1ZM13 8H2V7H13V8ZM0 12.5V10H1V12.5C1 13.3284 1.67157 14 2.5 14H5V15H2.5C1.11929 15 0 13.8807 0 12.5ZM14 12.5V10H15V12.5C15 13.8807 13.8807 15 12.5 15H10V14H12.5C13.3284 14 14 13.3284 14 12.5Z" fill={Colors["primaryColor"]}/>
    </Svg>
  );
}
