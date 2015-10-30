
Template.users.helpers({
    user: function() {
        return User.find({
            isactive:true}, {
            sort: {
                createdAt: -1
            }
        });
    }
});

Template.inactive.helpers({
    inactiveuser: function() {
        return User.find({
            isactive:false}, {
            sort: {
                createdAt: -1
            }
        });
    }
});
Template.inactive.events({
    "submit .username": function(event) {
        event.preventDefault();
        var name = event.target.name.value;
        var text = event.target.text.value;
        User.insert({
            name: name,
            text: text,
            isactive: false,
            createdAt: new Date()
        });
        event.target.name.value = "";
        event.target.text.value = "";
    },
    'click .delete': function() {
        User.remove(this._id);
    },
    'click .selects': function() {
        return User.find(this._id);
    },
    "submit .edits": function(event) {
        var name = event.target.name.value;
        var text = event.target.text.value;
        User.update(this._id, {
            $set: {
                name: name,
                text: text
            }
        });
    },
    'click .activate': function() {
        return User.update(this._id, {
            $set: {
                isactive: true
            }
        })
    }
    
})

Template.users.events({
    "submit .username": function(event) {
        event.preventDefault();
        var name = event.target.name.value;
        var text = event.target.text.value;
        User.insert({
            name: name,
            text: text,
            isactive: true,
            createdAt: new Date()
        });
        event.target.name.value = "";
        event.target.text.value = "";
    },
    'click .delete': function() {
        User.remove(this._id);
    },
    'click .selects': function() {
        return User.find(this._id);
    },
    "submit .edits": function(event) {
        var name = event.target.name.value;
        var text = event.target.text.value;
        User.update(this._id, {
            $set: {
                name: name,
                text: text
            }
        });
    },
    'click .deactivate': function() {
        return User.update(this._id, {
            $set: {
                isactive: false
            }
        })
    },
    'click .active': function() {
        return User.find({
            isactive: true
        });
    },
    'click .inactive': function() {
        return User.find({
            isactive: false
        });
    }
    
})