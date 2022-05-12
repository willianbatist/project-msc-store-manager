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

    connection.execute.restore();
  });
});