import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
    aabboouutt: {
        screen: About,
        navigationOptions: {
            title: "About Screen",
            //headerStyle: { backgroundColor: "#eee" }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "skyblue", height: 60 }
    }
});

export default AboutStack;