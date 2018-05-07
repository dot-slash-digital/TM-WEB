
if (typeof JACQUELINE_STORAGE == 'undefined') var JACQUELINE_STORAGE = {};
JACQUELINE_STORAGE['ajax_url'] = '';
JACQUELINE_STORAGE['ajax_nonce'] = '';
JACQUELINE_STORAGE['site_url'] = '';
JACQUELINE_STORAGE['sc_edit_mode'] = false;
JACQUELINE_STORAGE['theme_font'] = 'Droid Serif';
JACQUELINE_STORAGE['theme_skin'] = 'less';
JACQUELINE_STORAGE['theme_skin_color'] = '#323232';
JACQUELINE_STORAGE['theme_skin_bg_color'] = '#ffffff';
JACQUELINE_STORAGE['slider_height'] = 100;
JACQUELINE_STORAGE['system_message'] = {
    message: '',
    status: '',
    header: ''
};
JACQUELINE_STORAGE['user_logged_in'] = false;
JACQUELINE_STORAGE['toc_menu'] = '';
JACQUELINE_STORAGE['toc_menu_home'] = false;
JACQUELINE_STORAGE['toc_menu_top'] = false;
JACQUELINE_STORAGE['menu_fixed'] = true;
JACQUELINE_STORAGE['menu_mobile'] = 1024;
JACQUELINE_STORAGE['menu_slider'] = true;
JACQUELINE_STORAGE['menu_cache'] = false;
JACQUELINE_STORAGE['demo_time'] = 0;
JACQUELINE_STORAGE['media_elements_enabled'] = true;
JACQUELINE_STORAGE['ajax_search_enabled'] = true;
JACQUELINE_STORAGE['ajax_search_min_length'] = 3;
JACQUELINE_STORAGE['ajax_search_delay'] = 200;
JACQUELINE_STORAGE['css_animation'] = true;
JACQUELINE_STORAGE['menu_animation_in'] = 'fadeInUp';
JACQUELINE_STORAGE['menu_animation_out'] = 'fadeOutDown';
JACQUELINE_STORAGE['popup_engine'] = 'magnific';
JACQUELINE_STORAGE['email_mask'] = '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
JACQUELINE_STORAGE['contacts_maxlength'] = 1000;
JACQUELINE_STORAGE['comments_maxlength'] = 1000;
JACQUELINE_STORAGE['remember_visitors_settings'] = false;
JACQUELINE_STORAGE['admin_mode'] = false;
JACQUELINE_STORAGE['isotope_resize_delta'] = 0.3;
JACQUELINE_STORAGE['error_message_box'] = null;
JACQUELINE_STORAGE['viewmore_busy'] = false;
JACQUELINE_STORAGE['video_resize_inited'] = false;
JACQUELINE_STORAGE['top_panel_height'] = 0;

if (typeof JACQUELINE_STORAGE == 'undefined') var JACQUELINE_STORAGE = {};
JACQUELINE_STORAGE["strings"] = {
    ajax_error: "Invalid server answer",
    bookmark_add: "Add the bookmark",
    bookmark_added: "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
    bookmark_del: "Delete this bookmark",
    bookmark_title: "Enter bookmark title",
    bookmark_exists: "Current page already exists in the bookmarks list",
    search_error: "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
    email_confirm: "On the e-mail address &quot;%s&quot; we sent a confirmation email. Please, open it and click on the link.",
    reviews_vote: "Thanks for your vote! New average rating is:",
    reviews_error: "Error saving your vote! Please, try again later.",
    error_like: "Error saving your like! Please, try again later.",
    error_global: "Global error text",
    name_empty: "The name can&#039;t be empty",
    name_long: "Too long name",
    email_empty: "Too short (or empty) email address",
    email_long: "Too long email address",
    email_not_valid: "Invalid email address",
    subject_empty: "The subject can&#039;t be empty",
    subject_long: "Too long subject",
    text_empty: "The message text can&#039;t be empty",
    text_long: "Too long message text",
    send_complete: "Send message complete!",
    send_error: "Transmit failed!",
    login_empty: "The Login field can&#039;t be empty",
    login_long: "Too long login field",
    login_success: "Login success! The page will be reloaded in 3 sec.",
    login_failed: "Login failed!",
    password_empty: "The password can&#039;t be empty and shorter then 4 characters",
    password_long: "Too long password",
    password_not_equal: "The passwords in both fields are not equal",
    registration_success: "Registration success! Please log in!",
    registration_failed: "Registration failed!",
    geocode_error: "Geocode was not successful for the following reason:",
    googlemap_not_avail: "Google map API not available!",
    editor_save_success: "Post content saved!",
    editor_save_error: "Error saving post data!",
    editor_delete_post: "You really want to delete the current post?",
    editor_delete_post_header: "Delete post",
    editor_delete_success: "Post deleted!",
    editor_delete_error: "Error deleting post!",
    editor_caption_cancel: "Cancel",
    editor_caption_close: "Close"
};

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
				jsFileLocation: "js/vendor/revslider/",
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
				jsFileLocation: "js/vendor/revslider/",
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
				jsFileLocation: "js/vendor/revslider/",
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



var lamount, aratio ;


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