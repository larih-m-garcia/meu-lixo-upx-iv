import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BuscarLocalDescarteComponent } from './buscar-local-descarte/buscar-local-descarte.component';
import { MenuLocalDescarteComponent } from './menu-local-descarte/menu-local-descarte.component';
import { CadastroLocalDescarteComponent } from './cadastro-local-descarte/cadastro-local-descarte.component';
import { AtuaizarLocalDescarteComponent } from './atuaizar-local-descarte/atuaizar-local-descarte.component';
import { ExcluirLocalDescarteComponent } from './excluir-local-descarte/excluir-local-descarte.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component:TelaInicialComponent},
  {path: 'buscar-local-descarte', component:BuscarLocalDescarteComponent},
  {path: 'menu-local-descarte', component:MenuLocalDescarteComponent},
  {path: 'cadastro-local-descarte', component:CadastroLocalDescarteComponent},
  {path: 'atualizar-local-descarte', component:AtuaizarLocalDescarteComponent},
  {path: 'excluir-local-descarte', component:ExcluirLocalDescarteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }