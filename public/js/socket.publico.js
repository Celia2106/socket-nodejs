var socket =io();
var label1=$('#lblTicket1');
var label2=$('#lblTicket2');
var label3=$('#lblTicket3');
var label4=$('#lblTicket4');

var escritorio1=$('#lblEscritorio1');
var escritorio2=$('#lblEscritorio2');
var escritorio3=$('#lblEscritorio3');
var escritorio4=$('#lblEscritorio4');

socket.on('connect',(client)=> {
    console.log('user connect');
});
socket.on('disconnect', () => {
    console.log('user disconnect');
});

var labelticket=[label1,label2,label3,label4];
var labelEScritorio=[escritorio1,escritorio2,escritorio3,escritorio4];

socket.on('ultimos4',function(data){

    var audio=new Audio('../audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

socket.on('estadoACtual',function(data){

actualizaHTML(data.ultimos4);

});

function actualizaHTML(ultimos4){
    for(var i=0;i<ultimos4.length;i++){
        labelticket[i].text('TIcket '+ultimos4[i].numero);
        labelEScritorio[i].text('EScritorio '+ultimos4[i].escritorio);
    }

}