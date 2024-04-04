import axios from 'axios';

const leadId = '64e9ffe76ac96d0e40d3f84d'
export const API_BASE_URL = `/webViewFetchSingleLead?leadId=${leadId}`;

export const fetchUsers = async (headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
