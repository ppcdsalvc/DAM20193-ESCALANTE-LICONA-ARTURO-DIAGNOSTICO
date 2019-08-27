import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalErrorComponent} from './modal-error/modal-error.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  
  title = 'examen-diagnostico';



  ngOnInit(){

  }

 
}

