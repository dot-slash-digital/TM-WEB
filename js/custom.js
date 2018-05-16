jQuery(document).ready(function() {
	if (jQuery(".rev_slider").length > 0) {initRevSlider()};
	if (jQuery(".esg-grid").length > 0) {initEssGrid()};
	itemsmenu();
});

function initRevSlider() {
	"use strict";
	var ajaxRevslider = function(obj) {
		
		var content = "";
		data = {};
		data.action = 'revslider_ajax_call_front';
		data.client_action = 'get_slider_html';
		data.token = '7b76f96d4c';
		data.type = obj.type;
		data.id = obj.id;
		data.aspectratio = obj.aspectratio;

		// SYNC AJAX REQUEST
		jQuery.ajax({
			type: "post",
			url: "",
			dataType: 'json',
			data: data,
			async: false,
			success: function(ret, textStatus, XMLHttpRequest) {
				if (ret.success == true)
					content = ret.data;
			},
			error: function(e) {
				console.log(e);
			}
		});

		// FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
		return content;
	};

	// CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
	var ajaxRemoveRevslider = function(obj) {
		return jQuery(obj.selector + " .rev_slider").revkill();
	};

	// EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
	var extendessential = setInterval(function() {
		if (jQuery.fn.tpessential != undefined) {
			clearInterval(extendessential);
			if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
				jQuery.fn.tpessential.defaults.ajaxTypes.push({
					type: "revslider",
					func: ajaxRevslider,
					killfunc: ajaxRemoveRevslider,
					openAnimationSpeed: 0.3
				});
			}
		}
	}, 30);
	
	var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
	var htmlDivCss = ".tp-caption.black,.black{color:#000;text-shadow:none}";
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement("div");
		htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
		document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
	}
	
	
	
	var setREVStartSize = function() {
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_1_1');
			e.responsiveLevels = [1240, 1240, 778, 480];
			e.gridwidth = [1170, 1024, 936, 624];
			e.gridheight = [750, 768, 600, 500];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
					f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
				}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function(e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi1;
	tpj(document).ready(function() {
		if (tpj("#rev_slider_1_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		} else {
			revapi1 = tpj("#rev_slider_1_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "js/revslider/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					mouseScrollReverse: "default",
					onHoverStop: "off",
					bullets: {
						enable: true,
						hide_onmobile: false,
						style: "hermes",
						hide_onleave: true,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 20,
						space: 10,
						tmp: ''
					}
				},
				responsiveLevels: [1240, 1240, 778, 480],
				visibilityLevels: [1240, 1240, 778, 480],
				gridwidth: [1170, 1024, 936, 624],
				gridheight: [750, 768, 600, 500],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	}); 
	var htmlDivCss = unescape(".hermes.tp-bullets%20%7B%0A%7D%0A%0A.hermes%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A16px%3B%0A%20%20%20%20height%3A16px%3B%0A%20%20%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%0A%20%20%20%20box-shadow%3A%20inset%200%200%200%202px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20%20%20-webkit-transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%7D%0A%0A.hermes%20.tp-bullet%3Ahover%20%7B%0A%09%20%20background-color%3A%20rgba%280%2C0%2C0%2C0.21%29%3B%0A%7D%0A.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%20%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20height%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20box-shadow%3A%200%200%201px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20-webkit-transition%3A%20height%200.3s%20ease%3B%0A%20%20transition%3A%20height%200.3s%20ease%3B%0A%7D%0A.hermes%20.tp-bullet.selected%3Aafter%20%7B%0A%20%20height%3A100%25%3B%0A%7D%0A%0A");
	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement('div');
		htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
		document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}
	
	
	
	var setREVStartSize = function() {
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_3_1');
			e.responsiveLevels = [1240, 1240, 778, 480];
			e.gridwidth = [1170, 1366, 800, 600];
			e.gridheight = [950, 768, 800, 900];

			e.sliderLayout = "fullscreen";
			e.fullScreenAutoWidth = 'off';
			e.fullScreenAlignForce = 'off';
			e.fullScreenOffsetContainer = '';
			e.fullScreenOffset = '';
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
					f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
				}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function(e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi3;
	tpj(document).ready(function() {
		if (tpj("#rev_slider_3_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_3_1");
		} else {
			revapi3 = tpj("#rev_slider_3_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "js/revslider/",
				sliderLayout: "fullscreen",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					mouseScrollReverse: "default",
					onHoverStop: "off",
					bullets: {
						enable: true,
						hide_onmobile: false,
						style: "hermes",
						hide_onleave: true,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 20,
						space: 10,
						tmp: ''
					}
				},
				responsiveLevels: [1240, 1240, 778, 480],
				visibilityLevels: [1240, 1240, 778, 480],
				gridwidth: [1170, 1366, 800, 600],
				gridheight: [950, 768, 800, 900],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});
	
	var htmlDivCss = unescape(".hermes.tp-bullets%20%7B%0A%7D%0A%0A.hermes%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A16px%3B%0A%20%20%20%20height%3A16px%3B%0A%20%20%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%0A%20%20%20%20box-shadow%3A%20inset%200%200%200%202px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20%20%20-webkit-transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%7D%0A%0A.hermes%20.tp-bullet%3Ahover%20%7B%0A%09%20%20background-color%3A%20rgba%280%2C0%2C0%2C0.21%29%3B%0A%7D%0A.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%20%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20height%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20box-shadow%3A%200%200%201px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20-webkit-transition%3A%20height%200.3s%20ease%3B%0A%20%20transition%3A%20height%200.3s%20ease%3B%0A%7D%0A.hermes%20.tp-bullet.selected%3Aafter%20%7B%0A%20%20height%3A100%25%3B%0A%7D%0A%0A");
	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement('div');
		htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
		document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}
	
	
	var setREVStartSize = function() {
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_4_1');
			e.responsiveLevels = [1240, 1240, 778, 480];
			e.gridwidth = [1170, 1024, 778, 600];
			e.gridheight = [700, 768, 450, 650];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
					f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
				}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function(e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi4;
	tpj(document).ready(function() {
		if (tpj("#rev_slider_4_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_4_1");
		} else {
			revapi4 = tpj("#rev_slider_4_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "js/revslider/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					onHoverStop: "off",
				},
				responsiveLevels: [1240, 1240, 778, 480],
				visibilityLevels: [1240, 1240, 778, 480],
				gridwidth: [1170, 1024, 778, 600],
				gridheight: [700, 768, 450, 650],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});
	
};

function itemsmenu(){
	if (JACQUELINE_STORAGE['menuitems'] === undefined) JACQUELINE_STORAGE['menuitems'] = [];
	JACQUELINE_STORAGE['menuitems']['sc_menuitems_874'] = '475,482,483,484,480,479,478,457';
	
	if (JACQUELINE_STORAGE['menuitems'] === undefined) JACQUELINE_STORAGE['menuitems'] = [];
	JACQUELINE_STORAGE['menuitems']['sc_menuitems_276809688'] = '482,484,457';
	
	if (JACQUELINE_STORAGE['menuitems'] === undefined) JACQUELINE_STORAGE['menuitems'] = [];
	JACQUELINE_STORAGE['menuitems']['sc_menuitems_1468493844'] = '475,483,478,457';
	
	if (JACQUELINE_STORAGE['menuitems'] === undefined) JACQUELINE_STORAGE['menuitems'] = [];
	JACQUELINE_STORAGE['menuitems']['sc_menuitems_1484465773'] = '475,483,480,479';
	
	if (JACQUELINE_STORAGE['menuitems'] === undefined) JACQUELINE_STORAGE['menuitems'] = [];
	JACQUELINE_STORAGE['menuitems']['sc_menuitems_683513523'] = '482,480,479,457';
	
};

/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------- core.utils ------------------------ */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */

/* Global variables manipulations
---------------------------------------------------------------- */
if (typeof JACQUELINE_STORAGE == 'undefined')
    var JACQUELINE_STORAGE = {};

function jacqueline_storage_get(var_name) {
	"use strict";
	return jacqueline_isset(JACQUELINE_STORAGE[var_name]) ? JACQUELINE_STORAGE[var_name] : '';
}

function jacqueline_storage_set(var_name, value) {
	"use strict";
	JACQUELINE_STORAGE[var_name] = value;
}

function jacqueline_storage_inc(var_name) {
	"use strict";
	var value = arguments[1]==undefined ? 1 : arguments[1];
	JACQUELINE_STORAGE[var_name] += value;
}

function jacqueline_storage_concat(var_name, value) {
	"use strict";
	JACQUELINE_STORAGE[var_name] += ''+value;
}

function jacqueline_storage_get_array(var_name, key) {
	"use strict";
	return jacqueline_isset(JACQUELINE_STORAGE[var_name][key]) ? JACQUELINE_STORAGE[var_name][key] : '';
}

function jacqueline_storage_set_array(var_name, key, value) {
	"use strict";
	if (!jacqueline_isset(JACQUELINE_STORAGE[var_name])) JACQUELINE_STORAGE[var_name] = {};
	JACQUELINE_STORAGE[var_name][key] = value;
}

function jacqueline_storage_inc_array(var_name, key) {
	"use strict";
	var value = arguments[2]==undefined ? 1 : arguments[2];
	JACQUELINE_STORAGE[var_name][key] += value;
}

function jacqueline_storage_concat_array(var_name, key, value) {
	"use strict";
	JACQUELINE_STORAGE[var_name][key] += ''+value;
}

/* Cookies manipulations
---------------------------------------------------------------- */
function jacqueline_get_cookie(name) {
	"use strict";
	var defa = arguments[1]!=undefined ? arguments[1] : null;
	var start = document.cookie.indexOf(name + '=');
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length))) {
		return defa;
	}
	if (start == -1)
		return defa;
	var end = document.cookie.indexOf(';', len);
	if (end == -1)
		end = document.cookie.length;
	return unescape(document.cookie.substring(len, end));
}

function jacqueline_set_cookie(name, value, expires, path, domain, secure) {
	"use strict";
	var expires = arguments[2]!=undefined ? arguments[2] : 0;
	var path    = arguments[3]!=undefined ? arguments[3] : '/';
	var domain  = arguments[4]!=undefined ? arguments[4] : '';
	var secure  = arguments[5]!=undefined ? arguments[5] : '';
	var today = new Date();
	today.setTime(today.getTime());
	if (expires) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date(today.getTime() + (expires));
	document.cookie = name + '='
			+ escape(value)
			+ ((expires) ? ';expires=' + expires_date.toGMTString() : '')
			+ ((path)    ? ';path=' + path : '')
			+ ((domain)  ? ';domain=' + domain : '')
			+ ((secure)  ? ';secure' : '');
}

function jacqueline_del_cookie(name, path, domain) {
	"use strict";
	var path   = arguments[1]!=undefined ? arguments[1] : '/';
	var domain = arguments[2]!=undefined ? arguments[2] : '';
	if (jacqueline_get_cookie(name))
		document.cookie = name + '=' + ((path) ? ';path=' + path : '')
				+ ((domain) ? ';domain=' + domain : '')
				+ ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

/* Browsers detection
---------------------------------------------------------------- */
function jacqueline_browser_is_mobile() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

function jacqueline_browser_is_ios() {
	return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
}

function jacqueline_is_retina() {
	var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
	return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
}

/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ------------------------ core.init ------------------------ */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */

jQuery(document).ready(function() {
	"use strict";
	JACQUELINE_STORAGE['theme_init_counter'] = 0;
	jacqueline_init_actions();
});

// Theme init actions
//==============================================
function jacqueline_init_actions() {
	"use strict";

	if (JACQUELINE_STORAGE['sc_edit_mode'] && jQuery('.sc_empty-placeholder').length==0 && JACQUELINE_STORAGE['theme_init_counter']++ < 30) {
		setTimeout(jacqueline_init_actions, 200);
		return;
	}
	
	// Hide preloader
	jQuery('#page_preloader').animate({opacity:0}, 500, function() { jQuery(this).css({display: 'none'}); });

	// Check for Retina display
	if (jacqueline_is_retina()) {
		jacqueline_set_cookie('jacqueline_retina', 1, 365);
	}

	jacqueline_ready_actions();

	// Add resize handlers after VC row stretch handlers on('resize.vcRowBehaviour', ...)
	setTimeout(function() {
		jQuery(window).on('resize.jacqueline', function() {
			jacqueline_resize_actions();
			jacqueline_scroll_actions()
		}).trigger('resize.jacqueline');
	}, 10);

	// Scroll handlers
	jQuery(window).on('scroll.jacqueline', function() {
		"use strict";
		jacqueline_scroll_actions();
	});
}

// Theme first load actions
//==============================================
function jacqueline_ready_actions() {
	"use strict";

	// Call skin specific action (if exists)
    //----------------------------------------------
	if (window.jacqueline_skin_ready_actions) jacqueline_skin_ready_actions();

	// Call theme specific action (if exists)
    //----------------------------------------------
	if (window.jacqueline_theme_ready_actions) jacqueline_theme_ready_actions();


	// Widgets decoration
    //----------------------------------------------

	// Decorate nested lists in widgets and side panels
	jQuery('.widget ul > li').each(function() {
		if (jQuery(this).find('ul').length > 0) {
			jQuery(this).addClass('has_children');
		}
	});


	// Archive widget decoration
	jQuery('.widget_archive a').each(function() {
		var val = jQuery(this).html().split(' ');
		if (val.length > 1) {
			val[val.length-1] = '<span>' + val[val.length-1] + '</span>';
			jQuery(this).html(val.join(' '))
		}
	});

	
	// Calendar handlers - change months
	jQuery('.widget_calendar').on('click', '.month_prev a, .month_next a', function(e) {
		"use strict";
		var calendar = jQuery(this).parents('.wp-calendar');
		var m = jQuery(this).data('month');
		var y = jQuery(this).data('year');
		var pt = jQuery(this).data('type');
		jQuery.post(JACQUELINE_STORAGE['ajax_url'], {
			action: 'calendar_change_month',
			nonce: JACQUELINE_STORAGE['ajax_nonce'],
			month: m,
			year: y,
			post_type: pt
		}).done(function(response) {
			var rez = {};
			try {
				rez = JSON.parse(response);
			} catch (e) {
				rez = { error: JACQUELINE_STORAGE['ajax_error'] };
				console.log(response);
			}
			if (rez.error === '') {
				calendar.parent().fadeOut(200, function() {
					jQuery(this).find('.wp-calendar').remove();
					jQuery(this).append(rez.data).fadeIn(200);
				});
			}
		});
		e.preventDefault();
		return false;
	});



	// Media setup
    //----------------------------------------------

	// Video background init
	jQuery('.video_background').each(function() {
		var youtube = jQuery(this).data('youtube-code');
		if (youtube) {
			jQuery(this).tubular({videoId: youtube});
		}
	});


	// Main slider
    //----------------------------------------------
	jQuery('.slider_over_button,.slider_over_close').on('click', function(e) {
		jQuery(this).parent().toggleClass('opened');
		e.preventDefault();
		return false;
	});



	// Menu
    //----------------------------------------------

	JACQUELINE_STORAGE['menu_mobile'] = 1024;
	// Prepare menus
	if (JACQUELINE_STORAGE['menu_cache']) jacqueline_prepare_menus();

	// Clone side menu for responsive
	if (jQuery('ul#menu_side').length > 0) {
		jQuery('ul#menu_side').clone().removeAttr('id').removeClass('menu_side_nav').addClass('menu_side_responsive').insertAfter('ul#menu_side');
		jacqueline_show_current_menu_item(jQuery('.menu_side_responsive'), jQuery('.sidebar_outer_menu_responsive_button'));
	}
	if (jQuery('.header_mobile').length > 0) {
		jQuery('.header_mobile .menu_main_nav_area ul.menu_main_nav').removeAttr('id');
		jQuery('.header_mobile .menu_button').on('click', function(){
			jQuery('.header_mobile .side_wrap').toggleClass('open');
			jQuery('.header_mobile .mask').toggleClass('show');
			jQuery('html').toggleClass('menu_mobile_open');
			// Fix for Safari
			if (jacqueline_browser_is_ios() && jQuery('body').hasClass('menu_mobile')) {
				jQuery('body').toggleClass('ios_fixed');
			}
		});
		jQuery('.header_mobile .mask, .header_mobile .side_wrap .close').on('click', function(){
			jQuery('.header_mobile .side_wrap').removeClass('open');
			jQuery('.header_mobile .mask').removeClass('show');
			jQuery('html').removeClass('menu_mobile_open');
			// Fix for Safari
			if (jacqueline_browser_is_ios() && jQuery('body').hasClass('menu_mobile')) {
				jQuery('body').toggleClass('ios_fixed');
			}
		});
	}

	// Push menu button
	jQuery('.menu_pushy_button').on('click', function(e){
		"use strict";
		jQuery('body').addClass('pushy-active').css('overflow', 'hidden');
		jQuery('.site-overlay').fadeIn('fast');
		e.preventDefault();
		return false;
	});
	jQuery('.pushy .close-pushy,.site-overlay').on('click', function(e){
		jQuery('body').removeClass('pushy-active').css('overflow', 'visible');
		jQuery('.site-overlay').fadeOut('fast');
		e.preventDefault();
		return false;
	});
	
	// Side menu widgets button
	jQuery('.sidebar_outer_widgets_button').on('click', function(e){
		"use strict";
		jQuery('.sidebar_outer_widgets').slideToggle();
		e.preventDefault();
		return false;
	});

	// Add arrows in responsive menu
	jQuery('.header_mobile ul.menu_main_nav .menu-item-has-children > a, .menu_side_responsive .menu-item-has-children > a, .menu_pushy_nav_area .menu-item-has-children > a, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories .has_children > a').prepend('<span class="open_child_menu"></span>');

	// Submenu click handler for the responsive menu
	jQuery('.header_mobile ul.menu_main_nav, .menu_side_responsive, .menu_pushy_nav_area, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories').on('click', 'li a,li a .open_child_menu, ul.product-categories.plain li a .open_child_menu', function(e) {
		"use strict";
		var is_menu_main = jQuery(this).parents('ul.menu_main_nav').length > 0;
		var $a = jQuery(this).hasClass('open_child_menu') ? jQuery(this).parent() : jQuery(this);
		if ((!is_menu_main || jQuery('body').hasClass('menu_mobile')) && ($a.parent().hasClass('menu-item-has-children') || $a.parent().hasClass('has_children'))) {
			if ($a.siblings('ul:visible').length > 0)
				$a.siblings('ul').slideUp().parent().removeClass('opened');
			else {
				jQuery(this).parents('li').siblings('li').find('ul:visible').slideUp().parent().removeClass('opened');
				$a.siblings('ul').slideDown().parent().addClass('opened');
			}
		}
		// Ignore link for parent menu items
		if (jQuery(this).hasClass('open_child_menu') || $a.attr('href')=='#') {
			e.preventDefault();
			return false;
		}
	});
	
	// Init superfish menus
	jacqueline_init_sfmenu('header .menu_main_nav_area ul.menu_main_nav, ul.menu_user_nav, ul#menu_side, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories');
	JACQUELINE_STORAGE['menu_slider'] = true;
	// Slide effect for main menu
	if (JACQUELINE_STORAGE['menu_slider']) {
		jQuery('ul.menu_main_nav').spasticNav({
			color: JACQUELINE_STORAGE['accent2_color']
		});
	}

	// Show table of contents for the current page
	if (JACQUELINE_STORAGE['toc_menu'] != 'hide' && JACQUELINE_STORAGE['toc_menu'] != 'no') {
		jacqueline_build_page_toc();
	}

	// One page mode for menu links (scroll to anchor)
	jQuery('#toc, ul.menu_main_nav li, ul.menu_user_nav li, ul#menu_side li, ul#menu_footer li, ul#menu_pushy li').on('click', 'a', function(e) {
		"use strict";
		var href = jQuery(this).attr('href');
		if (href===undefined) return;
		var pos = href.indexOf('#');
		if (pos < 0 || href.length == 1) return;
		if (jQuery(href.substr(pos)).length > 0) {
			var loc = window.location.href;
			var pos2 = loc.indexOf('#');
			if (pos2 > 0) loc = loc.substring(0, pos2);
			var now = pos==0;
			if (!now) now = loc == href.substring(0, pos);
			if (now) {
				jacqueline_document_animate_to(href.substr(pos));
				jacqueline_document_set_location(pos==0 ? loc + href : href);
				e.preventDefault();
				return false;
			}
		}
	});
	
	
	// Store height of the top and side panels
	JACQUELINE_STORAGE['top_panel_height'] = 0;	//Math.max(0, jQuery('.top_panel_wrap').height());
	JACQUELINE_STORAGE['side_panel_height'] = 0;


	// Pagination
    //----------------------------------------------

	// Page navigation (style slider)
	jQuery('.pager_cur').on('click', function(e) {
		"use strict";
		jQuery('.pager_slider').slideDown(300, function() {
			jacqueline_sc_init(jQuery('.pager_slider').eq(0));
		});
		e.preventDefault();
		return false;
	});


	// View More button
	jQuery('#viewmore_link').on('click', function(e) {
		"use strict";
		if (!JACQUELINE_STORAGE['viewmore_busy'] && !jQuery(this).hasClass('viewmore_empty')) {
			jQuery(this).parent().addClass('loading');
			JACQUELINE_STORAGE['viewmore_busy'] = true;
			jQuery.post(JACQUELINE_STORAGE['ajax_url'], {
				action: 'view_more_posts',
				nonce: JACQUELINE_STORAGE['ajax_nonce'],
				page: JACQUELINE_STORAGE['viewmore_page']+1,
				data: JACQUELINE_STORAGE['viewmore_data'],
				vars: JACQUELINE_STORAGE['viewmore_vars']
			}).done(function(response) {
				"use strict";
				var rez = {};
				try {
					rez = JSON.parse(response);
				} catch (e) {
					rez = { error: JACQUELINE_STORAGE['ajax_error'] };
					console.log(response);
				}
				jQuery('#viewmore_link').parent().removeClass('loading');
				JACQUELINE_STORAGE['viewmore_busy'] = false;
				if (rez.error === '') {
					var posts_container = jQuery('.content').eq(0);
					if (posts_container.find('.isotope_wrap').length > 0) posts_container = posts_container.find('.isotope_wrap').eq(0);
					if (posts_container.hasClass('isotope_wrap')) {
						posts_container.data('last-width', 0).append(rez.data);
						JACQUELINE_STORAGE['isotope_init_counter'] = 0;
						jacqueline_init_appended_isotope(posts_container, rez.filters);
					} else
						jQuery('#viewmore').before(rez.data);

					JACQUELINE_STORAGE['viewmore_page']++;
					if (rez.no_more_data==1) {
						jQuery('#viewmore_link').addClass('viewmore_empty').parent().hide();
					}

					jacqueline_init_post_formats();
					jacqueline_sc_init(posts_container);
					jacqueline_scroll_actions();
				}
			});
		}
		e.preventDefault();
		return false;
	});


	// WooCommerce
    //----------------------------------------------

	// Change display mode
	jQuery('.woocommerce,.woocommerce-page').on('click', '.mode_buttons a', function(e) {
		"use strict";
		var mode = jQuery(this).hasClass('woocommerce_thumbs') ? 'thumbs' : 'list';
		jQuery.cookie('jacqueline_shop_mode', mode, {expires: 365, path: '/'});
		jQuery(this).siblings('input').val(mode).parents('form').get(0).submit();
		e.preventDefault();
		return false;
	});
	// Added to cart
	jQuery('body').bind('added_to_cart', function() {
		"use strict";
		// Update amount on the cart button
		var total = jQuery('.widget_shopping_cart').eq(0).find('.total .amount').text();
		if (total != undefined) {
			jQuery('.top_panel_cart_button .cart_summa').text(total);
		}
		// Update count items on the cart button
		var cnt = 0;
		jQuery('.widget_shopping_cart_content').eq(0).find('.cart_list li').each(function() {
			var q = jQuery(this).find('.quantity').html().split(' ', 2);
			if (!isNaN(q[0]))
				cnt += Number(q[0]);
		});
		var items = jQuery('.top_panel_cart_button .cart_items').eq(0).text().split(' ', 2);
		items[0] = cnt;
		jQuery('.top_panel_cart_button .cart_items').text(items[0]+' '+items[1]);
		// Update data-attr on button
		jQuery('.top_panel_cart_button').data({
			'items': cnt ? cnt : 0,
			'summa': total ? total : 0
		});
	});
	// Show cart 
	jQuery('.top_panel_middle .top_panel_cart_button, .header_mobile .top_panel_cart_button').on('click', function(e) {
		"use strict";
		jQuery(this).siblings('.sidebar_cart').slideToggle();
		e.preventDefault();
		return false;
	});
	// Add buttons to quantity
	jQuery('.woocommerce div.quantity,.woocommerce-page div.quantity').append('<span class="q_inc"></span><span class="q_dec"></span>');
	jQuery('.woocommerce div.quantity').on('click', '>span', function(e) {
		"use strict";
		var f = jQuery(this).siblings('input');
		if (jQuery(this).hasClass('q_inc')) {
			f.val(Math.max(0, parseInt(f.val()))+1);
		} else {
			f.val(Math.max(1, Math.max(0, parseInt(f.val()))-1));
		}
		e.preventDefault();
		return false;
	});
	// Add stretch behaviour to WooC tabs area
	jQuery('.single-product .woocommerce-tabs')
		.addClass('trx-stretch-width inverse_colors')
		.after('<div class="trx-stretch-width-original"></div>');
	jacqueline_stretch_width();

	// Popup login and register windows
    //----------------------------------------------
	jQuery('.popup_link').addClass('inited').on('click', function(e){
		var popup = jQuery(jQuery(this).attr('href'));
		if (popup.length === 1) {
			jacqueline_hide_popup(jQuery(popup.hasClass('popup_login') ? '.popup_registration' : '.popup_login' ));
			jacqueline_toggle_popup(popup);
		}
		e.preventDefault();
		return false;
	});
	jQuery('.popup_wrap').on('click', '.popup_close', function(e){
		var popup = jQuery(this).parent();
		if (popup.length === 1) {
			jacqueline_hide_popup(popup);
		}
		e.preventDefault();
		return false;
	});


	// Forms validation
    //----------------------------------------------

	// Login form
	jQuery('.popup_form.login_form').submit(function(e){
		"use strict";
		var rez = jacqueline_login_validate(jQuery(this));
		if (!rez)
			e.preventDefault();
		return rez;
	});
	
	// Registration form
	jQuery('.popup_form.registration_form').submit(function(e){
		"use strict";
		var rez = jacqueline_registration_validate(jQuery(this));
		if (!rez)
			e.preventDefault();
		return rez;
	});

	// Comment form
	jQuery("form#commentform").submit(function(e) {
		"use strict";
		var rez = jacqueline_comments_validate(jQuery(this));
		if (!rez)
			e.preventDefault();
		return rez;
	});



	// Bookmarks
    //----------------------------------------------

	// Add bookmark
	jQuery('.bookmarks_add').on('click', function(e) {
		"use strict";
		var title = window.document.title.split('|')[0];
		var url = window.location.href;
		var list = jQuery.cookie('jacqueline_bookmarks');
		var exists = false;
		if (list) {
			try {
				list = JSON.parse(list);
			} catch (e) {}
			if (list.length) {
				for (var i=0; i<list.length; i++) {
					if (list[i].url == url) {
						exists = true;
						break;
					}
				}
			}
		} else
			list = new Array();
		if (!exists) {
			var message_popup = jacqueline_message_dialog('<label for="bookmark_title">'+JACQUELINE_STORAGE['strings']['bookmark_title']+'</label><br><input type="text" id="bookmark_title" name="bookmark_title" value="'+title+'">', JACQUELINE_STORAGE['strings']['bookmark_add'], null,
				function(btn, popup) {
					"use strict";
					if (btn != 1) return;
					title = message_popup.find('#bookmark_title').val();
					list.push({title: title, url: url});
					jQuery('.bookmarks_list').append('<li><a href="'+url+'" class="bookmarks_item">'+title+'<span class="bookmarks_delete icon-cancel" title="'+JACQUELINE_STORAGE['strings']['bookmark_del']+'"></span></a></li>');
					jQuery.cookie('jacqueline_bookmarks', JSON.stringify(list), {expires: 365, path: '/'});
					setTimeout(function () {jacqueline_message_success(JACQUELINE_STORAGE['strings']['bookmark_added'], JACQUELINE_STORAGE['strings']['bookmark_add']);}, JACQUELINE_STORAGE['message_timeout']/4);
				});
		} else
			jacqueline_message_warning(JACQUELINE_STORAGE['strings']['bookmark_exists'], JACQUELINE_STORAGE['strings']['bookmark_add']);
		e.preventDefault();
		return false;
	});

	// Delete bookmark
	jQuery('.bookmarks_list').on('click', '.bookmarks_delete', function(e) {
		"use strict";
		var idx = jQuery(this).parent().index();
		var list = jQuery.cookie('jacqueline_bookmarks');
		if (list) {
			try {
				list = JSON.parse(list);
			} catch (e) {}
			if (list.length) {
				list.splice(idx, 1);
				jQuery.cookie('jacqueline_bookmarks', JSON.stringify(list), {expires: 365, path: '/'});
			}
		}
		jQuery(this).parent().remove();
		e.preventDefault();
		return false;
	});



	// Other settings
    //------------------------------------

	// Scroll to top button
	jQuery('.scroll_to_top').on('click', function(e) {
		"use strict";
		jQuery('html,body').animate({
			scrollTop: 0
		}, 'slow');
		e.preventDefault();
		return false;
	});

    // Show system message
	jacqueline_show_system_message();

	// Init post format specific scripts
	jacqueline_init_post_formats();

	// Call sc init action (if exists)
	if (window.jacqueline_sc_init_actions) jacqueline_sc_init_actions();

	// Init hidden elements (if exists)
	if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(jQuery('body').eq(0));
	
	//Make columns equal height
	jQuery('.columns_wrap.sc_columns.equal_height').each(function(){
		var height = 0;
		jQuery(this).find('.sc_column_item').each(function(){
			if(jQuery(this).height() > height) height = jQuery(this).height();			
		});
		jQuery(this).find('.sc_column_item').height(height);
	});
	
	
	// Woo products buttons
	jQuery('.woocommerce ul.products li.product .post_thumb').each(function(){
		var button = jQuery(this).find('.add_to_cart_button');
		jQuery(this).find('.button_container.cart').append(button);
	});
	
	jQuery('.woocommerce ul.products li.product .post_thumb .button_container:not(.animate)').mouseover(function(){
		if(jQuery(this).find('.added').length <= 0)
			jQuery(this).addClass('animate').removeClass('animateOut');
	});
	
	jQuery('.woocommerce ul.products li.product .post_thumb .button_container').mouseout(function(){
		if(jQuery(this).find('.added').length <= 0)
			jQuery(this).addClass('animateOut');
	});
	
	jQuery('.woocommerce ul.products li.product .post_thumb .button').each(function(){
		var item = jQuery(this);
		var clone = jQuery(item).clone().addClass('clone');
		jQuery(this).after( clone );
	});
	 
	
} 

// Scroll actions
//==============================================

// Do actions when page scrolled
function jacqueline_scroll_actions() {
	"use strict";
	
	// Call skin specific action (if exists)
    //----------------------------------------------
	if (window.jacqueline_skin_scroll_actions) jacqueline_skin_scroll_actions();

	// Call theme specific action (if exists)
    //----------------------------------------------
	if (window.jacqueline_theme_scroll_actions) jacqueline_theme_scroll_actions();

	var scroll_offset = jQuery(window).scrollTop();
	var scroll_to_top_button = jQuery('.scroll_to_top');
	var adminbar_height = Math.max(0, jQuery('#wpadminbar').height());

	if (JACQUELINE_STORAGE['top_panel_height'] < 1) {
		JACQUELINE_STORAGE['top_panel_height'] = Math.max(0, jQuery('.top_panel_wrap').height());
	}
	
	// Scroll to top button show/hide
	if (scroll_offset > JACQUELINE_STORAGE['top_panel_height'])
		scroll_to_top_button.addClass('show');
	else
		scroll_to_top_button.removeClass('show');
	
	// Fix/unfix top panel
	if (!jQuery('body').hasClass('menu_mobile') && JACQUELINE_STORAGE['menu_fixed']) {
		var slider_height = 0;
		if (jQuery('.top_panel_below .slider_wrap').length > 0) {
			slider_height = jQuery('.top_panel_below .slider_wrap').height();
			if (slider_height < 10) {
				slider_height = jQuery('.slider_wrap').hasClass('.slider_fullscreen') ? jQuery(window).height() : JACQUELINE_STORAGE['slider_height'];
			}
		}
		if (scroll_offset <= slider_height + JACQUELINE_STORAGE['top_panel_height']) {
			if (jQuery('body').hasClass('top_panel_fixed')) {
				jQuery('body').removeClass('top_panel_fixed');
			}
		} else if (scroll_offset > slider_height + JACQUELINE_STORAGE['top_panel_height']) {
			if (!jQuery('body').hasClass('top_panel_fixed') && jQuery(document).height() > jQuery(window).height()*1.5) {
				jQuery('.top_panel_fixed_wrap').height(JACQUELINE_STORAGE['top_panel_height']);
				jQuery('.top_panel_wrap').css('marginTop', '-150px').animate({'marginTop': 0}, 500);
				jQuery('body').addClass('top_panel_fixed');
			}
		}
	}
	
	// Fix/unfix side panel
	if (jQuery('.sidebar_outer').length > 0) {
		if (JACQUELINE_STORAGE['side_panel_height'] == 0)	
			JACQUELINE_STORAGE['side_panel_height'] = jQuery('.sidebar_outer_logo_wrap').outerHeight() + jQuery('.sidebar_outer_menu').outerHeight() + jQuery('.sidebar_outer_widgets').outerHeight();
		if (scroll_offset + jQuery(window).height() > JACQUELINE_STORAGE['side_panel_height'] + 100) {
			if (jQuery('.sidebar_outer').css('position')!=='fixed') {
				jQuery('.sidebar_outer').css({
					//'top': (scroll_offset + jQuery(window).height() - JACQUELINE_STORAGE['side_panel_height'] - 100) + 'px'
					'position': 'fixed',
					'top': Math.min(0, jQuery(window).height() - JACQUELINE_STORAGE['side_panel_height'] - 100) + 'px',
				});
			}
		} else {
			if (jQuery('.sidebar_outer').css('position')=='fixed') {
				jQuery('.sidebar_outer').css({
					'position': 'absolute',
					'top': 0
				});
			}
		}
	}

	// TOC current items
	jQuery('#toc .toc_item').each(function() {
		"use strict";
		var id = jQuery(this).find('a').attr('href');
		var pos = id.indexOf('#');
		if (pos < 0 || id.length == 1) return;
		var loc = window.location.href;
		var pos2 = loc.indexOf('#');
		if (pos2 > 0) loc = loc.substring(0, pos2);
		var now = pos==0;
		if (!now) now = loc == href.substring(0, pos);
		if (!now) return;
		var off = jQuery(id).offset().top;
		var id_next  = jQuery(this).next().find('a').attr('href');
		var off_next = id_next ? jQuery(id_next).offset().top : 1000000;
		if (off < scroll_offset + jQuery(window).height()*0.8 && scroll_offset + JACQUELINE_STORAGE['top_panel_height'] < off_next)
			jQuery(this).addClass('current');
		else
			jQuery(this).removeClass('current');
	});
	
	// Infinite pagination
	jacqueline_infinite_scroll()
	
	// Parallax scroll
	jacqueline_parallax_scroll();

	// Call sc scroll actions (if exists)
	if (window.jacqueline_sc_scroll_actions) jacqueline_sc_scroll_actions();
}

// Infinite Scroll
function jacqueline_infinite_scroll() {
	"use strict";
	if (JACQUELINE_STORAGE['viewmore_busy']) return;
	var infinite = jQuery('#viewmore.pagination_infinite');
	if (infinite.length > 0) {
		var viewmore = infinite.find('#viewmore_link:not(.viewmore_empty)');
		if (viewmore.length > 0) {
			if (jQuery(window).scrollTop() + jQuery(window).height() + 100 >= infinite.offset().top) {
				viewmore.eq(0).trigger('click');
			}
		}
	}
}

// Parallax scroll
function jacqueline_parallax_scroll(){
	jQuery('.sc_parallax').each(function(){
		var windowHeight = jQuery(window).height();
		var scrollTops = jQuery(window).scrollTop();
		var offsetPrx = Math.max(jQuery(this).offset().top, windowHeight);
		if ( offsetPrx <= scrollTops + windowHeight ) {
			var speed  = Number(jQuery(this).data('parallax-speed'));
			var xpos   = jQuery(this).data('parallax-x-pos');  
			var ypos   = Math.round((offsetPrx - scrollTops - windowHeight) * speed + (speed < 0 ? windowHeight*speed : 0));
			jQuery(this).find('.sc_parallax_content').css('backgroundPosition', xpos+' '+ypos+'px');
			// Uncomment next line if you want parallax video (else - video position is static)
			jQuery(this).find('div.sc_video_bg').css('top', ypos+'px');
		} 
	});
}

// Resize actions
//==============================================

// Do actions when page scrolled
function jacqueline_resize_actions() {
	"use strict";

	// Call skin specific action (if exists)
    //----------------------------------------------
	if (window.jacqueline_skin_resize_actions) jacqueline_skin_resize_actions();

	// Call theme specific action (if exists)
    //----------------------------------------------
	if (window.jacqueline_theme_resize_actions) jacqueline_theme_resize_actions();

	// Reset stored value
	JACQUELINE_STORAGE['top_panel_height'] = 0;

	jacqueline_responsive_menu();
	jacqueline_video_dimensions();
	jacqueline_resize_video_background();
	jacqueline_resize_fullscreen_slider();
	jacqueline_resize_alter_portfolio();
	jacqueline_stretch_width();

	// Call sc resize actions (if exists)
	if (window.jacqueline_sc_resize_actions) jacqueline_sc_resize_actions();
}

// Stretch area to full window width
function jacqueline_stretch_width() {
	jQuery('.trx-stretch-width').each(function() {
		var $el = jQuery(this);
		var $el_full = $el.next('.trx-stretch-width-original');
		var el_margin_left = parseInt( $el.css( 'margin-left' ), 10 );
		var el_margin_right = parseInt( $el.css( 'margin-right' ), 10 );
		var offset = 0 - $el_full.offset().left - el_margin_left;
		var width = jQuery( window ).width();
		if (!$el.hasClass('inited')) {
			$el.addClass('inited invisible');
			$el.css({
				'position': 'relative',
				'box-sizing': 'border-box'
			});
		}
		$el.css({
			'left': offset,
			'width': jQuery( window ).width()
		});
		if ( !$el.hasClass('trx-stretch-content') ) {
			var padding = Math.max(0, -1*offset);
			var paddingRight = Math.max(0, width - padding - $el_full.width() + el_margin_left + el_margin_right);
			$el.css( { 'padding-left': padding + 'px', 'padding-right': paddingRight + 'px' } );
		}
		$el.removeClass('invisible');
	});
}

// Check window size and do responsive menu
function jacqueline_responsive_menu() {
	if (jacqueline_is_responsive_need(JACQUELINE_STORAGE['menu_mobile'])) {
		if (!jQuery('body').hasClass('menu_mobile')) {
			jQuery('body').removeClass('top_panel_fixed').addClass('menu_mobile');
			jQuery('header.top_panel_wrap ').hide();
			jQuery('.header_mobile').show();
			
			jQuery('header #popup_login').attr('id', 'popup_login_1');
			jQuery('header #popup_registration').attr('id', 'popup_registration_1');
			jQuery('.header_mobile #popup_login_1').attr('id', 'popup_login');
			jQuery('.header_mobile #popup_registration_1').attr('id', 'popup_registration');
		}
	} else {
		if (jQuery('body').hasClass('menu_mobile')) {
			jQuery('body').removeClass('menu_mobile');
			jQuery('header.top_panel_wrap ').show();
			jQuery('.header_mobile').hide();
			
			jQuery('header #popup_login_1').attr('id', 'popup_login');
			jQuery('header #popup_registration_1').attr('id', 'popup_registration');
			jQuery('.header_mobile #popup_login').attr('id', 'popup_login_1');
			jQuery('.header_mobile #popup_registration').attr('id', 'popup_registration_1');
		}
	}
	
	if (jQuery(window).width() < 640) {
		var pass = jQuery('.header_mobile .popup_wrap.popup_registration .registration_form > .form_right');
		if(pass.length > 0){ 
			jQuery('.header_mobile .popup_wrap.popup_registration .form_left .popup_form_field.email_field').after(pass);
		}
	}
	else{
		var pass = jQuery('.header_mobile .popup_wrap.popup_registration .form_left > .form_right');
		if(pass.length > 0){ 
			jQuery('.header_mobile .popup_wrap.popup_registration .registration_form').append(pass);
		}
	}

	if (!jQuery('.top_panel_wrap').hasClass('menu_show')) jQuery('.top_panel_wrap').addClass('menu_show');
	// Show widgets block on the sidebar outer (if sidebar not responsive and widgets are hidden)
	if (jQuery('.sidebar_outer').length > 0 && jQuery('.sidebar_outer').css('position')=='absolute' && jQuery('.sidebar_outer_widgets:visible').length==0) 
		jQuery('.sidebar_outer_widgets').show();
	// Switch popup menu / hierarchical list on product categories list placed in sidebar
	var cat_menu = jQuery('body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories');
	var sb = cat_menu.parents('.widget_area');
	if (sb.length > 0 && cat_menu.length > 0) {
		if (sb.width() == sb.parents('.content_wrap').width()) {
			if (cat_menu.hasClass('inited')) {
				cat_menu.removeClass('inited').addClass('plain').superfish('destroy');
				cat_menu.find('ul.animated').removeClass('animated').addClass('no_animated');
			}
		} else {
			if (!cat_menu.hasClass('inited')) {
				cat_menu.removeClass('plain').addClass('inited');
				cat_menu.find('ul.no_animated').removeClass('no_animated').addClass('animated');
				jacqueline_init_sfmenu('body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories');
			}
		}
	}
}

// Check if responsive menu need
function jacqueline_is_responsive_need(max_width) {
	"use strict";
	var rez = false;
	if (max_width > 0) {
		var w = window.innerWidth;
		if (w == undefined) {
			w = jQuery(window).width()+(jQuery(window).height() < jQuery(document).height() || jQuery(window).scrollTop() > 0 ? 16 : 0);
		}
		rez = max_width > w;
	}
	return rez;
}

// Fit video frames to document width
function jacqueline_video_dimensions() {
	jQuery('.sc_video_frame').each(function() {
		"use strict";
		var frame  = jQuery(this).eq(0);
		var player = frame.parent();
		var ratio = (frame.data('ratio') ? frame.data('ratio').split(':') : (frame.find('[data-ratio]').length>0 ? frame.find('[data-ratio]').data('ratio').split(':') : [16,9]));
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var w_attr = frame.data('width');
		var h_attr = frame.data('height');
		if (!w_attr || !h_attr) return;
		var percent = (''+w_attr).substr(-1)=='%';
		w_attr = parseInt(w_attr);
		h_attr = parseInt(h_attr);
		var w_real = Math.min(percent || frame.parents('.columns_wrap').length>0 ? 10000 : w_attr, frame.parents('div,article').width()), //player.width();
			h_real = Math.round(percent ? w_real/ratio : w_real/w_attr*h_attr);
		if (parseInt(frame.attr('data-last-width'))==w_real) return;
		if (percent) {
			frame.height(h_real);
		} else {
			frame.css({'width': w_real+'px', 'height': h_real+'px'});
		}
		frame.attr('data-last-width', w_real);
	});
	jQuery('video.sc_video,video.wp-video-shortcode').each(function() {
		"use strict";
		var video = jQuery(this).eq(0);
		var ratio = (video.data('ratio')!=undefined ? video.data('ratio').split(':') : [16,9]);
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var mejs_cont = video.parents('.mejs-video');
		var frame = video.parents('.sc_video_frame');
		var w_attr = frame.length>0 ? frame.data('width') : video.data('width');
		var h_attr = frame.length>0 ? frame.data('height') : video.data('height');
		if (!w_attr || !h_attr) {
			w_attr = video.attr('width');
			h_attr = video.attr('height');
			if (!w_attr || !h_attr) return;
			video.data({'width': w_attr, 'height': h_attr});
		}
		var percent = (''+w_attr).substr(-1)=='%';
		w_attr = parseInt(w_attr);
		h_attr = parseInt(h_attr);
		var w_real = Math.round(mejs_cont.length > 0 ? Math.min(percent ? 10000 : w_attr, mejs_cont.parents('div,article').width()) : video.width()),
			h_real = Math.round(percent ? w_real/ratio : w_real/w_attr*h_attr);
		if (parseInt(video.attr('data-last-width'))==w_real) return;
		if (mejs_cont.length > 0 && mejs) {
			jacqueline_set_mejs_player_dimensions(video, w_real, h_real);
		}
		if (percent) {
			video.height(h_real);
		} else {
			video.attr({'width': w_real, 'height': h_real}).css({'width': w_real+'px', 'height': h_real+'px'});
		}
		video.attr('data-last-width', w_real);
	});
	jQuery('video.sc_video_bg').each(function() {
		"use strict";
		var video = jQuery(this).eq(0);
		var ratio = (video.data('ratio')!=undefined ? video.data('ratio').split(':') : [16,9]);
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var mejs_cont = video.parents('.mejs-video');
		var container = mejs_cont.length>0 ? mejs_cont.parent() : video.parent();
		var w = container.width();
		var h = container.height();
		var w1 = Math.ceil(h*ratio);
		var h1 = Math.ceil(w/ratio);
		if (video.parents('.sc_parallax').length > 0) {
			var windowHeight = jQuery(window).height();
			var speed = Number(video.parents('.sc_parallax').data('parallax-speed'));
			var h_add = Math.ceil(Math.abs((windowHeight-h)*speed));
			if (h1 < h + h_add) {
				h1 = h + h_add;
				w1 = Math.ceil(h1 * ratio);
			}
		}
		if (h1 < h) {
			h1 = h;
			w1 = Math.ceil(h1 * ratio);
		}
		if (w1 < w) { 
			w1 = w;
			h1 = Math.ceil(w1 / ratio);
		}
		var l = Math.round((w1-w)/2);
		var t = Math.round((h1-h)/2);
		if (parseInt(video.attr('data-last-width'))==w1) return;
		if (mejs_cont.length > 0) {
			jacqueline_set_mejs_player_dimensions(video, w1, h1);
			mejs_cont.css({
				//'left': -l+'px',
				'top': -t+'px'
			});
		} else
			video.css({
				//'left': -l+'px',
				'top': -t+'px'
			});
		video.attr({'width': w1, 'height': h1, 'data-last-width':w1}).css({'width':w1+'px', 'height':h1+'px'});
		if (video.css('opacity')==0) video.animate({'opacity': 1}, 3000);
	});
	jQuery('iframe').each(function() {
		"use strict";
		var iframe = jQuery(this).eq(0);
		var ratio = (iframe.data('ratio')!=undefined ? iframe.data('ratio').split(':') : (iframe.find('[data-ratio]').length>0 ? iframe.find('[data-ratio]').data('ratio').split(':') : [16,9]));
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var w_attr = iframe.attr('width');
		var h_attr = iframe.attr('height');
		var frame = iframe.parents('.sc_video_frame');
		if (frame.length > 0) {
			w_attr = frame.data('width');
			h_attr = frame.data('height');
		}
		if (!w_attr || !h_attr) {
			return;
		}
		var percent = (''+w_attr).substr(-1)=='%';
		w_attr = parseInt(w_attr);
		h_attr = parseInt(h_attr);
		var w_real = frame.length > 0 ? frame.width() : iframe.width(),
			h_real = Math.round(percent ? w_real/ratio : w_real/w_attr*h_attr);
		if (parseInt(iframe.attr('data-last-width'))==w_real) return;
		iframe.css({'width': w_real+'px', 'height': h_real+'px'});
	});
}

// Resize fullscreen video background
function jacqueline_resize_video_background() {
	"use strict";
	var bg = jQuery('.video_bg');
	if (bg.length < 1) 
		return;
	if (JACQUELINE_STORAGE['media_elements_enabled'] && bg.find('.mejs-video').length == 0)  {
		setTimeout(jacqueline_resize_video_background, 100);
		return;
	}
	var video = bg.find('video');
	var ratio = (video.data('ratio')!=undefined ? video.data('ratio').split(':') : [16,9]);
	ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
	var w = bg.width();
	var h = bg.height();
	var w1 = Math.ceil(h*ratio);
	var h1 = Math.ceil(w/ratio);
	if (h1 < h) {
		h1 = h;
		w1 = Math.ceil(h1 * ratio);
	}
	if (w1 < w) { 
		w1 = w;
		h1 = Math.ceil(w1 / ratio);
	}
	var l = Math.round((w1-w)/2);
	var t = Math.round((h1-h)/2);
	if (bg.find('.mejs-container').length > 0) {
		jacqueline_set_mejs_player_dimensions(bg.find('video'), w1, h1);
		bg.find('.mejs-container').css({'left': -l+'px', 'top': -t+'px'});
	} else
		bg.find('video').css({'left': -l+'px', 'top': -t+'px'});
	bg.find('video').attr({'width': w1, 'height': h1}).css({'width':w1+'px', 'height':h1+'px'});
}

// Set Media Elements player dimensions
function jacqueline_set_mejs_player_dimensions(video, w, h) {
	"use strict";
	if (mejs) {
		for (var pl in mejs.players) {
			if (mejs.players[pl].media.src == video.attr('src')) {
				if (mejs.players[pl].media.setVideoSize) {
					mejs.players[pl].media.setVideoSize(w, h);
				}
				mejs.players[pl].setPlayerSize(w, h);
				mejs.players[pl].setControlsSize();
				//var mejs_cont = video.parents('.mejs-video');
				//mejs_cont.css({'width': w+'px', 'height': h+'px'}).find('.mejs-layers > div, .mejs-overlay, .mejs-poster').css({'width': w, 'height': h});
			}
		}
	}
}

// Resize Fullscreen Slider
function jacqueline_resize_fullscreen_slider() {
	"use strict";
	var slider_wrap = jQuery('.slider_wrap.slider_fullscreen');
	if (slider_wrap.length < 1) 
		return;
	var slider = slider_wrap.find('.sc_slider_swiper');
	if (slider.length < 1) 
		return;
	var h = jQuery(window).height() - jQuery('#wpadminbar').height() - (jQuery('body').hasClass('top_panel_above') && !jQuery('body').hasClass('.top_panel_fixed') ? jQuery('.top_panel_wrap').height() : 0);
	slider.height(h);
}

// Resize Alter portfolio elements
function jacqueline_resize_alter_portfolio() {
	"use strict";
	var wrap = jQuery('.isotope_wrap.inited');
	if (wrap.length==0) return;
	wrap.each(function() {
		"use strict";
		var alter = jQuery(this).find('.post_item_alter');
		if (alter.length==0) return;
		var single = alter.find('.post_featured img[data-alter-items-w="1"]').eq(0);
		if (single.length != 1) return;
		var w_real = single.width();
		var h_real = single.height();
		var space = Number(single.data('alter-item-space'));
		var relayout = false;
		alter.find('.post_featured img').each(function() {
			"use strict";
			var items_w = Number(jQuery(this).data('alter-items-w'));
			var items_h = Number(jQuery(this).data('alter-items-h'));
			if (items_h > 1) {
				jQuery(this).height(Math.round(items_h*h_real+(items_h-1)*(space+1)));
				relayout = true;
			} else if (items_w > 1) {
				jQuery(this).height(h_real);
				relayout = true;
			}
		});
		if (relayout) {
			jQuery(this).isotope('layout');
		}
	});
}


// Navigation
//==============================================

// Init Superfish menu
function jacqueline_init_sfmenu(selector) {
	jQuery(selector).show().each(function() {
		if (jacqueline_is_responsive_need() && (jQuery(this).attr('id')=='menu_main' || jQuery(this).attr('id')=='menu_side')) return;
		jQuery(this).addClass('inited').superfish({
			delay: 500,
			animation: {
				opacity: 'show'
			},
			animationOut: {
				opacity: 'hide'
			},
			speed: 		JACQUELINE_STORAGE['css_animation'] ? 500 : (JACQUELINE_STORAGE['menu_slider'] ? 300 : 200),
			speedOut:	JACQUELINE_STORAGE['css_animation'] ? 500 : (JACQUELINE_STORAGE['menu_slider'] ? 300 : 200),
			autoArrows: false,
			dropShadows: false,
			onBeforeShow: function(ul) {
				if (jQuery(this).parents("ul").length > 1){
					var w = jQuery(window).width();  
					var par_offset = jQuery(this).parents("ul").offset().left;
					var par_width  = jQuery(this).parents("ul").outerWidth();
					var ul_width   = jQuery(this).outerWidth();
					if (par_offset+par_width+ul_width > w-20 && par_offset-ul_width > 0)
						jQuery(this).addClass('submenu_left');
					else
						jQuery(this).removeClass('submenu_left');
				}
				if (JACQUELINE_STORAGE['css_animation']) {
					jQuery(this).removeClass('animated fast '+JACQUELINE_STORAGE['menu_animation_out']);
					jQuery(this).addClass('animated fast '+JACQUELINE_STORAGE['menu_animation_in']);
				}
			},
			onBeforeHide: function(ul) {
				if (JACQUELINE_STORAGE['css_animation']) {
					jQuery(this).removeClass('animated fast '+JACQUELINE_STORAGE['menu_animation_in']);
					jQuery(this).addClass('animated fast '+JACQUELINE_STORAGE['menu_animation_out']);
				}
			}
		});
	});
}

// Build page TOC from the tag's id
function jacqueline_build_page_toc() {
	"use strict";
	var toc = '', toc_count = 0;
	jQuery('[id^="toc_"],.sc_anchor').each(function(idx) {
		"use strict";
		var obj = jQuery(this);
		var id = obj.attr('id');
		var url = obj.data('url');
		var icon = obj.data('icon');
		if (!icon) icon = 'icon-circle-dot';
		var title = obj.attr('title');
		var description = obj.data('description');
		var separator = obj.data('separator');
		toc_count++;
		toc += '<div class="toc_item'+(separator=='yes' ? ' toc_separator' : '')+'">'
			+(description ? '<div class="toc_description">'+description+'</div>' : '')
			+'<a href="'+(url ? url : '#'+id)+'" class="toc_icon'+(title ? ' with_title' : '')+' '+icon+'">'+(title ? '<span class="toc_title">'+title+'</span>' : '')+'</a>'
			+'</div>';
	});
	if (toc_count > (JACQUELINE_STORAGE['toc_menu_home'] ? 1 : 0) + (JACQUELINE_STORAGE['toc_menu_top'] ? 1 : 0)) {
		if (jQuery('#toc').length > 0)
			jQuery('#toc .toc_inner').html(toc);
		else
			jQuery('body').append('<div id="toc" class="toc_'+JACQUELINE_STORAGE['toc_menu']+'"><div class="toc_inner">'+toc+'</div></div>');
	}
}

// Show current page title on the responsive menu button
function jacqueline_show_current_menu_item(menu, button) {
	"use strict";
	menu.find('a').each(function () {
		var menu_link = jQuery(this);
		if (menu_link.text() == "") {
			return;
		}
		if (menu_link.attr('href') == window.location.href)
			button.text(menu_link.text());
	});
}

// Post formats init
//=====================================================
function jacqueline_init_post_formats() {
	"use strict";

	// Call theme specific action (if exists)
	if (window.jacqueline_theme_init_post_formats) jacqueline_theme_init_post_formats();

	// MediaElement init
	jacqueline_init_media_elements(jQuery('body'));
	
	// Isotope first init
	if (jQuery('.isotope_wrap:not(.inited)').length > 0) {
		JACQUELINE_STORAGE['isotope_init_counter'] = 0;
		jacqueline_init_isotope();
	}

	// Hover Effect 'Dir'
	if (jQuery('.isotope_wrap .isotope_item_content.square.effect_dir:not(.inited)').length > 0) {
		jQuery('.isotope_wrap .isotope_item_content.square.effect_dir:not(.inited)').each(function() {
			jQuery(this).addClass('inited').hoverdir();
		});
	}

	// Popup init
	if (JACQUELINE_STORAGE['popup_engine'] == 'pretty') {
		jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'prettyPhoto[slideshow]');
		var images = jQuery("a[rel*='prettyPhoto']:not(.inited):not(.esgbox):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])").addClass('inited');
		try {
			images.prettyPhoto({
				social_tools: '',
				theme: 'facebook',
				deeplinking: false
			});
		} catch (e) {};
	} else if (JACQUELINE_STORAGE['popup_engine']=='magnific') {
		jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'magnific');
		var images = jQuery("a[rel*='magnific']:not(.inited):not(.esgbox):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])").addClass('inited');
		try {
			images.magnificPopup({
				type: 'image',
				mainClass: 'mfp-img-mobile',
				closeOnContentClick: true,
				closeBtnInside: true,
				fixedContentPos: true,
				midClick: true,
				//removalDelay: 500, 
				preloader: true,
				gallery:{
					enabled: true
				},
				image: {
					verticalFit: true
				}
			});
		} catch (e) {};
	}


	// Add hover icon to products thumbnails
	jQuery(".post_item_product .product .images a.woocommerce-main-image:not(.hover_icon)").addClass('hover_icon hover_icon_view');


	// Likes counter
	if (jQuery('.post_counters_likes:not(.inited)').length > 0) {
		jQuery('.post_counters_likes:not(.inited)')
			.addClass('inited')
			.on('click', function(e) {
				var button = jQuery(this);
				var inc = button.hasClass('enabled') ? 1 : -1;
				var post_id = button.data('postid');
				var likes = Number(button.data('likes'))+inc;
				var cookie_likes = jacqueline_get_cookie('jacqueline_likes');
				if (cookie_likes === undefined || cookie_likes===null) cookie_likes = '';
				jQuery.post(JACQUELINE_STORAGE['ajax_url'], {
					action: 'post_counter',
					nonce: JACQUELINE_STORAGE['ajax_nonce'],
					post_id: post_id,
					likes: likes
				}).done(function(response) {
					var rez = {};
					try {
						rez = JSON.parse(response);
					} catch (e) {
						rez = { error: JACQUELINE_STORAGE['ajax_error'] };
						console.log(response);
					}
					if (rez.error === '') {
						if (inc == 1) {
							var title = button.data('title-dislike');
							button.removeClass('enabled').addClass('disabled');
							cookie_likes += (cookie_likes.substr(-1)!=',' ? ',' : '') + post_id + ',';
						} else {
							var title = button.data('title-like');
							button.removeClass('disabled').addClass('enabled');
							cookie_likes = cookie_likes.replace(','+post_id+',', ',');
						}
						button.data('likes', likes).attr('title', title).find('.post_counters_number').html(likes);
						jacqueline_set_cookie('jacqueline_likes', cookie_likes, 365);
					} else {
						jacqueline_message_warning(JACQUELINE_STORAGE['strings']['error_like']);
					}
				});
				e.preventDefault();
				return false;
			});
	}

	// Social share links
	if (jQuery('.sc_socials_share:not(.inited)').length > 0) {
		jQuery('.sc_socials_share:not(.inited)').each(function() {
			"use strict";
			jQuery(this).addClass('inited').on('click', '.social_item_popup > a.social_icons', function(e) {
				"use strict";
				var url = jQuery(this).data('link');
				window.open(url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0');
				e.preventDefault();
				return false;
			});
		});
	}

	// Add video on thumb click
	if (jQuery('.sc_video_play_button:not(.inited)').length > 0) {
		jQuery('.sc_video_play_button:not(.inited)').each(function() {
			"use strict";
			jQuery(this)
				.addClass('inited')
				.animate({opacity: 1}, 1000)
				.on('click', function (e) {
					"use strict";
					if (!jQuery(this).hasClass('sc_video_play_button')) return;
					var video = jQuery(this).removeClass('sc_video_play_button hover_icon hover_icon_play').data('video');
					if (video!=='') {
						jQuery(this).empty().html(video);
						jacqueline_video_dimensions();
						var video_tag = jQuery(this).find('video');
						var w = video_tag.width();
						var h = video_tag.height();
						jacqueline_init_media_elements(jQuery(this));
						// Restore WxH attributes, because Chrome broke it!
						jQuery(this).find('video').css({'width':w, 'height': h}).attr({'width':w, 'height': h});
					}
					e.preventDefault();
					return false;
				});
		});
	}

	// Tribe Events buttons
	jQuery('a.tribe-events-read-more,.tribe-events-button,.tribe-events-nav-previous a,.tribe-events-nav-next a,.tribe-events-widget-link a,.tribe-events-viewmore a').addClass('sc_button sc_button_style_filled');
}

function jacqueline_init_media_elements(cont) {
	if (JACQUELINE_STORAGE['media_elements_enabled'] && cont.find('audio,video').length > 0) {
		if (window.mejs) {
			window.mejs.MepDefaults.enableAutosize = false;
			window.mejs.MediaElementDefaults.enableAutosize = false;
			cont.find('audio:not(.wp-audio-shortcode),video:not(.wp-video-shortcode)').each(function() {
				if (jQuery(this).parents('.mejs-mediaelement').length == 0) {
					var media_tag = jQuery(this);
					var settings = {
						enableAutosize: true,
						videoWidth: -1,		// if set, overrides <video width>
						videoHeight: -1,	// if set, overrides <video height>
						audioWidth: '100%',	// width of audio player
						audioHeight: 30,	// height of audio player
						success: function(mejs) {
							var autoplay, loop;
							if ( 'flash' === mejs.pluginType ) {
								autoplay = mejs.attributes.autoplay && 'false' !== mejs.attributes.autoplay;
								loop = mejs.attributes.loop && 'false' !== mejs.attributes.loop;
								autoplay && mejs.addEventListener( 'canplay', function () {
									mejs.play();
								}, false );
								loop && mejs.addEventListener( 'ended', function () {
									mejs.play();
								}, false );
							}
							media_tag.parents('.sc_audio,.sc_video').addClass('inited sc_show');
						}
					};
					jQuery(this).mediaelementplayer(settings);
				}
			});
		} else
			setTimeout(function() { jacqueline_init_media_elements(cont); }, 400);
	}
}

// Show system message (bubble from previous page)
//==============================================
function jacqueline_show_system_message() {
	if (JACQUELINE_STORAGE['system_message'] && JACQUELINE_STORAGE['system_message']['message']) {
		if (JACQUELINE_STORAGE['system_message']['status'] == 'success')
			jacqueline_message_success(JACQUELINE_STORAGE['system_message']['message'], JACQUELINE_STORAGE['system_message']['header']);
		else if (JACQUELINE_STORAGE['system_message']['status'] == 'info')
			jacqueline_message_info(JACQUELINE_STORAGE['system_message']['message'], JACQUELINE_STORAGE['system_message']['header']);
		else if (JACQUELINE_STORAGE['system_message']['status'] == 'error' || JACQUELINE_STORAGE['system_message']['status'] == 'warning')
			jacqueline_message_warning(JACQUELINE_STORAGE['system_message']['message'], JACQUELINE_STORAGE['system_message']['header']);
	}
}

// autocomplete for booking form
//=====================================================
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
    
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
    
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// contact form submission and error checking
//=====================================================
jQuery(document).ready(function ($) {
    $("#contact-form").submit(function() {
        if ($("#contact-name-input").val() == "") {
            $("#contact-name-input").removeClass("contact-form-success");
            $("#contact-name-input").addClass("contact-form-error");
        } else {
            $("#contact-name-input").removeClass("contact-form-error");
            $("#contact-name-input").addClass("contact-form-success");
        }

        if ($("#contact-email-input").val() == "") {
            $("#contact-email-input").removeClass("contact-form-success");
            $("#contact-email-input").addClass("contact-form-error");
        } else {
            $("#contact-email-input").removeClass("contact-form-error");
            $("#contact-email-input").addClass("contact-form-success");
        }
        
        if ($("#contact-phonenumber-input").val() == "") {
            $("#contact-phonenumber-input").removeClass("contact-form-success");
        } else {
            $("#contact-phonenumber-input").addClass("contact-form-success");
        }
        
        if ($("#contact-subject-input").val() == "") {
            $("#contact-subject-input").removeClass("contact-form-success");
        } else {
            $("#contact-subject-input").addClass("contact-form-success");
        }

        if ($("#contact-message-input").val() == "") {
            $("#contact-message-input").removeClass("contact-form-success");
            $("#contact-message-input").addClass("contact-form-error");
        } else {
            $("#contact-message-input").removeClass("contact-form-error");
            $("#contact-message-input").addClass("contact-form-success");
        }

        if ($("#contact-name-input").val() != "" && $("#contact-email-input").val() != "" && $("#contact-message-input").val() != "")
            return true;
        else
            return false;
    });
});

// booking form submission and error checking
//=====================================================
jQuery(document).ready(function ($) {
    $("#booking-form").submit(function() {
        if ($("#booking-locationhotel-input").val() == "") {
            $("#booking-locationhotel-input").removeClass("contact-form-success");
            $("#booking-locationhotel-input").addClass("contact-form-error");
        } else {
            $("#booking-locationhotel-input").removeClass("contact-form-error");
            $("#booking-locationhotel-input").addClass("contact-form-success");
        }
        
        if ($("#booking-roomaddress-input").val() == "") {
            $("#booking-roomaddress-input").removeClass("contact-form-success");
        } else {
            $("#booking-roomaddress-input").addClass("contact-form-success");
        }
        
        if ($("#booking-phonenumber-input").val() == "") {
            $("#booking-phonenumber-input").removeClass("contact-form-success");
            $("#booking-phonenumber-input").addClass("contact-form-error");
        } else {
            $("#booking-phonenumber-input").removeClass("contact-form-error");
            $("#booking-phonenumber-input").addClass("contact-form-success");
        }
        
        if ($("#booking-email-input").val() == "") {
            $("#booking-email-input").removeClass("contact-form-success");
            $("#booking-email-input").addClass("contact-form-error");
        } else {
            $("#booking-email-input").removeClass("contact-form-error");
            $("#booking-email-input").addClass("contact-form-success");
        }
        
        if ($("#dropdown-contactmethod").val() == null) {
            $("#booking-contactmethod-input").removeClass("contact-form-success");
            $("#booking-contactmethod-input").addClass("contact-form-error");
        } else {
            $("#booking-contactmethod-input").removeClass("contact-form-error");
            $("#booking-contactmethod-input").addClass("contact-form-success");
        }
        
        if ($("#booking-firstname-input").val() == "") {
            $("#booking-firstname-input").removeClass("contact-form-success");
            $("#booking-firstname-input").addClass("contact-form-error");
        } else {
            $("#booking-firstname-input").removeClass("contact-form-error");
            $("#booking-firstname-input").addClass("contact-form-success");
        }
        
        if ($("#booking-lastname-input").val() == "") {
            $("#booking-lastname-input").removeClass("contact-form-success");
            $("#booking-lastname-input").addClass("contact-form-error");
        } else {
            $("#booking-lastname-input").removeClass("contact-form-error");
            $("#booking-lastname-input").addClass("contact-form-success");
        }
        
        if ($("#booking-numguests-input").val() == "") {
            $("#booking-numguests-input").removeClass("contact-form-success");
            $("#booking-numguests-input").addClass("contact-form-error");
        } else {
            $("#booking-numguests-input").removeClass("contact-form-error");
            $("#booking-numguests-input").addClass("contact-form-success");
        }
        
        if ($("#dropdown-treatmenttype").val() == null) {
            $("#booking-treatmenttype-input").removeClass("contact-form-success");
            $("#booking-treatmenttype-input").addClass("contact-form-error");
        } else {
            $("#booking-treatmenttype-input").removeClass("contact-form-error");
            $("#booking-treatmenttype-input").addClass("contact-form-success");
        }
        
        if ($("#dropdown-treatmentlength").val() == null) {
            $("#booking-treatmentlength-input").removeClass("contact-form-success");
            $("#booking-treatmentlength-input").addClass("contact-form-error");
        } else {
            $("#booking-treatmentlength-input").removeClass("contact-form-error");
            $("#booking-treatmentlength-input").addClass("contact-form-success");
        }
        
        if ($("#dropdown-preferredtherapist").val() == null) {
            $("#booking-preferredtherapist-input").removeClass("contact-form-success");
            $("#booking-preferredtherapist-input").addClass("contact-form-error");
        } else {
            $("#booking-preferredtherapist-input").removeClass("contact-form-error");
            $("#booking-preferredtherapist-input").addClass("contact-form-success");
        }
        
        if ($("#booking-preferreddate-input").val() == "") {
            $("#booking-preferreddate-input").removeClass("contact-form-success");
            $("#booking-preferreddate-input").addClass("contact-form-error");
        } else {
            $("#booking-preferreddate-input").removeClass("contact-form-error");
            $("#booking-preferreddate-input").addClass("contact-form-success");
        }
        
        if ($("#booking-preferredtime-input").val() == "") {
            $("#booking-preferredtime-input").removeClass("contact-form-success");
            $("#booking-preferredtime-input").addClass("contact-form-error");
        } else {
            $("#booking-preferredtime-input").removeClass("contact-form-error");
            $("#booking-preferredtime-input").addClass("contact-form-success");
        }
        
        if ($("#booking-comments-input").val() == "") {
            $("#booking-comments-input").removeClass("contact-form-success");
        } else {
            $("#booking-comments-input").addClass("contact-form-success");
        }
        
        if ($("#booking-locationhotel-input").val() != "" && $("#booking-phonenumber-input").val() != "" && $("#booking-email-input").val() != "" && $("#dropdown-contactmethod").val() != null && $("#booking-firstname-input").val() != "" && $("#booking-lastname-input").val() != "" && $("#booking-numguests-input").val() != "" && $("#dropdown-treatmenttype").val() != null && $("#dropdown-treatmentlength").val() != null && $("#dropdown-preferredtherapist").val() != null && $("#booking-preferreddate-input").val() != "" && $("#booking-preferredtime-input").val() != "")
            return true;
        else
            return false;
    });
});

/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* -------------------- theme.shortcodes --------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */

// Init actions
function jacqueline_sc_init_actions() {
	"use strict";
	setTimeout(function() {
		jacqueline_sc_animation();
	}, 600);
	
	// MenuItems - init once
	jacqueline_menuitems_init();

	// Init sc in container
	jacqueline_sc_init(jQuery('body').eq(0));
}

// Animation
function jacqueline_sc_animation() {
	jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
		"use strict";
		if (jQuery(this).offset().top < jQuery(window).scrollTop() + jQuery(window).height())
			jQuery(this).addClass(jQuery(this).data('animation'));
	});
}

