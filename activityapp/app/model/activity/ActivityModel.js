Ext.define('ActivityApp.model.activity.ActivityModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name: "activityid", type: "int"},
        {name: "name", type: "string"},
        {name: "date", type: "date"},
        {name: "description", type: "string"},
        {name: "longdist", type: "int"},
        {name: "indoor", type: "int"},
        {name: "inhouse", type: "int"},
        {name: "daytime", type: "int"}
    ],

    // USE THESE FUNCTIONS WITH COLUMN RENDERERS FOR GRIDS
    namePrettyHtml: function() {
        return '<span style="color:purple"><b>' + this.get('name') + '</b></span>';
    },

    longdistToYN: function() {
        if(this.data.longdist == 0) {
            return 'no';
        }
        return 'yes';
    },

    indoorToYN: function() {
        if(this.data.longdist == 0) {
            return 'no';
        }
        return 'yes';
    },

    inhouseToYN: function() {
        if(this.data.longdist == 0) {
            return 'no';
        }
        return 'yes';
    },

    daytimeToYN: function() {
        if(this.data.longdist == 0) {
            return 'no';
        }
        return 'yes';
    },

});