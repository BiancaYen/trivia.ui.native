import { NavigationProp } from '@react-navigation/native';

// Styles
import {
    CopyContainerView,
    IconButton,
    InnerContainerView,
    PointsText,
    VipText,
    ContainerView,
} from './header.styles';

// Types
interface HeaderProps {
    isVip: boolean,
    navigation: NavigationProp<any>,
    points: number,
}

export const Header = ({
    isVip,
    navigation,
    points,
}: HeaderProps) => {
    return (
        <ContainerView>
            <InnerContainerView>
                <CopyContainerView>
                    <PointsText>
                        Points&nbsp;
                        {points}
                    </PointsText>
                    {isVip && (
                        <VipText>
                            VIP
                        </VipText>
                    )}
                </CopyContainerView>
                <IconButton
                    onPress={() => navigation.navigate('Profile')}
                    title="Profile"
                />
            </InnerContainerView>
        </ContainerView>
    );
};
