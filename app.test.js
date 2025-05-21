const request = require('supertest');
const app = require('./app');

app.get('GET /', () => {
  it('should return "Hello World"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
});