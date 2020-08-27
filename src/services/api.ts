import axios from 'axios';

axios.create({
    baseURL: 'https://reqres.in/api/users',
});

export default axios;