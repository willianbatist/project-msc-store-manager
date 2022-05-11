const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('Camada Model, Testando  productsModel', () => {
  describe('quando existem Produtos registrado no BD', () => {
    // it('', () =>{})
    // estrtura do BD [[{ id }]]
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

    it('Array com os produtos', async () =>{
      const result = await productsModel.getAllModelProducts();
      expect(result).to.be.not.empty;
    })

    it('o objeto que esta no array contem os atributos id, name, quantity', async () => {
      const result = await productsModel.getAllModelProducts();
      expect(result).to.be.includes.all.keys(
        'id',
        'name',
        'quantity'
      )
    })
  });

  describe('Busca de produtos por ID', () => {
    const resultExecute = [
      {
        "id": 1,
        "name": "Martelo de Thor",
        "quantity": 10
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute')
        .resolves(resultExecute)
    })
    after(() => {
      connection.execute.restore();
    })

    it('o produto buscado no BD apresenta id, name e quantity do produto', async () =>{
      const result = await productsModel.getProductId(1);

      expect(result).to.be.includes.all.keys(
      'id',
      'name',
      'quantity'
    )
    })

    it('a função busca no BD o ID especificado', async () =>{
      const result = await productsModel.getProductId(1);

      expect(result).to.deep.include( { id: 1 } );
    })
  })

  describe('Busca de produtos pelo name', () => {
    const resultExecute = [
      {
        "id": 2,
        "name": "Traje de encolhimento",
        "quantity": 20
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute')
        .resolves(resultExecute)
    })
    after(() => {
      connection.execute.restore();
    })

    it('Retorna com sucesso o produto buscado pelo nome', async () =>{
      const result = await productsModel.getModelName('Traje de encolhimento');
      expect(result).to.deep.include( { name: 'Traje de encolhimento' } );
    })
  });
});