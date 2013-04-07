/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 4/3/13
 * Time: 8:07 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.model.PhotoModel',{extend: 'Ext.data.Model',
fields:[
    { name:'id'},
    { name:'owner'},
    { name:'secret'},
    { name:'server'},
    { name: 'farm', type: 'int' },
    { name:'title'},
    { name: 'ispublic', type: 'boolean' },
    { name: 'isfriend', type: 'boolean' },
    { name: 'isfamily', type: 'boolean' }
]});
