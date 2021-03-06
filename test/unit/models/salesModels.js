const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Camada Models, SalesModels', () => {
  it('Array com lista das Vendas', async () => {
    const resultExecute = [
      {
        "saleId": 1,
        "date": "2022-05-12T23:05:53.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 1,
        "date": "2022-05-12T23:05:53.000Z",
        "productId": 2,
        "quantity": 10
      },
      {
        "saleId": 2,
        "date": "2022-05-12T23:05:53.000Z",
        "productId": 3,
        "quantity": 15
      }
    ]
    sinon.stub(connection, 'execute')
    .resolves(resultExecute)

    const result = await salesModel.getAllSalesModel();
    expect(result).to.be.not.empty;

    connection.execute.restore();
  });

  it('a venda buscada no BD apresenta saleId, date, productId e quantity do produto', async () =>{
    const resultExecute = [{
      "saleId": 1,
      "date": "2022-05-12T23:05:53.000Z",
      "productId": 1,
      "quantity": 5
    }];
    sinon.stub(connection, 'execute')
    .resolves(resultExecute)

    const result = await salesModel.getSalesId(1);

    expect(result.saleId).to.be.equal(1)
  connection.execute.restore();
  })

  it('inserção da sales feita com sucesso', async () => {
    const resultExecute = [{ insertId: 4 }];
    sinon.stub(connection, 'execute')
    .resolves(resultExecute)

    const result = await salesModel.insertSales();

    expect(result).to.not.be.equal(undefined);
    connection.execute.restore();
  });

  it('inserção da sales_products feita com sucesso', async () => {
    const id = 1;
    const array = [
      {
        "productId": 1,
        "quantity": 3
      }
    ]
    sinon.stub(connection, 'execute').resolves()
    const result = await salesModel.insertSalesProduct(id, array)

    expect(result).to.be.includes.all.keys(
      'id',
      'itemsSold'
    )
    connection.execute.restore();
  });
});