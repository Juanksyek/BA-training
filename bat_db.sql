-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-09-2023 a las 22:40:50
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bat_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `ID_Alumno` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `ApellidoM` varchar(20) NOT NULL,
  `ApellidoP` varchar(20) NOT NULL,
  `Matricula` int(11) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Calle` varchar(20) DEFAULT NULL,
  `NumeroC` int(11) DEFAULT NULL,
  `Colonia` varchar(20) DEFAULT NULL,
  `Municipio` varchar(30) DEFAULT NULL,
  `Teléfono` int(10) DEFAULT NULL,
  `Ocupación` varchar(30) DEFAULT NULL,
  `CorreoElectrónico` varchar(40) DEFAULT NULL,
  `ID_Usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `ID_Clase` int(11) NOT NULL,
  `Nivel` varchar(10) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `ID_Profesor` int(11) NOT NULL,
  `ID_Sede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `ID_Cuenta` int(11) NOT NULL,
  `NumeroCuenta` int(11) NOT NULL,
  `Matricula` int(11) NOT NULL,
  `FechaMatricula` date NOT NULL,
  `Ciudad` varchar(30) NOT NULL,
  `Ejecutivo` varchar(50) DEFAULT NULL,
  `Precio` float(10,2) NOT NULL,
  `PagoInicial` float(10,2) NOT NULL,
  `SaldoInicial` float(10,2) NOT NULL,
  `NumeroPagos` int(11) NOT NULL,
  `MontoMensualidad` float(10,2) NOT NULL,
  `PrimerVencimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datostrabajo`
--

CREATE TABLE `datostrabajo` (
  `ID_DTrabajo` int(11) NOT NULL,
  `TelefonoTrabajo` varchar(10) DEFAULT NULL,
  `DireccionTrabajo` varchar(30) DEFAULT NULL,
  `ColoniaTrabajo` varchar(20) DEFAULT NULL,
  `MunicipioTrabajo` varchar(30) DEFAULT NULL,
  `CPTrabajo` varchar(5) DEFAULT NULL,
  `ID_Titular` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleclases`
--

