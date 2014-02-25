describe('reversed filter', function() {
    var filter;

    beforeEach(module('intro'));

    beforeEach(inject(function($filter) {
        filter = $filter('reversed');
    }));

    it('can reverse a string', function() {
        expect(filter('hello')).to.equal('olleh');
    });
});