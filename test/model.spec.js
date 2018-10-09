require('../src/model/api');
const assert = require('chai').assert;
global.fetch = require('node-fetch')
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('getData', () => {
    it('getData debería ser una funcion', () => {
        assert.isFunction(getData);
    });
    it('getData retornar un arreglo con peliculas', (done) => {
        getData().then(
            (movies) => {
                assert.exists(movies[1]);
                assert.isArray(movies);
                done();
            }
        ) 
    });
    it('Los elementos del arreglo deberian ser objetos', (done) => {
        getData().then(
            (movies) => {
                assert.isObject(movies[1]);
                done();
            }
        )
    });
});
describe('getIndividualData', () => {
    it('getData debería ser una funcion', () => {
        assert.isFunction(getIndividualData);
    });
    it('Deberia retornar la información de cada pelicula pasandole su id', (done) => {
        getIndividualData('tt0945513').then(movie => {
            assert.isObject(movie);
            assert.equal(movie.Title, 'Source Code')
            done()
        })        
    });
});