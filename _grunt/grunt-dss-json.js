module.exports = function(grunt) {
	var dss = require("dss");
	grunt.registerMultiTask("dss", "convert dss comment blocks to JSON", function() {
		var options = this.options;
		
		for(key in options.parsers){
			dss.parser(key, options.parsers[key]);
		}
		
		this.files.forEach(function(file) {
			var contents = file.src.filter(function(filepath) {
				// Remove nonexistent files (it's up to you to filter or warn here).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				// Read and return the file's source.
				return grunt.file.read(filepath);
			}).join('\n');
			
			dss.parse(contents, {}, function(parsed) {
				grunt.file.write(file.dest, JSON.stringify(parsed, null, "\t"));
				grunt.log.writeln('File "' + file.dest + '" created.');
			});
		});
	});
}