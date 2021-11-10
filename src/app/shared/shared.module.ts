import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { DistritosService } from './map/services/distritos.service';




@NgModule({
  declarations: [
    SidebarComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports: [
    SidebarComponent,
    MapComponent
  ],
  providers: [
    DistritosService
  ]

})
export class SharedModule { }
