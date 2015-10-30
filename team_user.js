if (Meteor.isClient) {

	Template.team_user.helpers({
      team_user :function(){
      	return Team_User.find({}, {
                sort: {
                    createdAt: -1
                }
            });
      }
		
});


Template.team.events({

})

}

