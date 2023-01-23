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


const getQuestions = (data) => data;

const getQuestionById = (data, id) => {
    const allQuestions = getQuestions(data);
    const result = allQuestions.filter((question) => question.id === id);
    return result;
}

export const Selectors = {
    getQuestions,
    getQuestionById,
};
