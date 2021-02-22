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
    flex-direction: row;
    flex: 1;
    padding: 15px 20px 15px 20px;
`;

export const Hr = styled.View`
    border-bottom-color: ${({theme}) => theme.palette.textSecondary};
    border-bottom-width: 1px;
    width: 100%;
    opacity: 0.4;
`;

export const TextContainer = styled.View`
    padding: 20px;
`;

export const TopInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px
`;
