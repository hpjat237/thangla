// script.js
const sidebarItems = document.querySelectorAll('.sidebar ul li');

sidebarItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent dropdown from closing if you click on a dropdown item
        const dropdown = item.querySelector('ul');
        
        // If the clicked target is an anchor tag (li > a), navigate to the corresponding page
        if (event.target.tagName === 'A') {
            event.stopPropagation(); // Prevent closing the dropdown
            window.location.href = event.target.href; // Navigate to the new HTML page
        }

        if (dropdown) {
            // Toggle class to show or hide dropdown
            dropdown.classList.toggle('active');
            item.classList.toggle('active'); // Toggle arrow rotation
        }
    });
});

// Tạo sự kiện cho nút Login để hiển thị form đăng nhập
document.getElementById('loginButton').addEventListener('click', toggleLoginForm);

// Hiển thị hoặc ẩn form đăng nhập khi nhấn nút
function toggleLoginForm() {
    const loginForm = document.getElementById('loginFormContainer');
    loginForm.style.display = (loginForm.style.display === 'none' || loginForm.style.display === '') ? 'block' : 'none';
}

// Thực hiện đăng nhập (tạm thời, không có backend ở đây)
function handleLogin(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (không làm reload trang)

    // Lấy dữ liệu từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Tạm thời kiểm tra đăng nhập
    if (username === 'admin' && password === '1234') {
        alert('Login successful!');
        toggleLoginForm();  // Đóng form khi đăng nhập thành công
    } else {
        alert('Invalid credentials!');
    }
}

