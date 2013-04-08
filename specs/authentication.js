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
        this.addMatchers({

        });

        // create component test area, adding test component for visualization test
        if (Ext.get("componentTestArea")) {
            Ext.removeNode(Ext.get("componentTestArea").dom);
        }
        Ext.DomHelper.append( Ext.getBody(), "<div id='componentTestArea' style='width:960px; height:300px'></div>");

        if (!authenticationView) {
            authenticationView = Ext.create('FlickrSearch.view.AuthenticationView',{ renderTo:'componentTestArea'});
        }
    })

    afterEach(function(){
        authenticationView = null;
    })

    it('should inherit from Ext.container.Container', function() {
        expect(authenticationView.isXType('container')).toEqual(true);
    });

    it('should have a panel', function() {
        expect(authenticationView.down('panel')).toBeDefined();
    });

    it('panel should have a title', function() {
        expect(authenticationView.down('panel').title).toBeDefined()
    });

    it('panel should have a form', function() {
        expect(authenticationView.down('panel').down('form')).toBeDefined();
    });

    it('panel should have 2 buttons', function() {
        expect(authenticationView.down('panel').query('button').length).toBeGreaterThan(1);
    });
});

