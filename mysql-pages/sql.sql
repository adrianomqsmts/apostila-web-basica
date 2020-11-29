CREATE TABLE pessoas (
    nome varchar(255) NOT NULL,
    idade int,
    CHECK (idade>=18)
); 

DROP TABLE pessoas;


CREATE TABLE produtos(
  id_produto INT,
  nome TEXT,
  preco DOUBLE
);

ALTER TABLE produtos RENAME TO equipamentos;

ALTER TABLE equipamentos CHANGE COLUMN id_produto id_equipamento INT;
ALTER TABLE equipamentos CHANGE COLUMN nome modelo VARCHAR(100);
ALTER TABLE equipamentos CHANGE COLUMN id_equipamento id_equipamento INT UNIQUE NOT NULL

ALTER TABLE equipamentos ADD COLUMN descricao TEXT;
ALTER TABLE equipamentos ADD COLUMN (
  marca VARCHAR(50),
  num_serie INT
);

ALTER TABLE equipamentos MODIFY COLUMN preco DECIMAL(10,2) NOT NULL;

ALTER TABLE equipamentos DROP COLUMN descricao;



CREATE TABLE bancos (
  numero INT not null,
  nome VARCHAR (100),
  endereco TEXT
);



ALTER TABLE banco ADD constraint pk_banco primary key (numero);

ALTER TABLE banco ADD constraint uniq_nome UNIQUE (nome);
-- OU --
ALTER TABLE banco ADD UNIQUE (nome)


CREATE TABLE transacao(
  num_transacao INT primary key auto_increment,
  valor NUMERIC(10,2),
  tipo CHAR(10),
  num_banco INT
);

ALTER TABLE transacao ADD constraint fk_transacao_banco foreign key (num_banco) references banco (numero);
-- Comando para encontrar o nome da constraint da chave estrangeira
SELECT * FROM information_schema.table_constraints WHERE constraint_schema = 'apostila' AND table_name = 'transacao';
-- Comando para remover a chave estrangeira
ALTER TABLE transacao DROP foreign key fk_transacao_banco;


--Adionando valores padrões
ALTER TABLE banco ALTER COLUMN nome SET DEFAULT 'banco s/a';
--Removendo valores padõres
ALTER TABLE banco ALTER COLUMN nome DROP DEFAULT;




CREATE TABLE produtos(
  id_produto INT primary key auto_increment,
  nome TEXT,
  preco DOUBLE
);
INSERT INTO produtos (id_produto, nome, preco) values (1, 'Teclado', 10.50);
INSERT INTO produtos (nome, preco) values ('Mouse', 9.90);
INSERT INTO produtos values (3, 'Monitor', 99.90);

--Buscando todas as colunas da tabela
SELECT * FROM produtos;

--Buscando somente as colunas nome e o preço da tabela produtos
SELECT nome, preco FROM produtos;


SELECT count(preco), count(nome) FROM produtos;

SELECT count(*) FROM produtos;
SELECT AVG(preco) FROM produtos;
SELECT MAX(preco), MIN(preco) FROM produtos;
SELECT SUM(preco) FROM produtos;

SELECT estado, count(*) AS 'fornecedores' FROM fornecedores GROUP BY ESTADO;
SELECT cidade, estado, count(*) AS 'Quantidade de fornecedores' FROM fornecedores GROUP BY cidade;
SELECT estado, count(*) AS 'Quantidade de fornecedores' FROM fornecedores GROUP BY ESTADO ORDER BY count(*);


CREATE TABLE Fornecedores(
  codfor INT not null primary key auto_increment,
  ragsoc VARCHAR(50),
  endereco VARCHAR(50),
  cidade VARCHAR(50),
  cep CHAR(9),
  estado char (2),
  cnpj CHAR(18)
);

INSERT INTO fornecedores (codfor, ragsoc, endereco, cidade, cep, estado, cnpj) VALUES
(1, "Google INC.", "Av. Paulista 1542", "São Paulo", "00845-00", "SP", "54564556454564"),
(2, "Aplle Computer", "Marginal Pinheiros 10542", "São Paulo", "09045-00", "SP", "55564556454586"),
(3, "Microsoft", "Marginal Pinheiros 1054", "São Paulo", "19045-500", "SP", "95645562615645"), 
(4, "Sum Computer", "Marginal Tiete 5454", "São Paulo", "52045", "SP", "95645562615648"), 
(5, "MYSQL Lab", "Av. Tiradentes 888", "Belo Horizonte", "20045-000", "MG", "04645422461564"),
(6, "David INC", "Copacabana 1452", "Rio de Janeiro", "54000-800", "RJ", "27845422461564"), 
(7, "Presidencia for Systems", "Av. Planalto 02", "Brasília", "02800-850", "DF", "12845422461564"), 
(8, "Nerd Computer Lab", "Five Street 42", "Betim", null ,"MG", "24565425461587"),
(9, "Team Corp.", "Av. James T.154", "New York", "00154-536", "NY", "00560025400587");




