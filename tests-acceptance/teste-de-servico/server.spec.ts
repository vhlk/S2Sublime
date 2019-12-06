
import request = require("request-promise");
import { closeServer } from '../ta-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
    var server:any;

    beforeAll(() => {server = require('../server')}); //imaginar que o server se encontra nesse caminho

    afterAll(() => {server.closeServer()}); //imaginar que o server possui a função de close


    it("inicialmente a lista de produtos é vazia", () => {
        request.get(base_url+"produtos")
            .then(body => expect(body).toBe("[]"))
            .catch(e => expect(e).toEqual(null));
    });

    it("não cadastra produtos com IDs iguais", () => {
        var produto1 = {"json":{"nome": "Caneca Dia dos Pais", "ID" : "965", "quantidade":"10"}};
        var produto2 = {"json":{"nome": "Caneca Dia das Mães", "ID" : "965", "quantidade":"15"}};
        
        return request.post(base_url+"produto", produto1)
            .then(body => {
                expect(body).toEqual({success: "O produto foi cadastrado com sucesso"});
                return request.post(base_url+"produto", produto2)
                    .then(body => {
                        expect(body).toEqual({failure: "O produto não pode ser cadastrado"});
                        return request.get(base_url+"produto")
                            .then(body => {
                                expect(body).toContain('{"nome": "Caneca Dia dos Pais", "ID" : "965", "quantidade":"10"}');
                                expect(body).not.toContain('{"nome": "Caneca Dia das Mães", "ID" : "965", "quantidade":"15"}');
                            })
                    })
            })
    });

})