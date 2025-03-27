document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');
    
    if(username && password) {
        // Feedback visual
        loginBtn.textContent = 'Acessando...';
        loginBtn.style.backgroundColor = '#4cc9f0';
        loginBtn.classList.remove('pulse');
        
        // Simula um tempo de processamento
        setTimeout(() => {
            window.location.href = 'calculator.html';
        }, 1500);
    } else {
        // Efeito de erro sutil
        loginBtn.textContent = 'Preencha todos os campos';
        loginBtn.style.backgroundColor = '#f72585';
        
        setTimeout(() => {
            loginBtn.textContent = 'Entrar';
            loginBtn.style.backgroundColor = '#4361ee';
        }, 2000);
    }
});

// Efeito interativo no link de solicitação
document.getElementById('requestAccess').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Envie um e-mail para admin@calculadora.com para solicitar acesso.');
});

// Efeito sutil ao carregar
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.style.opacity = '1';
        }, index * 200);
    });
});