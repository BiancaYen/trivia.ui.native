import styled from 'styled-components/native';

export const CopyText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.77px;
`;

export const ContainerView = styled.View`
    background: #FFF;
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    margin: 80px 0 0;
    padding: 0 0 30px;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
`;

export const RowView = styled.View`
    margin: 7px 0;
`;

export const IconButtonsContainerView = styled.view`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    gap: 7%;
    z-index: 3;
`;
