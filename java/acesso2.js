const pass = '67890';
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formPassword = document.querySelector('#password').value;

    if(pass === formPassword){
        window.location.href = 'dadosrestridos.html';
    } else {
        alert('Você precisa de uma permissão para acessar a página(senha:67890)')
        document.querySelector('#password').focus();
    }
    
})