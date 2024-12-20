let scMoveBtn = document.querySelectorAll(".scMoveBtn > li > a");
let scPt = document.querySelectorAll(".scPt");

scMoveBtn.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); // 기본 클릭 이벤트 방지 (예: 앵커 이동)

    let targetTop = scPt[index].getBoundingClientRect().top + window.scrollY; // scPt의 문서 전체에서의 Y좌표 계산

    window.scrollTo({
      top: targetTop, // 목표 위치
      behavior: "smooth", // 부드러운 스크롤
    });
  });
  console.log(1);
});
