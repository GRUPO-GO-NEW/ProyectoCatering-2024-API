-- Crear base de datos
CREATE DATABASE catering_inventario;

-- Usar la base de datos creada
USE catering_inventario;

-- Crear tabla de Productos
CREATE TABLE Productos (
    ID_Producto INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    Categoria VARCHAR(100),
    Cantidad_Disponible INT NOT NULL,
    Precio_Unitario DECIMAL(10, 2)
);

-- Crear tabla de Empleados
CREATE TABLE Empleados (
    ID_Empleado INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Posicion VARCHAR(100),
    Contacto VARCHAR(255)
);

-- Crear tabla de Movimientos de Inventario
CREATE TABLE Movimientos_Inventario (
    ID_Movimiento INT AUTO_INCREMENT PRIMARY KEY,
    ID_Producto INT,
    ID_Empleado INT,
    Tipo_Movimiento ENUM('entrada', 'salida') NOT NULL,
    Cantidad INT NOT NULL,
    Fecha_Movimiento DATE NOT NULL,
    Notas TEXT,
    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID_Producto),
    FOREIGN KEY (ID_Empleado) REFERENCES Empleados(ID_Empleado)
);

-- Insertar datos iniciales en la tabla de Productos
INSERT INTO Productos (Nombre, Descripcion, Categoria, Cantidad_Disponible, Precio_Unitario) VALUES
('Agua', 'Agua embotellada', 'Bebida', 100, 1.00),
('Pan', 'Pan integral', 'Alimento', 50, 0.50),
('Cuchillo', 'Cuchillo de acero inoxidable', 'Utensilio', 30, 5.00);

-- Insertar datos iniciales en la tabla de Empleados
INSERT INTO Empleados (Nombre, Posicion, Contacto) VALUES
('Juan Pérez', 'Chef', 'juan.perez@ejemplo.com'),
('Ana López', 'Asistente', 'ana.lopez@ejemplo.com');

-- Insertar datos iniciales en la tabla de Movimientos de Inventario
INSERT INTO Movimientos_Inventario (ID_Producto, ID_Empleado, Tipo_Movimiento, Cantidad, Fecha_Movimiento, Notas) VALUES
(1, 1, 'salida', 5, '2024-06-01', 'Usado para evento A'),
(1, 2, 'entrada', 50, '2024-06-02', 'Reabastecimiento mensual');

-- Actualizar cantidad de productos tras movimientos iniciales
UPDATE Productos
SET Cantidad_Disponible = Cantidad_Disponible - 5
WHERE ID_Producto = 1;

UPDATE Productos
SET Cantidad_Disponible = Cantidad_Disponible + 50
WHERE ID_Producto = 1;
