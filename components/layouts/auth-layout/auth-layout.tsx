import { FC, ReactElement } from 'react';

// Styles
import { LayoutView } from './auth-layout.styles';

// Types
interface AuthLayoutProps {
    children: ReactElement | ReactElement[],
}

export const AuthLayout : FC<AuthLayoutProps> = ({
    children,
}: AuthLayoutProps) => {
    return (
        <LayoutView>
            {children}
        </LayoutView>
    );
};
