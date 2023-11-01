// Styles
import { Button } from './footer-link-button.styles';

// Types
interface FooterLinkButtonProps {
    title: string,
    onPress: () => void,
}

export const FooterLinkButton = ({
    title,
    onPress,
}: FooterLinkButtonProps) => {
    return (
        <Button
            title={title}
            onPress={onPress}
        />
    );
};
