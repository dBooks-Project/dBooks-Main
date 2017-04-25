module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded'
                },
                files: {
                    './public/stylesheets/style.css':'./dev/styles.scss'
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    './public/stylesheets/style.min.css':'./public/stylesheets/style.css'
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './public/javascripts/main.min.js':'./public/javascripts/main.js'
                }
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: {
                    './public/javascripts/main.js':'./dev/main.js'
                }
            }
        },

        watch: {
            sass: {
                files: ['./dev/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: 35729,
                },
            },
            styles: {
                files: ['./public/stylesheets/style.css'],
                tasks: ['cssmin']
            },
            uglify: {
                files: ['./public/javascripts/main.js'],
                tasks: ['uglify'],
                options: {
                    livereload: 35729,
                },
            },
            babel: {
                files: ['./dev/main.js'],
                tasks: ['babel']
            },
            configFiles: {
                files: "gruntfile.js",
                    options: {
                        reload: true
                    }
                }
            }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['sass', 'cssmin','uglify']);
};