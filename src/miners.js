/* const videosByFilters = (data, selectedCategory, selectedGrade, keyWord) => {
    const videosTotal = getVideos(data);
    const result = videosTotal.filter((video) => {
        const cumpleCategoria =
            video.categories.includes(selectedCategory) ||
            selectedCategory === "" ||
            selectedCategory === "All videos";
        const cumpleGrado =
            video.cefrGrade === selectedGrade ||
            video.cambridgeGrade === selectedGrade ||
            selectedGrade === "";
        const cumpleKeyWord =
            video.keyWords.includes(keyWord) || keyWord === "";
        return cumpleCategoria && cumpleGrado && cumpleKeyWord;
    });
    return result;
};
 */



const getQuestions = (data) => {
    if (data === undefined) {
        return ;
    } else {
        const dataResult = data.questions;
        return dataResult;
        
    }
}

const getQuestionById = (data, id) => {
    if(data === undefined) {return}
    const allQuestions = getQuestions(data);
    const result = allQuestions.find((question) => question.id === id);
    return result;
}

export const Selectors = {
    getQuestions,
    getQuestionById,
};
