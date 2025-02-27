import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { ListContatosPageComponent } from './pages/list-contatos-page/list-contatos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    ModalComponent,
    ListContatosPageComponent,
    HomePageComponent,
    ListContactsComponent,
    ModalCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
