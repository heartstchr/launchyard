function config(name){
	return require('./tasks/'+ name + ".js")
}
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//config
		concat: config('concat'),
		concat: {
	        css: {
	           src: [
	                 'css/*'
	                ],
	            dest: 'grunt/combined.css'
	        },
	        js : {
	            src : [
	                'js/*'
	            ],
	            dest : 'grunt/combined.js'
	        }
	    },
	    cssmin : {
            css:{
                src: 'grunt/combined.css',
                dest: 'grunt/combined.min.css'
            }
        },
        uglify : {
	        js: {
	            files: {
	                'grunt/combined.js' : [ 'grunt/combined.js' ]
	            }
	        }
	    }
	});
	//load Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

	//tasks
	grunt.registerTask('default',['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};