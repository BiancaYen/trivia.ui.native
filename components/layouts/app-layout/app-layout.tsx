import { FC, ReactElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';

// Components
import { Header } from '../../global/header';

// Styles
import { LayoutContainerView, linearGradient } from './app-layout.styles';

// Types
interface AppLayoutProps {
    children: ReactElement | ReactElement[],
}

export const AppLayout : FC<AppLayoutProps> = ({
    children,
}: AppLayoutProps) => {
    return (
        <LayoutContainerView>
            <LinearGradient
                colors={['#E7D3F7','#FCEDE1']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={linearGradient}
            >
                <Header
                    isVip={true}
                    points={2000}
                />
                {children}
            </LinearGradient>
        </LayoutContainerView>
    );
};
