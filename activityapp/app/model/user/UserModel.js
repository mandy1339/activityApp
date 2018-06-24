Ext.define('ActivityApp.model.user.UserModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name: "webuserkey", type: "int"},
        {name: "username", type: "string"},
        {name: "userpassword", type: "string"}
    ],

    idWithUsername : function() {
        return '<b>' + this.get('webuserkey') + '</b>: ' + this.data.username;
    }
});