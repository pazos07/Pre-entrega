# Proyecto-Final
En este proyecto quise hacer un simulador de registro de pacientes como podria ser un consultorio organizando y filtrando los pacientes registrados en su base de datos.

Primero hice una function para determinar la edad del registrado, para verificar si es mayor, menor o si la edad es invalida y asignarle una respuesta acorde a los datos proporcionados.
Luego, se le solicitan los datos al usuario tal como nombre, apellido y edad. De esta manera el nombre y el apellido quedan registrados en la consola y se invoca a la funcion creada anteriormente para copilar los datos y devolverlos en forma de un alert con el mensaje especifico dado el rango de su edad.
Finalmente, el bucle le pregunta al usuario si quiere hacer otra inscripcion, de responder "si" empieza de nuevo el registro y de otra manera, se rompe el bucle.

En esta segunda edicion de la entrega, agregué un objeto de cosntruccion donde los datos cargados a los prompts, aparecen registrados dentro de una tabla una vez terminada la carga de pacientes. A su vez un array permite ver el nombre de los pacientes en la consola de desarrollador. Y finalmente hay un nuevo boton de filtrado por edades para la tabla donde se puede filtrar a los pacientes con edades que no pertenezcan al grupo indicado.

En esta tercera entrega, ya no se ingresan los datos de los pacientes mediante prompts, sino que ahora se registran mediante el DOM. Tambien una vez registrados los pacientes, si se refresca la pagina, quedan guardados mediante el local storage y se pueden purgar mediante un boton de limpieza que implemente para que no se acumulen pacientes de no ser necesario.

En la entrega de proyecto final, se le agrego una promesa al codigo donde todos los datos ingresados al formulario se borran automaticamente luego de 5 minutos pasados de la ultima modificacion, que podria ser utilizado con fines de mayor seguridad u organizacion. Tambien se le agrego un fetch de manera que los datos no solo sean guardados en un servidor local. Finalmente se le agregaron sweetalerts para reemplazar los alerts() que estaban en su lugar.