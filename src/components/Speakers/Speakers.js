import React, { useContext } from 'react';
import SpeakerContext from "./SpeakerContext";

const Speakers = () => {
    const speakers = useContext(SpeakerContext);

    return (
        <div>
            {
                speakers.map(({ imageSrc, name }) => <img src={`/images/${imageSrc}.jpg`} alt={name} style={{ width: "33.33333%" }} />)
            }
        </div>
    );
}

export default Speakers