CREATE TABLE `detalleclases` (
  `ID_DClase` int(11) NOT NULL,
  `ID_Clase` int(11) NOT NULL,
  `ID_Alumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensualidades`
--

CREATE TABLE `mensualidades` (
  `ID_Mensualidad` int(11) NOT NULL,
  `ID_Cuenta` int(11) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `NumeroPago` int(11) DEFAULT NULL,
  `Mes` varchar(10) DEFAULT NULL,
  `Monto` float(10,2) DEFAULT NULL,
  `Saldo` float(10,2) DEFAULT NULL,
  `FechaPago` date DEFAULT NULL,
  `Recibo` varchar(50) DEFAULT NULL,
  `Ejecutivo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `ID_Personal` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Teléfono` int(10) DEFAULT NULL,
  `ID_Usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `ID_Profesor` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Teléfono` int(10) DEFAULT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `Turno` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sedes`
--

CREATE TABLE `sedes` (
  `ID_Sede` int(11) NOT NULL,
  `Locacion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titular`
--

CREATE TABLE `titular` (
  `ID_Titular` int(11) NOT NULL,
  `NombreTitular` varchar(30) NOT NULL,
  `ApellidoMTitular` varchar(20) NOT NULL,
  `ApellidoPTitular` varchar(20) DEFAULT NULL,
  `Direccion` varchar(30) DEFAULT NULL,
  `Colonia` varchar(20) DEFAULT NULL,
  `Municipio` varchar(30) DEFAULT NULL,
  `CP` varchar(5) DEFAULT NULL,
  `Telefono` varchar(10) DEFAULT NULL,
  `Celular` varchar(10) DEFAULT NULL,
  `Correo` varchar(50) DEFAULT NULL,
  `ID_Cuenta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_Usuario` int(11) NOT NULL,
  `NombreUsuario` varchar(20) NOT NULL,
  `Contraseña` varchar(15) NOT NULL,
  `TipoUsuario` varchar(13) NOT NULL,
  `ID_Sede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`ID_Alumno`),
  ADD KEY `ID_Usuario` (`ID_Usuario`),
  ADD KEY `Matricula` (`Matricula`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`ID_Clase`),
  ADD KEY `ID_Profesor` (`ID_Profesor`),
  ADD KEY `ID_Sede` (`ID_Sede`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`ID_Cuenta`),
  ADD UNIQUE KEY `NumeroCuenta` (`NumeroCuenta`),
  ADD UNIQUE KEY `Matricula` (`Matricula`);

--
-- Indices de la tabla `datostrabajo`
--
ALTER TABLE `datostrabajo`
  ADD PRIMARY KEY (`ID_DTrabajo`),
  ADD KEY `ID_Titular` (`ID_Titular`);

--
-- Indices de la tabla `detalleclases`
--
ALTER TABLE `detalleclases`
  ADD PRIMARY KEY (`ID_DClase`),
  ADD KEY `ID_Clase` (`ID_Clase`),
  ADD KEY `ID_Alumno` (`ID_Alumno`);

--
-- Indices de la tabla `mensualidades`
--
ALTER TABLE `mensualidades`
  ADD PRIMARY KEY (`ID_Mensualidad`),
  ADD KEY `ID_Cuenta` (`ID_Cuenta`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`ID_Personal`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`ID_Profesor`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indices de la tabla `sedes`
--
ALTER TABLE `sedes`
  ADD PRIMARY KEY (`ID_Sede`),
  ADD UNIQUE KEY `Locacion` (`Locacion`);

--
-- Indices de la tabla `titular`
--
ALTER TABLE `titular`
  ADD PRIMARY KEY (`ID_Titular`),
  ADD KEY `ID_Cuenta` (`ID_Cuenta`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_Usuario`),
  ADD UNIQUE KEY `NombreUsuario` (`NombreUsuario`),
  ADD KEY `ID_Sede` (`ID_Sede`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `ID_Alumno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `ID_Clase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `ID_Cuenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datostrabajo`
--
ALTER TABLE `datostrabajo`
  MODIFY `ID_DTrabajo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalleclases`
--
ALTER TABLE `detalleclases`
  MODIFY `ID_DClase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensualidades`
--
ALTER TABLE `mensualidades`
  MODIFY `ID_Mensualidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `ID_Personal` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `ID_Profesor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sedes`
--
ALTER TABLE `sedes`
  MODIFY `ID_Sede` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `titular`
--
ALTER TABLE `titular`
  MODIFY `ID_Titular` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`),
  ADD CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`Matricula`) REFERENCES `cuenta` (`Matricula`);

--
-- Filtros para la tabla `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`ID_Profesor`) REFERENCES `profesor` (`ID_Profesor`),
  ADD CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`ID_Sede`) REFERENCES `sedes` (`ID_Sede`);

--
-- Filtros para la tabla `datostrabajo`
--
ALTER TABLE `datostrabajo`
  ADD CONSTRAINT `datostrabajo_ibfk_1` FOREIGN KEY (`ID_Titular`) REFERENCES `titular` (`ID_Titular`);

--
-- Filtros para la tabla `detalleclases`
--
ALTER TABLE `detalleclases`
  ADD CONSTRAINT `detalleclases_ibfk_1` FOREIGN KEY (`ID_Clase`) REFERENCES `clases` (`ID_Clase`),
  ADD CONSTRAINT `detalleclases_ibfk_2` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumnos` (`ID_Alumno`);

--
-- Filtros para la tabla `mensualidades`
--
ALTER TABLE `mensualidades`
  ADD CONSTRAINT `mensualidades_ibfk_1` FOREIGN KEY (`ID_Cuenta`) REFERENCES `cuenta` (`ID_Cuenta`);

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Filtros para la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD CONSTRAINT `profesor_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Filtros para la tabla `titular`
--
ALTER TABLE `titular`
  ADD CONSTRAINT `titular_ibfk_1` FOREIGN KEY (`ID_Cuenta`) REFERENCES `cuenta` (`ID_Cuenta`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`ID_Sede`) REFERENCES `sedes` (`ID_Sede`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
