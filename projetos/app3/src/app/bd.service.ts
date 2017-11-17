import { Injectable } from '@angular/core'

import * as firebase from 'firebase'
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

    constructor(
        private progresso: Progresso
    ) { }

    public publicar(publicacao: any): void {



        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo })
            .then((resposta: any) => {

                let nomeImagem = resposta.key

                firebase.storage().ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot: any) => {
                        this.progresso.status = 'andamento'
                        this.progresso.estado = snapshot
                    },
                    (error) => {
                        this.progresso.status = 'erro'
                        console.log(error)
                    },
                    () => {
                        this.progresso.status = 'concluido'
                    }
                    )

            })
    }

    public consultaPublicacoes(emailUsuario: string): Promise<any> {

        return new Promise((resolve, reject) => {

            firebase.database().ref(`publicacoes/${btoa(emailUsuario)}`)
                .once('value')
                .then((snapshop: any) => {

                    let publicacoes: any[] = []

                    snapshop.forEach((childSnapshot: any) => {
                        let publicacao = childSnapshot.val()

                        firebase.storage().ref()
                            .child(`imagens/${childSnapshot.key}`)
                            .getDownloadURL()
                            .then((url: string) => {

                                publicacao.url_imagem = url

                                firebase.database().ref(`usuario_detalhe/${btoa(emailUsuario)}`)
                                    .once('value')
                                    .then((snapshop: any) => {
                                        publicacao.nome_usuario = snapshop.val().nome_usuario

                                        publicacoes.push(publicacao)

                                    })

                            })
                    })

                    resolve(publicacoes)

                })

        })


    }
}