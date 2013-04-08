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
            var htmlReporter = new jasmine.HtmlReporter();
            jasmine.getEnv().addReporter(htmlReporter);
            jasmine.getEnv().execute();
        }
    });
});


