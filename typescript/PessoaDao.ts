import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('logica do insert');
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('logica do atualizar');
        return true
    }

    remover(id: number): Pessoa {
        console.log('logica do remover');
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('logica do selecionar');
        return new Pessoa('', '')
    }

    selecionarTodos(): [Pessoa] {
        console.log('logica do selecionarTodos');
        return [new Pessoa('', '')]
    }
}