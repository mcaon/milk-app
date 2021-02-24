import styled from 'styled-components/native'

export const MilkScroll = styled.ScrollView`
    background: ${({theme}) => theme.palette.backGround};
    height: 100%;
`;

export const ScrollPage = styled.View`
    flex: 2;
`;

export const BottomBar = styled.View`
    flex: 1;
    background: ${({theme}) => theme.palette.backGround};
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 15px 20px 15px 20px;
`;


export const TextContainer = styled.View`
    padding: 20px;
`;

export const NetStatusView = styled.View`
    align-items: flex-end;
    padding: 5px;
`;

export const CurrentDayIconView = styled.View`
    margin-top: 10px;
    padding: 5px;
`;

export const CityText = styled.Text`
    textAlign: center;
    margin-top: 10px;
    font-size: 20px;
`;

export const DescriptionText = styled.Text`
    textAlign: center;
    margin-top: 5px;
    font-size: 15px;
`;

export const ForecastContainer = styled.View`
    padding: 20px;
`;

export const ForecastInternalContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ForecastBlockContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const ForecastIconView = styled.View`
    flex: 1;
`;

export const ForecastDataView = styled.View`
    flex: 2;
    justify-content: center;
`;

export const ForecastDaysContainer = styled.ScrollView`
    font-family: Roboto;
    font-size: 20px;
    padding: 0px 20px 0px 20px;
    margin-top: 10px;
    color: ${({theme}) => theme.palette.text};
    flex-direction: row;
`;

export const ForecastDaysDetailsView = styled.View`
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-evenly;
`;


export const Selector = styled.TouchableOpacity`
    font-family: Roboto;
    font-size: 20px;
    color: ${({theme}) => theme.palette.text};
    background: ${({theme}) => theme.palette.backGroundGrey};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding: 10px;
    width: 130px;
    
    ${({ item }) => item.selected && `
      background: ${item.color};
    `}
`;

export const SelectorText = styled.Text`
    font-family: Roboto-Regular;
    font-size: 14px;
    padding: 5px 20px 10px 20px;
    max-width: 110px;
    textAlign: center;
    
`;
