// @ts-nocheck
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function WorkshopIcon({ fill, ...props }) {
  return (
    <Svg
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 256 256"
      {...props}
    >
      <Path
        fill={fill}
        d="M230.5 173c-1.3-6-5.6-11-11.4-13l-48.6-17.3-42.5 42.5-42.4-42.4L37 160c-5.8 2.1-10.1 7.1-11.4 13L8.7 252.4h238.7L230.5 173zm-195.1 2.1c.6-2.6 2.4-4.7 4.9-5.6l42.6-15.1 45.1 45.1 45.1-45.1 42.6 15.1c2.5.9 4.4 3 4.9 5.6l14.3 67.2H21.1l14.3-67.2zM65.2 82.1l4.5.4H76c1.2 4.2 2.8 8.1 5 11.9l-2 2-2 2-.8.8-2.8 3 2.4 3.3c4.1 5.6 9 10.6 14.7 14.6l3.3 2.4 3-2.8.4-.4c1.1-1.2 2.3-2.3 3.4-3.5l.9-.9c3.7 2.1 7.7 3.7 11.8 4.9v6.2l.3 4.5 4 .6c3.3.5 6.8.8 10.2.8 3.4 0 6.9-.3 10.2-.8l4-.6.3-4.4v-.2-4-2.2c4.1-1.1 8.1-2.8 11.8-4.9l.9.9c1.2 1.1 2.3 2.3 3.4 3.4l3.4 3.2 3.3-2.4c5.7-4.1 10.6-9 14.7-14.6l2.4-3.3-2.8-3-.8-.8-1.9-2-2-2c2.1-3.8 3.8-7.7 5-11.9h6.1l4.7-.4.6-3.8c.6-3.4.8-6.9.8-10.4s-.3-7-.9-10.5l-.6-4-4-.2H179.5c-1.2-4.1-2.8-8-4.9-11.7 1.5-1.5 3-3 4.6-4.5l3.1-3-2.5-3.5c-4.1-5.7-9.1-10.7-14.8-14.8l-3.5-2.5-3 3.1c-.9 1-1.9 1.9-2.8 2.8l-1.7 1.7c-3.7-2.1-7.7-3.7-11.8-4.8v-3.2V5l-4.2-.7c-6.7-1.1-13.8-1.1-20.5 0l-4.4.8.2 4.5v6.3c-4.1 1.1-8 2.8-11.8 4.8L99.8 19 97 16.2l-3-3.1-3.5 2.5c-5.7 4.1-10.7 9.1-14.8 14.8l-2.5 3.5 3.1 3c1.5 1.5 3 3 4.6 4.5-2.1 3.7-3.7 7.6-4.9 11.7h-4.1l-6.8.3-.6 4c-.6 3.5-.9 7-.9 10.5s.3 7 .8 10.4l.8 3.8zM74 63.2c1.7 0 3.3 0 4.9.1.9 0 1.7-.1 2.4-.2l3.1-.8.6-3.1c1.1-5.6 3.3-10.8 6.5-15.6l1.8-2.7-1.7-2.8c-.5-.8-1.2-1.5-1.7-2.1l-1-1-2.2-2.2c2-2.3 4.2-4.5 6.5-6.5l3.5 3.5c.5.5 1.3 1.2 2.4 1.7l2.5 1.1 2.3-1.5c4.8-3.2 10-5.3 15.6-6.4l3-.6.8-3c.2-.7.3-1.4.2-2.2v-5.1c2.9-.2 5.9-.2 8.8 0v5.1c0 .8.1 1.5.2 2.2l.8 3 3 .6c5.6 1.1 10.9 3.3 15.6 6.4l2.3 1.5 2.5-1.1c1.1-.5 1.9-1.2 2.4-1.8 1.1-1.2 2.3-2.3 3.5-3.5 2.4 2 4.5 4.1 6.5 6.5l-2.2 2.2-1 1c-.6.6-1.2 1.2-1.7 2.1l-1.7 2.8 1.8 2.7c3.2 4.8 5.4 10 6.5 15.6l.6 3.1 3.1.8c.7.2 1.6.3 2.4.2 1.6-.1 3.2-.1 4.9-.1.1 1.5.2 3.1.2 4.6 0 1.5-.1 3.1-.2 4.6h-5.7l-4.5.3-.7 3.7c-1.1 5.7-3.4 11-6.6 15.8l-2 2.9 2 2.8c.3.4.6.8 1.1 1.2 1.3 1.2 2.5 2.4 3.7 3.7-2 2.3-4.1 4.4-6.4 6.4l-.6-.6-3.2-3.2c-.4-.4-.9-.8-1.3-1.1l-2.8-1.9-2.8 1.9c-4.8 3.2-10.1 5.4-15.7 6.5l-3.2.6-.8 3.1c-.2.7-.2 1.4-.2 2.2v5c-2.9.2-5.9.2-8.8 0v-5c0-.8 0-1.5-.2-2.2l-.8-3.1-3.2-.6c-5.6-1.1-10.9-3.3-15.7-6.5l-2.8-1.9-2.8 1.9c-.5.3-.9.7-1.3 1.1-1 1.1-2.1 2.1-3.2 3.2l-.6.6c-2.3-1.9-4.5-4.1-6.4-6.4L90 99c.4-.4.8-.8 1.1-1.2l2-2.8-2-2.9c-3.2-4.8-5.5-10.1-6.6-15.8l-.7-3.7-3.8-.3h-6.5c-.1-1.5-.2-3.1-.2-4.6.5-1.4.6-2.9.7-4.5z"
      />
      <Path
        fill={fill}
        d="M104.2 85c1.9 2.6 4.1 4.8 6.7 6.7 3.7 2.6 7.9 4.4 12.4 5.1 1.5.2 3.1.4 4.7.4s3.1-.1 4.7-.4c4.4-.7 8.7-2.5 12.4-5.1 2.6-1.9 4.9-4.1 6.7-6.7 2.7-3.7 4.5-8 5.2-12.4.3-1.6.4-3.1.4-4.7s-.1-3.2-.4-4.8c-.7-4.4-2.5-8.7-5.1-12.3-1.9-2.6-4.1-4.9-6.8-6.7-3.7-2.6-7.9-4.4-12.4-5.1-3-.5-6.3-.5-9.4 0-4.4.7-8.7 2.5-12.4 5.1-2.6 1.9-4.9 4.1-6.8 6.7-2.6 3.6-4.4 7.9-5.1 12.3-.3 1.6-.4 3.2-.4 4.8 0 1.6.1 3.2.4 4.8.8 4.4 2.6 8.7 5.2 12.3zm4.8-20.3c.5-2.9 1.6-5.7 3.4-8.1 1.2-1.7 2.7-3.2 4.5-4.4 2.4-1.7 5.2-2.9 8.1-3.3 1-.2 2-.2 3.1-.2s2.1.1 3.1.2c2.9.5 5.7 1.6 8.1 3.3 1.7 1.2 3.2 2.7 4.4 4.4 1.7 2.4 2.9 5.2 3.4 8.1.2 1 .3 2.1.3 3.1 0 1.1-.1 2.1-.2 3.1-.5 2.9-1.7 5.7-3.4 8.1-1.2 1.7-2.7 3.2-4.4 4.4-2.4 1.7-5.2 2.9-8.1 3.3-2 .3-4.1.3-6.1 0-2.9-.5-5.7-1.6-8.1-3.3-1.7-1.2-3.2-2.7-4.4-4.4-1.7-2.4-2.9-5.2-3.4-8.1-.2-1-.2-2.1-.2-3.1-.3-1-.2-2.1-.1-3.1z"
      />
    </Svg>
  );
}