// Shortcodes init
function jacqueline_sc_init(container) {

	// Call theme specific action (if exists)
	if (window.jacqueline_theme_sc_init) jacqueline_theme_sc_init(container);

	// Accordion
	if (container.find('.sc_accordion:not(.inited)').length > 0) {
		container.find(".sc_accordion:not(.inited)").each(function () {
			"use strict";
			var init = jQuery(this).data('active');
			if (isNaN(init)) init = 0;
			else init = Math.max(0, init);
			jQuery(this)
				.addClass('inited')
				.accordion({
					active: init,
					heightStyle: "content",
					header: "> .sc_accordion_item > .sc_accordion_title",
					create: function (event, ui) {
						"use strict";
						jacqueline_sc_init(ui.panel);
						if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(ui.panel);
						ui.header.each(function () {
							"use strict";
							jQuery(this).parent().addClass('sc_active');
						});
					},
					activate: function (event, ui) {
						"use strict";
						jacqueline_sc_init(ui.newPanel);
						if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(ui.newPanel);
						ui.newHeader.each(function () {
							"use strict";
							jQuery(this).parent().addClass('sc_active');
						});
						ui.oldHeader.each(function () {
							"use strict";
							jQuery(this).parent().removeClass('sc_active');
						});
					}
				});
		});
	}

	// Blogger: style Polaroid
	if (container.find('.sc_blogger.layout_polaroid .photostack:not(.inited)').length > 0) {
		container.find(".sc_blogger.layout_polaroid .photostack:not(.inited)").each(function () {
			"use strict";
			var obj = jQuery(this);
			var id = obj.attr('id');
			if (id == undefined) {
				id = 'photostack_'+Math.random();
				id = id.replace('.', '');
				obj.attr('id', id);
			}
			setTimeout(function() {
				"use strict";
				obj.addClass('inited').parent().height("auto");
				new Photostack( obj.get(0), {
					callback: function( item ) {
					}
				} );
			}, 10);
		});
	}

	// Blogger: Scroll horizontal
	if (container.find('.sc_blogger .sc_scroll_horizontal .sc_scroll_wrapper:not(.inited)').length > 0) {
		container.find(".sc_blogger .sc_scroll_horizontal .sc_scroll_wrapper:not(.inited)").each(function () {
			"use strict";
			var obj = jQuery(this);
			var width = 0;
			obj.find('.isotope_item').each(function(){
				"use strict";
				width += jQuery(this).outerWidth();
			});
			obj.addClass('inited').width(width);
		});
	}
	
	// Blogger: Scroll horizontal
	setTimeout(function(){
		if (container.find('.isotope_item_portfolio').length > 0) {
			container.find(".isotope_item_portfolio").each(function () {
				"use strict";
				var obj = jQuery(this);
				var width = jQuery(this).width();
				if(width < 460){
					jQuery(this).addClass('smaller');
				}
			});
		}}, 500);

	// Countdown
	if (container.find('.sc_countdown:not(.inited)').length > 0) {
		container.find('.sc_countdown:not(.inited)')
			.each(function () {
				"use strict";
				jQuery(this).addClass('inited');
				var id = jQuery(this).attr('id');
				var curDate = new Date(); 
				var curDateTimeStr = curDate.getFullYear()+'-'+(curDate.getMonth()<9 ? '0' : '')+(curDate.getMonth()+1)+'-'+(curDate.getDate()<10 ? '0' : '')+curDate.getDate()
					+' '+(curDate.getHours()<10 ? '0' : '')+curDate.getHours()+':'+(curDate.getMinutes()<10 ? '0' : '')+curDate.getMinutes()+':'+(curDate.getSeconds()<10 ? '0' : '')+curDate.getSeconds(); 
				var interval = 1;	//jQuery(this).data('interval');
				var endDateStr = jQuery(this).data('date');
				var endDateParts = endDateStr.split('-');
				var endTimeStr = jQuery(this).data('time');
				var endTimeParts = endTimeStr.split(':');
				if (endTimeParts.length < 3) endTimeParts[2] = '00';
				var endDateTimeStr = endDateStr+' '+endTimeStr;
				if (curDateTimeStr < endDateTimeStr) {
					jQuery(this).find('.sc_countdown_placeholder').countdown({
						until: new Date(endDateParts[0], endDateParts[1]-1, endDateParts[2], endTimeParts[0], endTimeParts[1], endTimeParts[2]), 
						tickInterval: interval,
						onTick: jacqueline_countdown
					}); 
				} else {
					jQuery(this).find('.sc_countdown_placeholder').countdown({
						since: new Date(endDateParts[0], endDateParts[1]-1, endDateParts[2], endTimeParts[0], endTimeParts[1], endTimeParts[2]), 
						tickInterval: interval,
						onTick: jacqueline_countdown
					}); 
				}
			});
	}

	// Emailer form
	if (container.find('.sc_emailer:not(.inited)').length > 0) {
		container.find(".sc_emailer:not(.inited)")
			.addClass('inited')
			.on('click', '.sc_emailer_button', function(e) {
				"use strict";
				var form = jQuery(this).parents('form');
				var parent = jQuery(this).parents('.sc_emailer');
				if (parent.hasClass('sc_emailer_opened')) {
					if (form.length>0 && form.find('input').val()!='') {
						var group = jQuery(this).data('group');
						var email = form.find('input').val();
						var regexp = new RegExp(JACQUELINE_STORAGE['email_mask']);
						if (!regexp.test(email)) {
							form.find('input').get(0).focus();
							jacqueline_message_warning(JACQUELINE_STORAGE['strings']['email_not_valid']);
						} else {
							jQuery.post(JACQUELINE_STORAGE['ajax_url'], {
								action: 'emailer_submit',
								nonce: JACQUELINE_STORAGE['ajax_nonce'],
								group: group,
								email: email
							}).done(function(response) {
								"use strict";
								var rez = {};
								try {
									rez = JSON.parse(response);
								} catch (e) {
									rez = { error: JACQUELINE_STORAGE['ajax_error'] };
									console.log(response);
								}
								if (rez.error === '') {
									jacqueline_message_info(JACQUELINE_STORAGE['strings']['email_confirm'].replace('%s', email));
									form.find('input').val('');
								} else {
									jacqueline_message_warning(rez.error);
								}
							});
						}
					} else
						form.get(0).submit();
				} else {
					parent.addClass('sc_emailer_opened');
				}
				e.preventDefault();
				return false;
			});
	}
	
	// Googlemap init
	if (container.find('.sc_googlemap:not(.inited)').length > 0) {
		container.find('.sc_googlemap:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				var map = jQuery(this).addClass('inited');
				var map_id		= map.attr('id');
				var map_zoom	= map.data('zoom');
				var map_style	= map.data('style');
				var map_markers = [];
				map.find('.sc_googlemap_marker').each(function() {
					"use strict";
					var marker = jQuery(this);
					map_markers.push({
						point:			marker.data('point'),
						address:		marker.data('address'),
						latlng:			marker.data('latlng'),
						description:	marker.data('description'),
						title:			marker.data('title')
					});
				});
				jacqueline_googlemap_init( jQuery('#'+map_id).get(0), {style: map_style, zoom: map_zoom, markers: map_markers});
			});
	}

	// Infoboxes
	if (container.find('.sc_infobox.sc_infobox_closeable:not(.inited)').length > 0) {
		container.find('.sc_infobox.sc_infobox_closeable:not(.inited)')
			.addClass('inited')
			.on('click', function (e) {
				"use strict";
				jQuery(this).slideUp();
				e.preventDefault();
				return false;
			});
	}

	// Matches
	if (container.find('.sc_matches:not(.inited)').length > 0) {
		container.find('.sc_matches:not(.inited)')
			.each(function () {
				"use strict";
				jQuery(this).find('.sc_matches_next .sc_matches_list .sc_match').on('click', function () {
					"use strict";
					jQuery(this).parents('.sc_matches').find('.sc_matches_current .sc_match').hide();
					var item = jQuery(this).data('item');
					jQuery(item).fadeIn();
				});
			});
	}

	// Matches & Players: Sort players by points
	if (container.find('.sc_players_table:not(.inited)').length > 0) {
		container.find('.sc_players_table:not(.inited)')
			.addClass('inited')
			.on('click', '.sort', function (e) {
				"use strict";
				var table = jQuery(this).parents('.sc_players_table');
				var id = jQuery(table).attr('id')
				var sort = jQuery(table).data('sort') == 'asc' ? 'desc' : 'asc';
				jQuery.post(JACQUELINE_STORAGE['ajax_url'], {
					action: 'sort_by_points',
					nonce: JACQUELINE_STORAGE['ajax_nonce'],
					sort: sort,
					table: JACQUELINE_STORAGE['ajax_' + id]
				}).done(function(response) {
					var rez = {};
					try {
						rez = JSON.parse(response);
					} catch (e) {
						rez = { error: JACQUELINE_STORAGE['ajax_error'] };
						console.log(response);
					}
					if (rez.error === '') { 
						jQuery(table).find('.sc_table').remove();
						jQuery(table).find('script').after(rez.data);
						jQuery(table).data('sort', sort);
						jacqueline_select_players_category(jQuery(table).find('.sc_players_table_category select'));		
					}
				});
				e.preventDefault();
				return false;
			});
	}
	
	// Matches & Players: Select category in the points table
	if (container.find('.sc_players_table_category:not(.inited)').length > 0) {
		container.find('.sc_players_table_category:not(.inited)')
			.addClass('inited')
			.on('change', function () {
				"use strict";
				jacqueline_select_players_category(jQuery(this));		
			});
	}

	// Popup links
	if (container.find('.sc_popup_link:not(.inited)').length > 0) {
		container.find('.sc_popup_link:not(.inited)').each(function() {
			var popup_id = jQuery(this).attr('href');
			jQuery(this)
				.addClass('inited')
				.magnificPopup({
					type: 'inline',
					removalDelay: 500,
					midClick: true,
					callbacks: {
						beforeOpen: function () {
							this.st.mainClass = 'mfp-zoom-in';
						},
						open: function() {
							"use strict";
							jacqueline_sc_init(jQuery(popup_id));
							jacqueline_resize_actions();
							if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(jQuery(popup_id));
						},
						close: function() {}
					}
				});
		});
	}

	// Recent news widget and sc
	if (container.find('.sc_recent_news_header_category_item_more:not(.inited)').length > 0) {
		container.find('.sc_recent_news_header_category_item_more:not(.inited)').each(function() {
			"use strict";
			jQuery(this)
				.addClass('inited')
				.on('click', function(e) {
					"use strict";
					jQuery(this).toggleClass('opened').find('.sc_recent_news_header_more_categories').slideToggle();
					e.preventDefault();
					return false;
				});
		});
	}

	// Search form
	if (container.find('.search_wrap:not(.inited)').length > 0) {
		container.find('.search_wrap:not(.inited)').each(function() {
			"use strict";
			jQuery(this)
				.addClass('inited')
				.on('click', '.search_submit', function(e) {
					"use strict";
					var search_wrap = jQuery(this).parents('.search_wrap');
					if (!search_wrap.hasClass('search_state_fixed')) {
						if (search_wrap.hasClass('search_state_opened')) {
							if (search_wrap.find('.search_field').val() != '')
								search_wrap.find('form').get(0).submit();
							else
								search_wrap.removeClass('search_state_opened').addClass('search_state_closed').find('.search_results').fadeOut();
						} else
							search_wrap.removeClass('search_state_closed').addClass('search_state_opened').find('.search_field').get(0).focus();
					} else {
						if (search_wrap.find('.search_field').val() != '')
							search_wrap.find('form').get(0).submit();
						else {
							search_wrap.find('.search_field').val('');
							search_wrap.find('.search_results').fadeOut();
						}
					}
					e.preventDefault();
					return false;
				})
				.on('click', '.search_results_close', function(e) {
					"use strict";
					jQuery(this).parent().fadeOut();
					e.preventDefault();
					return false;
				})
				.on('click', '.search_more', function(e) {
					"use strict";
					if (jQuery(this).parents('.search_wrap').find('.search_field').val() != '')
						jQuery(this).parents('.search_wrap').find('form').get(0).submit();
					e.preventDefault();
					return false;
				});
			if (jQuery(this).hasClass('search_ajax')) {
				var ajax_timer = null;
				jQuery(this).find('.search_field').keyup(function(e) {
					"use strict";
					var search_field = jQuery(this);
					var s = search_field.val();
					if (ajax_timer) {
						clearTimeout(ajax_timer);
						ajax_timer = null;
					}
					if (s.length >= JACQUELINE_STORAGE['ajax_search_min_length']) {
						ajax_timer = setTimeout(function() {
							"use strict";
							jQuery.post(JACQUELINE_STORAGE['ajax_url'], {
								action: 'ajax_search',
								nonce: JACQUELINE_STORAGE['ajax_nonce'],
								text: s
							}).done(function(response) {
								"use strict";
								clearTimeout(ajax_timer);
								ajax_timer = null;
								var rez = {};
								try {
									rez = JSON.parse(response);
								} catch (e) {
									rez = { error: JACQUELINE_STORAGE['ajax_error'] };
									console.log(response);
								}
								if (rez.error === '') {
									search_field.parents('.search_ajax').find('.search_results_content').empty().append(rez.data);
									search_field.parents('.search_ajax').find('.search_results').fadeIn();
								} else {
									jacqueline_message_warning(JACQUELINE_STORAGE['strings']['search_error']);
								}
							});
						}, JACQUELINE_STORAGE['ajax_search_delay']);
					}
				});
			}
		});
	}

	// Section Pan init
	if (container.find('.sc_pan:not(.inited_pan)').length > 0) {
		container.find('.sc_pan:not(.inited_pan)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				var pan = jQuery(this).addClass('inited_pan');
				var cont = pan.parent();
				cont.mousemove(function(e) {
					"use strict";
					var anim = {};
					var tm = 0;
					var pw = pan.width(), ph = pan.height();
					var cw = cont.width(), ch = cont.height();
					var coff = cont.offset();
					if (pan.hasClass('sc_pan_vertical'))
						pan.css('top', -Math.floor((e.pageY - coff.top) / ch * (ph-ch)));
					if (pan.hasClass('sc_pan_horizontal'))
						pan.css('left', -Math.floor((e.pageX - coff.left) / cw * (pw-cw)));
				});
				cont.mouseout(function(e) {
					"use strict";
					pan.css({'left': 0, 'top': 0});
				});
			});
	}

	// Scroll
	if (container.find('.sc_scroll:not(.inited)').length > 0) {
		container.find('.sc_scroll:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				JACQUELINE_STORAGE['scroll_init_counter'] = 0;
				jacqueline_sc_init_scroll_area(jQuery(this));
			});
	}

	// Swiper Slider
	if (container.find('.sc_slider_swiper:not(.inited)').length > 0) {
		container.find('.sc_slider_swiper:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				//if (jQuery(this).parents('.isotope_wrap:not(.inited)').length > 0) return;
				jQuery(this).addClass('inited');
				jacqueline_sc_slider_autoheight(jQuery(this));
				if (jQuery(this).parents('.sc_slider_pagination_area').length > 0) {
					jQuery(this).parents('.sc_slider_pagination_area').find('.sc_slider_pagination .post_item').eq(0).addClass('active');
				}
				var id = jQuery(this).attr('id');
				if (id == undefined) {
					id = 'swiper_'+Math.random();
					id = id.replace('.', '');
					jQuery(this).attr('id', id);
				}
				jQuery(this).addClass(id);
				jQuery(this).find('.slides .swiper-slide').css('position', 'relative');
				var width = jQuery(this).width();
				if (width == 0) width = jQuery(this).parent().width();
				var spv = jQuery(this).data('slides-per-view');
				if (spv == undefined) spv = 1;
				var min_width = jQuery(this).data('slides-min-width');
				if (min_width == undefined) min_width = 50;
				if (width / spv < min_width) spv = Math.max(1, Math.floor(width / min_width));
				var space = jQuery(this).data('slides-space');
				if (space == undefined) space = 0;
				if (JACQUELINE_STORAGE['swipers'] === undefined) JACQUELINE_STORAGE['swipers'] = {};
				JACQUELINE_STORAGE['swipers'][id] = new Swiper('.'+id, {
					calculateHeight: !jQuery(this).hasClass('sc_slider_height_fixed'),
					resizeReInit: true,
					autoResize: true,
					loop: true,
					grabCursor: true,
			        nextButton: jQuery(this).hasClass('sc_slider_controls') ? '#'+id+' .sc_slider_next' : false,
			        prevButton: jQuery(this).hasClass('sc_slider_controls') ? '#'+id+' .sc_slider_prev' : false,
					pagination: jQuery(this).hasClass('sc_slider_pagination') ? '#'+id+' .sc_slider_pagination_wrap' : false,
				    paginationClickable: true,
					autoplay: jQuery(this).hasClass('sc_slider_noautoplay') ? false : (isNaN(jQuery(this).data('interval')) ? 7000 : jQuery(this).data('interval')),
					autoplayDisableOnInteraction: false,
					initialSlide: 0,
					slidesPerView: spv,
					loopedSlides: spv,
					spaceBetween: space,
					speed: 600,
					// Autoheight on start
					onFirstInit: function (slider){
						"use strict";
						var cont = jQuery(slider.container);
						if (!cont.hasClass('sc_slider_height_auto')) return;
						var li = cont.find('.swiper-slide').eq(1);
						var h = li.data('height_auto');
						if (h > 0) {
							var pt = parseInt(li.css('paddingTop')), pb = parseInt(li.css('paddingBottom'));
							li.height(h);
							cont.height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
							cont.find('.swiper-wrapper').height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
						}
					},
					// Autoheight on slide change
					onSlideChangeStart: function (slider){
						"use strict";
						var cont = jQuery(slider.container);
						if (!cont.hasClass('sc_slider_height_auto')) return;
						var idx = slider.activeIndex;
						var li = cont.find('.swiper-slide').eq(idx);
						var h = li.data('height_auto');
						if (h > 0) {
							var pt = parseInt(li.css('paddingTop')), pb = parseInt(li.css('paddingBottom'));
							li.height(h);
							cont.height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
							cont.find('.swiper-wrapper').height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
						}
					},
					// Change current item in 'full' or 'over' pagination wrap
					onSlideChangeEnd: function (slider, dir) {
						"use strict";
						var cont = jQuery(slider.container);
						if (cont.parents('.sc_slider_pagination_area').length > 0) {
							var li = cont.parents('.sc_slider_pagination_area').find('.sc_slider_pagination .post_item');
							var idx = slider.activeIndex > li.length ? 0 : slider.activeIndex-1;
							jacqueline_sc_change_active_pagination_in_slider(cont, idx);
						}
					}
				});
				
				jQuery(this).data('settings', {mode: 'horizontal'});		// VC hook
				
				var curSlide = jQuery(this).find('.slides').data('current-slide');
				if (curSlide > 0)
					JACQUELINE_STORAGE['swipers'][id].slideTo(curSlide-1);

				jacqueline_sc_prepare_slider_navi(jQuery(this));

			});
			
		// Check slides per view
		jacqueline_sc_sliders_resize();
	}

	//Skills init
	if (container.find('.sc_skills_item:not(.inited)').length > 0) {
		jacqueline_sc_init_skills(container);
		jQuery(window).scroll(function () { jacqueline_sc_init_skills(container); });
	}
    
	//Skills type='arc' init
	if (container.find('.sc_skills_arc:not(.inited)').length > 0) {
		jacqueline_sc_init_skills_arc(container);
		jQuery(window).scroll(function () { jacqueline_sc_init_skills_arc(container); });
	}

	// Tabs
	if (container.find('.sc_tabs:not(.inited):not(.no_jquery_ui),.tabs_area:not(.inited)').length > 0) {
		container.find('.sc_tabs:not(.inited):not(.no_jquery_ui),.tabs_area:not(.inited)').each(function () {
			"use strict";
			var init = jQuery(this).data('active');
			if (isNaN(init)) init = 0;
			else init = Math.max(0, init);
			jQuery(this)
				.addClass('inited')
				.tabs({
					active: init,
					show: {
						effect: 'fadeIn',
						duration: 300
					},
					hide: {
						effect: 'fadeOut',
						duration: 300
					},
					create: function (event, ui) {
						"use strict";
						jacqueline_sc_init(ui.panel);
						if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(ui.panel);
					},
					activate: function (event, ui) {
						"use strict";
						jacqueline_sc_init(ui.newPanel);
						if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(ui.newPanel);
					}
				});
		});
	}
	if (container.find('.sc_tabs.no_jquery_ui:not(.inited)').length > 0) {
		container.find('.sc_tabs.no_jquery_ui:not(.inited)').each(function () {
			"use strict";
			jQuery(this)
				.addClass('inited')
				.on('click', '.sc_tabs_titles li a', function(e) {
					"use strict";
					if (!jQuery(this).parent().hasClass('sc_tabs_active')) {
						var id_act = jQuery(this).parent().siblings('.sc_tabs_active').find('a').attr('href');
						var id = jQuery(this).attr('href');
						jQuery(this).parent().addClass('sc_tabs_active').siblings().removeClass('sc_tabs_active');
						jQuery(id_act).fadeOut(function() {
							"use strict";
							jQuery(id).fadeIn(function() {
								"use strict";
								jacqueline_sc_init(jQuery(this));
								if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(jQuery(this));
							});
						});
					}
					e.preventDefault();
					return false;
				});
			jQuery(this).find('.sc_tabs_titles li').eq(0).addClass('sc_tabs_active');
			jQuery(this).find('.sc_tabs_content').eq(0).fadeIn(function() {
				"use strict";
				jacqueline_sc_init(jQuery(this));
				if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(jQuery(this));
			});
		});
	}
	if (container.find('.sc_tabs_style_2 .sc_tabs_content').length > 0) {
		container.find('.sc_tabs_style_2 .sc_tabs_content').each(function () {
			"use strict";
			if(jQuery(this).data('icon') != '')
			{
				var icon = jQuery(this).data('icon');
				var id = jQuery(this).attr('id');
				jQuery(".sc_tabs_title[aria-controls='" + id + "']").addClass(icon).addClass('icon');
				
			}
		});
	}

	// Toggles
	if (container.find('.sc_toggles .sc_toggles_title:not(.inited)').length > 0) {
		container.find('.sc_toggles .sc_toggles_title:not(.inited)')
			.addClass('inited')
			.on('click', function () {
				"use strict";
				jQuery(this).toggleClass('ui-state-active').parent().toggleClass('sc_active');
				jQuery(this).parent().find('.sc_toggles_content').slideToggle(300, function () { 
					"use strict";
					jacqueline_sc_init(jQuery(this).parent().find('.sc_toggles_content')); 
					if (window.jacqueline_init_hidden_elements) jacqueline_init_hidden_elements(jQuery(this).parent().find('.sc_toggles_content'));
				});
			});
	}

	// Zoom
	if (container.find('.sc_zoom:not(.inited)').length > 0) {
		container.find('.sc_zoom:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				jQuery(this).addClass('inited');
				jQuery(this).find('img').elevateZoom({
					zoomType: "lens",
					lensShape: "round",
					lensSize: 200,
					lensBorderSize: 4,
					lensBorderColour: '#ccc'
				});
			});
	}

}

