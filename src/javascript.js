
$(function(){
   $(".mask").maskMoney({
      prefix: 'R$ ',
      allowNegative: true,
      thousands: '.',
      decimal: ','
   });
});
$(function(){
   $(".mask2").maskMoney({
      prefix: 'US$ ',
      allowNegative: true,
      thousands: '.',
      decimal: ','
   });
});

(function(){
  var tr = document.getElementsByClassName('trtable');

  for ( var i = 0; i < tr.length; i++){
    var venc = $('.venc').val();
    var fech = $('.fech').val();

  if(venc[i] != "" && fech[i] == ""){
    $('.venc').closest('tr').attr({'class':'table-warning'})
  }
  }
 
})


/*
//Separa os valores 
let dataString = document.getElementById("dtFecha").value().split("/");

// Define a data com os valores separados 
let data = new Date(dataString[2], dataString[1]-1, dataString[0]);

console.log( data.toString() );
console.log( data.toLocaleDateString("pt-BR") );*/