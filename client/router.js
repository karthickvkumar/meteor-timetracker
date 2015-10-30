Router.configure({
	layoutTemplate:'layout'
});
Router.map(function(){
	this.route('timer',{path:'/'});
	this.route('master',{path:'/master'});
	this.route('projects',{path:'/projects'});
	this.route('tag',{path:'/tag'});
	this.route('company',{path:'/company'});
	this.route('users',{path:'/users'});
	this.route('reports',{path:'/reports'});
	this.route('summary',{path:'/summary'});
	this.route('detailed',{path:'/detailed'});
	this.route('metrics',{path:'/metrics'});
	this.route('team', {path:'/projects/:_id/team'});
	this.route('inactive',{path:'/users/inactive'});
	this.route('archive',{path:'/projects/archive'});

	
})