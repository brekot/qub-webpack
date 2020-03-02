import $ from "jquery";

import formstyler from './jquery.formstyler.min.js';

/*window.jQuery = $;
window.$ = $;*/

$(function() {

    // Меню свернуть / развернуть
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

    // Скрытие / раскрытие блоков
    $('.main-block__head').click(function(){

        $(this).toggleClass('main-block__head_open');

        $(this).next('.main-block__body').slideToggle(400, function(){

            $(this).toggleClass('main-block__body_open');
        });
    });

    // Стилизация элементов
    $('select').styler();

    // Замена placeholder в строке поиска
    if ($(document).width() < 500)
    {
        $('.form-search__input').attr('placeholder', 'Поиск');
    }
});