use freeze_Banco;

-- 1. Inserindo usuários
INSERT INTO usuario (usuario, senha) VALUES 
('joao_silva', 'senha123'),
('maria_souza', 'abc@456'),
('carlos_lima', 'geladeira2026');

-- 2. Inserindo geladeiras (vinculadas aos ids dos usuários 1, 2 e 3)
INSERT INTO geladeira (uid, nome, situacao, temperatura, manutencao, quantidade, marca) VALUES 
(1, 'Geladeira Cozinha', 1, 4.5, '2025-12-10', 5.0, 'Brastemp'),
(2, 'Frigobar Escritório', 1, 2.0, '2026-01-15', 2.0, 'Consul'),
(3, 'Geladeira Área Gourmet', 0, 5.5, '2025-08-20', 8.0, 'Electrolux');

-- 3. Inserindo alimentos (vinculados aos ids dos usuários 1, 2 e 3)
INSERT INTO alimentos (uid, nome, categoria, validade, marca, quantidade, foto) VALUES 
(1, 'Leite Integral', 'Laticínios', '2026-10-25', 'Parmalat', 2.0, 'https://exemplo.com/fotos/leite.jpg'),
(1, 'Peito de Frango', 'Carnes', '2026-10-18', 'Sadia', 1.5, 'https://exemplo.com/fotos/frango.jpg'),
(2, 'Refrigerante Cola', 'Bebidas', '2027-04-10', 'Coca-Cola', 3.0, 'https://exemplo.com/fotos/cola.jpg'),
(3, 'Carne Bovina (Picanha)', 'Carnes', '2026-10-20', 'Friboi', 2.5, 'https://exemplo.com/fotos/picanha.jpg');

INSERT INTO alimentos (uid, nome, categoria, validade, marca, quantidade, foto) VALUES 
(1, 'Ovos Mantiqueira', 'Ovos/Proteínas', '2026-11-02', 'Mantiqueira', 12.0, 'https://exemplo.com/fotos/ovos.jpg'),
(1, 'Requeijão Cremoso', 'Laticínios', '2026-11-20', 'Danone', 1.0, 'https://exemplo.com/fotos/requeijao.jpg'),
(1, 'Suco de Laranja Integral', 'Bebidas', '2026-10-25', 'Prats', 2.0, 'https://exemplo.com/fotos/suco-laranja.jpg'),
(1, 'Cenoura', 'Hortifrúti', '2026-11-10', 'HortiFresh', 0.800, 'https://exemplo.com/fotos/cenoura.jpg'),
(1, 'Presunto Cozido', 'Frios', '2026-10-28', 'Seara', 0.300, 'https://exemplo.com/fotos/presunto.jpg'),

(2, 'Iogurte Grego', 'Laticínios', '2026-11-12', 'Vigor', 6.0, 'https://exemplo.com/fotos/iogurte-grego.jpg'),
(2, 'Morangos Frescos', 'Hortifrúti', '2026-10-21', 'Sítio Verde', 1.0, 'https://exemplo.com/fotos/morango.jpg'),
(2, 'Massa para Pizza', 'Massa', '2026-11-15', 'Mamma Mia', 2.0, 'https://exemplo.com/fotos/massa-pizza.jpg'),
(2, 'Ketchup Tradicional', 'Condimentos', '2027-03-30', 'Heinz', 1.0, 'https://exemplo.com/fotos/ketchup.jpg'),
(2, 'Mostarda Amarela', 'Condimentos', '2027-05-18', 'Hemmer', 1.0, 'https://exemplo.com/fotos/mostarda.jpg'),

(3, 'Linguiça Toscano', 'Carnes', '2026-11-08', 'Aurora', 1.5, 'https://exemplo.com/fotos/linguica.jpg'),
(3, 'Sobremesa Pudim', 'Sobremesas', '2026-10-26', 'Moça', 2.0, 'https://exemplo.com/fotos/pudim.jpg'),
(3, 'Cerveja IPA', 'Bebidas', '2027-01-20', 'Colorado', 4.0, 'https://exemplo.com/fotos/cerveja-ipa.jpg'),
(3, 'Queijo Parmesão Ralado', 'Laticínios', '2026-12-15', 'Faixa Azul', 2.0, 'https://exemplo.com/fotos/parmesao.jpg'),
(3, 'Bacon em Cubos', 'Carnes', '2026-11-25', 'Perdigão', 0.400, 'https://exemplo.com/fotos/bacon.jpg');

INSERT INTO alimentos (uid, nome, categoria, validade, marca, quantidade, foto) VALUES 
(1, 'Queijo Mussarela', 'Laticínios', '2026-11-05', 'Itambé', 0.500, 'https://exemplo.com/fotos/queijo.jpg'),
(1, 'Tomate', 'Hortifrúti', '2026-10-22', 'Orgânico da Terra', 1.0, 'https://exemplo.com/fotos/tomate.jpg'),
(1, 'Maçã Gala', 'Hortifrúti', '2026-10-30', 'Pomar', 6.0, 'https://exemplo.com/fotos/maca.jpg'),
(2, 'Iogurte Natural', 'Laticínios', '2026-10-28', 'Nestlé', 4.0, 'https://exemplo.com/fotos/iogurte.jpg'),
(2, 'Alface Americana', 'Hortifrúti', '2026-10-19', 'Hortifrúti Local', 1.0, 'https://exemplo.com/fotos/alface.jpg'),
(3, 'Cerveja Pilsen', 'Bebidas', '2027-02-15', 'Heineken', 12.0, 'https://exemplo.com/fotos/cerveja.jpg'),
(3, 'Água com Gás', 'Bebidas', '2027-06-10', 'Crystal', 6.0, 'https://exemplo.com/fotos/agua.jpg'),
(3, 'Manteiga com Sal', 'Laticínios', '2026-12-01', 'Aviação', 1.0, 'https://exemplo.com/fotos/manteiga.jpg');