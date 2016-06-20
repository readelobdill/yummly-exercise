module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        concat: {
            css: {
                src: ['src/modules/**/scss/*.scss'],
                dest: 'build/style.css'
            }
        },
        browserify: {
            jsx: {
                options: {
                    transform: [
                        ["babelify", {presets: ['es2015', 'react']}]
                    ]
                },
                files: {
                    'build/scripts.js': ['src/modules/**/*.js', 'src/modules/**/components/*.js']
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'build/style.css': 'build/style.css'
                }
            }
        },
        watch: {
            jsx: {
                files: [
                    'src/modules/**/*.js',
                    'src/modules/**/components/*.js'
                ],
                tasks: ['browserify:jsx']
            },
            css: {
                files: ['src/modules/**/scss/*.scss'],
                tasks: ['newer:concat:css', 'sass:dev'],
            }
        },
        connect: {
            src: {
                options: {
                    port: 8000,
                    keepalive: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', [
            'concat',
            'browserify',
            'sass'
        ]
    );
};
