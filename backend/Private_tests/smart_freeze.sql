use freeze_Banco;

create table if not exists usuario(
id int auto_increment primary key,
usuario varchar(255),
senha varchar(255)
);

create table if not exists geladeira(
id int auto_increment primary key,
uid int,
nome varchar(255),
situacao bool,
temperatura decimal(3,2),
manutencao date,
quantidade numeric,
marca varchar(255),
constraint fk_geladeira foreign key (uid) references usuario(id)
);

create table if not exists alimentos(
id int auto_increment primary key,
uid int,
nome varchar(255),
categoria varchar(255),
validade date,
marca varchar(255),
quantidade numeric,
foto varchar(1000),
constraint fk_alimento foreign key (uid) references usuario(id)
);