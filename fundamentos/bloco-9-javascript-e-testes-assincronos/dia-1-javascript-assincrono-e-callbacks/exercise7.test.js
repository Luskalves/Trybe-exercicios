const uppercase = require('./exercise7');

describe('chama a função "uppercase" como uma callback', () => {
  it('testa os baguio', (done) => {
    
    function callback(str) {
      try {
        expect(str).toBe('LUSKA');
        done();
      } catch (err) {
        done(err);
      }
    }
    uppercase('luska', callback);
  })
})