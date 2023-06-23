$(function () {//시작
  
  $('.sticker-box img').draggable();

  // const imgIdx = 10;
  // $(".sticker-box img").draggable().css("cursor", "move").mousedown(function () {
  //     // mousedown 이벤트 생성
  //     $(this).css("z-index", imgIdx); // 클릭한 이미지만 z-index 증가시킴
  //     imgIdx++;
  //     // 그러면 이미지가 겹칠경우 클릭한 것이 항상 위에 표시됨
  //   });

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
