import React from "react";
import { CreateBottomTabNavigator } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

const switchNavigatior = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		SignIn: SigninScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailScreen
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
});

const App = createAppContainer(switchNavigatior);

export default () => {
	return (
		<AuthProvider>
			<App
				ref={(navigator) => {
					setNavigator(navigator);
				}}
			/>
		</AuthProvider>
	);
};
