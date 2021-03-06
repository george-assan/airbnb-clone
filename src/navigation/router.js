import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestScreen from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'
import PostScreen from '../screens/PostScreen'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: "Search your destination"
                    }}
                />
                <Stack.Screen
                    name={"Guests"}
                    component={GuestScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
                <Stack.Screen
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        title: "Accomodation Details"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
