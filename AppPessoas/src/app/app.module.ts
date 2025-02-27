import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/pessoaComponents/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ListContatosPageComponent } from './pages/list-contatos-page/list-contatos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListContactsComponent } from './components/contatoComponents/list-contacts/list-contacts.component';
import { FormCreatePessoaComponent } from './components/pessoaComponents/form-create-pessoa/form-create-pessoa.component';
import { FormsModule } from '@angular/forms';
import { FormCadastroComponent } from './components/contatoComponents/form-cadastro/form-cadastro.component';
import { FormUpdateComponent } from './components/contatoComponents/form-update/form-update.component';
import { FormUpdatePessoaComponent } from './components/pessoaComponents/form-update-pessoa/form-update-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    ListContatosPageComponent,
    HomePageComponent,
    ListContactsComponent,
    FormCreatePessoaComponent,
    FormCadastroComponent,
    FormUpdateComponent,
    FormUpdatePessoaComponent
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
