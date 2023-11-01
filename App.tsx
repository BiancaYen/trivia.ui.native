import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Index } from './screens/index/index';
import { Home } from './screens/home/home';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Index"
                component={Index}
                options={{ title: 'Join Now' }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
