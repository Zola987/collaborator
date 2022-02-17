import apiInstance from '@api/api';
import { clientPayloadType } from './types';

export const addNewClient = async (payload: clientPayloadType) => {
    let response;
    try {
        response = await apiInstance.post('/clients/', payload);
    } catch (error) {
        console.log(error);
    }
};

export const getAllClients = async () => {
    let response;
    try {
        response = await apiInstance.get('/clients/');
    } catch (error) {
        console.log(error);
    }
    return response;
};