import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return  {
             id: item.payload.doc.id,
          ...(item.payload.doc.data() as Object) } as Employee;    
      })
    });
  }

  onEdit(emp: Employee){
    this.service.formData = Object.assign({}, emp);
    document.getElementById('open').click();
    document.body.scrollTop = 1; // For Safari
    document.documentElement.scrollTop = 10;
    document.documentElement.scrollLeft = 10;
    
  }

   onDelete(id: string){
      if(confirm("Are you sure to delete this record?")){
        this.firestore.doc('employees/'+id).delete();
        this.toastr.warning('Deleted successfully', 'EMP. register')
      }
   } 


}
