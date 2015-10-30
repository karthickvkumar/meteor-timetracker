if (Meteor.isClient) {
    Template.company.helpers({
        //companies list
        companies: function() {
            return Companies.find({}, {
                sort: {
                    createdAt: -1
                }
            });

        }
    });
    Template.company.events({
        //create companies
        "submit .companyname": function(event) {
            event.preventDefault();
            var text = event.target.text.value;
            Companies.insert({
                text: text,
                createdAt: new Date()
            });
            event.target.text.value = "";
        },
        'click .delete': function() {
            Companies.remove(this._id);
        },
        'click .select': function() {
            return Companies.find({_id: this._id},{text: 1});
        },
        "submit .edit": function(event) {
            var text = event.target.text.value;
            Companies.update(this._id, {
                $set: {
                    text: text
                }
            });
        }
    });
}