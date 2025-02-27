import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContatosPageComponent } from './pages/list-contatos-page/list-contatos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent
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
