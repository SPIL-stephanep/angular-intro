describe('Portal Factory', function() {
    beforeEach(module('intro'));

    it('returns an array', inject(function(Portals) {
        expect(Portals).to.be.an('array');
    }));

    it('has a fixed amount of items', inject(function(Portals) {
        expect(Portals).to.have.length(5);
    }));
});