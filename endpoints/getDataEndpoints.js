import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.API_GET_DATA);

export const apiGetData =  () => api.get('/vehicles/')
    .set('Accept','application/json');
