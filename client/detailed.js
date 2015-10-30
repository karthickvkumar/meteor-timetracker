Template.detailed.helpers({
	detailed: function() {
		return Detailed.find({},{sort: {createdAt:-1}});

	},
	tags: function() {
		return Tags.find({},{sort: {createdAt:-1}});

	},
	 tag_name: function() {
            t = Tags.findOne({
                _id: this.tags_id
            })
            return t.text
        },
	 projects: function() {         
            return Projects.find({},{sort: {createdAt:-1}});
          },
          project_name: function() {
            p = Projects.findOne({
                _id: this.projects_id
            })
            return p.text
        },

        user: function() {
        return User.find({
            isactive:true}, {
            sort: {
                createdAt: -1
            }
        });
    },
     user_name: function() {
            u = User.findOne({
                _id: this.user_id
            })
            return u.name
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
        },

        timer: function() {
		return Timer.find({},{sort: {createdAt:-1}});

	},
});
Template.detailed.events({
	"submit .detail_value": function(event) {
		event.preventDefault()
		//var desc = event.target.description.value;
		//var tagname = event.target.tag.value;
	    //var dur = event.target.duration.value;
	    //var dat = event.target.date.value;
	    //var id =event.target.projects.value;
	    var cid = event.target.text1.value;
	    var uid = event.target.name.value;
	    var tid = event.target.text.value;
	    var pid = event.target.name1.value;
	    Detailed.insert({
	    	//description: desc,
	    	// tag: tagname,
	    	// duration: dur,
	    	// date: dat,
	    	// projectid: id,
	    	companies_id: cid,
	    	user_id: uid,
	    	tags_id: tid,
	    	projects_id: pid,
	    	createdAt: new Date()
	    });
	    event.target.text.value= "";
	    event.target.text1.value= "";
	    event.target.name.value= "";
	    event.target.name1.value= "";
	},
	'click .delete': function() {
            Detailed.remove(this._id);
        }
});