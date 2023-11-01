// Images
import { imageDataUri } from './banner.image-uri';

// Styles
import { Image, ContainerView } from './banners.styles';

export const Banner = () => {
    return (
        <ContainerView>
            <Image
                source={{
                    uri: imageDataUri,
                }}
            />
        </ContainerView>
    );
};
