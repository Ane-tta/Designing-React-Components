import React from 'react'

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

const Speakers = () => {
    return (
        <div>
            {
                speakers.map(({ imageSrc, name }) => <img src={`/images/${imageSrc}.jpg`} alt={name} style={{ width: "33.33333%" }} />)
            }
        </div>
    );
}

export default Speakers