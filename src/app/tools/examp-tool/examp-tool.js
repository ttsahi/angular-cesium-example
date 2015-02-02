/**
 * Created by tzachit on 01/02/15.
 */

'use strict';

(function(app){

  'use strict';

  app.factory('ExampTool', ['Tool',
    function(Tool){

      class ExampTool extends Tool {
        start(){ console.log('Examp-Tool start!'); }
        stop(){ console.log('Examp-Tool start!'); }
        cancel(){ console.log('Examp-Tool start!'); }
        onUpdate(){ console.log('Examp-Tool start!'); }
      }

      return ExampTool;
    }
  ]);

}(angular.module('angularCesium')));
