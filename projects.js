if (Meteor.isClient) {
    Template.projects.helpers({
        //projects list /view
        projects: function() {
            return Projects.find({
                "isActive": true
            }, {
                sort: {
                    createdAt: -1
                }

            });
        },

        companies: function() {
            return Companies.find({}, {
                sort: {
                    createdAt: -1
                }
            });
        },

        company_name: function() {
            c = Companies.findOne({
                _id: this.companies_id
            })
            return c.text
        }
    });
    Template.archive.helpers({
        archivedprojects: function() {
            return Projects.find({
                "isActive": false
            }, {
                sort: {
                    createdAt: -1
                }
            });
        },
        company_name: function() {
            c = Companies.findOne({
                _id: this.companies_id
            })
            return c.text
        }

    });
    Template.projects.events({
        "submit .projectname": function(event) {
            event.preventDefault();
            var text = event.target.text.value;
            var id = event.target.text1.value;
            // var bool = event.target.text.value;  
            Projects.insert({
                text: text,
                companies_id: id,
                isActive: true,
                createdAt: new Date()
            });
            event.target.text.value = "";
        },
        //delete project
        'click .delete': function() {
            Projects.remove(this._id);
        },



        "submit .edit": function(event) {
            var text = event.target.text.value;
            var companyid = event.target.text1.value;
            Projects.update(this._id, {
                $set: {
                    text: text,
                    companies_id: companyid
                }
            });
        },
        'click .activated': function() {
            return Projects.find({
                "isActive": true
            })
        },
        'click .archived': function() {
            return Projects.find({
                "isActive": false
            });
        },

        "click .archive": function(event) {
            Projects.update(this._id, {
                $set: {
                    isActive: false
                }
            });
        }

    });
}