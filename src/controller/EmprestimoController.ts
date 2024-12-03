import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";

interface EmprestimoDTO {
    idAluno: number,
    idLivro: number,
    dataEmprestimo: Date,
    dataDevolucao: Date,
    statusLivroEmprestado: string
}

/**
 * A classe `EmprestimoController` extende a classe `Emprestimo` e é responsável por controlar as requisições relacionadas aos emprestimos.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "emprestimo".
 * - Herdando de `emprestimo`, ela pode acessar métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo {

    /**
    * Lista todos os emprestimos.
    * @param req Objeto de requisição HTTP.
    * @param res Objeto de resposta HTTP.
    * @returns Lista de emprestimos em formato JSON com status 200 em caso de sucesso.
    * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de emprestimos.
    */
    static async lista(req: Request, res: Response): Promise<any> {
        try {
            // acessa a função de listar os emprestimos e armazena o resultado
            const listaDeEmprestimos = await Emprestimo.listarEmprestimos();

            console.log(listaDeEmprestimos);

            // retorna a lista de emprestimos há quem fez a requisição web
            return res.status(200).json(listaDeEmprestimos);
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log('Erro ao acessar a listagem de emprestimos');

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de emprestimos" });
        }
    }

    //
    //ESPAÇO PARA CADASTRO EMPRÉSTIMO
    //


    static async remover(req: Request, res: Response): Promise<any> {
        try {
            //recuperar o ID do empréstimo a ser removido
            const IdEmprestimo = parseInt(req.params.idEmprestimo as string);

            //chamar a função do modelo e armazenar a resposta
            const respostaModelo = await Emprestimo.removerEmprestimo(IdEmprestimo);

            //verifica se a resposta do modelo foi verdadeiro (true)
            if (respostaModelo) {
                //retorna um status 200 c0m uma mensagem de sucesso
                return res.status(200).json({ mensagem: "O empréstimo foi removido com sucesso!" })
            } else {
                //retorna um status 400 com uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao remover o empréstimo. Entre em contato com o administrador do sistema" })
            }

        } catch (error) {
            //lança uma mensagem de erro no console
            console.log(`Erro ao remover um Empréstimo. ${error}`);

            //retorna uma mensagem de erro à quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível remover o empréstimo. Entre em contato com o administrador do sistema." });
        }
    }

    static async atualizar(req: Request, res: Response): Promise<any> {
        try {
            //recupera as inoformações a serem atualizadas no corpo da requisição
            const emprestimoRecebido: EmprestimoDTO = req.body;
            //recupera o ID do empréstimo a ser atualizado
            const idEmprestimoRecebido = parseInt(req.params.idEmprestimo as string);

            //instanciando um objeto do tipo empréstimo
            const emprestimoAtualizado = new Emprestimo(
                emprestimoRecebido.idAluno,
                emprestimoRecebido.idLivro,
                emprestimoRecebido.dataEmprestimo,
                emprestimoRecebido.dataDevolucao,
                emprestimoRecebido.statusLivroEmprestado
            );

            //adicionando o ID no objetoEmprestimoAtualizado
            emprestimoAtualizado.setIdEmprestimo(idEmprestimoRecebido);

            //chamando a função de atualizar o empréstimo e guardando a resposta (booleano)
            const respostaModelo = await Emprestimo.atualizarEmprestimo(emprestimoAtualizado);

            //verifica se a resposta é true
            if (respostaModelo) {
                //retorna um status 200 com uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Empréstimo atualizado com sucesso!" })
            } else {
                //retorna um status 400 com uma mensagem de erro
                return res.status(400).json({ mensagem: "Não foi possível atualizar o empréstimo. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            //lança uma mensagem de erro no console
            console.log(`Erro ao atualizar um empréstimo. ${error}`);

            return res.status(400).json({ mensagem: "Não foi possível atualizar o empréstimo. Entre em contato com o administrador do sistema." });
        }
    }
}
