import styled from 'styled-components/native';

export const Image = styled.Image`
    bottom: 0;
    height: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
`;

export const Pressable = styled.Pressable`
    align-items: flex-end;
    border: 0;
    border-radius: 4px;
    color: #FFF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    height: 125px;
    margin: 5px;
    outline: none;
    position: relative;
    text-shadow: 2px 2px 2px #323232;
    width: 120px;
`;

export const Text = styled.Text`
    position: absolute;
    bottom: 10px;
    z-index: 2;
`;
