var socket =io();

socket.on('connect',(client)=> {
    console.log('user connect');
});
socket.on('disconnect', () => {
    console.log('user disconnect');
});

var parametrosUrl=new URLSearchParams(window.location.search);
if(!parametrosUrl.has('escritorio')){
    window.location='index.html';
    throw  new Error('EL escritorio es requerido');
}
var escritorio=parametrosUrl.get('escritorio');
let label= $('small');
$('h1').text('Escritorio '+escritorio);

$('button').on('click',function(){

   socket.emit('atenderTicket',{escritorio:escritorio},function(data){
       console.log(JSON.stringify(data));
       if(data==='NO hay Tickets'){
           alert(data);
           label.text(data);
           return;
       }
       label.text('Ticket'+data.numero);
    });
});
