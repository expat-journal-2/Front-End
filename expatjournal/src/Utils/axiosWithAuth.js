import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://expat-journal.herokuapp.com/', //will need to update when dB and endpoints get published
        headers: {
            Authorization: token
        }
        
    })
}