describe('Organizations', () => {
  it('can query an organization by id', () => {
    const query = `{
      organization(id: 1) {
        id
        name
      }
    }`;

    cy.request({
      method: 'POST',
      url: 'localhost:3000/graphql',
      body: { query },
      failOnStatusCode: false,
    }).its('body').should('eq', '{ "id": 1, "name": "Gloo" }');
  });
});
