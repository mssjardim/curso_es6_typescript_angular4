import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Usuario } from '../../acesso/usuario.model'

import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'nome_completo': new FormControl('', [Validators.required]),
    'nome_usuario': new FormControl('', [Validators.required]),
    'senha': new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  public errorCadastro: string

  constructor(
    private autenticacaoService: Autenticacao
  ) { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario(): void {

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )

    this.autenticacaoService.cadastrarUsuario(usuario)
      .then((resposta: any) => {
        this.exibirPainelLogin()
      })      
      .catch((error: Error) => {        
        this.errorCadastro = error.message
      })
  }

}
