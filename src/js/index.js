import $ from "jquery";

import formstyler from './jquery.formstyler.min.js';

/*window.jQuery = $;
window.$ = $;*/

$(function() {

    $('.main-block__head').click(function(){

        $(this).toggleClass('main-block__head_open');

        $(this).next('.main-block__body').slideToggle(400, function(){

            $(this).toggleClass('main-block__body_open');
        });
    });

    $('select').styler();
});