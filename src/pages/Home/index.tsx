import React, {useContext, useEffect} from 'react';
import {MilkScroll, BottomBar, Footer, ScrollPage, TextContainer, TopInfo} from './styles';
import {Dimensions, Image} from 'react-native';
// @ts-ignore
import {ThemeContext} from 'styled-components/native';
import {LogoView, PageTitle, TopBar} from '../../styles';
import {Icon} from 'react-native-elements';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import NetInfo from "@react-native-community/netinfo";

// Listener para verificar conexão
// const subscribe = NetInfo.addEventListener(state => {
//     console.log("Connection type", state.type);
//     console.log("Is connectedsss?", state.isConnected);
// });

export default function Home({navigation}: any) {

    useEffect(() => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connecteddd?", state.isConnected);
        });
    }, []);

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

                        <Footer>

                        </Footer>
                    </BottomBar>

                </ScrollPage>
            </MilkScroll>
        </>
    )
};
