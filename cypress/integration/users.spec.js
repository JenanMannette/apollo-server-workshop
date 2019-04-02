describe('Users', () => {
  it('can query a user by id', () => {
    const query = `{
      users(id: 1) {
        name
        email
      }
    }`;

    cy.request({
      method: 'POST',
      url: 'localhost:3000/graphql',
      body: { query },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.eql({
        data: {
          users: {
            name: 'Leanne Graham',
            email: 'Sincere@april.biz',
          },
        },
      });
    });
  });
});
