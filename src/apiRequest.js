import axios from 'axios';

export default function apiRequest(method, address, data, headers) {
    
    const header = {
        user: 'User 1'
    }

    return axios({
        url: `http://us-central1-js04-b4877.cloudfunctions.net/${address}`,
        method,
        data,
        headers: { ...headers, ...header}
    })
}