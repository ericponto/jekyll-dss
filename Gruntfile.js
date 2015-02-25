module.exports = function(grunt) {

	grunt.initConfig({
		dss: {
			build: {
				files: {
					"_data/styles.json": "_sass/**.*"
				}
			}
		}
	});
	
	grunt.loadTasks("_grunt");
	
	grunt.registerTask("default", ["dss"]);
}