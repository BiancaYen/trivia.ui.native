import { FC } from 'react';

// Styles
import { Text } from './auth-paragraph.styles';

// Types
interface AuthParagraphProps {
    children: string | string[],
}

export const AuthParagraph: FC<AuthParagraphProps> = ({ children }: AuthParagraphProps) => (
    <Text>
        {children}
    </Text>
);
