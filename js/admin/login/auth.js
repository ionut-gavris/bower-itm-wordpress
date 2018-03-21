/*
Template:   This file is specific for WordPress projects with ITM-Theme
Info: 		This file will contain Child theme !admin! section login
*/
/******************************************************************************/
/******************************************************************************/
function itm_bullet() {
	var bullet = "";
	bullet += "<span class='bullet'></span>";
	
	return bullet;
}
/******************************************************************************/
function itm_powered_by() {
	var logo = "";
	logo += "<p id='powered'>Powered by</p>";
	logo += "<h1>";
	logo += "	<a href='http://www.itmaniax.com' title='Visit www.itmaniax.com' target='_blank' tabindex='-1'>";
	logo += "	</a>";
	logo += "</h1>";

	return logo;
}
/******************************************************************************/
function center_content() {
	var window_height = jQuery(window).height();
	var content_height = jQuery('#login').height();
	var content_top = (window_height - content_height-10)/2;
    var content_bottom = 0;
	
	if(content_top < 20) {
       content_top = 20; 
       content_bottom = 20; 
    }
	
	jQuery('body').css('min-height',window_height);
	jQuery('#login').css({'padding-top':content_top});
	jQuery('#login').css({'padding-bottom':content_bottom});
}
/******************************************************************************/
jQuery(document).ready(function(){
	center_content();
	jQuery('#login > h1').remove();
	
	var powered_by = itm_powered_by();
	
	jQuery(powered_by).prependTo(jQuery('#loginform, #lostpasswordform'));
	jQuery('p.forgetmenot').before(jQuery('p.submit'));
	jQuery('p.submit').after(jQuery('#nav'));
	jQuery('#loginform, #lostpasswordform').append(jQuery('#backtoblog'));

	var name_placeholder = jQuery('[for="user_login"]').text();
	var name_input = jQuery('[for="user_login"] input').attr('placeholder', name_placeholder);
	jQuery('[for="user_login"]').html(name_input);

	var password_placeholder = jQuery('[for="user_pass"]').text();
	var password_input = jQuery('[for="user_pass"] input').attr('placeholder', password_placeholder);
	jQuery('[for="user_pass"]').html(password_input);
	
	var bullet = itm_bullet();

	jQuery('[for="user_pass"], [for="user_login"]').append(bullet);
});
/******************************************************************************/
jQuery(window).resize(function(){
	center_content();
});
/******************************************************************************/
/******************************************************************************/