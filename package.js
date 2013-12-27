Package.describe({
	summary : 'A lightwheight file upload'
});

Package.on_use(function(api) {
	api.use(['ejson', 'underscore'], ['client', 'server']);
	api.export('MeteorFile');
	api.add_files(['meteor-file.js'], ['client', 'server']);
});
