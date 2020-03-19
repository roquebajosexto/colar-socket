var socket = io();
label = $('small')
var searchParams = new URLSearchParams(window.location.search)

if (!searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}

var escritorio = searchParams.get('escritorio')

$('h1').text('Escritorio ' + escritorio)
$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            alert(resp)
            label.text(resp)
        }
        label.text('Ticket ' + resp.numero)

    })
})