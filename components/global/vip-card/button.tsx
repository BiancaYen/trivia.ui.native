import React, { FC, ReactElement } from 'react';

// Styles
import { ButtonElement } from './button.styles';

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
    children: string | ReactElement,
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
        <ButtonElement
            disabled={isDisabled}
            title={title}
            variant={variant}
            onPress={onPress}
        />
    );
};
