# 🎮 GameStorm

GameStorm es una aplicación web moderna que utiliza la API de RAWG para proporcionar información detallada sobre videojuegos, permitiendo a los usuarios explorar, buscar y guardar sus juegos favoritos.

## 🚀 Características

- Exploración de juegos por género
- Sistema de búsqueda avanzado
- Paginación de resultados
- Autenticación de usuarios
- Sistema de favoritos
- Interfaz responsive y moderna
- Carga perezosa de imágenes
- Diseño moderno y atractivo

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario
- **Vite**: Herramienta de construcción y desarrollo que ofrece una experiencia de desarrollo más rápida
- **Redux Toolkit**: Manejo del estado de la aplicación
- **RTK Query**: Gestión de estados de servidor y caché de datos
- **Firebase**: Autenticación y servicios en la nube
- **RAWG API**: API de videojuegos para obtener la información
- **CSS Modules**: Estilizado modular y scoped
- **React Router**: Navegación y enrutamiento
- **ESLint**: Linting y mantenimiento de código

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Una clave API de RAWG
- Configuración de proyecto en Firebase

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/CarlosBelloAviles/GameStorm.git
cd GameStorm
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo .env en la raíz del proyecto y añade tus claves:
```env
VITE_RAWG_API_KEY=tu_clave_api_de_rawg
VITE_FIREBASE_API_KEY=tu_clave_api_de_firebase
VITE_FIREBASE_AUTH_DOMAIN=tu_dominio
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular y escalable basada en características (feature-based):

```
src/
├── components/     # Componentes reutilizables
│   ├── common/    # Componentes compartidos (LazyImage, LazySuspense)
│   ├── Games/     # Componentes relacionados con juegos
│   ├── Genres/    # Componentes de géneros
│   └── Search/    # Componentes de búsqueda
├── config/        # Configuración de servicios (Firebase)
├── hooks/         # Custom hooks para lógica reutilizable
├── layout/        # Layouts para diferentes secciones
├── pages/         # Páginas y rutas principales
│   ├── Auth/      # Páginas de autenticación
│   ├── Private/   # Rutas protegidas
│   └── Public/    # Rutas públicas
└── store/         # Estado global y lógica de Redux
    └── games/     # Feature slice para juegos
        ├── api/           # RTK Query API y endpoints
        ├── selectors/     # Selectores para acceder al estado
        └── slices/        # Reducers y acciones
```

### Gestión del Estado con Redux:

1. **RTK Query para datos del servidor**:
   ```javascript
   export const gamesApi = createApi({
     reducerPath: "apiGames",
     baseQuery: fetchBaseQuery({
       baseUrl: "https://api.rawg.io/api/",
     }),
     endpoints: (builder) => ({
       fetchGames: builder.query({
         query: ({ page, genre }) => 
           `games?key=${apiKey}&page=${page}${genre ? `&genres=${genre}` : ""}`,
       }),
       // ... más endpoints
     })
   });
   ```

2. **Redux Slices para estado local**:
   - `gameSlice`: Estado de juegos y filtros
   - `favoritesSlice`: Gestión de favoritos
   - `searchSlice`: Estado de búsqueda

### Componentes Principales:
- **LazyImage**: Carga perezosa de imágenes para mejor rendimiento
- **Games**: Visualización y manejo de juegos
- **Genres**: Categorización por géneros
- **Search**: Funcionalidad de búsqueda
- **Pagination**: Navegación entre resultados

### Patrones de Diseño:
- **Container/Presentational**: Separación de lógica y UI
- **Custom Hooks**: Encapsulación de lógica reutilizable
- **Feature-based Structure**: Organización por características
- **Lazy Loading**: Carga bajo demanda de componentes
- **Protected Routes**: Control de acceso basado en autenticación

## 🎯 Aprendizajes del Proyecto

1. **Gestión del Estado**:
   - Implementación efectiva de Redux Toolkit
   - Manejo de estados asíncronos
   - Optimización de renders

2. **Performance**:
   - Lazy loading de imágenes y componentes
   - Implementación de suspense para mejor UX
   - Optimización de llamadas a la API

3. **Autenticación**:
   - Integración con Firebase Auth
   - Manejo de rutas protegidas
   - Estados de autenticación

4. **Arquitectura**:
   - Organización modular del código
   - Separación de responsabilidades
   - Reutilización de componentes

5. **Mejores Prácticas**:
   - Uso de Custom Hooks
   - Implementación de layouts
   - Control de versiones con Git

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del repositorio
2. Crea una nueva rama
3. Realiza tus cambios
4. Envía un pull request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👨‍💻 Autor

- Carlos Bello Aviles
- GitHub: [@CarlosBelloAviles](https://github.com/CarlosBelloAviles)

---
⌨️ con ❤️ por Carlos Bello Aviles
