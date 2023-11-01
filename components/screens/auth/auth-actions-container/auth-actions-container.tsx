import {FC, ReactElement} from 'react';

// Styles
import { View } from './auth-actions-container.styles';

// Types
interface AuthActionsContainerProps {
    children: ReactElement | string,
}

export const AuthActionsContainer: FC<AuthActionsContainerProps> = ({ children }: AuthActionsContainerProps) => (
    <View>
        {children}
    </View>
);
