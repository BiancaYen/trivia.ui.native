import { Image } from 'react-native';

// Images
const logoWithHeading = require ('../../../../assets/images/logo-with-heading.png');

// Styles
import { ContainerView, image } from './auth-header.styles';

export const AuthHeader = () => {
    return (
        <ContainerView>
            <Image
                source={logoWithHeading}
                style={image}
            />
        </ContainerView>
    );
};
