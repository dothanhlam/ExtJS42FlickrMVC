/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 3/31/13
 * Time: 11:03 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.controller.ScreensController', {
    extend: 'Ext.app.Controller',
    views:['AuthenticationView', 'PhotoSearchView', 'PhotoView'],
    refs: [
        { ref: 'authentication',  selector: 'authentication'},
        { ref: 'photosearch',     selector: 'photosearch'}
    ],

    init: function() {
        this.control({
            'authentication button[action=signin]': {
                click: this.signinHandler
            },
            'photosearch button[action=signout]': {
                click: this.signoutHandler
            },
            'photosearch textfield[name=field1]': {
                specialkey: this.searchByTextFieldHandler
            },
            'photosearch button[action=search]': {
                click: this.searchHandler
            },
            'photosearch dataview[id=images-panel]': {
                itemclick: this.itemClickHandler
            }
        });
    },

    formatSearchTerm: function(term) {
        var text = term.trim();
        if (text.length > 0) {
            text = text.replace(/ /g, ',');
        }
        return text;
    },

    itemClickHandler: function(dv,  record, item, index, e, eOpts ) {
        //open image here
        var view = Ext.widget('photo', {title: record.get('title')});
        view.down('image').setSrc('http://farm'+record.get('farm')+'.static.flickr.com/'+record.get('server')+'/'+record.get('id')+'_'+ record.get('secret')+'_c.jpg');
    },

    signinHandler: function() {
        this.application.fireEvent("signin");
    },

    signoutHandler: function() {
        this.application.fireEvent("signout");
    },

    searchHandler: function(button) {
        var f = Ext.ComponentQuery.query('photosearch textfield[name=field1]')[0];
        var view = this.getPhotosearch();
        view.doSearch(this.formatSearchTerm(f.getValue()));
    },

    searchByTextFieldHandler: function(f, e) {
        if (e.getCharCode() == Ext.EventObject.ENTER) {
            var view = this.getPhotosearch();
            view.doSearch(this.formatSearchTerm(f.getValue()));
        }
    }
});