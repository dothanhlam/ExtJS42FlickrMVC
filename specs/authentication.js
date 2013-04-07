/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/7/13
 * Time: 1:57 PM
 * To change this template use File | Settings | File Templates.
 */


describe("FlickrSearch.view.AuthenticationView", function(){
    var authenticationView = null;

    beforeEach(function() {
        if (!authenticationView) {
            authenticationView = Ext.create('FlickrSearch.view.AuthenticationView',{ renderTo:Ext.getBody()});
        }
    })

    it('should inherit from Ext.container.Container', function() {
        expect(authenticationView.isXType('container')).toEqual(true);
    });

    it("View should have form", function() {
        expect(authenticationView.down("form")).toBeTruthy()
    })
});