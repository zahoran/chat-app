const socket = io()
const input = document.querySelector('#myInput')

input.addEventListener('keyup', function ($event) {
    console.log($event.target.value)
    socket.emit('inputChanged', $event.target.value)
})

socket.on('inputChanged', (data) => {
    input.value = data;
    input.innerHTML = 'data';
})