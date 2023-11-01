// Components
import { AuthActionsContainer } from '../../components/screens/auth/auth-actions-container';
import { AuthContent } from '../../components/screens/auth/auth-content';
import { AuthHeader } from '../../components/screens/auth/auth-header';
import { AuthParagraph } from '../../components/screens/auth/auth-paragraph';
import { Button } from '../../components/global/buttons/button/button';

// Layouts
import { AuthLayout } from '../../components/layouts/auth-layout';

export const Index = ({ navigation }) => {
    return (
        <AuthLayout navigation={navigation}>
            <AuthHeader />
            <AuthContent>
                <AuthParagraph>
                    Win Awesome Prizes &
                    {'\n'}
                    Challenge Yourself with 6 Exciting Categories
                </AuthParagraph>
                <AuthActionsContainer>
                    <Button
                        title="Play Now!"
                        onPress={() => navigation.navigate('Home')}
                    />
                </AuthActionsContainer>
            </AuthContent>
        </AuthLayout>
    );
}
