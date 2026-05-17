(function() {
    // 初始化所有代码块的折叠功能
    function initCodeBlocks() {
        const wrappers = document.querySelectorAll('.code-block-wrapper');
        
        wrappers.forEach(function(wrapper) {
            const pre = wrapper.querySelector('pre');
            const btn = wrapper.querySelector('.code-toggle-btn');
            
            if (!pre || !btn) return;
            
            // 获取代码块的实际高度
            const actualHeight = pre.scrollHeight;
            const maxHeight = parseInt(getComputedStyle(pre).maxHeight);
            
            // 如果实际高度小于等于最大高度，不需要折叠功能
            if (actualHeight <= maxHeight) {
                wrapper.classList.add('no-collapse');
                btn.style.display = 'none';
                return;
            }
            
            // 初始化状态：折叠状态
            wrapper.classList.remove('expanded');
            btn.textContent = '▼ 展开完整代码';
            
            // 绑定点击事件
            btn.addEventListener('click', function() {
                if (wrapper.classList.contains('expanded')) {
                    // 收起代码块
                    wrapper.classList.remove('expanded');
                    btn.textContent = '▼ 展开完整代码';
                } else {
                    // 展开代码块
                    wrapper.classList.add('expanded');
                    btn.textContent = '▲ 收起代码块';
                }
            });
        });
    }
    
    // 页面加载时初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCodeBlocks);
    } else {
        initCodeBlocks();
    }
    
    // 如果使用 Pjax，在 Pjax 完成后重新初始化
    document.addEventListener('pjax:complete', initCodeBlocks);
})();
