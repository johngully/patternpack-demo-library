module.exports = function (grunt) {
  grunt.initConfig({
    patternpack: {
      options: {
        patternStructure: [
          { "name": "Atoms", "path": "atoms" },
          { "name": "Molecules", "path": "molecules" },
          { "name": "Organisms", "path": "organisms" },
          { "name": "Templates", "path": "templates" },
          { "name": "Pages", "path": "pages" }
        ]
      },
      run: {},
      build: {},
      release: {}
    }
  });

  grunt.loadNpmTasks('patternpack');

  grunt.registerTask('default', ['patternpack:run']);
}
