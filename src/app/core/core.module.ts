import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule   
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
