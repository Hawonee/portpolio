$(function () {//시작
  
  $( document ).ready(function() {
    $('.sticker-box img').draggable();        
});


    $(window).on('scroll', function() {
      let currentPosition = $(this).scrollTop();
      // 섹션 위치값 비교

      $('section').each(function() {
        let top = $(this).offset().top - 150; // 
        let bottom = top + $(this).outerHeight();
  
        if (currentPosition >= top && currentPosition <= bottom) {
          let sectionId = $(this).attr('id');
          $('.gnb-item').removeClass('on');
          $('.gnb-item').find('a[href="#' + sectionId + '"]').parent().addClass('on');
        }
      });
    });


    $(document).ready(function() {
      $('.gnb li:last-child').click(function() {
        // Remove 'on' class from other li elements
        $('.gnb li').not(this).removeClass('on');
        
        // Toggle 'on' class for the clicked li element
        $(this).toggleClass('on');
        
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        return false;
      });
    });


    // $(window).on('scroll', function() {
    //   let currentPosition = $(this).scrollTop();
    //   let sectionLastLi = $('.work-list li:last-child');
    //   let gnbLastLi = $('.gnb li:last-child');
    //   let gnbLi = $('.gnb li');
    
    //   $('.sc-work').each(function() {
    //     let sectionTop = $(this).offset().top;
    //     let sectionBottom = sectionTop + $(this).outerHeight();
    //     let lastLiOffsetTop = sectionLastLi.offset().top;
    
    //     if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
    //       if (currentPosition >= lastLiOffsetTop) {
    //         gnbLastLi.addClass('on');
    //         gnbLi.not(gnbLastLi).removeClass('on');
    //       } else {
    //         gnbLastLi.removeClass('on');
    //         gnbLi.removeClass('on');
    //       }
    //     }
        
    //   });
    // });

}); //끝 지우지 말 것

//푸터 하단 년도
const date = new Date();
const _year = date.getFullYear();
const thisYear = document.getElementById("this-year");
thisYear.innerText = _year;

//푸터 하단 로컬 시간
const time = document.getElementById("time");
function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${hour} : ${minutes} : ${second}`;
}
getTime();
setInterval(getTime, 1000);