-- Mostrando dodos as linhas cujo os fornecedores são do estado de São Paulo
SELECT codfor, ragsoc, endereco FROM Fornecedores WHERE estado = 'SP';

-- Mostrando todos as linhas cujos os fornecedores não são do estado de São Paulo
SELECT codfor, ragsoc, endereco, estado FROM Fornecedores WHERE estado <> 'SP';

-- Mostrando todos os fornecedores que possuem um código maior que 5
SELECT codfor, ragsoc, endereco, estado FROM Fornecedores WHERE codfor > 5;

SELECT codfor AS 'Código do Fornecedor', ragsoc AS 'Razão Social', endereco AS 'Endereço', cidade, CEP, estado AS 'UF', CNPJ FROM Fornecedores;

SELECT DISTINCT estado AS 'Estados Cadastrados' FROM Fornecedores;

SELECT DISTINCT estado AS 'Estados Cadastrados' FROM Fornecedores ORDER BY estado;

SELECT DISTINCT estado AS 'Estados Cadastrados' FROM Fornecedores ORDER BY estado DESC;

SELECT estado AS 'UF', cidade FROM fornecedores ORDER BY estado, cidade;

SELECT * FROM Fornecedores WHERE CEP IS NULL;
SELECT * FROM Fornecedores WHERE CEP IS NOT NULL;

SELECT * FROM Fornecedores WHERE codfor BETWEEN 3 and 7;

SELECT * FROM Fornecedores WHERE codfor IN (1,5,9);

SELECT * FROM Fornecedores WHERE estado = 'SP' OR estado = 'NY';

SELECT * FROM Fornecedores WHERE cep IS NOT NULL AND codfor >= 7 ;

SELECT * FROM fornecedores WHERE (NOT estado = 'SP' AND estado <> 'NY') AND (codfor > 3 AND codfor < 7);

-- Seleciona todas as cidades que começam com b
SELECT * FROM Fornecedores WHERE cidade LIKE 'b%';

-- Seleciona todas as cidades que terminam Com O
SELECT * FROM Fornecedores WHERE cidade LIKE '%O';

-- Seleciona todas as cidades que tem o caractere a
SELECT * FROM Fornecedores where cidade LIKE '%a%';

-- Seleciona todas as razões sociais que tem a segunda letra e
SELECT * FROM Fornecedores WHERE ragsoc LIKE '_e%';

-- Seleciona todas as razões sociais que tem como antepenúltima letra o caractere n
SELECT * FROM Fornecedores WHERE ragsoc LIKE '%n__' ;

-- Seleciona todos os CNPJs que começam com o número 5
SELECT * FROM fornecedores where cnpj LIKE '5%';

SELECT estado, count(*) AS 'Quantidade de fornecedores' FROM fornecedores WHERE (ESTADO LIKE 'M%') OR  (ESTADO Like 'S%') GROUP BY estado HAVING count(*) >= 1;

SELECT estado, count(*) AS 'Quantidade de fornecedores' FROM fornecedores GROUP BY estado HAVING count(*) >= 1;


CREATE TABLE Conta(
  numero INT primary key auto_increment,
  agencia INT not null,
  saldo FLOAT default 0,
  limite FLOAT default 500.00,
  cartao VARCHAR(3) default 'não'
);

INSERT INTO Conta (agencia) VALUES (987);



CREATE TABLE valores (
	a float,
  b float
);

INSERT INTO valores values (1.2, 2.3), (5.5, 8.0), (10.1, 7.4);
SELECT (a+b) FROM valores;
SELECT (a-b) FROM valores;
SELECT (a*b) FROM valores;
SELECT (a/b) FROM valores;




-- Data atual
SELECT current_date();
-- Hora Atual
SELECT current_time();
-- Data e hora atual (outras funções now())
SELECT current_timestamp();

