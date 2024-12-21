// 获取所有图片和模态框相关元素
const images = document.querySelectorAll('.photo-thumbnail');
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('closeModal');

// 遍历所有图片并添加点击事件
images.forEach((image) => {
    image.addEventListener('click', () => {
        // 设置模态框显示的图片和描述
        modal.style.display = "block";
        modalImage.src = image.src;
        captionText.textContent = image.alt; // 使用图片的alt属性作为标题
    });
});

// 点击关闭按钮时关闭模态框
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// 点击模态框外部时关闭模态框
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});