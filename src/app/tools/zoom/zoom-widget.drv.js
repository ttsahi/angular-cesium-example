/**
 * Created by tzachit on 02/02/15.
 */

(function(app){

  'use strict';

  app.directive('zoomWidget', ['$document',
    function($document){
      return {
        replace: true,
        template: '<div class="zoom-widget">' +
        '<div class="zoom-in-btn">' +
        '<button type="button" class="btn btn-default">' +
        '<span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>' +
        '</button>' +
        '</div>' +
        '<div class="slider">' +
        '<span class="bar">' +
        '</span>' +
        '<span class="pointer">' +
        '</span>' +
        '</div>' +
        '<div class="zoom-out-btn">' +
        '<button type="button" class="btn btn-default">' +
        '<span class="glyphicon glyphicon-zoom-out" aria-hidden="true"></span>' +
        '</button>' +
        '</div>' +
        '</div>',
        link: function(scope, element, attrs){

          let minLevel = isFinite(attrs.min) ? Number.parseInt(attrs.min) : 0;
          let maxLevel = isFinite(attrs.max) ? Number.parseInt(attrs.max) : 100;

          if(minLevel < 0 || maxLevel < 0 || minLevel >= maxLevel){
            throw new Error("min or max attrs value are invalid.");
          }

          maxLevel = maxLevel - minLevel;
          minLevel = 0;

          let levelValue = 90 / maxLevel;
          let currentLevel = maxLevel / 2;

          let pointer  = angular.element(element.find('span')[2]);
          pointer.css('top', currentLevel * levelValue + '%');

          let clientY = null;

          pointer.on('mousedown', event => {
            event.preventDefault();
            clientY = event.clientY;
          });

          $document.on('mouseup', event => {
            clientY = null;
          });

          $document.on('mousemove', event => {
            if(clientY !== null){
              let deltaY = clientY - event.clientY;
              clientY = event.clientY;

              if(deltaY > 0 && currentLevel - 1 >= minLevel){
                currentLevel--;
                pointer.css('top', currentLevel * levelValue + '%');
              }else if(currentLevel + 1 <= maxLevel){
                currentLevel++;
                pointer.css('top', currentLevel * levelValue + '%');
              }
            }
          });
        }
      };
    }
  ]);

}(angular.module('angularCesium')));
