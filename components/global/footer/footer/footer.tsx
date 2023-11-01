import { FC } from 'react';
import { View } from 'react-native';

// Components
import { FooterIconButton } from '../footer-icon-button';
import { FooterLinkButton } from '../footer-link-button';

// Styles
import {
    CopyText,
    IconButtonsContainerView,
    RowView,
    ContainerView,
} from './footer.styles';

// Types
interface FooterProps {
}

export const Footer : FC<FooterProps> = ({}: FooterProps) => {
    return (
        <ContainerView>
            <IconButtonsContainerView>
                <FooterIconButton
                    icon={<></>}
                    title="My Profile"
                    onPress={() => {}}
                />
                <FooterIconButton
                    icon={<></>}
                    title="Prizes"
                    onPress={() => {}}
                />
                <FooterIconButton
                    icon={<></>}
                    title="Winners"
                    onPress={() => {}}
                />
            </IconButtonsContainerView>
            <View>
                <RowView>
                    <FooterLinkButton
                        title="How to play"
                        onPress={() => {}}
                    />
                    <CopyText>
                        |
                    </CopyText>
                    <FooterLinkButton
                        title="Subscription Clubs T&Cs"
                        onPress={() => {}}
                    />
                </RowView>
                <RowView>
                    <CopyText>
                        Copyright.
                    </CopyText>
                </RowView>
            </View>
        </ContainerView>
    );
};
