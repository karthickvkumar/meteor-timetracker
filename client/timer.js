

Template.timer.helpers({
	timer: function() {
		return Timer.find({},{sort: {createdAt:-1}});

	},
	tags: function() {
		return Tags.find({},{sort: {createdAt:-1}});

	},
	 projects: function() {         
            return Projects.find({},{sort: {createdAt:-1}});
          },

           project_name: function(){
            c = Projects.findOne({_id: this.projectid})
            return c.text
        }

});
Template.timer.events({
	"submit .timer": function(event) {
		event.preventDefault()
		var desc = event.target.description.value;
		var tagname = event.target.tag.value;
	    var dur = event.target.duration.value;
	    var dat = event.target.date.value;
	    var id =event.target.projects.value;
	    Timer.insert({
	    	description: desc,
	    	tag: tagname,
	    	duration: dur,
	    	date: dat,
	    	projectid: id,
	    	createdAt: new Date()
	    });
	    event.target.text.value= "";
	},
	'click .delete': function() {
            Timer.remove(this._id);
        }
});
Template.timer.onRendered(function() {
    this.$('.datepicker').datepicker(); 
});