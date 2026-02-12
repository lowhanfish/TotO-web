import axios from "axios";

const API_URL = 'http://121.52.72.109:8000/api/v1';

// 1. Fungsi Kirim Pertanyaan
export const AskTotO = async (message: string, session_id: string) => {
    const response = await axios.post(`${API_URL}/ask`, { 
        prompt : message,
        session_id : session_id
     });
    return response.data;
}

// 2. Fungsi Ambil Daftar Sesi (Untuk Sidebar)
export const GetSessions = async () => {
    const response = await axios.get(`${API_URL}/sessions`);
    return response.data; // Mengembalikan array [{session_id, title}, ...]
}

// 3. Fungsi Ambil Detail Chat (Saat Riwayat Diklik)
export const GetChatHistory = async (session_id: string) => {
    const response = await axios.get(`${API_URL}/history/${session_id}`);
    return response.data; // Mengembalikan array [{role, content}, ...]
}