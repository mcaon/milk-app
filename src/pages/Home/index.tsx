import React, {useCallback, useContext, useEffect, useState} from 'react';
import {MilkScroll, BottomBar, Footer, ScrollPage, TextContainer, TopInfo} from './styles';
import {Dimensions, PermissionsAndroid, Image, TouchableOpacity, Text, View} from 'react-native';
// @ts-ignore
import {ThemeContext} from 'styled-components/native';
import {LogoView, PageTitle, TopBar} from '../../styles';
import {Icon} from 'react-native-elements';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import NetInfo from "@react-native-community/netinfo";
import Geolocation, {GeolocationConfiguration} from '@react-native-community/geolocation';
import {
    useWeatherLastUpdate,
    useWeatherLatitude,
    useWeatherLongitude,
    useWeatherSetForecast,
    useWeatherSetLatitude, useWeatherSetLongitude
} from '../../store/hooks/weather';
import {Dates} from '../../utils';
// Listener para verificar conexão
// const subscribe = NetInfo.addEventListener(state => {
//     console.log("Connection type", state.type);
//     console.log("Is connectedsss?", state.isConnected);
// });

export default function Home({navigation}: any) {

    const lat = useWeatherLatitude();
    const lon = useWeatherLongitude();
    const lastUpdate = useWeatherLastUpdate();
    const setLatitude = useWeatherSetLatitude();
    const setLongitude = useWeatherSetLongitude();

    const setForecast = useWeatherSetForecast();

    const handleForecast = useCallback(() => {
        setForecast();
    }, [setForecast]);


    useEffect(() => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connecteddd?", state.isConnected);
        });
        const locationConfig = {skipPermissionRequests:false,authorizationLevel:"whenInUse"}
        Geolocation.setRNConfiguration(locationConfig as GeolocationConfiguration);
        getPermissions().then(result => {
            console.log(result)
        });


    }, []);

    const getPermissions = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple(
                [
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                ]
            );
            return granted;
            // console.log(granted)
        } catch (err) {
            console.warn(err);
        }
    }
    const getPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                const initialPosition = JSON.stringify(position);
                console.log('POSITION')
                console.log(initialPosition)
                console.log(position)
                // @ts-ignore
                setLatitude(position.coords.latitude);
                // @ts-ignore
                setLongitude(position.coords.longitude);
                console.log(lat);
                console.log(lon);
                handleForecast();
            },
            error => console.log('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }


    const themeContext: any = useContext(ThemeContext);
    const screenWidth = Dimensions.get('window').width;
    let scrollref: any = null;

    return (
        <>
            <MilkScroll showsHorizontalScrollIndicator={false} ref={(ref: any) => {
                scrollref = ref
            }}>
                <ScrollPage style={{width: screenWidth}}>
                    <TopBar>
                        <TopInfo>
                            <TextContainer>
                                <PageTitle>Home</PageTitle>
                            </TextContainer>
                        </TopInfo>
                        {/*<Footer>*/}

                        {/*</Footer>*/}
                    </TopBar>
                    <BottomBar>
                        <View>
                            {lastUpdate ? <Text>{Dates.dateDDMMYYYYandHours(lastUpdate)}</Text> : <Text>Previsão não atualizada.</Text>}
                        </View>
                        <Footer>
                            <TouchableOpacity style={{width: '100%'}} onPress={() => getPosition()}>
                                    <Text>ATUALIZAR</Text>
                            </TouchableOpacity>
                        </Footer>
                    </BottomBar>

                </ScrollPage>
            </MilkScroll>
        </>
    )
};
