import { Component, OnInit, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  private toast = inject(ToastrService);

  ngOnInit(): void {
    this.toast.info('Login efetuado', 'LOGIN');
  }
}
