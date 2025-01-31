import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page-1/page-1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { Page2Component } from './page-2/page-2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule,MatButtonModule,MatPaginatorModule,MatSidenavModule,MatToolbarModule,MatTableModule,MatIconModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
