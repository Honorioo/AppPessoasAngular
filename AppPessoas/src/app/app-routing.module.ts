import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContatosPageComponent } from './pages/list-contatos-page/list-contatos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormUpdatePessoaComponent } from './components/pessoaComponents/form-update-pessoa/form-update-pessoa.component';
import { FormCreatePessoaComponent } from './components/pessoaComponents/form-create-pessoa/form-create-pessoa.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'listaContatos', component: ListContatosPageComponent
  },
  {
    path: 'editar-pessoa/:id', component: FormUpdatePessoaComponent
  },
  {
    path: 'criar-pessoa', component: FormCreatePessoaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
