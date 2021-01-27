import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CursosService } from '../api/cursos.service';
import { DetailCursoPage } from '../detail-curso/detail-curso.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayPosts:any;
  databaseObj: SQLiteObject;
  name_model: string = "";
  row_data: any = [];
  public cursos:any;
  constructor(
            public navCtrl: NavController,
            public postServices:CursosService,
            public router : Router,
            private platform: Platform,
            private sqlite: SQLite,
            private http: HttpClient) {

    this.platform.ready().then(() => {
      this.createDB();
      this.getCursoList();
    }).catch(error => {
      console.log(error);
    })

  }

  getCursoList() {
    this.postServices.getPosts()
    .then(data => {
      this.arrayPosts = data;
      this.cursos = data;
      for (var i = 0; i < this.cursos.length; i++) {
        this.databaseObj.executeSql("UPDATE OR IGNORE Curso SET titulo = ?, imagen = ?, descripcion = ?, fecha = ?, activo = ? WHERE id = ?", [this.cursos[i].titulo,this.cursos[i].imagen,this.cursos[i].descripcion,this.cursos[i].fecha,this.cursos[i].activo,this.cursos[i].id]).then((data) => {
        console.log("UPDATED curso: " + JSON.stringify(data));
        }, (error) => {
          console.log("ERROR curso: " + JSON.stringify(error.err));
          });
          this.databaseObj.executeSql("INSERT OR IGNORE INTO Curso (id, titulo, imagen, descripcion, fecha) VALUES (?,?,?,?,?,?)", [this.cursos[i].unique_id,this.cursos[i].titulo,this.cursos[i].imagen,this.cursos[i].descripcion,this.cursos[i].fecha,this.cursos[i].activo]).then((data) => {
          console.log("INSERTED curso: " + JSON.stringify(data));
          }, (error) => {
            console.log("ERROR curso: " + JSON.stringify(error.err));
            });
      }
      console.log(this.arrayPosts)
    });
  }

  createDB() {
    this.sqlite.create({
      name: 'db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        alert('fdatatable Database Created!');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

}
