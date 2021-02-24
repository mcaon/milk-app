import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// @ts-ignore
import {ThemeProvider} from 'styled-components/native'
import theme from './styles/themes/Light'
import configureStore from '../src/store';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './config/NavigationService';
import Snackbar from './components/Snackbar';
import {Icon} from 'react-native-elements';
import Home from './pages/Home';
import {Loader} from './components/common';
import {PersistGate} from 'redux-persist/integration/react'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const {store, persistor} = configureStore();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = 'home';

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Profile':
                            iconName = 'account-circle';
                            break;
                        case 'Settings':
                            iconName = 'settings';
                            break;

                    }
                    return <Icon type={'material'} name={iconName} size={30} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.palette.logo,
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    );
}


const App = () => {

    useEffect(() => {
        // SplashScreen.hide();
    }, []);

    return (
        <>
            <SafeAreaView style={styles.topSafeArea}/>
            <SafeAreaView style={styles.bottomSafeArea}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <PaperProvider>
                            <NavigationContainer ref={NavigationService.navigationRef}>
                                <ThemeProvider theme={theme}>
                                    <Stack.Navigator initialRouteName="Home">
                                        <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>
                                    </Stack.Navigator>
                                </ThemeProvider>
                            </NavigationContainer>
                            <Snackbar/>
                            <Loader/>
                        </PaperProvider>
                    </PersistGate>
                </Provider>
            </SafeAreaView>

        </>

    );
}

const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: theme.palette.text
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: theme.palette.backGround
    }
});

export default App;
