document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');
    
    if(username && password) {
        loginBtn.textContent = 'Acessando...';
        loginBtn.style.backgroundColor = '#4cc9f0';
        loginBtn.classList.remove('pulse');
        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5000/game';
        }, 1500);
    } else {
        loginBtn.textContent = 'Preencha todos os campos';
        loginBtn.style.backgroundColor = '#f72585';
        
        setTimeout(() => {
            loginBtn.textContent = 'Entrar';
            loginBtn.style.backgroundColor = '#4361ee';
        }, 2000);
    }
});

document.getElementById('requestAccess').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Envie um e-mail para admin@calculadora.com para solicitar acesso.');
});

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.style.opacity = '1';
        }, index * 200);
    });
});