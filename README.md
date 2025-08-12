# Movie Recommender Microservice

## Descripción

Este proyecto es un microservicio backend desarrollado en **NestJS** que permite gestionar una lista de películas favoritas y obtener recomendaciones personalizadas basadas en la API de **The Movie Database (TMDb)**. 

El microservicio ofrece funcionalidades CRUD para administrar películas favoritas y consume la API TMDb para consultar películas populares, buscar por título, obtener detalles y generar recomendaciones automáticas que sugieren joyas ocultas dentro de los géneros favoritos del usuario.

---

## Funcionalidades principales

- **CRUD de películas favoritas**:  
  - Agregar, listar, consultar y eliminar películas favoritas mediante sus IDs TMDb.  
- **Consulta de películas populares y búsqueda**:  
  - Obtener películas populares actuales y buscar películas por título usando la API TMDb.  
- **Detalles de películas**:  
  - Consultar información detallada de cualquier película por su ID.  
- **Recomendador personalizado**:  
  - Generar recomendaciones basadas en las películas favoritas guardadas, priorizando películas poco populares y no repetidas.

---

## Tecnologías y conocimientos aplicados

- **NestJS**: Framework backend basado en Node.js con arquitectura modular y soporte para TypeScript.  
- **TypeScript**: Tipado estático que mejora robustez y mantenibilidad del código.  
- **Axios**: Cliente HTTP para consumir APIs externas.  
- **API TMDb**: Integración con API REST pública para datos de películas.  
- **Validación y seguridad**: Uso de `class-validator` y `ValidationPipe` para validar datos entrantes.  
- **Inyección de dependencias**: Uso correcto de providers y módulos para mantener código desacoplado y testeable.  
- **Manejo de errores**: Captura y manejo robusto de errores HTTP y validaciones.  
- **Buenas prácticas**: Organización modular del código, uso de DTOs y separación clara de responsabilidades.  

---

## Cómo usar la aplicación

### Requisitos previos

- Node.js >= 16.x  
- npm o yarn  
- API key válida de [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)

### Instalación

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
npm install
