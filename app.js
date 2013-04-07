/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 3/31/13
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({enabled:true});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'FlickrSearch',
    appFolder: 'app',
    controllers: ['ScreensController'],
    launch: function() {
        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'card',
            items: [
                {
                    xtype: 'authentication'
                },
                {
                    xtype: 'photosearch'
                }
            ]
        });

        this.on({
            signin: function() {
                viewport.getLayout().setActiveItem(1);
            },
            signout: function() {
                viewport.getLayout().setActiveItem(0);
            }
        });
    }
});