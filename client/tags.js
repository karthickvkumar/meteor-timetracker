
Template.tag.helpers({
	tags: function() {
		return Tags.find({},{sort: {createdAt:-1}});

	}
});
Template.tag.events({
	"submit .tagname": function(event){
	            event.preventDefault();
	            var text=event.target.text.value;
	            Tags.insert({
	            text: text,
	            createdAt: new Date()
	            });
	            event.target.text.value = "";
	},
	'click .delete': function() {
        Tags.remove(this._id);
    },
    
        'click .select': function() {
            return Tags.find(this._id);
        },
        "submit .edit": function(event) {
            var text = event.target.text.value;
            Tags.update(this._id, {
                $set: {
                    text: text
                }
            });
        }
})