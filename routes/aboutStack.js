import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

import Header from "../shared/header";
import React from "react";

const screens = {
    aabboouutt: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="About GameZone" />
            }
        }
        //title: "About Screen",
        //headerStyle: { backgroundColor: "#eee" }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "skyblue", height: 60 }
    }
});

export default AboutStack;