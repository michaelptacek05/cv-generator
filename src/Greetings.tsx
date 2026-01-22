interface GreetingProps {
    word: string;
}

function Greetings({ word }: GreetingProps) {
    return (
        <h1>
            { word }
        </h1>
    )
}

export default Greetings;