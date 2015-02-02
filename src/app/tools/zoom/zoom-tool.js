/**
 * Created by tzachit on 02/02/15.
 */

(function(app){

  'use strict';

  app.factory('ZoomTool', ['Tool',
    function(Tool){

      class ZoomTool extends Tool {
        start(){ console.log('Examp-Tool start!'); }
        stop(){ console.log('Examp-Tool start!'); }
        cancel(){ console.log('Examp-Tool start!'); }
        onUpdate(){ console.log('Examp-Tool start!'); }
      }

      return ZoomTool;
    }
  ]);

}(angular.module('angularCesium')));
