import React from 'react'
import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    HeaderContent,
    HeaderSubheader,
    Icon,
    Segment
} from "semantic-ui-react";

function Footer() {

    return (
        <footer className="footer">
            <Segment inverted padded='very'>
                <Container>
                    <p> © Sassy Nails Spa 2021</p>
                    <Header inverted as='h5'>
                        <Icon name='id card'/>
                        <HeaderContent>About Us</HeaderContent>
                        <HeaderSubheader>
                            We provide quality service along with exceptional care to customers.
                            We value relationships and provide a strong attention to detail in order to provide
                            customers with the best service in Oakland.
                            We've been around since 2007 and we're part of an established community on Piedmont Avenue.
                            We strive to provide individual, personalized care to our customers so that each customer
                            leaves satisfied and relaxed.
                        </HeaderSubheader>
                    </Header>
                    <Grid>
                        <GridRow>
                            <GridColumn width={8}>
                                <Header inverted as='h5'>
                                    <Icon name='street view'/>
                                    <HeaderContent>Where to Find Us</HeaderContent>
                                    <HeaderSubheader>
                                        <address>
                                            4243 Piedmont Avenue Oakland, California 94611
                                        </address>
                                    </HeaderSubheader>
                                </Header>
                            </GridColumn>
                            <GridColumn width={8}>
                                <Header inverted as='h5'>
                                    <Icon name='address book'/>
                                    <HeaderContent>Give Us A Call</HeaderContent>
                                    <HeaderSubheader>
                                        <a href="tel:510-596-8802">Telephone: (510) 596-8802</a>
                                    </HeaderSubheader>
                                </Header>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer
