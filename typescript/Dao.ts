import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('logica do insert');
        return true
    }

    atualizar(object: T): boolean {
        console.log('logica do atualizar');
        return true
    }

    remover(id: number): T {
        console.log('logica do remover');
        return Object()
    }

    selecionar(id: number): T {
        console.log('logica do selecionar');
        return Object()
    }

    selecionarTodos(): [T] {
        console.log('logica do selecionarTodos');
        return [Object()]
    }
}