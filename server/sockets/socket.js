const { io } = require('../server');
const {TicketControl}=require('../classes/ticket-control');

const ticketControl=new TicketControl();

io.on('connection', (client) => {


client.on('siguienteTicket',(data,callback)=>{
    let nextTicket=ticketControl.siguiente();
    callback(nextTicket);
});

client.emit('estadoACtual',{
  actual:ticketControl.getUltTIcket(),
    ultimos4:ticketControl.getUltimos4()
});
    client.emit('ultimos4',{
        ultimos4:ticketControl.getUltimos4()
    });
client.on('atenderTicket',(data,callback)=>{
    if(!data.escritorio){
        return callback({
            err:true,
            mensaje:'EL esritorio es necesario'
        })
    }

    let atenderTIcket=ticketControl.atenderTicket(data.escritorio);
    callback(atenderTIcket);

});

});