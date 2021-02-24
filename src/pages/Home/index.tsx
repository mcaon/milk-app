import React, {useCallback, useContext, useEffect} from 'react';
import {
    MilkScroll,
    BottomBar,
    Footer,
    ScrollPage,
    TextContainer,
    CurrentDayIconView,
    CityText,
    ForecastContainer,
    ForecastInternalContainer,
    ForecastBlockContainer,
    DescriptionText,
    ForecastIconView,
    ForecastDataView,
    NetStatusView,
    ForecastDaysContainer,
    SelectorText,
    Selector,
    ForecastDaysDetailsView,
    OnlineText,
    OfflineText
} from './styles';
import {Dimensions, PermissionsAndroid, TouchableOpacity, Text, View} from 'react-native';
// @ts-ignore
import {ThemeContext} from 'styled-components/native';
import {PageTitle, TopBar} from '../../styles';
import NetInfo from '@react-native-community/netinfo';
import Geolocation, {GeolocationConfiguration} from '@react-native-community/geolocation';
import {
    useWeatherForecast,
    useWeatherLastUpdate,
    useWeatherLatitude,
    useWeatherLongitude,
    useWeatherSetForecast,
    useWeatherSetLatitude, useWeatherSetLongitude
} from '../../store/hooks/weather';
import {Dates, Weather} from '../../utils';
import {Icon} from 'react-native-elements';
import {useUserConnected, useUserSetConnected} from '../../store/hooks/user';
import {ForecastDayModel} from '../../shared/models/forecast-day.model';
import {ForecastModel} from '../../shared/models/forecast.model';
import {FAB} from 'react-native-paper';


export default function Home({navigation}: any) {
    const [state, setState] = React.useState({open: false});
    const onStateChange = ({open}: any) => setState({open});
    const {open} = state;

    const lat = useWeatherLatitude();
    const lon = useWeatherLongitude();
    const forecast: ForecastModel = useWeatherForecast();
    const connected = useUserConnected();
    const setConnected = useUserSetConnected();
    const lastUpdate = useWeatherLastUpdate();
    const setLatitude = useWeatherSetLatitude();
    const setLongitude = useWeatherSetLongitude();
    const subscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected LISTENER?", state.isConnected);
        setConnected(state.isConnected);
    });
    const setForecast = useWeatherSetForecast();

    const handleForecast = useCallback(() => {
        setForecast();
    }, [setForecast]);


    useEffect(() => {
        subscribe();
        NetInfo.fetch().then(state => {
            console.log('Connection type', state.type);
            console.log('Is connecteddd?', state.isConnected);
            setConnected(state.isConnected);
        });
        const locationConfig = {skipPermissionRequests: false, authorizationLevel: 'whenInUse'}
        Geolocation.setRNConfiguration(locationConfig as GeolocationConfiguration);
        getPermissions().then(result => {
            console.log(result)
        });
        getPosition();

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
        console.log('getPosition')
        Geolocation.getCurrentPosition(
            position => {
                const initialPosition = JSON.stringify(position);
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
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

                    {forecast && forecast.results ?
                        <TopBar>
                            <NetStatusView>
                                {connected ? <OnlineText>ONLINE</OnlineText> : <OfflineText>OFFLINE</OfflineText>}
                            </NetStatusView>
                            <CurrentDayIconView>
                                {Weather.getIconByCondition(forecast.results.condition_slug)}
                                <CityText>{forecast.results.city}</CityText>
                                <DescriptionText>{forecast.results.description}</DescriptionText>
                            </CurrentDayIconView>
                            <ForecastContainer>
                                <ForecastInternalContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon solid type={'font-awesome-5'} name='temperature-low'
                                                                size={25} color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.temp} °C</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon solid type={'font-awesome-5'} name='wind' size={25}
                                                                color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.wind_speedy}</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                </ForecastInternalContainer>
                                <ForecastInternalContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon solid type={'material-community'}
                                                                name='weather-sunset-up' size={30}
                                                                color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.sunrise}</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon solid type={'material-community'}
                                                                name='weather-sunset-down' size={30}
                                                                color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.sunset}</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                </ForecastInternalContainer>
                                <ForecastInternalContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon type={'font-awesome-5'} name='calendar-alt' size={25}
                                                                color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.date}</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon type={'font-awesome-5'} name='clock' size={25}
                                                                color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.time}</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                </ForecastInternalContainer>
                                <ForecastInternalContainer>
                                    <ForecastBlockContainer>
                                        <ForecastIconView><Icon solid type={'material-community'} name='water-percent'
                                                                size={30} color={'black'}/></ForecastIconView>
                                        <ForecastDataView><Text>{forecast.results.humidity} %</Text></ForecastDataView>
                                    </ForecastBlockContainer>
                                    <ForecastBlockContainer>
                                    </ForecastBlockContainer>
                                </ForecastInternalContainer>
                            </ForecastContainer>

                        </TopBar> : <></>}
                    <BottomBar>
                        {forecast && forecast.results ?
                        <ForecastDaysContainer horizontal>
                            {forecast.results.forecast.map((item: ForecastDayModel) =>
                                <View key={forecast.results.forecast.indexOf(item)}>
                                    <Selector item={item} >
                                        {Weather.getIconByCondition(item.condition)}
                                        <ForecastDaysDetailsView>
                                            <ForecastBlockContainer>
                                                <ForecastIconView><Icon type={'font-awesome-5'} name='calendar-alt' size={25}
                                                                        color={'black'}/></ForecastIconView>
                                                <ForecastDataView><Text> {item.date}</Text></ForecastDataView>
                                            </ForecastBlockContainer>
                                        </ForecastDaysDetailsView>
                                        <ForecastDaysDetailsView>
                                            <ForecastBlockContainer>
                                                <ForecastIconView><Icon type={'font-awesome-5'} name='temperature-high' size={25}
                                                                        color={'black'}/></ForecastIconView>
                                                <ForecastDataView><Text> {item.max} °C</Text></ForecastDataView>
                                            </ForecastBlockContainer>
                                        </ForecastDaysDetailsView>
                                        <ForecastDaysDetailsView>
                                            <ForecastBlockContainer>
                                                <ForecastIconView><Icon type={'font-awesome-5'} name='temperature-low' size={25}
                                                                        color={'black'}/></ForecastIconView>
                                                <ForecastDataView><Text> {item.min} °C</Text></ForecastDataView>
                                            </ForecastBlockContainer>
                                        </ForecastDaysDetailsView>
                                    </Selector>
                                    <SelectorText>{item.weekday}</SelectorText>
                                </View>
                            )}
                        </ForecastDaysContainer>
                        : <></> }

                        <Footer>

                        </Footer>
                    </BottomBar>

                </ScrollPage>
            </MilkScroll>
            <FAB.Group
                open={open}
                visible={true}
                icon={open ? 'swap-vertical-bold' : 'plus'}
                color={themeContext.palette.logo}
                fabStyle={{backgroundColor: themeContext.palette.text}}
                actions={[
                    {
                        icon: 'refresh',
                        label: 'Atualizar',
                        color: themeContext.palette.success,
                        onPress: getPosition,
                    }
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        console.log('open')
                    }
                }}
            />
        </>
    )
};
