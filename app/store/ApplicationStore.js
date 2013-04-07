/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/2/13
 * Time: 8:12 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.store.ApplicationStore', {
    extend: 'Ext.data.Store',
    model: 'FlickrSearch.model.ApplicationModel',
    data: [
        {'screen':0}
    ]
});
