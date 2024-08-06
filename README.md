# CRUD de Tareas 

### Pasos para ejecutar el servidor

1. Posicionarse en el directotio correspondiente:
```bash
cd crud-tasks-backend
```

2. Instalar todas las dependencias:

```bash
npm install
```

3. Ejecutar el servidor

```bash
npm run dev
```

4. Probar el servidor

#### [http://localhost:3000](http://localhost:3000)

- Para cambiar el puerto ir a la linea 6 del archivo src/app.js

```javascript
const PORT = 3000;
```

### Endpoints:

- Utilizar Postman o Thunder Client

`POST /tasks`: Añadir una nueva tarea.

`GET /tasks`: Obtener todas las tareas.

`GET /task/:id`: Obtener una tarea específica por su ID.

`PUT /task/:id`: Actualizar una tarea específica por su ID.

`DELETE /task/:id`: Eliminar una tarea específica por su ID.