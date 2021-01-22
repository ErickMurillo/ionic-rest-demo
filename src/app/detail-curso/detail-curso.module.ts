import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCursoPageRoutingModule } from './detail-curso-routing.module';

import { DetailCursoPage } from './detail-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCursoPageRoutingModule
  ],
  declarations: [DetailCursoPage]
})
export class DetailCursoPageModule {}
