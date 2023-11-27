// Updated App.js for tab- and stack-driven navigations
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import City from './src/Cities/City'
import AddCity from './src/AddCity/AddCity'

import { colors } from './src/theme'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen ({navigation, route}){
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
      }}>
      <Stack.Screen name="Cities" component={Cities} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}} />
      <Stack.Screen name="City" component={City} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}}/>
      </Stack.Navigator>
    );
}

export default class App extends Component {
  state = {
    cities: []

  }
  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id
    })
    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ]
    this.setState({
      cities
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.primaryDark,
          }}
        >
          <Tab.Screen name="CitiesNav" initialParams={{cities: this.state.cities,addCity: this.addCity,addLocation: this.addLocation}} 
            component={CitiesStackScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="city" size={20} color='black' />
              )
            }}
            />
          <Tab.Screen name="AddCity"   initialParams={{cities: this.state.cities,addCity: this.addCity,addLocation: this.addLocation}} 
            component={AddCity} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="plus" size={20} color='black' />
              )
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}