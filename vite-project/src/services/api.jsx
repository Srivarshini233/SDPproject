import axios from 'axios';

// const baseURL = 'http://65.1.244.186:7777/api';
const baseURL = 'http://localhost:7777/api';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (name, email, phone, address, password) => axiosInstance.post('/auth/register', { name, email, phone, address, password });
const WebData = () => axios.get('/web/site');
const UserData = (email) => axiosInstance.get(`/users/email/${email}`);
const UpdateUserByID = (id, data) => axiosInstance.put(`/users/update/${id}`, data)
const DeleteUserByID = (id) => axiosInstance.delete(`/users/delete/${id}`)
const ProductData = () => axiosInstance.get(`/users/getproduct`);
const DeleteProductByID = (id)=> axiosInstance.delete(`users/deleteproduct/${id}`)
const addProduct = (product) => axiosInstance.post(`users/addproducts`,product);
const orderData = ()=>axiosInstance.get(`/orders/getOrder/All`);
const DeleteOrder = (id)=> axiosInstance.delete(`orders/delete/${id}`);

const getAllUsers = () => axiosInstance.get('/users/all')

export { axiosInstance, SignUp, WebData, UserData, UpdateUserByID, getAllUsers, DeleteUserByID,ProductData,DeleteProductByID ,addProduct,orderData,DeleteOrder}







