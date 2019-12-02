import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emp=[] ;

  constructor(private service:EmpService) { }

  ngOnInit() {

    this.service.getemp().subscribe((response)=>{
         
      this.emp = response  as any[];
      console.log(response);
    });
  }

}
