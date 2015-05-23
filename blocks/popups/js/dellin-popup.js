"use strict";

(function ($) {

	$.fn.modalWindow = function(options) {

		var defaults = {
			modalWindow: '.block-modal-window',
			showClass: 'block-modal-window_opened',
			open: '.modal-window__open',
			close: '.modal-window__close'
		};


		return this.each(function () {

			var settings = $.extend({}, defaults, options),
				$modalWindow = $(settings.modalWindow, this),
				showClass = settings.showClass,
				$open = $(settings.open, this),
				$close = $(settings.close, this);


			$open.on('click', function(e) {
				$modalWindow.addClass( showClass );
				$('.overlay').show();

				e.preventDefault();
			});

			$close.on('click', function(e) {
				$modalWindow.removeClass( showClass );
				$('.overlay').hide();

				e.preventDefault();
			});
		});
	};
}(jQuery));
