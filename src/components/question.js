
function Question({ question }) {
    const questionLabel = question ? question.label : "";
    const questionOptions = question ? question.options : [];
    
    return (
        <div>
            <p>Mi id es {questionLabel}</p>

        </div>
    );
}

export default Question;
