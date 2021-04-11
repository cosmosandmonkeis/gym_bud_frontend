import React from 'react'
import HomePageBanner from "../Components/HomePageBanner";

function Home(props) {

    return (
        <div>
            <HomePageBanner props={props}
                            big_header_text='Sassy Nails Spa'
                            subtext='Walk in or Make an appointment'
            />
        </div>

    )
}

export default Home
