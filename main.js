$(document).ready(function () {
    $('header > button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('endereco-imagem-nova')
        
        const novoItem = $(`<li>
            <img src='${enderecoDaNovaImagem.val()}'></img>
            <div class='overlay-imagem-link'>
                <a href='${enderecoDaNovaImagem.val()}' target='_blank'>
                    Ver imagem em tamanho real
                </a>
            </div>
        </li>`)

        $(novoItem).appendTo('ul')
    })

})