import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';


const Stack = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer>
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

            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;