CREATE TABLE compras(
	valor DOUBLE,
	dia DATETIME
);


INSERT INTO compras VALUES
(159.99, now()),
(767.99, '2017-11-26 22:40:39'),
(11.90, '1999-05-01 17:30:00');

SELECT * FROM compras;


CREATE TABLE textos(
	nome VARCHAR(45),
	sobrenome VARCHAR(45)
);

INSERT INTO textos VALUES ('FULANO', 'de tal'),('Sicrano', 'da silva'),('BELTRANO', 'de SOUZA');
SELECT * FROM textos;
-- Concatenando o nome e o sobrenome e um espaço entre eles
SELECT concat(nome,' ', sobrenome) FROM  textos;
-- Coloando o nome em letras minúsculas e o sobrenome em letras maiúsculas
SELECT lower(nome), upper(sobrenome) FROM textos;
-- Inserindo 'Sr. no inicio do nome concatenado e retornando o tamanho do nome com espaços'
SELECT insert(concat(nome,' ', sobrenome), 1, 0, 'Sr. '), length(insert(concat(nome,' ', sobrenome), 1, 0, 'Sr. ')) FROM textos;

-- Vê as regras do usuário
SELECT CURRENT_ROLE();
-- Vê o nome do usuário atual
SELECT CURRENT_USER();
-- Vê o banco de dados ativo
SELECT DATABASE();
-- Vê a versão do SGBD
SELECT VERSION();
-- Vê o último valor do AUTO_INCREMENTE inserido
SELECT LAST_INSERT_ID();
-- Vê o ID da conexão atual
SELECT CONNECTION_ID();

CREATE TABLE produtos(
  -- Chave primária do produto
  id_produto INT primary key auto_increment,
  nome TEXT,
  preco DOUBLE
);

CREATE TABLE pedidos(
  -- Chave primária do pedido
  id_pedido INT primary key,
  id_produto INT,
  quantidade INT,
  -- Criando uma chave estrageira do produto no pedido
  foreign key (id_produto) references produtos (id_produto)
);

INSERT INTO Produtos (id_produto, nome, preco) VALUES
(1, 'Celular SA100', 123.00),
(2, 'Carteira de Couro', 145.00),
(3, 'HD Externo', 240.00),
(4, 'Pen-Drive', 150.00);

INSERT INTO Pedidos (id_pedido, id_produto, quantidade) VALUES
(1010, 1, 2),
(1020, 2, 1),
(1030, 4, 1),
(2020, 2, 3),
(3030, 3, 1);


SELECT * FROM produtos;
SELECT * FROM pedidos; 

-- Selecionando duas tabelas apelidadas e lingando os dados entre elas através das chaves id_produto
SELECT ped.id_pedido, pro.id_produto, pro.nome, pro.preco, ped.quantidade 
FROM produtos AS pro, pedidos AS ped 
WHERE pro.id_produto = ped.id_produto;

-- Selecionando duas tabelas apelidadas e lingando os dados entre elas através das chaves id_produto
SELECT ped.id_pedido, pro.id_produto, pro.nome, ped.quantidade, (pro.preco*ped.quantidade) AS total
FROM produtos AS pro JOIN pedidos AS ped ON ped.id_produto = pro.id_produto;


CREATE TABLE clientes(
  cod_cli INT primary key,
  nome_cli VARCHAR(45),
  rua_cli VARCHAR(45),
  bairro_cli INT,
  num_cli INT,
  fone_cli VARCHAR(9)
);

CREATE TABLE carros(
  placa_car VARCHAR6(45)) primary key,
  cliente_car INT,
  marca_car VARCHAR(45),
  modelo_car VARCHAR(45),
  cor_car VARCHAR(45)
);

ALTER TABLE carros add foreign key (cliente_car) references clientes (cod_cli);

INSERT INTO clientes VALUES
(1, 'Luciene', 'Rua A', 1, 123, '3535-3535'),
(2, 'Fábio','Rua B', 2 , 231, '3232-3232'),
(3, 'Carlos', 'Rua C', 3, 323, '3511-3511'),
(123, 'Silvio', 'Rua xyz', 4, 888, '3333-3333');

INSERT INTO carros VALUES
('abc111', 1, ' volksvagen', 'Fox city', 'cinza'),
('def111',2,'ford','eco sport','cinza'),
('ghi222',3,'ford','ka','branca');


