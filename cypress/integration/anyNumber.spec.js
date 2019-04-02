describe('Any Number', () => {
  it('can query any number', () => {
    const query = `{
      anyNumber
    }`;

    cy.request({
      method: 'POST',
      url: 'localhost:3000/graphql',
      body: { query },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.eql({ data: { anyNumber: 'Threeve' } });
    });
  });

  it('can mutate any number', () => {
    const query = `mutation {
      setAnyNumber(value: "V") {
        anyNumber
      }
    }`;

    cy.request({
      method: 'POST',
      url: 'localhost:3000/graphql',
      body: { query },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.eql({ data: { anyNumber: 'V' } });
    });
  });
});
