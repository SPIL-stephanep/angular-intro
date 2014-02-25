describe('The Home Controller', function() {
    var ctrl,
        scope;

    beforeEach(module('intro'));

    beforeEach(inject(function($rootScope, $controller, $injector) {
        scope = $rootScope.$new();

        ctrl = $controller('HomeCtrl', {
            $scope: scope,
            $rootScope: $rootScope
        });
    }));

    it('it an object', function() {
        expect(ctrl).to.be.an('object');
    });

    it('has a multiply method', function() {
        expect(scope.multiply).to.be.a('function');
    });
});