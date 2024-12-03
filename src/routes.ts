import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";

//Cria um roteador
const router = Router();

//Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response)=> {
    res.json({ mensagem: "Olá, Mundo!"});
});

/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/lista/livros", LivroController.lista);
// Rota para cadastrar um novo carro
router.post("/novo/livro", LivroController.cadastro);
// Rota para deletar um livro
router.delete("/delete/livro/:idLivro", LivroController.remover);
// Rota para atualizar um livro
router.put("/atualizar/livro/:idLivro", LivroController.atualizar);
/* 
* ROTAS PARA ALUNOS
*/ 
// Rota para listar os alunos
router.get("/lista/alunos", AlunoController.lista);
// Rota para cadastrar um novo aluno
router.post("/novo/aluno", AlunoController.cadastro);
// Rota para deletar um livro
router.delete("/delete/aluno/:idAluno", AlunoController.remover);
// Rota para atualizar um livro
router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar);


/* 
* ROTAS PARA EMPRÉSTIMOS
*/ 
// Rota para listar os empréstimos
router.get("/lista/emprestimos", EmprestimoController.lista);
// Rota para cadastrar um novo empréstimo
//
// Rota para deletar um livro
router.delete("/delete/emprestimo/:idEmprestimo", EmprestimoController.remover);
// Rota para atualizar um livro
router.put("/atualizar/emprestimo/:idEmprestimo", EmprestimoController.atualizar);

//Exportando as rotas
export { router };
