<script>
    // Lắng nghe sự kiện click vào các mục menu có dropdown
    document.querySelectorAll('.sidebar ul li').forEach(function(item) {
        item.addEventListener('click', function(e) {
            // Nếu mục này có dropdown (ul)
            if (this.querySelector('ul')) {
                // Ngừng sự kiện click lan tỏa
                e.stopPropagation();
                // Chuyển đổi lớp 'active' để hiển thị hoặc ẩn dropdown
                this.classList.toggle('active');
            }
        });
    });
</script>
