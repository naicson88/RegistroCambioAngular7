import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    public firestore: AngularFirestore,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      dtVenc: "",
      fullName: "",
      invoice: "",
      tipo: "",
      di: "",
      vlDolar: "",
      vlPago: "",
      parcela: "",
      cotacao: "",
      vlReal: "",
      dtFecha: "",
      banco: "",
      contrato: "",
      modal: "",
      nBlHawb: ""
    }
  }

  onSubmit(form: NgForm) {

    let cota = $("#cotacao").val();
    let vlDolar = $("#vlDolar").val();
    let vlPago = $("#vlPago").val();
    let vlReal = $("#vlReal").val();

    let data = Object.assign({}, form.value);
    delete data.id;

    if (form.value.id == null) {

      data.cotacao = cota;
      data.vlDolar = vlDolar;
      data.vlPago = vlPago;
      data.vlReal = vlReal;

      this.firestore.collection('employees').add(data);
    }

    else

      data.cotacao = cota;
    data.vlDolar = vlDolar;
    data.vlPago = vlPago;
    data.vlReal = vlReal;

    this.firestore.doc('employees/' + form.value.id).update(data)
    this.resetForm(form);
    this.toastr.success("Submitted successfully", "Emp. Register")
  }

}

$(document).ready(function () {

$("#cotacao").keyup(

    function () {
      var valorPago = $("#vlPago").val().toString();
      var valorCotacao = $("#cotacao").val().toString();

      var numero1 = parseFloat(valorPago.replace("US$", "").replace('.', '').replace(',', '.'));
      var numero2 = parseFloat(valorCotacao.replace("R$", "").replace('.', '').replace(',', '.'));
      var soma = (numero1 * numero2).toFixed(2).toString();  
      
      document.getElementById("vlReal").value = soma;

    }
  )

});
