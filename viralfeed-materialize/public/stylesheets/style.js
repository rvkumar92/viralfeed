import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%"
    },
    "a": {
        "color": "#00B7FF"
    },
    "header": {
        "backgroundColor": "#424242"
    },
    "secondary-header": {
        "backgroundColor": "#424242"
    },
    "feed": {
        "color": "green"
    },
    "logo": {
        "width": "100%"
    },
    "notification": {
        "color": "#4caf50"
    },
    "profile-pic": {
        "width": 40,
        "marginTop": 10
    },
    "search": {
        "marginBottom": 0
    },
    "chat_bubble_outline": {
        "color": "darkgoldenrod"
    },
    "trending": {
        "color": "#4caf50"
    },
    "hot": {
        "color": "darkgoldenrod"
    },
    "followed": {
        "color": "cyan"
    },
    "vertical-line": {
        "borderRight": "1.5px solid #212121",
        "width": 10,
        "height": 52,
        "marginTop": 5,
        "marginLeft": -84
    },
    "cardmedium": {
        "width": 600,
        "marginLeft": "auto",
        "marginRight": "auto"
    }
});