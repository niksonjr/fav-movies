export const loadData = (key) => {
    try {
        const data = localStorage.getItem(key);

        if (!data) {
            return;
        }

        return JSON.parse(data);
    } catch (err) {
        return;
    }
};

export const saveData = (key, data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch(err) {
        console.log('Problem writing to local storage.', err);
    }
};
