import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('logica do insert');
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('logica do atualizar');
        return true
    }

    remover(id: number): Concessionaria {
        console.log('logica do remover');
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('logica do selecionar');
        return new Concessionaria('', [])
    }

    selecionarTodos(): [Concessionaria] {
        console.log('logica do selecionarTodos');
        return [new Concessionaria('', [])]
    }
}