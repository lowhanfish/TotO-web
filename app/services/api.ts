import axios from "axios";

const API_URL = 'http://localhost:8000';

export const AskTotO = async (message:string) => {
    const response = await axios.post(`${API_URL}/ask`, { 
        promt : message
     });
    return response.data;
}