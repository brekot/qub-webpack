import $ from "jquery";

import formstyler from './jquery.formstyler.min.js';

/*window.jQuery = $;
window.$ = $;*/

$(function() {

    $('.menu-btn').click(function(){

        $('.left-block').addClass('left-block_active');
        $('.menu-shadow').show();
    });

    $('.menu-close').click(function(){

        $('.left-block').removeClass('left-block_active');
        $('.menu-shadow').hide();
    });

    $('.menu-shadow').click(function(){

        $('.left-block').removeClass('left-block_active');
        $('.menu-shadow').hide();
    });

    $('.main-block__head').click(function(){

        $(this).toggleClass('main-block__head_open');

        $(this).next('.main-block__body').slideToggle(400, function(){

            $(this).toggleClass('main-block__body_open');
        });
    });

    $('select').styler();

    if ($(document).width() < 500)
    {
        $('.form-search__input').attr('placeholder', 'Поиск');
    }
});