-- Criando duas variável e armazenando nelas, o resultado da consulta. 
SELECT placa_car, nome_cli INTO @placa_car, @nome_cli FROM clientes INNER JOIN carros ON clientes.cod_cli = carros.cliente_car LIMIT 1;

SELECT @placa_car, @nome_cli;

-- Criando duas variável e armazenando nelas, o resultado da consulta. 
SELECT placa_car, nome_cli INTO @placa_car, @nome_cli FROM clientes INNER JOIN carros ON clientes.cod_cli = carros.cliente_car WHERE nome_cli = 'Fábio';

SELECT @placa_car, @nome_cli;

CREATE TABLE carro_cliente(
	placa VARCHAR(6),
  fone VARCHAR(9),
  cod INT,
	nome VARCHAR(45)
);

-- Inserindo o resultado da consulta em uma tabela
INSERT INTO carro_cliente (placa, fone, cod, nome) SELECT placa_car, fone_cli, cod_cli, nome_cli FROM clientes INNER JOIN carros ON cod_cli = cliente_car;

SELECT * FROM carro_cliente;


SELECT * FROM carros;

SELECT * FROM clientes;

-- CONULTA INNER JOIN --
SELECT clientes.nome_cli, carros.cliente_car, carros.placa_car
FROM clientes INNER JOIN carros ON clientes.cod_cli = carros.cliente_car;

SELECT nome_cli, carros.cliente_car, carros.placa_car FROM clientes CROSS JOIN carros;


-- Iremos selecionar todos os carros que possuem ou não clientes
SELECT clientes.nome_cli, carros.cliente_car, carros.placa_car
FROM clientes RIGHT JOIN carros ON cod_cli = cliente_car;

-- Iremos selecionar todos os clientes que possuem ou não carros
SELECT clientes.nome_cli, carros.cliente_car, carros.placa_car
FROM clientes LEFT JOIN carros ON cod_cli = cliente_car;


SELECT clientes.nome_cli, carros.cliente_car, carros.placa_car
FROM clientes LEFT JOIN carros ON cod_cli = cliente_car
UNION
SELECT clientes.nome_cli, carros.cliente_car, carros.placa_car
FROM clientes RIGHT JOIN carros ON cod_cli = cliente_car;



CREATE TABLE produtos(
  -- Chave primária do produto
  id_produto INT primary key auto_increment,
  nome TEXT,
  preco DOUBLE
);

CREATE TABLE pedidos(
  -- Chave primária do pedido
  id_pedido INT primary key,
  id_produto INT,
  quantidade INT,
  -- Criando uma chave estrageira do produto no pedido
  foreign key (id_produto) references produtos (id_produto)
);

INSERT INTO Produtos (id_produto, nome, preco) VALUES
(1, 'Celular SA100', 123.00),
(2, 'Carteira de Couro', 145.00),
(3, 'HD Externo', 240.00),
(4, 'Pen-Drive', 150.00),
(5, 'SSD 120GB', 199.90);

INSERT INTO Pedidos (id_pedido, id_produto, quantidade) VALUES
(1010, 1, 2),
(1020, 2, 1),
(1030, 4, null),
(2020, 2, 3),
(3030, 3, 1),
(4070, 5, null);


SELECT * FROM produtos;

SELECT * FROM pedidos; 

SELECT pro.preco, ped.quantidade, IFNULL((pro.preco * ped.quantidade), 0) AS total FROM produtos AS pro, pedidos AS ped WHERE pro.id_produto = ped.id_produto;

SELECT quantidade, IFNULL(quantidade, 0) FROM pedidos;



CREATE TABLE a(
	numero INT,
  nome VARCHAR(45)
);

CREATE TABLE b(
	numero INT,
  nome VARCHAR(45)
);

INSERT INTO a VALUES (1, "Fulano"), (2, "Sicrano"), (3, "Beltrano");
INSERT INTO b VALUES (2, "Fulano"), (3, "Ze"), (4, "Beltrano");

SELECT * FROM a;

SELECT * FROM b;

(SELECT numero FROM a) UNION (SELECT numero FROM b);

(SELECT nome FROM a) UNION (SELECT nome FROM b) ORDER BY nome;

(SELECT nome FROM a WHERE numero <= 2) UNION ALL (SELECT nome FROM b);


CREATE TABLE produtos(
  -- Chave primária do produto
  id_produto INT primary key auto_increment,
  nome TEXT,
  preco DOUBLE
);

