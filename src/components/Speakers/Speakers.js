import React from 'react';
import withData from "./withData";

const Speakers = ({ speakers }) => {
    return (
        <div>
            {
                speakers.map(({ imageSrc, name }) => <img src={`/images/${imageSrc}.jpg`} alt={name} style={{ width: "33.33333%" }} />)
            }
        </div>
    );
}

const maxSpeakersToShow = 2;
export default withData(maxSpeakersToShow)(Speakers);