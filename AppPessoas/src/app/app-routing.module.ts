import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContatosPageComponent } from './pages/list-contatos-page/list-contatos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ModalComponent } from './components/pessoaComponents/modal/modal.component';
import { ModalCreateComponent } from './components/pessoaComponents/modal-create/modal-create.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'listaContatos', component: ListContatosPageComponent
  },
  {
    path: 'editar-pessoa/:id', component: ModalComponent
  },
  {
    path: 'criar-pessoa', component: ModalCreateComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
