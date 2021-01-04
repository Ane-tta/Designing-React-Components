import React from 'react'
import SpeakersRenderProps from "./SpeakersRenderProps";

const Speakers = () => {
    return (
        <SpeakersRenderProps>
            {({ speakers }) => {
                return (
                    <div>
                        {
                            speakers.map(({ imageSrc, name }) => <img src={`/images/${imageSrc}.jpg`} alt={name} style={{ width: "33.33333%" }} />)
                        }
                    </div>
                );
            }}
        </SpeakersRenderProps>
    );
}

export default Speakers