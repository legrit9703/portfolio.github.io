$(function(){

// 문서가 로드되면 실행될 함수
document.addEventListener("DOMContentLoaded", function() {
    // 모든 a 태그를 가져옴
    var links = document.querySelectorAll('a');
    
    // 각 링크에 대해서 반복
    links.forEach(function(link) {
        // 링크의 href 속성이 '#none'인 경우에만 이벤트 리스너 추가
        if (link.getAttribute('href') === '#none') {
            // 링크를 클릭하면 '준비중입니다.' 메시지를 콘솔에 출력
            link.addEventListener('click', function(event) {
                window.alert('현재 준비중입니다.');
                event.preventDefault(); // 기본 동작 방지
            });
        }
    });
});
// Header 배경 변경
const headerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;
        // 섹션이 화면에 진입한 경우 배경색 변경
        if (entry.intersectionRatio >= 0.2) {
            switch (sectionId) {
                case "profile":
                    $(".header").css({
                        "background-color": "#e4efff50",
                        "transition": "all 0.6s"
                    });// 배경색 변경
                    break;
                default:
                    $(".header").css({
                        "background-color": "inherit",
                        "transition": "all 0.6s"
                    });// 기본 배경색
            }
        }
    });
}, { threshold: 0.2 });// 20% 영역에 진입하면 콜백 호출


});