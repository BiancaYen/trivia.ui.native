import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const widowHeight = Dimensions.get('window').height;
const widowWidth = Dimensions.get('window').width;

export const CopyContainerView = styled.View`
    align-items: center;
    color: inherit;
    flex: 1;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const IconButton = styled.Button`
    background: #FFF;
    border: #FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    width: 28px;
    height: 28px;
    margin: 5px 10px;
`;

export const InnerContainerView = styled.View`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: space-between;
    color: #323232;
`;

const Copy = css`
    align-items: center;
    align-self: center;
    display: flex;
    color: #323232;
    font-size: 12px;
    font-weight: bold;
    min-width: 45px;
`;

export const PointsText = styled.Text`
    ${Copy};
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
`;

export const VipText = styled.Text`
    ${Copy};
    color: #8120da;
    margin-left: 10px;
`;

export const ContainerView = styled.View`
    display: flex;
    position: relative;
    z-index: 2;
`;
