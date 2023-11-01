import React, { FC } from 'react';

// Styles
import { Pressable, Text } from './button.styles';

// Types
enum ButtonVariants {
    Accent1 = 'accent1',
    Accent2 = 'accent2',
    Error = 'error',
    Primary = 'primary',
    PrimaryTinted = 'primaryTinted',
    Secondary = 'secondary',
    Success = 'success',
}

interface ButtonProps {
    isDisabled?: boolean,
    value?: number | string,
    variant?: ButtonVariants,
    title: string,
    onPress: () => void,
}

export const Button: FC<ButtonProps> = ({
    isDisabled = false,
    title,
    variant = ButtonVariants.Primary,
    onPress,
}: ButtonProps ) => {
    return (
        <Pressable
            disabled={isDisabled}
            title={title}
            variant={variant}
            onPress={onPress}
        >
            <Text>
                {title}
            </Text>
        </Pressable>
    );
};
