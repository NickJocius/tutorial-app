import axios from 'axios';

export const registerUser = async (values) => {
    
    return axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, values);
    
}