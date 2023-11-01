import { NavigationProp } from '@react-navigation/native';

// Styles
import {
    Button,
    View,
} from './auth-footer.styles';

// Types
interface AuthFooterProps {
    children: string,
    navigation: NavigationProp<any>
}

export const AuthFooter = ({
    children,
    navigation
}: AuthFooterProps) => {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate('Home')}
                title=""
            >
            </Button>
        </View>
    );
};
