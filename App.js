import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail'

const Stack = createStackNavigator();
const App =() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;