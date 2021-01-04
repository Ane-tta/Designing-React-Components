const SpeakersRenderProps = (props) => {
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

    // to have this new component render its children, in other words any
    // component inside our new component, we need to return props.children as follows. 
    return props.children({
        speakers
    });
};

export default SpeakersRenderProps;