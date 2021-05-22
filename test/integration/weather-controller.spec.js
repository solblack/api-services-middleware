const { expect } = require("chai");
const { describe } = require('mocha');
const request = require('supertest');
const { apiResponseOk, apiResponseIncomplete, apiNotFoundResponse } = require("../mocks/integration/api-weather-response.mock.js");
const { responseOk } = require("../mocks/integration/weather-controller-response.mock");

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const Server = require("../../src/server");

describe('Weather controller integration tests', () => {
    let app = null;

    beforeEach(() => {
        let appServer = new Server();
        app = appServer.start();
    });

    afterEach(() => {
        if(app){
            app.close();
        }
        app = null;
    });

    it('GET /weather response OK', (done) => {
        // this.timeout(20 * 1000);

        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.WEATHER_BASE_URL  + process.env.WEATHER_API_KEY + '&q=paris&units=metric')
            .reply(200, apiResponseOk);

        request(app)
            .get("/weather")
            .set('Origin', "http://localhost:4200")
            .query(
                {
                    city: "paris"
                }
            )
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);

                expect(res).be.not.null;
                expect(res).be.not.undefined;
                expect(res.body).to.deep.equal(responseOk)

                return done();

            });
    });
});