// const withData = (maxSpeakersToShow) => {
//     return function (Component) {
//         const speakers = [
//             {
//                 imageSrc: "speaker01",
//                 name: "Andri Ragettli"
//             },
//             {
//                 imageSrc: "speaker02",
//                 name: "Camille Armand"
//             },
//             {
//                 imageSrc: "speaker03",
//                 name: "Veroniqi Hanssen"
//             }
//         ];

//         const limitSpeakers = maxSpeakersToShow ? speakers.slice(0, maxSpeakersToShow) : speakers;

//         return function () {
//             return <Component speakers={limitSpeakers}></Component>;
//         }
//     };
// }

const withData = maxSpeakersToShow => Component => {
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

    const limitSpeakers = maxSpeakersToShow ? speakers.slice(0, maxSpeakersToShow) : speakers;

    return () => <Component speakers={limitSpeakers}></Component>;
};

export default withData;