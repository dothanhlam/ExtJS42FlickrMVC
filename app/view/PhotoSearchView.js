/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/2/13
 * Time: 7:58 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.view.PhotoSearchView',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.photosearch',
    layout: 'fit',
    dockedItems: {
        itemId: 'toolbar',
        xtype: 'toolbar',
        enableKeyEvents: true,
        items: [
            {
                text: 'Flickr'
            },
            {
                xtype: 'splitbutton',
                text : 'Size',
                menu: new Ext.menu.Menu({
                    items: [
                        // these will render as dropdown menu items when the arrow is clicked:
                        {text: 'small square 75x75'},
                        {text: 'large square 150x150'},
                        {text: 'thumbnail, 100 on longest side'},
                        {text: 'small, 240 on longest side'}
                    ]
                })
            },
            '->',
            {
                xtype    : 'textfield',
                name     : 'field1',
                emptyText: 'enter search term'
            },
            {
                text: 'Search',
                action: 'search'
            },
            '-',
            { xtype: 'tbspacer' },
            {
                text: 'Settings ...'
            },
            { xtype: 'tbspacer', width: 50 },
            {
                text: 'Sign out',
                action: 'signout'
            }
        ]
    },

    items: [ {
        xtype:'dataview',
        title: 'Images',
        id: 'images-panel',
        autoScroll:true,

        store: Ext.create('FlickrSearch.store.PhotoStore'),
        tpl: new Ext.XTemplate(
            '<tpl for=".">',
            '<div style="margin: 5px;  display: inline-block;" class="thumb-wrap">',
            '<div class="thumb"><img src="{thumbURL}"></div>',
            '<span class="x-editable">{shortName:htmlEncode}</span>',
            '</div>',
            '</tpl>'
        ),
        itemSelector: 'div.thumb-wrap',
        prepareData: function(data) {
            Ext.apply(data, {
                shortName: data.title.length > 0 ? Ext.util.Format.ellipsis(data.title, 24) : "no title",
                thumbURL: 'http://farm'+data.farm+'.static.flickr.com/'+data.server+'/'+data.id+'_'+ data.secret+'_q.jpg'
            });
            return data;
        }
    }],

    listeners: {
        activate: function() {
            Ext.getCmp('images-panel').store.removeAll();
        }
    },

    doSearch: function(term) {
        Ext.getCmp('images-panel').store.load({params: { text: term, min_upload_date:'01/01/2012' }});
    },

    initComponent: function() {
        this.callParent(arguments);
    }
});
