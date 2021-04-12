import React from 'react'
import HomePageBanner from "../Components/HomePageBanner";
import {Button, ButtonContent, Container, Icon} from "semantic-ui-react";

function Home(props) {

    const changeRoute = () => {
        props.history.push('/profilesetup')
    }

    return (
        <Container>
            <HomePageBanner props={props}
                            big_header_text='Sassy Nails Spa'
                            subtext='Walk in or Make an appointment'
            />
            <Button primary animated='fade' onClick={changeRoute}>
                <ButtonContent visible>Checkout our services</ButtonContent>
                <ButtonContent hidden><Icon name='right arrow'/></ButtonContent>
            </Button>
        </Container>

    )
}
export default Home