CREATE TABLE pedidos(
  -- Chave primária do pedido
  id_pedido INT primary key,
  id_produto INT,
  quantidade INT,
  -- Criando uma chave estrageira do produto no pedido
  foreign key (id_produto) references produtos (id_produto)
);

INSERT INTO Produtos (id_produto, nome, preco) VALUES
(1, 'Celular SA100', 123.00),
(2, 'Carteira de Couro', 145.00),
(3, 'HD Externo', 240.00),
(4, 'Pen-Drive', 150.00);

INSERT INTO Pedidos (id_pedido, id_produto, quantidade) VALUES
(1010, 1, 2),
(1020, 2, 1),
(1030, 4, 2),
(2020, 2, 3),
(3030, 3, 1);

-- Irá  selecionar os dados de todos os produtros se existir  um produto com preço menor que 100
SELECT * FROM produtos WHERE EXISTS (SELECT * FROM produtos WHERE preco < 100);

-- Irá selecionar todos os produtos se não existir nenhum produto com preõ inferior a 100
SELECT * FROM produtos WHERE NOT EXISTS (SELECT * FROM produtos WHERE preco < 100);

-- Resultado da sub-consulta
SELECT id_produto FROM pedidos WHERE id_produto <= 2;
-- Irá selecionar os produtros que tiverem algum ID igual ao resultado da sub-consulta 
SELECT * FROM produtos WHERE id_produto = ANY (SELECT id_produto FROM pedidos WHERE id_produto <= 2);

-- Resultado da sub-consulta
SELECT id_produto FROM pedidos WHERE id_produto = 2;
-- Irá selecionar todos os produtos cujo o ID é igual a todos os ID da subconsulta
SELECT * FROM produtos WHERE id_produto = ALL (SELECT id_produto FROM pedidos WHERE id_produto = 2);

-- Atualizando o nome do produto com ID 4
UPDATE produtos SET nome = 'Tapete de Mouse' WHERE id_produto = 4;

-- Apagando o produto com ID 3
DELETE FROM produtos WHERE id_produto = 3;

SELECT * FROM produtos;

-- Atualizando o nome de todos os produtos com id igual o menor que 2
UPDATE produtos SET nome = 'Ratos', preco = '10.90' WHERE id_produto <= 2;

-- Apagando todos os produtos com id igual o menor que 2
DELETE FROM produtos WHERE id_produto <= 2;


SELECT * FROM produtos;



CREATE TABLE pais(
  cod_pais INT primary key auto_increment,
  nome_pais VARCHAR(60) not null
);

CREATE TABLE usuario(
  cod_usuario INT primary key auto_increment,
  nome_user VARCHAR(50) not null,
  cod_pais INT,
  CONSTRAINT FK_USUARIO_PAIS5 FOREIGN KEY (COD_PAIS) REFERENCES PAIS5 (COD_PAIS) ON UPDATE CASCADE
);

INSERT INTO pais (cod_pais, nome_pais) VALUES
(1,'Brasil'),
(2, 'Paraguai'),
(3, 'Chile');

INSERT INTO usuario VALUES
(1,'Pablo', 2),
(2, 'João', 1),
(3,'Maria', 1);

SELECT * FROM PAIS;

SELECT * FROM USUARIO;

-- Atualizando a chave primária do país 10 para 1
UPDATE PAIS SET COD_PAIS = 10 WHERE COD_PAIS = 1;

-- Apagando o país com código 2
DELETE FROM PAIS WHERE COD_PAIS = 2;

SELECT * FROM PAIS;

SELECT * FROM USUARIO;



CREATE TABLE funcionarios(
  id_func INT,
  nome VARCHAR (45),
  email VARCHAR (45),
  salario DOUBLE
);

-- Se estivermos com o banco de dados ativo, não precisamos escrever o seu nome
USE apostila;

-- Criano um usuário Gerente
CREATE USER 'GERENTE'@'LOCALHOST' IDENTIFIED BY '123';
-- Criando um usupario Empregado
CREATE USER 'EMPREGADO'@'LOCALHOST' IDENTIFIED BY '321';
-- Ataualizando o sistema para reconhecer os novos usuários
FLUSH PRIVILEGES;

-- removendo as permissções de criar e inserir do gerente de todas as tabelas do bacno de dados empresa
REVOKE insert, create ON empresa.* FROM 'GERENTE'@'LOCALHOST';
Flush privileges;


