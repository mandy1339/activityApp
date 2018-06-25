Ext.define('ActivityApp.model.user.UserModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name: "webuserkey", type: "int"},
        {name: "username", type: "string"},
        {name: "userpassword", type: "string"}
    ],


    // USE THESE FUNCTIONS WITH COLUMN RENDERERS FOR GRIDS
    idWithUsername : function() {
        return '<b>' + this.get('webuserkey') + '</b>: ' + this.data.username;
    }
});