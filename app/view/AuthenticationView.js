/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 3/31/13
 * Time: 11:08 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('FlickrSearch.view.AuthenticationView', {
    extend: 'Ext.container.Container',
    alias: 'widget.authentication',
    layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
    },
    items: [ {xtype:'panel',
        bodyPadding: 5,
        width: 275,
        height: 120,
        title:'Authentication',
        items:[ {   xtype: 'form',
                    border: false,
                    defaultType: 'textfield',
                    items: [{   fieldLabel: 'Username',
                                name: 'username',
                                allowBlank: false  // requires a non-empty value
                            },
                            {   fieldLabel: 'Password',
                                name: 'password',
                                allowBlank: false,
                                inputType: 'password'
                    }],
                    buttons: [{ text: 'Register',
                                action: 'register'
                              },
                              { text: 'Sign in',
                                action: 'signin'
                    }]
                }] }],

    listeners: {
        activate: function() {

        }
    },

    init: function() {

    },

    initComponent: function() {
        this.callParent(arguments);
    }
});