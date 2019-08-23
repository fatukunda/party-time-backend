import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);
describe('Server connection', () => {
  it('should successfully run the server', (done) => {
    chai.request(server).get('/').end((err, res) => {
      expect(res).to.have.status(200);
    });
    done();
  });
});
