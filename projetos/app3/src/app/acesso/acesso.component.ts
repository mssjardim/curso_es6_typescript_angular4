import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [ 
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [ 
        style({ opacity: 0, transform: 'translate(-50px, 0px)' }),
        animate('500ms 0s ease-in-out') // duracao, deplay e aceleracao
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [ 
        style({ opacity: 0, transform: 'translate(50px, 0px)' }),
        animate('500ms 0s ease-in-out') // duracao, deplay e aceleracao
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  public cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro'
  }

}
