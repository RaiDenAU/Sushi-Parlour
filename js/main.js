$(function () {
  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });
  $(".new__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  $(".header__content-left").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  });
  $(".menuTable__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    infinity: false,
    dots: true
  });

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
  $(function () {
    $("select").styler();
  });

  $("#reg-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      date: {
        required: true
      },
      time: {
        required: true
      },
      email: {
        email: true
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению",
        minlength: "Введите не менее 3-х символов"
      },
      date: {
        required: "Поле 'Дата' обязательна к заполнению"
      },
      time: {
        required: "Поле 'Время' обязательна к заполнению"
      },
      email: {
        email: "Необходим формат адреса email"
      }
    }
  });

  $("#phone").mask("+380(999) 999-99-9");

  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('.overlay').fadeIn();
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $('.js-close-thank-you').click(function () { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
  });

  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-thank-you').fadeOut();
    }
  });
});