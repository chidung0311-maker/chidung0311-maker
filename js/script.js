document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Dung đã load xong!');
    
    // Hiển thị thông báo chào mừng
    setTimeout(() => {
        alert('Chào mừng bạn đến với portfolio của Dung!');
    }, 1000);
    
    // Xử lý form liên hệ
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn! Tin nhắn đã được gửi thành công.');
            this.reset();
        });
    }
    
    // Thêm hiệu ứng cho navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#3498db';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = 'white';
        });
    });
});
