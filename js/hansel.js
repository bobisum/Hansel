jQuery(document).ready(function($) {

	// Variables
	var defaults = {
		_button: 'hansel-back', // e.g. the button to activate the dropdown
		_button_class: '',
		_button_content: 'Go to...', // text to display in the button
		_wrapper: 'hansel-pocket', // e.g. the wrapper element surrounding the breadcrumbs
		_wrapper_class: '',
		_dropdown: 'hansel-breadcrumbs' // e.g. the dropdown
	};

	// Init
	$.fn.extend({

		hansel: function(options){

			// Options
			var options = $.extend(defaults, options);

			return this.each(function(){
				var breadcrumbs = $(this);
				breadcrumbs.addClass(options._dropdown);
				wrap_breadcrumbs(breadcrumbs);

				var dropdown = breadcrumbs.siblings('a');

				// Create needed elements
				function wrap_breadcrumbs(breadcrumbs){
					breadcrumbs.wrap('<div class="' + options._wrapper + " " + options._wrapper_class + '">').before('<a href="" class="' + options._button + " " + options._button_class + '">' + options._button_content + '</a>');
				}

				// Drop the dropdown
				dropdown.click(function(e){
					e.preventDefault();
					$this = $(this);

					$this.toggleClass('active');
				});
			});
		}
	})
});