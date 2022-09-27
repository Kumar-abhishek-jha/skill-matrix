import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const employeeUrl = 'http://localhost:5080';

export const getEmployee = async (id) => {
    id = id || '';
    return await axios.get(`${employeeUrl}/${id}`);
}

export const addEmployee = async (user) => {
    // eslint-disable-next-line no-undef
    return await axios.post(`${employeeUrl}/add`, Employee);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${employeeUrl}/${id}`);
}

