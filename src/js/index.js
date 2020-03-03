import $ from "jquery";
import Swiper from 'swiper';

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
    $('input[type="file"]').styler();

    // Замена placeholder в строке поиска
    if ($(document).width() < 500)
    {
        $('.form-search__input').attr('placeholder', 'Поиск');
    }

    // Вкладки справа
	$('.tab-right__link').click(function(){

		$('.tab-right__link_active').removeClass('tab-right__link_active');
		$(this).addClass('tab-right__link_active');

		$('.tab-container__item_active').removeClass('tab-container__item_active');
		$('.tab-container__item').eq($(this).index()).addClass('tab-container__item_active');
	});

    // Слайдер галерея
    var sliderLength = $('.apartment-gallery__item').length;

    $('#agCountSumm').text(sliderLength);

    var sliderGallery = new Swiper('.apartment-gallery__slider', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 15,
        breakpoints: {
            1100: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 15
            },
        },
        navigation: {
            prevEl: '.apartment-gallery__prev',
            nextEl: '.apartment-gallery__next',
        },
    });

    $('#agCountRange').text('1-' + sliderGallery.loopedSlides);

    sliderGallery.on('slideChange', function () {

        let tmp = sliderGallery.realIndex + sliderGallery.loopedSlides;

        if (tmp > sliderLength) tmp = tmp - sliderLength;

        $('#agCountRange').text((sliderGallery.realIndex + 1) + '-' + tmp);
    });
});