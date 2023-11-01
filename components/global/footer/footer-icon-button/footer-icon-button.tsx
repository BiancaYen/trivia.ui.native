import { ReactElement } from 'react';

// Styles
import {
    ButtonPressable,
    IconContainerText,
    TitleText,
} from './footer-icon-button.styles';

// Types
interface FooterIconButtonProps {
    icon: ReactElement,
    title: string,
    onPress: () => void,
}

export const FooterIconButton = ({
    icon,
    title,
    onPress,
}: FooterIconButtonProps) => {
    return (
        <ButtonPressable
            onPress={onPress}
        >
            <IconContainerText>
                {icon}
            </IconContainerText>
            <TitleText>
                {title}
            </TitleText>
        </ButtonPressable>
    );
};
