;(function($) {

	// Variables
	var defaults = {
		_button: 'hansel-crumb', // e.g. the button to activate the dropdown
		_button_class: '',
		_button_content: 'Navigate to...', // text to display in the button
		_wrapper: 'hansel-pocket', // e.g. the wrapper element surrounding the breadcrumbs
		_wrapper_class: '',
		_dropdown: 'hansel-breadcrumbs', // e.g. the dropdown
		_dropdown_class: '',
		_theme: ''
	};

	// Init

	$.extend($.fn, {

		hansel: function(options){

			// Options
			var options = $.extend(defaults, options);

			return this.each(function(){
				var breadcrumbs = $(this),
					wrapper = document.createElement( "div" ),
					button = document.createElement( "a" ),
					dropdown;

				build_elements(breadcrumbs, wrapper, button);
				wrap_breadcrumbs(breadcrumbs);

				dropdown = breadcrumbs.siblings('a');

				// Create needed elements
				function build_elements(breadcrumbs, wrapper, button) {
					breadcrumbs.addClass(options._dropdown).addClass(options._theme);
					$(wrapper).addClass(options._wrapper).addClass(options._wrapper_class);
					$(button).addClass(options._button).addClass(options._button_class).addClass(options._theme).text(options._button_content);
				}

				// Create layout
				function wrap_breadcrumbs(breadcrumbs){
					breadcrumbs.wrap(wrapper);
					breadcrumbs.before(button);
				}

				// Drop the dropdown
				dropdown.click(function(e){
					e.preventDefault();
					e.stopPropagation();
					$this = $(this);

					$this.toggleClass('active');
				});

				// Close on click outside of the dropdown
				$('body').click(function(e){
					e.preventDefault();

					dropdown.removeClass('active');
				});
			});
		}
	});

})(window.jQuery || window.Zepto || window.$);