CREATE DATABASE dbApiCarros;

USE dbApiCarros;

CREATE TABLE carros (
    codigo INT PRIMARY KEY auto_increment,
    modelo VARCHAR(30),
    placa VARCHAR(7)
);

INSERT INTO carros(modelo, placa) VALUES ('Toyota Corrola XEI', 'ewb-2030');
INSERT INTO carros(modelo, placa) VALUES ('Honda Civic XLS', 'crv-1590');

SELECT * FROM carros