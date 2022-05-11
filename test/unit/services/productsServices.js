const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productsServices = require('../../../services/productsServices');

describe('Camada Service, Testando Products Service', () => {
  describe('Testando o retorno com sucesso da getAllServiceProducts', () => {
    const resultExecute = [
      {
        "id": 1,
        "name": "Martelo de Thor",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "Traje de encolhimento",
        "quantity": 20
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América",
        "quantity": 30
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute')
        .resolves(resultExecute)
    })
    after(() => {
      connection.execute.restore();
    })

    it('Array com os produtos', async () => {
      const result = await productsServices.getAllServiceProducts();
      expect(result).to.be.not.empty;
      expect(result).to.be.includes.all.keys(
        'id',
        'name',
        'quantity'
      );
    })
  })

  describe('Testando retorno da getProductId em services', () => {
    it('retorne false se o produto não se encontra no bando de dados', async () => {
      const result = await productsServices.getProductId(10);
      expect(result).to.be.a('boolean');
    })
  });
});