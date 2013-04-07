/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/7/13
 * Time: 10:12 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({enabled:true});
Ext.require('Ext.app.Application');

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'FlickrSearch',
        appFolder: 'app',
        controllers: ['ScreensController'],

        launch: function() {
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});


