module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 

    grunt.initConfig({
        php: {
            dist: {
                options: {
                    hostname: '127.0.0.1',
                    port: 9000,
                    base: 'public', // Project root 
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('default', ['php']);
};
