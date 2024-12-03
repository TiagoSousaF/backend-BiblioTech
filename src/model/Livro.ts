import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do livro */
    private idLivro: number = 0;
    /* Título do livro */
    private titulo: string;
    /* Autor do livro */
    private autor: string;
    /* Editora do livro */
    private editora: string;
    /* Ano de publicação do livro */
    private anoPublicacao: string;
    /* ISBN do livro */
    private isbn: string;
    /* Quantidade total de exemplares */
    private quantTotal: number;
    /* Quantidade disponível de exemplares */
    private quantDisponivel: number;
    /* Valor de aquisição do livro */
    private valorAquisicao: number;
    /* Status se o livro está emprestado */
    private statusLivroEmprestado: string;

    /**
     * Construtor da classe Livro
     * 
     * @param titulo Título do livro
     * @param autor Autor do livro
     * @param editora Editora do livro
     * @param anoPublicacao Ano de publicação do livro
     * @param isbn ISBN do livro
     * @param quantTotal Quantidade total de exemplares
     * @param quantDisponivel Quantidade disponível de exemplares
     * @param valorAquisicao Valor de aquisição do livro
     * @param statusLivroEmprestado Status do livro quanto a empréstimos
     */
    constructor(
        titulo: string,
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do livro
     * @returns o identificador do livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do livro
     * @param idLivro novo identificador do livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna o título do livro.
     * 
     * @returns O título do livro.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Define o título do livro.
     * 
     * @param titulo - O título do livro a ser definido.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Retorna o autor do livro.
     * 
     * @returns O autor do livro.
     */
    public getAutor(): string {
        return this.autor;
    }

    /**
     * Define o autor do livro.
     * 
     * @param autor - O autor do livro.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * Retorna a editora do livro.
     * 
     * @returns A editora do livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define a editora do livro.
     * 
     * @param editora - A editora do livro.
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * Retorna o ano de publicação do livro.
     * 
     * @returns O ano de publicação do livro.
     */
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    /**
     * Define o ano de publicação do livro.
     * 
     * @param anoPublicacao - O ano de publicação do livro.
     */
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     * Retorna o ISBN do livro.
     * 
     * @returns O ISBN do livro.
     */
    public getIsbn(): string {
        return this.isbn;
    }

    /**
     * Define o ISBN do livro.
     * 
     * @param isbn - O ISBN do livro.
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    /**
     * Retorna a quantidade total de exemplares.
     * 
     * @returns A quantidade total de exemplares.
     */
    public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * Define a quantidade total de exemplares.
     * 
     * @param quantTotal - A quantidade total de exemplares.
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    /**
     * Retorna a quantidade disponível de exemplares.
     * 
     * @returns A quantidade disponível de exemplares.
     */
    public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    /**
     * Define a quantidade disponível de exemplares.
     * 
     * @param quantDisponivel - A quantidade disponível de exemplares.
     */
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

    /**
     * Retorna o valor de aquisição do livro.
     * 
     * @returns O valor de aquisição do livro.
     */
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * Define o valor de aquisição do livro.
     * 
     * @param valorAquisicao - O valor de aquisição do livro.
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    /**
     * Retorna o status de empréstimo do livro.
     * 
     * @returns O status de empréstimo do livro.
     */
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * Define o status de empréstimo do livro.
     * 
     * @param statusLivroEmprestado - O status de empréstimo do livro.
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    /**
   * Busca e retorna uma lista de livros do banco de dados.
   * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
   * 
   * - A função realiza uma consulta SQL para obter todas as informações da tabela "livro".
   * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
   * - Cada livro é adicionado a uma lista que será retornada ao final da execução.
   * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
   */
    static async listarLivros(): Promise<Array<Livro> | null> {
        // objeto para armazenar a lista de livros
        const listaDeLivros: Array<Livro> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectLivro = `SELECT * FROM livro;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectLivro);

            // usando a resposta para instanciar um objeto do tipo livro
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto livro
                const novoLivro = new Livro(
                    linha.titulo,
                    linha.autor,
                    linha.editora,
                    linha.ano_publicacao,
                    linha.isbn,
                    linha.quant_total,
                    linha.quant_disponivel,
                    linha.valor_aquisicao,
                    linha.status_livro_emprestado
                );

                // atribui o ID objeto
                novoLivro.setIdLivro(linha.id_livro);

                // adiciona o objeto na lista
                listaDeLivros.push(novoLivro);
            });

            // retorna a lista de livros
            return listaDeLivros;
        } catch (error) {
            console.log('Erro ao buscar lista de livros. Verifique os logs para mais detalhes.');
            console.log(error);
            return null;
        }
    }

    /**
     * Realiza o cadastro de um livro no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Livro` e insere seus dados ( titulo, autor, editora, anoPublicacao, isbn, quantTotal, 
     * quantDisponivel, valorAquisicao, statusLivroEmprestado)
     * na tabela `livro` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {Livro} livro - Objeto contendo os dados do livro que será cadastrado. O objeto `Livro`
     *                        deve conter os métodos `getTitulo()`, `getAutor()`, `getEditora()`, `getAnoPublicacao()`, `getIsbn()`, 
     *                        `getQuantTotal()`, `getQuantDisponivel()`, `getValorAquisicao()`, `getStatusLivroEmprestado()`  
     *                        que retornam os respectivos valores do livro.
     * @returns {Promise<boolean>} - Retorna `true` se o livro foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastrarLivro(livro: Livro): Promise<boolean> {
        try {
            // query para fazer insert de um livro no banco de dados
            const queryInsertLivro = `INSERT INTO livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                    VALUES
                                    ('${livro.getTitulo()}', 
                                    '${livro.getAutor()}', 
                                    '${livro.getEditora()}', 
                                    '${livro.getAnoPublicacao()}',
                                    '${livro.getIsbn()}',
                                    '${livro.getQuantTotal()}',
                                    '${livro.getQuantDisponivel()}',
                                    '${livro.getValorAquisicao()}',
                                    '${livro.getStatusLivroEmprestado()}')
                                    RETURNING id_livro;`;

            //executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertLivro);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Livro cadastrado com sucesso! ID do livro: ${respostaBD.rows[0].id_livro}`);
                // true significa que o cadastro foi feito
                return true;
            }

            // false significa que o cadastro NÃO foi feito.
            return false;
            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o livro. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }

    static async removerLivro(idLivro: number): Promise<boolean> {
        try {
            //cria uma query para deletar um objeto do banco de dados, passando como parâmetro o ID
            const queryDeleteLivro = `DELETE FROM livro WHERE id_livro = ${idLivro}`;

            //executar a query e armazenar a resposta do banco de daodos
            const respostaBD = await database.query(queryDeleteLivro);

            //verifica se o número de linhas alteradas é diferente de 0
            if (respostaBD.rowCount != 0) {
                //exibe uma mensagem no console
                console.log(`Livro removido com sucesso. ID removido: ${idLivro}`);
                //retorna true, indicando que o livro foi removido
                return true;
            }

            //retorna false, o que indica que o livro foi removido
            return true;
            //trata qualquer erro que possa acontecer no caminho
        } catch (error) {
            //exibe uma mensagem de falha
            console.log(`Erro ao remover livro. Verifique os logs para mais detalhes.`);
            //imprime o erro no console da API
            console.log(error);
            //retorna false, o que indica que a remoção não foi feita 
            return false;
        }
    }

    static async atualizarLivro(livro: Livro): Promise<boolean> {
        try {
            const queryUpdateLivro = `UPDATE livro SET
                                     titulo = '${livro.getTitulo()}',
                                     autor = '${livro.getAutor()}',
                                     editora = '${livro.getEditora()}',
                                     ano_publicacao = '${livro.getAnoPublicacao()}',
                                     isbn = '${livro.getIsbn()}',
                                     quant_total = ${livro.getQuantTotal()},
                                     quant_disponivel = ${livro.getQuantDisponivel()}, 
                                     valor_aquisicao = ${livro.getValorAquisicao()}, 
                                     status_livro_emprestado = '${livro.getStatusLivroEmprestado()}'
                                     WHERE id_livro = ${livro.getIdLivro()};`;

            console.log(queryUpdateLivro);

            //executar a query e armazenar a resposta do banco de dados em uma variável
            const respostaBD = await database.query(queryUpdateLivro);
            console.log(queryUpdateLivro);


            //verifica se alguma linha foi alterada
            if (respostaBD.rowCount != 0) {
                //imprime uma mensagem de sucesso no console
                console.log(`Livro atualizado com sucesso! ID: ${livro.getIdLivro()}`);
                //retorna true, indicando que a query foi executada com sucesso
                return true;
            }

            //retorna falso, indicando que a query não foi executada com sucesso
            return false;

        } catch (error) {
            //exibe uma mensagem de falha
            console.log(`Erro ao atualizar o livro. Verifique os logs para mais detalhes.`);
            //imprime o erro no console da API
            console.log(error);
            //retorna false, o que indica que a remoção não foi feita
            return false;
        }
    }
}