
"use strict";

(function ($) {

  $.fn.requiredFilled = function( options ) {

    var defaults = {
      label: '.forms__label',
      required: '.forms__label-required',
      requiredFilled: '.forms__label-required_filled',
      input: '.calculator-form__input',
      commonBlock: '.row'
    };


    return this.each(function() {

      var settings = $.extend({}, defaults, options),
        required = settings.required,
        requiredFilled = settings.requiredFilled,
        input = settings.input,
        commonBlock = settings.commonBlock;


      $( input ).on( 'input', function() {

        var $this = $( this );

        var inputData = $this.val();
        inputData = filter( inputData );
        var dataLength = 0;

        if( isNaN( inputData ) !== true ) {
          dataLength = inputData.toString().length;
        }

        var has = $this.closest( commonBlock ).find( required).length;
        var $required = $this.closest( commonBlock ).find( required );

        var requiredClass = requiredFilled.substring(1);


        var execute = function ( element, data, addClass ) {

          if( data > 0 ) {
            $( element ).addClass( addClass );
          } else {
            $( element ).removeClass( addClass );
          }
        };


        if( has === 1 ) {
          execute( $required, dataLength, requiredClass );
        }

        function filter( e ) {
          return parseInt( e );
        }
      });
    });
  };
}(jQuery));
