import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as firebase from 'firebase'

import { Bd } from '../../bd.service'

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublicacoesComponent implements OnInit {

  public email: string
  public publicacoes: any

  constructor(private bd: Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email

      this.atualizarTimeline()
    })
  }

  public atualizarTimeline(): void {
    this.bd.consultaPublicacoes(this.email)
    .then((publicacoes: any) => {
      this.publicacoes = publicacoes
    })
  }

}
