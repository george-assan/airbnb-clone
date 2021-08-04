import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults'

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarIndicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResultsScreen}></Tab.Screen>
            <Tab.Screen name={'Map'} component={SearchResultsScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator