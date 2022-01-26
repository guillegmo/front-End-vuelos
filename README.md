La aplicacion fue elaborada de la siguiente forma:

Front End: Angular cli version 13.1.4
Back End: .Net Core
Base de datos: MySQL

Se anexa front End, Back End y base de datos en el archivo Prueba Tecnica Carvajal

Usuarios para Acceso a la aplicacion

Usuario: admin
Contraseña: 123456

Usuario: auxiliar
Contraseña: 654321

Usuario admin
El usuario admin permite crear, editar, eliminar y lista los vuelos.

Usuario auxiliar
El usuario auxiliar permite listar los vuelos y unicamente edita el estado de dicho vuelo.

Base de datos
Consta de 2 tablas las cuales son usuarios y vuelos para
la tabla usuarios tiene los siguientes datos:
-idUsuario
-nombreUsuario
-password
-rol

la tabla vuelos tiene los siguientes datos:
-idVuelo
-ciudadOrigen
-ciudadDestino
-fecha
-horaSalida
-horaLlegad
-numeroVuelo
-aerolinea
-estado