'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'dist/userstyle.css': 'src/userstyle.scss'
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['sass']);

};
