$(".lead__btn").click(function () {
    $(".footer__card__form").addClass("success")
})

$(".modal__btn").click(function () {
    $(".modal").addClass("none")
})

$(".reviews__btn").click(function () {
    $(".modal").removeClass("none")
})

$(function () {
    $(".phone").inputmask("+7(999)999-99-99");
});

$('.directions__card__info').readmore({
    speed: 75,
    collapsedHeight: 85,
});

$('.reviews__slider').slick({
    dots: true,
    infinite: true,
});


$('.gallery__slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]
});


$('.teachers__slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.teachers__slider__bottom',
});
$('.teachers__slider__bottom').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.teachers__slider__top',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

if (window.innerWidth >= 1110) {
    $('.slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
    });
} else {
    $('.slider').slick('unslick');
}

$(function () {
    var wrapper = $(".file_upload"),
        inp = wrapper.find("input"),
        btn = wrapper.find("button"),
        lbl = wrapper.find("div");

    btn.focus(function () {
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function () {
        wrapper.addClass("focus");
    }).blur(function () {
        wrapper.removeClass("focus");
    });

    var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

    inp.change(function () {
        var file_name;
        if (file_api && inp[0].files[0])
            file_name = inp[0].files[0].name;
        else
            file_name = inp.val().replace("C:\\fakepath\\", '');

        if (!file_name.length)
            return;

        if (lbl.is(":visible")) {
            lbl.text(file_name);
            btn.text("Прикрепить фото");
        } else
            btn.text(file_name);
    }).change();

});

$(window).resize(function () {
    $(".file_upload input").triggerHandler("change");
});