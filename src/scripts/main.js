$(document).ready(function() {
    $("#addFieldButton").on("click", function(){
        let fieldName = prompt({
            title: 'Digite o nome do campo',
            label: 'Nome:',
            value: '',
            inputAttrs: {
                type: 'text'
            },
            type: 'input'
          })
          .then((r) => {
            if (r === null) {
                console.log('Usuário cancelou');
            } else {
                console.log('Input do usuário:', r);
                // Aqui você pode enviar o valor para o renderer process, se necessário
            }
          })
          .catch(console.error);
    });


});como 