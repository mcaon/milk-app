import styled from 'styled-components/native'

export const LogoView = styled.View`
    padding: 10px;
`;

export const PageTitle = styled.Text`
    color: ${({theme}) => theme.palette.textSecondary};
    font-size: 25px;
    font-family: NeogreyMedium;
`;

export const TopBar = styled.View`
    flex: 1;
    background: ${({theme}) => theme.palette.backGround};
    elevation: 4;
`;

export const BeeIcon = styled.View`
    padding: 10px;
`;

export const BeeInput = styled.TextInput`
    flex: 1;
    background: ${({theme}) => theme.palette.text};
    shadow-color: ${({theme}) => theme.palette.shadow};
    border-color: ${({theme}) => theme.palette.shadow};
    border-radius: 40px;
    margin-left: 10px;
    elevation: 3;
    padding: 10px 20px;
    height: 90%;
    min-height: 40px;
`;

export const ButtonPrimary = styled.View`
    padding: 10px;
    align-items: center;
    border-radius: 30px;
    width: 100%;
    elevation: 3;
    background: ${({theme}) => theme.palette.logo};
`;

export const ButtonSecondary = styled.View`
    margin-top: 10px;
    padding: 10px;
    padding-left: 20px;
    align-items: center;
    border-radius: 30px;
    width: 100%;
    elevation: 3;
    background: ${({theme}) => theme.palette.backGroundSecondary};
    color: #FFF;
    max-height: 50px;
`;

export const ButtonTextPrimary = styled.Text`
    font-family: Roboto;
    color: ${({theme}) => theme.palette.text};
    font-size: 20px;
`;

export const ButtonTextSecondary = styled.Text`
    font-family: Roboto;
    color: ${({theme}) => theme.palette.textSecondary};
    background: ${({theme}) => theme.palette.backGroundSecondary};
    font-size: 20px;
    margin-left: 15px
`;

export const Container = styled.View`
    flex-direction: row;
    background: ${({theme}) => theme.palette.backGround};
    margin-bottom: 10px;
`;
