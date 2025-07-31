// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化分类按钮点击事件
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加active类
            this.classList.add('active');
            
            // 这里可以添加筛选逻辑
            console.log('Selected category:', this.textContent);
        });
    });
    
    // 初始化搜索功能
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-btn');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // 这里可以添加搜索逻辑
        }
    });
    
    // 回车键触发搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    // 初始化时间线卡片点击事件
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加跳转到详情页的逻辑
            console.log('Timeline card clicked');
        });
    });
});
