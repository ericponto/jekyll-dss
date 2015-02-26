module.exports = function(grunt) {

	grunt.initConfig({
		dss2json: {
			build: {
				files: {
					"_data/styles.json": "_sass/**.*"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-dss2json");
	
	grunt.registerTask("default", ["dss2json"]);
}