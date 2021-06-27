xtest('multiply 2 numbers', ()=>{
    expect(4*3).toBe(12);
});

'use strict';
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);
describe('API sever',()=>{
    test('handles invalid requests',async ()=>{
        const response= await request.get('/foo');
        expect(response.status).toEqual(404);
    });
    test('handles internal server error',async()=>{
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });
});