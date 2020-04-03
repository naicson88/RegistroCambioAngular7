

// FUNÇÕES DE COLOCAR MASKMONEY 
$(function () {
   $(".mask").maskMoney({
     prefix: 'R$ ',
     allowNegative: true,
     thousands: '.',
     decimal: ','
   });
 });

 $(function () {
   $(".mask2").maskMoney({
     prefix: 'US$ ',
     allowNegative: true,
     thousands: '.',
     decimal: ','
   });
 });

 //document.getElementById('submit').addEventListener("click", statusLançamento)

 statusLançamento();
 // vencidos();
 var waitTimeout = null

 //VERIFICA LANÇAMENTOS SEM DATA DE FECHAMENTO
 function statusLançamento() {
   clearTimeout(waitTimeout)
   waitTimeout = setTimeout(function () { //faz com que a função carregue depois do firebase

     $(".trtable").each(function () {
       var venc = $(this).find('.venc').html();
       var paraDate = venc.split('/');
       var stringFormatada = paraDate[1] + '-' + paraDate[0] + '-' + paraDate[2];
       var dataFormatada1 = new Date(stringFormatada);
       console.log(dataFormatada1)

       var dataAtual = new Date();
       //var dtAtual = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();


       var fech = $(this).find('.fech').html();

       if (venc != "" && fech == "" && dataFormatada1 > dataAtual) {
         $(this).attr({ 'class': 'table-warning' })
       } else if (venc != "" && fech == "" && dataFormatada1 < dataAtual) {
         $(this).attr({ 'class': 'table-danger' })
       }

     })

   }, 2000)

 }