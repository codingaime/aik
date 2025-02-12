// 숫자 카운팅 애니메이션
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-item strong');
    
    numbers.forEach(number => {
        const final = parseInt(number.textContent);
        let current = 0;
        const increment = final / 30; // 30프레임으로 나누어 증가
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= final) {
                number.textContent = final;
                clearInterval(timer);
            } else {
                number.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// 스크롤 기반 애니메이션
function handleScroll() {
    const elements = document.querySelectorAll('.link-button');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    window.addEventListener('scroll', handleScroll);
});

// 부드러운 스크롤 구현
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 페이지 전환 효과
window.addEventListener('load', () => {
    document.body.classList.add('page-transition', 'visible');
});

// URL 복사 함수 수정 (모달 관련 코드 제거)
function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('URL이 복사되었습니다!');
    }).catch(err => {
        console.error('URL 복사 실패:', err);
    });
}

// 페이스북 공유
function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
} 