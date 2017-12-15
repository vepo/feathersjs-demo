const notificacoesService = client.service('/notifications');

/**
 * Escuta todas as notificaçes
 */
notificacoesService.on('created', notificacao => {
    $('.table.notificacoes tbody .empty').remove();
    const index = $('.table.notificacoes tbody tr').length;
    $('.table.notificacoes tbody').prepend(
        `<tr>
            <td scope="row">${index}</th>
            <th>${notificacao._id}</th>
            <th>${notificacao.titulo}</th>
            <th>${notificacao.descricao}</th>
            <th>${moment(notificacao.criacao).format('lll')}</th>
        </tr>`);
});

/**
 * Process server response
 * @param {*} results 
 */
const processResults = results => {
    if (results.total) {
        $('.table.notificacoes tbody .empty').remove();
        results.data.forEach((notificacao, index, array) => {
            $('.table.notificacoes tbody').append(
                `<tr>
                    <td scope="row">${results.total - index - results.skip}</th>
                    <th>${notificacao._id}</th>
                    <th>${notificacao.titulo}</th>
                    <th>${notificacao.descricao}</th>
                    <th>${moment(notificacao.criacao).format('lll')}</th>
                </tr>`);
        });
        if (results.total > results.skip + results.data.length) {
            notificacoesService.find({
                query: {
                    $skip: results.data.length + results.skip
                }
            }).then(processResults);
        }
    }
};

notificacoesService.find().then(processResults);

/**
 * Cria uma nova notificação
 * @param {*} form 
 */
function criarNotificacao(form) {
    notificacoesService.create({
        titulo: form['titulo'].value,
        descricao: form['descricao'].value
    });
}