const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});

<body>
		<div class="container">
			<main>
				<h1>Toggle Password Visibility</h1>
				<input type="password" name="password" id="password" placeholder="Enter the password" />
				<i class="bi bi-eye-slash" id="togglePassword"></i>
			</main>
		</div>
		<script src="js/app.js"></script>
	</body>
</html>

