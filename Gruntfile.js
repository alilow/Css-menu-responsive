module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            less: {
                files: 'assets/less/*.less',
                tasks: ['less']
            }
        },
        less: {
            development: {
                files: {
                    "assets/css/style.css": ["assets/less/style.less","assets/less/responsive.less"],
                    "assets/css/test.css": "assets/less/knacss.less"
                }
            }
        },cssmin: {
            target: {
                files: {
                    'assets/css/test.css': ['assets/css/test.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
}
