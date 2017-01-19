let describe = require('mocha').describe,
    it = require('mocha').it,
    chai = require('chai'),
    request = require('request'),
    expect = chai.expect,
    chaiHttp = require('chai-http'),
    jwtDecode = require('jwt-decode'),
    jwt = require('jsonwebtoken'),
    express = require('express'),
    deckMethods = require('../deckMethods'),
    base_url = "http://localhost:3000";


chai.use(chaiHttp);

let requestBody = {};
//Our parent block
describe('API TESTS', () => {
    describe('GET /', () => {
        it("should start server", (done) => {
            chai.request(base_url)
                .get('/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    done();
                });
        })
    });

    describe('GET /api', () => {
        it('status when calling api should be 200 and an object', (done) => {
            chai.request(base_url)
                .get('/api')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res).to.be.an('object');
                    done();
                })
        })
    });

    describe('GET /api/create', () => {
        it('should create deck with jwt', (done) => {
            chai.request(base_url)
                .get('/api/create')
                .end((err, res) => {
                    if(err){
                        expect(res.status).to.equal(404);
                    }else{
                        expect(res.status).to.equal(200);
                        let expectedDeck = deckMethods.createDeckFunc();
                        let token = res.body.token;
                        let requestedDeck = jwt.decode(token, {completed: true});
                        for(let i = 0; i < requestedDeck.length; i++){
                            expect(requestedDeck.deckData[i]).to.equal(expectedDeck[i]);
                        }
                    }
                    done();
                })
        })
    });
});