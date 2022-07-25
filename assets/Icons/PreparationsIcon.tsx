// @ts-nocheck
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function PreparationsIcon({ fill, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 300.136 300.136"
      xmlSpace="preserve"
      enableBackground="new 0 0 300.136 300.136"
      {...props}
    >
      <Path
        fill={fill}
        d="M217.742 102.562c14.269-13.819 22.453-33.063 22.453-52.799V9a9 9 0 00-9-9H68.942a9 9 0 00-9 9v40.763c0 20.607 9.063 39.97 24.874 53.151l52.765 47.154-52.765 47.154c-15.811 13.182-24.874 32.544-24.874 53.151v40.763a9 9 0 009 9h162.253a9 9 0 009-9v-40.763c0-19.735-8.184-38.979-22.453-52.799a7.679 7.679 0 00-.264-.246l-52.884-47.261 52.884-47.261c.089-.078.178-.16.264-.244zM77.942 18h144.252v9.069H77.971l-.029.001V18zm144.253 264.137H77.942v-9.724l.029.001h144.224v9.723zM79.223 254.415l72.095-38.127 69.73 38.127H79.223zm126.12-43.789c6.419 6.255 11.18 13.966 13.978 22.329l-63.614-34.783a8.996 8.996 0 00-8.525-.06L80.833 233.2c3.006-8.554 8.294-16.167 15.607-22.234a8.6 8.6 0 00.25-.216l54.396-48.612 54.257 48.488zm-54.256-72.627l-29.015-25.93h58.03l-29.015 25.93zm49.11-43.89a9.217 9.217 0 00-.818-.041H103.4a8.91 8.91 0 00-1.346.112l-5.365-4.794a10.17 10.17 0 00-.25-.216c-11.928-9.896-18.498-23.891-18.498-39.407v-4.696l.029.001h144.224v4.694c0 14.832-6.14 29.309-16.852 39.748l-5.145 4.599z"
      />
    </Svg>
  );
}
