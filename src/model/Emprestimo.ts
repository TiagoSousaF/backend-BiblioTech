import { log } from "console";
import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um empréstimo.
 */
export class Emprestimo {

    /* Atributos */
    /* Identificador do empréstimo */
    private idEmprestimo: number = 0;
    /* Identificador do aluno */
    private idAluno: number;
    /* Identificador do livro */
    private idLivro: number;
    /* Data do empréstimo */
    private dataEmprestimo: Date;
    /* Data de devolução */
    private dataDevolucao: Date;
    /* Status do empréstimo */
    private statusEmprestimo: string;
    /* Nome aluno (valor undefined) */
    // private nomeAluno?: string;
    /* Título livro (valor undefined) */
    //  private tituloLivro?: string;

    /**
     * Construtor da classe Emprestimo
     * 
     * @param idAluno Identificador do aluno
     * @param idLivro Identificador do livro
     * @param dataEmprestimo Data de empréstimo
     * @param dataDevolucao Data de devolução
     * @param statusEmprestimo Status do empréstimo
     */
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do empréstimo
     * @returns o identificador do empréstimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um valor ao identificador do empréstimo
     * @param idEmprestimo novo identificador do empréstimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Retorna o identificador do aluno.
     * 
     * @returns o identificador do aluno.
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Define o identificador do aluno.
     * 
     * @param idAluno - novo identificador do aluno.
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna o identificador do livro.
     * 
     * @returns o identificador do livro.
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Define o identificador do livro.
     * 
     * @param idLivro - novo identificador do livro.
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a data do empréstimo.
     * 
     * @returns A data do empréstimo.
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Define a data do empréstimo.
     * 
     * @param dataEmprestimo - A data do empréstimo.
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna a data de devolução.
     * 
     * @returns A data de devolução.
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Define a data de devolução.
     * 
     * @param dataDevolucao - A data de devolução.
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * Retorna o status do empréstimo.
     * 
     * @returns O status do empréstimo.
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * Define o status do empréstimo.
     * 
     * @param statusEmprestimo - Novo status do empréstimo.
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }

    /**
   * Busca e retorna uma lista de emprestimos do banco de dados.
   * @returns Um array de objetos do tipo `Emprestimo` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
   * 
   * - A função realiza uma consulta SQL para obter todas as informações da tabela "emprestimo".
   * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Emprestimo`.
   * - Cada emprestimo é adicionado a uma lista que será retornada ao final da execução.
   * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
   */
    static async listarEmprestimos(): Promise<any> {
        const respostaJson: { idEmprestimo: any; idAluno: any; nomeAluno: any; idLivro: any; tituloLivro: any; dataEmprestimo: any; dataDevolucao: any; statusLivroEmprestado: any; }[] = [];
        try {
            // query de consulta ao banco de dados
            const querySelectEmprestimo = `SELECT e.*, 
                                                a.nome AS nome_aluno, 
                                                l.titulo AS titulo_livro
                                            FROM 
                                                Emprestimo e
                                            JOIN 
                                                Aluno a ON e.id_aluno = a.id_aluno
                                            JOIN 
                                                Livro l ON e.id_livro = l.id_livro;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectEmprestimo);

            // usando a resposta para instanciar um objeto do tipo emprestimo
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto emprestimo
                respostaJson.push({
                    idEmprestimo: linha.id_emprestimo,
                    idAluno: linha.id_aluno,
                    nomeAluno: linha.nome_aluno,
                    idLivro: linha.id_livro,
                    tituloLivro: linha.titulo_livro,
                    dataEmprestimo: linha.data_emprestimo,
                    dataDevolucao: linha.data_devolucao,
                    statusLivroEmprestado: linha.status_emprestimo
                });
            });

            return respostaJson;
        } catch (error) {
            console.log('Erro ao buscar lista de empréstimos. Verifique os logs para mais detalhes.');
            console.log(error);
            return null;
        }
    }

    //
    //ESPAÇO PARA CADASTRO EMPRÉSTIMO
    //


    static async removerEmprestimo(idEmprestimo: number): Promise<boolean> {
        try {
            //cria uma query para deletar um objeto do banco de dados, passando como parâmetro o ID
            const queryDeleteEmprestimo = `DELETE FROM emprestimo WHERE id_emprestimo = ${idEmprestimo}`;

            //executar a query e armazenar a resposta do banco de daodos
            const respostaBD = await database.query(queryDeleteEmprestimo);

            //verifica se o número de linhas alteradas é diferente de 0
            if (respostaBD.rowCount != 0) {
                //exibe uma mensagem no console
                console.log(`Emprestimo removido com sucesso. ID removido: ${idEmprestimo}`);
                //retorna true, indicando que o empréstimo foi removido
                return true;
            }

            //retorna false, o que indica que o empréstimo foi removido
            return true;
            //trata qualquer erro que possa acontecer no caminho
        } catch (error) {
            //exibe uma mensagem de falha
            console.log(`Erro ao remover empréstimo. Verifique os logs para mais detalhes.`);
            //imprime o erro no console da API
            console.log(error);
            //retorna false, o que indica que a remoção não foi feita 
            return false;
        }
    }

    static async atualizarEmprestimo(emprestimo: Emprestimo): Promise<boolean> {
        try {
            const queryUpdateEmprestimo = `UPDATE emprestimo SET
                                     id_aluno = ${emprestimo.getIdAluno()},
                                     id_livro = ${emprestimo.getIdLivro()},
                                     data_emprestimo = '${emprestimo.getDataEmprestimo()}',
                                     data_devolucao = '${emprestimo.getDataDevolucao()}',
                                     status_emprestimo = '${emprestimo.getStatusEmprestimo()}'
                                     WHERE id_emprestimo = ${emprestimo.getIdEmprestimo()};`;

                                     console.log(queryUpdateEmprestimo);
                                     

            //executar a query e armazenar a resposta do banco de dados em uma variável
            const respostaBD = await database.query(queryUpdateEmprestimo);

            //verifica se alguma linha foi alterada
            if (respostaBD.rowCount != 0) {
                //imprime uma mensagem de sucesso no console
                console.log(`Empréstimo atualizado com sucesso! ID: ${emprestimo.getIdEmprestimo()}`);
                //retorna true, indicando que a query foi executada com sucesso
                return true;
            }

            //retorna falso, indicando que a query não foi executada com sucesso
            return false;

        } catch (error) {
            //exibe uma mensagem de falha
            console.log(`Erro ao atualizar o empréstimo. Verifique os logs para mais detalhes.`);
            //imprime o erro no console da API
            console.log(error);
            //retorna false, o que indica que a remoção não foi feita
            return false;
        }
    }
}
