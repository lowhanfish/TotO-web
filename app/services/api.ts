import axios from "axios";

const API_URL = 'http://121.52.72.109:8000/api/v1';

// Tambahkan parameter session_id di sini
export const AskTotO = async (message: string, session_id: string) => {
    const response = await axios.post(`${API_URL}/ask`, { 
        prompt : message,
        session_id : session_id // Tambahkan ini supaya Python tidak marah
     });
    return response.data;
}