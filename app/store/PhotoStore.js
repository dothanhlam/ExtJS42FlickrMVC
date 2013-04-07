/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/2/13
 * Time: 10:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.store.PhotoStore', {
    extend: 'Ext.data.Store',
    model: 'FlickrSearch.model.PhotoModel',
    proxy: {
        type: "jsonp",
        url: "http://api.flickr.com/services/rest/",
        callbackKey: 'jsoncallback',

        actionMethods: {
            read: 'POST'
        },
        extraParams: {
            api_key: '23027b56d06aa1a9e8bc1342858eb775',
            method: 'flickr.photos.search',
            format:'json',
            nojsoncallback:'1'
        },

        reader: {
            type: 'json',
            root: 'photos.photo',
            totalProperty: 'photos.total',
            id: 'id'
        }
    },

    listeners: {
        load: function(store, records, success) {
            console.log("FlickrSearch.store.PhotoStore completed !")
        }
    }
});

