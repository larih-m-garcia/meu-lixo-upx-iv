import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscarLocalDescarteComponent } from './buscar-local-descarte/buscar-local-descarte.component';
import { MenuLocalDescarteComponent } from './menu-local-descarte/menu-local-descarte.component';
import { CadastroLocalDescarteComponent } from './cadastro-local-descarte/cadastro-local-descarte.component';
import { AtuaizarLocalDescarteComponent } from './atuaizar-local-descarte/atuaizar-local-descarte.component';
import { ExcluirLocalDescarteComponent } from './excluir-local-descarte/excluir-local-descarte.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    BuscarLocalDescarteComponent,
    MenuLocalDescarteComponent,
    CadastroLocalDescarteComponent,
    AtuaizarLocalDescarteComponent,
    ExcluirLocalDescarteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
