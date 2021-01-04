import React from 'react'
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Footer from "../src/components/Footer/Footer";
import SpeakerContext from "../src/components/Speakers/SpeakerContext";

const Page = () => {
    const speakers = [
        {
            imageSrc: "speaker01",
            name: "Andri Ragettli"
        },
        {
            imageSrc: "speaker02",
            name: "Camille Armand"
        },
        {
            imageSrc: "speaker03",
            name: "Veroniqi Hanssen"
        }
    ];

    return (
        <div>
            <Header />
            <Menu />
            {/* Every context comes with a Provider React component */}
            {/* that allows the consuming component to subscribe to any changes in that context. */}
            {/* The context provider accepts a `value` prop that can be passed in. */}
            {/* Any nested component Inside this context will have access to whatever we set this value to. */}
            <SpeakerContext.Provider value={speakers}>
                <SpeakerSearchBar />
                <Speakers />
            </SpeakerContext.Provider>
            <Footer />
        </div>
    )
}

export default Page
