
import { ClientsService } from './../../service/clients.service';
import { ClientDTO } from '../../model/client-dto';
import { Component, OnInit } from '@angular/core';
import { RiskService } from 'src/app/service/chargesrates.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(private clientService: ClientsService, private riskService: RiskService) { }

  clients: Array<ClientDTO>;

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(
        res => {
          this.clients = res;
          console.log('Listado com sucesso');
         },
         err => {
           console.log(err.error),
           alert(err.error[0].msgUser);
         });
  }

}
