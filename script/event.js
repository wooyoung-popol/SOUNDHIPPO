$(function () {
    $('.filter li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('#all').click(function () {
      $('.filter_content div').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
    });
    $('#filter1').click(function () {
      $('.filter1').show();
      $('.filter_content div').not('.filter1').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
    });
    $('#filter2').click(function () {
      $('.filter2').show();
      $('.filter_content div').not('.filter2').hide();
    });
    
  });

  AOS.init({
    duration: 1000 //aos 나타나는 속도
 } );
