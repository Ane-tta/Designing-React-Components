import React from 'react';

const Speakers = () => {
    const speakers = [
        {
            imageSrc: 'speaker01',
            name: 'Douglas Crockford',
            id: 1124,
            firstName: 'Douglas',
            lastName: 'Crockford',
            sat: true,
            sun: false,
            isFavorite: false,
            bio:
                'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.',
        },
        {
            imageSrc: 'speaker02',
            name: 'Tamara Baker',
            id: 1530,
            firstName: 'Tamara',
            lastName: 'Baker',
            sat: false,
            sun: true,
            isFavorite: true,
            bio:
                'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.',
        },
        {
            imageSrc: 'speaker03',
            name: 'Eugene Chuvyrov',
            id: 10803,
            firstName: 'Eugene',
            lastName: 'Chuvyrov',
            sat: true,
            sun: false,
            isFavorite: false,
            bio:
                'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.',
        },
    ];

    return (
        <div className="speakers flex">
            {
                speakers.map(({ imageSrc, name }) => (
                    <div className="speaker-box flex-1" key={speakers.id}>
                        <div className="speaker-card flex justify-center flex-col text-center m-8">
                            <img src={`/images/${imageSrc}.webp`} className="mb-2.5" alt={name} />
                            <span>{name}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Speakers