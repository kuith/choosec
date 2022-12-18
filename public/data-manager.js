const loadData = async () => {
    const response = await fetch("./data.json");
    const initialData = await response.json();
    return initialData;
};

export const DataManager = {
    loadData,
};
