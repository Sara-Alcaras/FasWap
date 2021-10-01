const inputForm = document.querySelector('[data-formulario]');
const btnDoador = document.querySelector('#doador');
const btnArtista = document.querySelector('#artista');

btnDoador.addEventListener('click', (evento) => {
    evento.preventDefault();
    console.log('Usuário é Doador!');
    const dadosUsuario = {
        nome: inputForm.nome.value,
        nickName: inputForm.nick.value,
        pinterest: inputForm.pinterest.value,
        email: inputForm.email.value,
        instagram: inputForm.instagram.value,
        senha: inputForm.senha.value,
        confirmSenha: inputForm.confirmSenha.value,
        telefone: inputForm.tel.value
    };
    console.log(dadosUsuario);
});

btnArtista.addEventListener('click', (evento) => {
    evento.preventDefault();
    console.log('Usuário é Artista!');
    const dadosUsuario = {
        nome: inputForm.nome.value,
        nickName: inputForm.nick.value,
        pinterest: inputForm.pinterest.value,
        email: inputForm.email.value,
        instagram: inputForm.instagram.value,
        senha: inputForm.senha.value,
        confirmSenha: inputForm.confirmSenha.value,
        telefone: inputForm.tel.value
    };
    console.log(dadosUsuario);
});