import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalErrorComponent} from '../modal-error/modal-error.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario="";
  pass="";

  constructor(private router: Router, public dialog: MatDialog){

  } 

  ngOnInit() {
  }
  login(){
    if(this.usuario=="admin" && this.pass =="admin"){
      this.router.navigate([`/prinicipal/${this.usuario}`]);
    }else{
      this.dialog.open(ModalErrorComponent);
    }
  }

}
