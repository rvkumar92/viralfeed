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
    "cardsmall": {
        "width": 400,
        "marginLeft": "auto",
        "marginRight": "auto",
        "height": "auto !important"
    },
    "user-profile": {
        "height": 2.5,
        "width": 2.5
    },
    "add": {
        "backgroundColor": "#eaeaea",
        "borderRadius": "50%"
    },
    "done": {
        "backgroundColor": "#4caf50",
        "color": "white",
        "borderRadius": "50%"
    },
    "upvotes": {
        "fontSize": 12,
        "fontWeight": 400,
        "color": "#919191",
        "paddingLeft": 10
    },
    "upvote": {
        "color": "#919191",
        "paddingLeft": 5
    },
    "downvote": {
        "marginLeft": 20
    },
    "share": {
        "marginLeft": 20
    },
    "comments": {
        "fontSize": 12,
        "fontWeight": 400,
        "color": "#919191",
        "paddingLeft": 10
    }
});