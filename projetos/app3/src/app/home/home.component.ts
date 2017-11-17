import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Autenticacao } from '../autenticacao.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public sair(): void {
    this.autenticacao.sair()
  }

  public atualizarTimeline(): void {
    this.publicacoes.atualizarTimeline()
  }

}
