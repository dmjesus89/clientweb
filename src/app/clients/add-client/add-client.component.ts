import { RiskDTO } from '../../model/risk-dto';

import { ClientsService } from '../../service/clients.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RiskService } from 'src/app/service/chargesrates.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent  implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
    private clientService: ClientsService, private riskService: RiskService) { }

  addForm: FormGroup;
  risks: Array<RiskDTO>;

  ngOnInit() {
    this.getRisks();
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      creditLimit: ['', Validators.required],
      chargesRate: ['', Validators.required]
    });
  }

  getRisks() {
    this.riskService.getRisks()
      .subscribe(
        res => {
          this.risks = res;
          console.log('Listado com sucesso');
         },
         err => {
           console.log(err.error),
           alert(err.error[0].msgUser);
         });
  }

  onSubmit() {
    const clientModel = this.addForm.value;
    console.log(' aqui 1' + this.addForm.value);
    this.clientService.createUser(this.addForm.value).subscribe(
        res => {
          console.log('Cadastrado com sucesso');
         },
         err => {
           console.log(err.error),
           alert(err.error[0].msgUser);
         }
       );
  }

}
