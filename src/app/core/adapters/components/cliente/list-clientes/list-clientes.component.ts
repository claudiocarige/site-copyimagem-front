import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ClienteService } from 'src/app/core/use-cases/services/service-cliente/cliente.service';
import { Cliente } from '../../../../models/modelCliente';
import { ClientePF } from 'src/app/core/models/modelClientePF';
import { ClientePJ } from 'src/app/core/models/modelClientePJ';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit{

  ELEMENT_DATA: (ClientePF | ClientePJ)[] = [];

  displayedColumns: string[] = ['id', 'nomeCliente', 'email',
                    'telefone','whatsapp','inicioContrato' , 'situacaoFinanceira','cpf', 'cnpj', 'acoes'];
  dataSource = new MatTableDataSource<ClientePF | ClientePJ>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  private clienteService = inject(ClienteService);


  constructor(){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    console.log('FINDALL PARA API PIPOCA in USERLIST');
    this.clienteService.findAll().subscribe((data) => {
      if (Array.isArray(data)) {
        this.ELEMENT_DATA = data;
      } else if (data) {
        this.ELEMENT_DATA = [data];
      }
      console.log(data);
      this.dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
