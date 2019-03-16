jQuery(document).ready(function () {
    jQuery('.bubble-block').on('click', '.bubble-ico', function () {
        jQuery('#card').fadeToggle();
    })
    jQuery('#card').on('click', '.button-close', function () {
        jQuery('#card').fadeOut();
    })
})