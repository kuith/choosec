import OptionButton from './option-button';

function Intro({onClick}) {
    return (
        <div>
            <p>Descubre qué tipo de personaje eres !!!!</p>
            <OptionButton onClick={onClick} label="Empecemos"/>
        </div>
    );
}

export default Intro;
