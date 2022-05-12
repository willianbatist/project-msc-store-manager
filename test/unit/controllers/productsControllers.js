const sinon = require('sinon');
const { expect } = require('chai');
const productsControllers = require('../../../controllers/productsController');
const productsServices = require('../../../services/productsServices')

describe('Camada de Controller, Testando productsControllers', () => {
  describe('Retorno status 200 com sucesso', () => {
    const res = {};
    const req = {};

    const productsMock = [
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
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getAllServiceProducts').resolves();
    })

    after(() => {
      productsServices.getAllServiceProducts.restore();
    });

    it('Retorno status 200 para lista de todos os produtos', async () => {
      await productsControllers.getAllControllerProducts(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
    describe('', () => {
      const res = {};
      const req = { params: { id : 1} };

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productsServices, 'getProductId').resolves(1);
      })
  
      after(() => {
        productsServices.getProductId.restore();
      });

      it('Retorno status 200 para id do produto encontrado', async () => {
        await productsControllers.getProductId(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
      });
    })

    describe('Ao chamar o controller de create', async () => {
      const res = {};
      const req = {};
      req.body = { name: 'Produto', quantity: 79 }
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'createProduct').resolves({id: 4, name: 'Produto', quantity: 79});
    })

    after(() => {
      productsServices.createProduct.restore();
    });

    it('é chamado o status com o código 201, quando criado com sucesso', async () => {
      await productsControllers.createProduct(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });
    });
})