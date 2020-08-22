import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Home from './screens/Home/Home';
import { navigationRef } from './RootNavigation';


const Stack = createStackNavigator();

function Router(props) {
    return ( //referans ref dediğimiz
        <NavigationContainer ref={navigationRef}> 
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen 
                name="Login" 
                component={Login}
                options={({ navigation, route }) => ({ 
                    title: 'Login'
                    
                })}
               
                />
                
                
                <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{ title: 'Register'}}
                />

                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ title: 'Home'}}
                />

            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;