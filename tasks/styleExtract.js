/*
 * grunt-dev
 * https://github.com/anpsthemes/grunt-style-extract/
 *
 * Copyright (c) 2016 Anpsthemes
 * Licensed under the MIT license.
 */

'use strict';

var styleExtract = require('style-extract')

module.exports = function(grunt) {
    grunt.registerMultiTask('styleExtract', 'Extract properties from CSS files.', function() {
        /* Options */
        var options = this.options({
            properties: ['color', 'background-color', 'border-color']
        });

        var code = '';

        /* Iterate over all specified files, get all the content */
        this.files.forEach(function(task) {
            task.src.forEach(function(file) {
                if (!grunt.file.exists(file)) {
                    grunt.log.warn('Source file "' + file + '" not found.');
                    return false;
                }

                code += grunt.file.read(file);    
            });
            
            /* Extract styles */

            code = styleExtract(code, options);

            // Write the destination file.
            grunt.file.write(task.dest, code);

            // Print a success message.
            grunt.log.writeln('File "' + task.dest + '" created.');
        });
    });
};
