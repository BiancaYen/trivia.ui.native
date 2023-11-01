import styled from 'styled-components/native';

export const ButtonPressable = styled.Pressable`
    width: 80px;
    text-decoration: none;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const IconContainerText = styled.Text`
    height: 80px;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);
    border-radius: 35%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.Text`
    color: #323232;
    font-size: 11px;
    font-weight: bold;
    margin-top: 15px;
`;
