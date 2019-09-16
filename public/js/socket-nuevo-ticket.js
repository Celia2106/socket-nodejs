
var socket =io();
var label=$('#lblNuevoTicket');

socket.on('connect',(client)=> {
    console.log('user connect');
});
socket.on('disconnect', () => {
    console.log('user disconnect');
});
socket.on('estadoACtual',function(data)  {
    label.text('ticket '+ data.actual);





});
$('button').on('click',function(){
    socket.emit('siguienteTicket',null,function(nextTIcket){
        label.text(nextTIcket);
    });

});

