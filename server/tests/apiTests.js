//TODO: do tests for API
import chai, { expect, request } from 'chai';
import { describe, it, to, be, an } from 'mocha';
import chaiHttp from 'chai-http';

let base_url = "http://localhost:3000";

chai.use(chaiHttp);

//Our parent block
describe('API TESTS', () => {
    describe('GET /', () => {
        it("should start server", (done) => {
            request(base_url)
                .get('/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    done();
                });
        })
    });

    describe('GET /api', () => {
        it('status when calling api should be 200 and an object', (done) => {
            request(base_url)
                .get('/api')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res).to.be.an('object');
                    done();
                })
        })
    });

    describe('GET /api/create', () => {
        it('should create deck', (done) => {
            request(base_url)
                .get('/api/create')
                .end((err, res) => {
                    if(err){
                        expect(res.status).to.equal(404);
                    }else{
                        expect(res.status).to.equal(200);
                        expect(res.body.deckData).to.be.an('array');
                    }
                    done();
                })
        })
    });
});