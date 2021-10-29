const deletar = document.querySelector(".btn-alterar-4");
const cancelar = document.querySelector(".remove-photo");

deletar.addEventListener("click", (evento)=> {
    evento.preventDefault();

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você está prestes a deletar a sua conta e isso não poderá ser desfeito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Deletar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'Sua conta foi deletada.',
            'success'
          )
        }
      });
});

cancelar.addEventListener("click", (evento) => {
    evento.preventDefault();

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você está prestes a apagar a sua foto de perfil atual.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Apagar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Apagada!',
            'Sua foto de perfil foi apagada.',
            'success'
          )
        }
      });
});