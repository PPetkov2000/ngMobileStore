import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule   
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
