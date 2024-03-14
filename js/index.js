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