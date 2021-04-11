import React from 'react'
import {Header} from "semantic-ui-react";

function HomePageBanner({props, big_header_text, subtext}) {

    return (
        <div className="home-hero-image">
            <div className="hero-text">
                <Header size='huge'
                        inverted={true}>
                    {big_header_text}
                    <Header.Subheader>
                        {subtext}
                    </Header.Subheader>
                </Header>
            </div>
        </div>
    )
}

export default HomePageBanner
