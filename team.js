if (Meteor.isClient) {
    Template.team.helpers({
        //Team list
        team: function() {
            return Team.find({}, {
                sort: {
                    createdAt: -1
                }
            });
        },
        projects: function() {
            return Projects.find({}, {
                sort: {
                    createdAt: -1
                }
            })
        },
          users: function() {
            return User.find({}, {
                sort: {
                    createdAt: -1
                }
            })
        },
        user_name: function() {
            userteam = User.findOne({
            _id: this.Users
            })
            return userteam.name
        }
    });
    Template.team.events({
        "submit .addusertoteam": function(event) {
            event.preventDefault();
            var userid = event.target.text.value;
            var projectid = event.target.text1.value;
            Team.insert({
                
                projects_id: projectid,
                Users:userid,
                createdAt: new Date()
            });
            event.target.text.value = "";

        },

          'click .delete': function() {
        
            Team.remove(this._id);
        }
    });
}