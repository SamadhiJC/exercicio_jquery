$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const taskName = $('#taskInput').val(); // Pega o valor do campo de entrada

        // Adiciona a nova tarefa à lista
        $('#taskList').append(`<li>${taskName}</li>`);

        // Limpa o campo de entrada
        $('#taskInput').val('');
    });

    // Marca a tarefa como concluída ao clicar
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
