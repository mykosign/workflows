module.exports = function(grunt){
	grunt.initConfig({

	concat : {
		options: {
			separator: '\n\n//------------------------------------',
			banner: '\n\n//------------------------------------'
		},
		dist: {
			src: ['components/scripts/*.js'],
			dest: 'builds/development/js/script.js'
		}
	}, // concat

	sass: {
		dist: {
			options: {
				style: 'expanded' //compressed if finished
			},
			files: [{
				src:'components/sass/style.scss',
				dest: 'builds/development/css/style.css'
			}]
		}
	}, // sass

	connect: {
		server: {
			options: {
				hostname: 'localhost',
				port: '3000',
				base: 'builds/development/',
				livereload: true
			}
		}
	},

	watch : {
		options: {
			spawn: false,
			livereload: true
		},
		scripts: {
			files: ['builds/development/**/*.html',
			'components/scripts/**/*.js',
			'components/sass/**/*.scss'],
			tasks: ['concat', 'sass']
		}
	}


 }); //initConfig

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['concat', 'sass', 'connect', 'watch']);

<<<<<<< HEAD
}; // wrapper function
=======
}; // wrapper function
>>>>>>> 339f07e4a215943ba09b4e0e754772312aa22bc1