// Slider navigation
function jacqueline_sc_prepare_slider_navi(slider) {
	"use strict";
	var navi = null;
	
	// Pagination with slide's title
	navi = slider.siblings('.sc_slider_pagination');
	if (navi.length > 0) {
		navi.on('click', '.post_item', function(e){
			var swiper = jQuery(this).parents('.sc_slider_pagination_area').find('.swiper-slider-container');
			var id = swiper.attr('id');
			JACQUELINE_STORAGE['swipers'][id].slideTo(jQuery(this).index()+1);
			e.preventDefault();
			return false;
		});
	}
}

// Sliders: Autoheight
function jacqueline_sc_slider_autoheight(slider) {
	"use strict";
	if (slider.hasClass('.sc_slider_height_auto')) {
		slider.find('.swiper-slide').each(function() {
			"use strict";
			if (jQuery(this).data('height_auto') == undefined) {
				jQuery(this).attr('data-height_auto', jQuery(this).height());
			}
		});
	}
}

// Sliders: Resize
function jacqueline_sc_sliders_resize() {
	"use strict";
	var slider = arguments[0]!==undefined ? arguments[0] : '.sc_slider_swiper.inited';
	var resize = arguments[1]!==undefined ? arguments[1] : true;

	jQuery(slider).each(function() {
		"use strict";
		var id = jQuery(this).attr('id');
		var width = jQuery(this).width();
		var last_width = jQuery(this).data('last-width');
		if (isNaN(last_width)) last_width = 0;
		
		// Change slides_per_view
		if (last_width==0 || last_width!=width) {
			var spv = jQuery(this).data('slides-per-view');
			if (spv == undefined) spv = 1;
			var min_width = jQuery(this).data('slides-min-width');
			if (min_width == undefined) min_width = 50;
			if (width / spv < min_width) spv = Math.max(1, Math.floor(width / min_width));
			jQuery(this).data('last-width', width);
			if (JACQUELINE_STORAGE['swipers'][id].params.slidesPerView != spv) {
				JACQUELINE_STORAGE['swipers'][id].params.slidesPerView = spv;
				JACQUELINE_STORAGE['swipers'][id].params.loopedSlides = spv;
				//JACQUELINE_STORAGE['swipers'][id].reInit();
			}
		}
		
		// Resize slider
		if ( resize && !jQuery(this).hasClass('sc_slider_height_fixed') ) {
			var h = 0;
			if ( jQuery(this).find('.swiper-slide > img').length > 0 ) {
				jQuery(this).find('.swiper-slide > img').each(function() {
					"use strict";
					if (jQuery(this).height() > h) h = jQuery(this).height();
				});
				jQuery(this).height(h);
			} else if ( jQuery(this).find('.swiper-slide').css('backgroundImage')!='none' ) {
				h = Math.floor(width/16*9);
				jQuery(this).height(h).find('.swiper-slide').height(h);
			}
		}
	});
	
	// Resize slider pagination area
	jQuery('.sc_slider_pagination_area').each(function() {
		"use strict";
		var h = jQuery(this).find('.sc_slider').height();
		if (h) {
			jQuery(this).height(h);
			jQuery(this).find('.sc_slider_pagination').height(h);
			jQuery(this).find('.sc_slider_pagination .sc_scroll_vertical').height(h);
		}
	});
}

// Display menuitem in the popup
function jacqueline_menuitems_init() {
	"use strict";

	jQuery('.sc_menuitems_wrap').on('click', '.show_popup_menuitem', function(e) {
		var id = jQuery(this).parents('.sc_menuitems_item').attr('id');
		jacqueline_menuitems_show_popup(id);
		
		e.preventDefault();
		return false;
	});
	
	jQuery('body').on('click', '.close_menuitem', function(e) {	
		console.log('close click');
		jQuery(".popup_menuitem").remove();
		
		e.preventDefault();
		return false;
	});	
	jQuery('body').on('click', '.popup_menuitem', function(e) {
		if (e.target !== this)
		return;
	
		console.log('close click');
		jQuery(".popup_menuitem").remove();
		
		e.preventDefault();
		return false;
	});
}