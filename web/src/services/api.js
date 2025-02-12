const API_URL = process.env.REACT_APP_ENDPOINT || "http://localhost:4000/heroes";

export const getHeroes = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