-- Acessando o banco de dados interno do MySQL
USE MYSQL;
-- Vendo a tabela de usuários cadastrado no MySQL
SELECT * FROM user;
-- O comando abaixo verifica os privilégios do usuário logado
SHOW GRANTS;

-- Dando acesso total para o gerente
GRANT delete, update, insert, select ON apostila.* TO 'GERENTE'@'LOCALHOST';
flush privileges;

-- O empregado vai poder apenas atualizar o email na tabela funcionário e ver os dados da tabela
GRANT update(email), select ON funcionarios TO 'EMPREGADO'@'LOCALHOST';
flush privileges;


DROP USER 'EMPREGADO'@'LOCALHOST';
DROP USER 'GERENTE'@'LOCALHOST';








CREATE TABLE tabela_do_brasileirao(
  pos_time INT,
  nm_time VARCHAR(45),
  est_time CHAR(2),
  qtde_vit INT,
  qtde_emp INT,
  qtde_der INT,
  gols_feitos INT,
  gols_sofridos INT,
  qtde_pontos INT
);

INSERT INTO tabela_do_brasileirao VALUES
(1, 'Atlético', 'MG', 11, 2, 3, 32, 14, 35),
(2, 'Corinthians', 'SP', 10, 3, 3, 20, 9, 33),
(3, 'Fluminense', 'RJ', 9, 3, 4, 20, 15, 30),
(4, 'Sport', 'PE', 7, 8, 1, 26, 15, 29),
(5, 'Atlético', 'PR', 9, 1, 6, 20, 17, 28),
(6, 'Palmeiras', 'SP', 8, 4, 4, 26, 12, 28),
(7, 'São Paulo', 'SP', 8, 3, 5, 22, 17, 27),
(8, 'Grêmio', 'RS', 8, 3, 5, 20, 16, 27),
(9, 'Chapecoense', 'SC', 7, 2, 7, 13, 14, 23),
(10, 'Internacional', 'RS', 5, 6, 5, 13, 16, 21),
(11, 'Flamengo', 'RJ', 6, 2, 8, 16, 21, 20),
(12, 'Figueirense', 'SC', 5, 4, 7, 15, 20, 19),
(13, 'Ponte Preta', 'SP', 4, 7, 5, 17, 20, 19),
(14, 'Cruzeiro', 'MG', 5, 3, 8, 13, 13, 18),
(15, 'Santos', 'SP', 4, 5, 7, 21, 24, 17),
(16, 'Avaí', 'SC', 4, 5, 7, 16, 24, 17),
(17, 'Goiás', 'GO', 3, 5, 8, 13, 16, 14),
(18, 'Joinville', 'SC', 3, 3, 10, 9, 19, 12),
(19, 'Vasco', 'RJ', 3, 3, 10, 8, 29, 12),
(20, 'Coritiba', 'PR', 2, 6, 8, 10, 19, 12);

CREATE INDEX times_index ON tabela_do_brasileirao (nm_time);
-- OU
ALTER TABLE tabela_do_brasileirao ADD INDEX golsf_index (gols_feitos);

-- Usando o index para pesquisas
SELECT nm_time, est_time, qtde_vit, gols_feitos, qtde_pontos FROM tabela_do_brasileirao USE INDEX (brasil_index) WHERE nm_time = 'GOIÁS';

CREATE INDEX index_triplo ON tabela_do_brasileirao (qtde_vit, qtde_emp, qtde_der);

SELECT nm_time, est_time, qtde_vit, gols_feitos, qtde_pontos from tabela_do_brasileirao USE INDEX (index_triplo) WHERE NM_TIME = 'ATLÉTICO';


ALTER TABLE tabela_do_brasileirao DROP INDEX INDEX_TRIPLO;

ALTER TABLE tabela_do_brasileirao DROP INDEX GOLS_INDEX;



-- Consulta
SELECT clientes.nome_cli, carros.cliente_car, carros.placa_car FROM clientes RIGHT JOIN carros ON cod_cli = cliente_car;

-- Craindo uma VIEW
CREATE VIEW view_carro_clinte (nome_do_cliente, codigo_do_cliente, placa_do_carro)
AS select clientes.nome_cli, carros.cliente_car, carros.placa_car
FROM clientes RIGHT JOIN carros ON cod_cli = cliente_car;

-- Consultr uma VIEW

SELECT * FROM view_carro_clinte;

