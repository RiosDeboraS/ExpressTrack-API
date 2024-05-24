const getWelcomeMessage = (req, res) => {
  const appName = "ExpressTrack API";
  const version = "1.0.0";

  const welcomeText = `
      ## ¡Bienvenido a ${appName} API v${version}! ##
  
      Este es un punto de entrada para acceder a las funcionalidades de la API. 
  
      **Documentación:**
  
      ## Crear Usuario

### Endpoint
POST http://localhost:3000/user/create


### Body
json
{
  "nombre": "Juan",
  "apellido": "Perez",
  "email": "juan.perez@example.com",
  "contrasena": "password123",
  "dni": "12345678",
  "rol": "administrador"
}




## Crear Ruta
### Endpoint

POST /rutas

### Body
json
{
  "id_usuario_creador": "6627fbc9aaff8baab215b397",
  "origen": "123 Main Street, San Francisco, CA, USA",
  "destino": "456 Elm Street, New York, NY, USA",
  "puntos_intermedios": [
    "789 Oak Street, Chicago, IL, USA",
    "1011 Pine Street, Los Angeles, CA, USA"
  ],
  "descripcion": "Ruta de entrega de paquete desde San Francisco a Nueva York",
  "estado": "en curso"
}

## Asignar Ruta a Repartidor
### Endpoint

POST /api/rutas/asignar-repartidor

### Body
json

{
  "rutaId": "664cb2b0e9452d5080b1eb30",
  "repartidorId": "664ba5509a8d8ed2b236f6fd"
}

## Obtener Todas las Rutas
### Endpoint

GET /api/rutas

## Eliminar Ruta
### Endpoint
DELETE /api/rutas/ID_DE_LA_RUTA



## CREAR VEHICULO
### Endpoint
POST /vehicles/create

### Body
json
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "placa": "ABC123",
  "tipo": "sedán",
  "capacidad": 5,
  "estado": "disponible",
  "ubicacion_actual": "Ciudad",
  "fecha_mantenimiento": "2024-05-24"
}

## Obtener vehiculos
### Endpoint
GET /vehicles

## Eliminar un vehiculo
### Endpoint
DELETE /vehicles/delete/ID_DEL_VEHICULO

## Actualizar un vehiculo

### Endpoint
PUT /vehicles/update/664cbcd1ae4120debaf3ff53

### Body
json 
{
  "estado": "en uso"
}



    `;

  return welcomeText;
};

module.exports = getWelcomeMessage;
