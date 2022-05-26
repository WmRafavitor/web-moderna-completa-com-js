/*  
fazendo um modelo de temporizador para disparar tarefas em minutos, horas, dias da
semana, dias do mês, etc...
*/

const schedule = require('node-schedule');
// Abaixo o primeiro parâmetro passado "*/5" está de quanto em quanto tempo que quero
//seja executado no caso de 5 em 5 seg, o "*" é para ignorar alguma coisa com exemplo
//o segundo "*" ignora o minuto, depois é a hora no caso está "11" porque agora são 
//11 horas, se fosse 12 ele já não executaria, o 3° "*" é o dia do mês, o 4° é o 
//próprio mês e a ultima informação é o dia da semana "dom = 0, seg = 1, ter = 2,
//quar = 3" e por ai vai, então as informações que devem ser colcoadas são
// segundo, minuto, hora, dia do mês, mês, dia da semana.
// OBS, se eu quiser executar no exato 15seg de cada minuto eu teria que colocar
//apenas "15" se eu quiser executar a cada 15seg eu coloco: "*/15".

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 3', function () {
    console.log('executando tarefa 1', new Date().getSeconds());
})

setTimeout(function () {
    tarefa1.cancel();// Essa é a forma para usar para cancelar um temporizador
    //criado a partir do scheduleJob
    console.log('Cancelando Tarefa 1');
}, 20000) // cancelando em 20seg

const regra = new schedule.RecurrenceRule(); // Regrade recorrencia

regra.dayOfWeek = [new schedule.Range(1, 5)]; //Executando a função de segunda a sexta
regra.hour = 12;//executando sempre as 12h de segunda a sexta
regra.second = 30; //executando nos 30seg de cada min

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Exetutando tarefa2', new Date().getSeconds())
})