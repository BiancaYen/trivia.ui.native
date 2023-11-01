import React, { FC } from 'react';

// Styles
import {
    Image,
    Pressable,
    Text,
} from './category-button.styles';

interface CategoryButtonProps {
    imageUri: string,
    id: string,
    isDisabled?: boolean,
    title: string,
    onPress: () => void,
}

export const CategoryButton: FC<CategoryButtonProps> = ({
    imageUri,
    id,
    isDisabled = false,
    title,
    onPress,
}: CategoryButtonProps ) => {
    return (
        <Pressable
            disabled={isDisabled}
            onPress={onPress}
        >
            <Image
                source={{
                    uri: imageUri,
                }}
            />
            <Text>
                {title}
            </Text>
        </Pressable>
    );
};
