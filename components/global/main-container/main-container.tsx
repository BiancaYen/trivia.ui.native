import { FC, ReactElement } from 'react';

// Styles
import { ContainerView } from './main-container.styles';

// Types
interface MainContainerProps {
    children: ReactElement | ReactElement[],
}

export const MainContainer: FC<MainContainerProps> = ({
    children,
}: MainContainerProps) => {
    return (
        <ContainerView>
            {children}
        </ContainerView>
    );
};
