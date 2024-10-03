-- CREATE ALUNO - TRIGGER - FUNCTION
CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();


-- CREATE LIVRO
CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);


-- CREATE EMPRESTIMO
CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);


-- ALUNO
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Leo', 'Messi', '2005-06-24', 'Rua Futebol, 300', 'messi@futebol.com', '16991944821'),
('Serena', 'Williams', '2004-09-26', 'Rua Tennis, 888', 'serena@tennis.com', '16985967234'),
('Dwayne', 'Johnson', '2003-02-17', 'Rua Cinema, 1234', 'dwayne@cinema.com', '16984905678'),
('Emma', 'Watson', '2002-04-15', 'Rua Livro, 567', 'emma@livros.com', '16983920122'),
('Kobe', 'Bryant', '2000-08-23', 'Rua NBA, 444', 'kobe@nba.com', '16985912345'),
('Megan', 'Fox', '2006-11-09', 'Rua Hollywood, 4567', 'megan@cinema.com', '16982934567'),
('David', 'Beckham', '2001-03-10', 'Rua Futebol, 789', 'david@futebol.com', '16987956789'),
('Taylor', 'Swift', '2003-12-13', 'Rua Música, 1011', 'taylor@musica.com', '16981923456'),
('Leonardo', 'DiCaprio', '2002-10-05', 'Rua Cinema, 222', 'leo@cinema.com', '16982967890'),
('Ronaldo', 'Nazário', '2005-07-18', 'Rua Futebol, 333', 'ronaldo@futebol.com', '16986934512');


-- LIVRO
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Harper & Row', '1967', '978-0060883287', 15, 15, 95.00, 'Disponível'),
('A Metamorfose', 'Franz Kafka', 'Companhia das Letras', '1915', '978-8535933677', 10, 10, 60.00, 'Disponível'),
('O Morro dos Ventos Uivantes', 'Emily Brontë', 'Penguin Classics', '1847', '978-0141439556', 5, 5, 85.00, 'Disponível'),
('O Lobo da Estepe', 'Hermann Hesse', 'Companhia das Letras', '1927', '978-8535923540', 8, 8, 110.00, 'Disponível'),
('O Grande Gatsby', 'F. Scott Fitzgerald', 'Scribner', '1925', '978-0743273565', 12, 12, 70.00, 'Disponível'),
('A Montanha Mágica', 'Thomas Mann', 'Companhia das Letras', '1924', '978-8535923649', 6, 6, 130.00, 'Disponível'),
('A Vida e a Morte de um Pincel', 'Lúcia Hiratsuka', 'Ed. do Brasil', '2003', '978-8574021655', 9, 9, 45.00, 'Disponível'),
('A Insustentável Leveza do Ser', 'Milan Kundera', 'Editora Companhia das Letras', '1984', '978-8535922895', 7, 7, 80.00, 'Disponível'),
('Crime e Castigo', 'Fiódor Dostoiévski', 'Editora 34', '1866', '978-8573262915', 4, 4, 100.00, 'Disponível'),
('O Livro do Amanhã', 'Cecelia Ahern', 'Editora Rocco', '2008', '978-8579804082', 10, 10, 75.00, 'Disponível');


-- EMPRÉSTIMO
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(11, 12, '2024-09-12', '2024-09-26', 'Em andamento'),
(12, 11, '2024-09-13', '2024-09-27', 'Em andamento'),
(13, 14, '2024-09-14', '2024-09-28', 'Em andamento'),
(14, 13, '2024-09-15', '2024-09-29', 'Em andamento'),
(15, 16, '2024-09-16', '2024-09-30', 'Em andamento'),
(16, 15, '2024-09-17', '2024-10-01', 'Em andamento'),
(17, 18, '2024-09-18', '2024-10-02', 'Em andamento'),
(18, 17, '2024-09-19', '2024-10-03', 'Em andamento'),
(19, 20, '2024-09-20', '2024-10-04', 'Em andamento'),
(20, 19, '2024-09-21', '2024-10-05', 'Em andamento');
