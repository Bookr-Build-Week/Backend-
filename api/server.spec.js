const request = require('supertest'); 
const server = require('./server.js');
const db = require('../database/dbConfig.js')
describe('Sanity check',() => {
    beforeEach(async () => {
        await db('users').truncate();
        await request(server).post('/api/auth/register').send({username: 'mack', password: 'pass'})
})
it('makes sure Im in a test env', () => {
    expect(process.env.DB_ENV).toBe('testing')
})
})

describe('GET /',() => {
    it('should return 401 unauthorized',async() => {
        const res= await request (server).get('/api/books');
        expect (res.status).toBe(401);
    })

}) 

describe('POST /api/auth/login', () => {
    it('should return status 200', async() => {
        const res = await request (server).post('/api/auth/login').send({username:"mack", password:"pass"})
        // console.log(res)
        expect (res.status).toBe(200)
    })
    it('should return status 200', async() => {
        const res = await request (server).post('/api/auth/login').send({username:"mack", password:"pass"})
        const auth = await request (server).get('/api/books').set('Authorization', res.body.token)
        expect (auth.status).toBe(200)
    })
})

describe('GET /',() => {
    //test for status code
    it('should return 200 ok',  async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
    })

    //test for format
    it('should return a json object', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
    })

     
    // test for json body structure
    
    it('should return Server running', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual('Server running!');
    })
})