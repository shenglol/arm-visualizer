SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.8.0',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.11.5',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
      'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
      'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
      'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
      'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
      'events': 'github:jspm/nodelibs-events@0.2.0-alpha'
    },
    'packages': {
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.11.4'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.8.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.8.0'
        }
      },
      'npm:babel-generator@6.11.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'source-map': 'npm:source-map@0.5.6',
          'lodash': 'npm:lodash@4.14.1',
          'detect-indent': 'npm:detect-indent@3.0.1',
          'babel-types': 'npm:babel-types@6.11.1',
          'babel-messages': 'npm:babel-messages@6.8.0'
        }
      },
      'npm:babel-template@6.9.0': {
        'map': {
          'babel-types': 'npm:babel-types@6.11.1',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'lodash': 'npm:lodash@4.14.1',
          'babylon': 'npm:babylon@6.8.4',
          'babel-traverse': 'npm:babel-traverse@6.12.0'
        }
      },
      'npm:babel-plugin-syntax-decorators@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-syntax-class-properties@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-syntax-flow@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-types@6.11.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-traverse': 'npm:babel-traverse@6.12.0',
          'lodash': 'npm:lodash@4.14.1',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2',
          'esutils': 'npm:esutils@2.0.2'
        }
      },
      'npm:detect-indent@3.0.1': {
        'map': {
          'minimist': 'npm:minimist@1.2.0',
          'repeating': 'npm:repeating@1.1.3',
          'get-stdin': 'npm:get-stdin@4.0.1'
        }
      },
      'npm:babylon@6.8.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:repeating@1.1.3': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.1'
        }
      },
      'npm:babel-code-frame@6.11.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@2.0.0'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      },
      'npm:is-finite@1.0.1': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.0'
        }
      },
      'npm:invariant@2.2.1': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.2.0'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'ansi-styles': 'npm:ansi-styles@2.2.1',
          'supports-color': 'npm:supports-color@2.0.0'
        }
      },
      'npm:loose-envify@1.2.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@1.0.3'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'github:jspm/nodelibs-stream@0.2.0-alpha': {
        'map': {
          'stream-browserify': 'npm:stream-browserify@2.0.1'
        }
      },
      'npm:stream-browserify@2.0.1': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'readable-stream': 'npm:readable-stream@2.1.4'
        }
      },
      'npm:readable-stream@2.1.4': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'isarray': 'npm:isarray@1.0.0',
          'buffer-shims': 'npm:buffer-shims@1.0.0',
          'process-nextick-args': 'npm:process-nextick-args@1.0.7',
          'util-deprecate': 'npm:util-deprecate@1.0.2',
          'core-util-is': 'npm:core-util-is@1.0.2',
          'string_decoder': 'npm:string_decoder@0.10.31'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.11.5': {
        'map': {
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.8.0'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-traverse': 'npm:babel-traverse@6.12.0',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      },
      'npm:babel-runtime@6.11.6': {
        'map': {
          'core-js': 'npm:core-js@2.4.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
        }
      },
      'npm:babel-traverse@6.12.0': {
        'map': {
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'globals': 'npm:globals@8.18.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-types': 'npm:babel-types@6.11.1',
          'babylon': 'npm:babylon@6.8.4',
          'invariant': 'npm:invariant@2.2.1',
          'debug': 'npm:debug@2.2.0',
          'lodash': 'npm:lodash@4.14.1'
        }
      },
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.11.1'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    },
    '.tmp': {
      'defaultExtension': 'ts'
    },
    'typings': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.0.0-rc.4',
    '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.4',
    '@angular/core': 'npm:@angular/core@2.0.0-rc.4',
    '@angular/http': 'npm:@angular/http@2.0.0-rc.4',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.4',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.4',
    '@angular/router': 'npm:@angular/router@3.0.0-beta.2',
    '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap@1.0.0-alpha.1',
    'arm-visualizer-engine': 'npm:arm-visualizer-engine@0.0.9',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'es6-promise': 'npm:es6-promise@3.2.1',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'file-saver': 'npm:file-saver@1.3.2',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'ts': 'github:frankwallis/plugin-typescript@4.0.16',
    'zone.js': 'npm:zone.js@0.6.12'
  },
  packages: {
    'github:frankwallis/plugin-typescript@4.0.16': {
      'map': {
        'typescript': 'npm:typescript@1.8.10'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.7.1'
      }
    },
    'npm:buffer@4.7.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.1.2',
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.6'
      }
    }
  }
});
