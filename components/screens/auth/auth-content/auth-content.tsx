import { FC, ReactElement } from 'react';

// Styles
import { View } from './auth-content.styles';

// Types
interface AuthContentProps {
    children: ReactElement | ReactElement[] | string,
}

export const AuthContent: FC<AuthContentProps> = ({ children }: AuthContentProps) => (
    <View>
        {children}
    </View>
);
