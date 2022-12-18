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

const videoById = (data, id) => {
    const videosTotal = getVideos(data);
    const result = videosTotal.filter((video) => video.id === id);
    return result;
}; */


const getQuestions = (data) => data.questions


export const Selectors = {
    getQuestions
};
