import OptionButton from "./option-button";

function Question({ question, onClick }) {
    const questionLabel = question ? question.label : "";
    const questionOptions = question ? question.options : [];
    const questionId = question ? question.id : "";
   
    const options = questionOptions?.map((opt) => (
        <OptionButton
            key={opt.label}
            onClick={() => onClick(opt.conection)}
            label={opt.label}
        >
        </OptionButton>
    ));
    

    return (
        <div>
            <p>{questionLabel}</p>
            {options}
        </div>
    );
}

export default Question;
