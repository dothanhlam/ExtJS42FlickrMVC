/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/6/13
 * Time: 7:57 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.view.PhotoView',{
    extend: 'Ext.window.Window',
    alias: 'widget.photo',
    title: '',
    width: 800,
    height: 550,
    autoShow: true,

    initComponent: function() {

        this.items = [
            {
                xtype:'imagecomponent',
                id: 'imageLoader',
                style: {
                    display:'block',
                    margin:'auto',
                    maxHeight:'100%',
                    maxWidth:'100%'
                },
                listeners: {
                    boxready:  function(comp, width, height, opts) {
                        console.log("w = " + width + " h = " + height);
                    }
                }
            }
        ];

        this.buttons = [
            {
                text: 'Close',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }

});
