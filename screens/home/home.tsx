import { FC } from 'react';

// Components
import { Banner } from '../../components/global/banner';
import { Button } from '../../components/global/buttons/button';
import {
    ButtonContainer,
    CategoryButtonsContainer,
    IntroParagraph,
    IntroParagraphSmaller,
    IntroParagraphStrong,
} from '../../components/screens/home';
import { CategoryButton } from '../../components/global/buttons/category-button';
import { Heading1 } from '../../components/global/typography/heading-1';
import { Heading2 } from '../../components/global/typography/heading-2';
import { MainContainer } from '../../components/global/main-container';

// Data
import { categories } from './home.data';

// Layouts
import { AppLayout } from '../../components/layouts/app-layout';

export const Home: FC = () => {
    return (
        <AppLayout>
            <Banner />
            <MainContainer>
                <Heading1>
                    Challenge yourself
                </Heading1>
                <IntroParagraph>
                    <IntroParagraphStrong>Win your share of R 1 million in prizes</IntroParagraphStrong>
                    <IntroParagraphSmaller>when you challenge yourself with 6 exciting categories!</IntroParagraphSmaller>
                </IntroParagraph>

                <ButtonContainer>
                    <Button
                        title="Play Random"
                    />
                </ButtonContainer>

                <Heading2>
                    Or play a category
                </Heading2>

                <CategoryButtonsContainer>
                    {
                        categories.map(({ id, imageUri, name}) => (
                            <CategoryButton
                                id={id}
                                imageUri={imageUri}
                                title={name}
                            />
                        ))
                    }
                </CategoryButtonsContainer>
            </MainContainer>
        </AppLayout>
    );
};
