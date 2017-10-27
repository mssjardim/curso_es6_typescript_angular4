import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/Rx'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta

  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription 

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id'])
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    /*
    this.route.params.subscribe(
      (parametro: any) => { console.log(parametro) },
      (erro: any) => console.log(erro),
      () => console.log('processamento foi classificado como concluido')           
    )
    */

    
    let tempo = Observable.interval(2000)
    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => console.log(intervalo))

    let meuObservableTeste = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream')
      observer.next('Primeiro evento da stream')
      // observer.error('algum erro foi encontrado na stream de eventos')
      observer.complete()
      observer.next('Evento lançado depois do stre')
    })

    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado),
      (erro: string) => console.log(erro),
      () => console.log('Stream completado')
    )
  }

  ngOnDestroy() {
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
  }
}
