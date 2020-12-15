$(function () {
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass(
      'shop-content__filter-btn--active'
    );
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  // слайдер
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  // звездный рейтинг
  $('.star').rateYo({
    starWidth: '12px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
  });

  // рендж слайдер
  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  // mixitup сортировка
  let product = mixitup('.product__items', {
    selectors: {
      control: '.product__btn',
    },
  });
  let design = mixitup('.design__items', {
    selectors: {
      control: '.design__btn',
    },
  });
});
