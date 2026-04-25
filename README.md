# 🚀 DevOps CI/CD - Práctica Final

**Autor:** Leury Brand  
**Institución:** ITLA (Instituto Tecnológico de las Américas)  
**Curso:** Software Project Administration  
**Facilitador:** Orisoton Soto  

---

## 📋 Descripción

Aplicación web completa con **Pipeline DevOps automático** implementado desde cero. La práctica demuestra el ciclo completo de desarrollo, testing, containerización y despliegue continuo usando **GitHub Actions, Docker Hub y Render**.

**Cada push a GitHub = Nueva versión en producción automáticamente** 🚀

---

## 🎯 Objetivos Completados

✅ Crear aplicación web con Node.js/Express  
✅ Implementar pruebas unitarias con Jest  
✅ Containerizar con Docker (multi-stage build)  
✅ Configurar CI/CD con GitHub Actions  
✅ Automatizar push a Docker Hub  
✅ Desplegar en Render con auto-update  
✅ Crear UI profesional con HTML/CSS  

---

## 📊 Stack Tecnológico

| Componente | Tecnología |
|-----------|-----------|
| **Lenguaje** | JavaScript (Node.js 20) |
| **Framework Web** | Express.js |
| **Testing** | Jest + Supertest |
| **Containerización** | Docker (multi-stage) |
| **Orquestación CI/CD** | GitHub Actions |
| **Registry** | Docker Hub |
| **Hosting** | Render.com |
| **Versionado** | Git + GitHub |
| **Base de Datos** | N/A (API stateless) |

---

## 🏗️ Arquitectura del Pipeline

```
┌─────────────────┐
│   Git Push      │
│   (GitHub)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitHub Actions │
│  • npm install  │
│  • npm test     │
│  • Docker build │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Docker Hub    │
│  (imagen push)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Render      │
│  (auto deploy)  │
└─────────────────┘
```

---

## 🌐 URLs Importantes

| Servicio | URL |
|----------|-----|
| **GitHub Repo** | https://github.com/lb19082004/Practica-devops |
| **Docker Hub** | https://hub.docker.com/r/lb19/practica-devops |
| **App en Producción** | https://practica-devops-latest.onrender.com |
| **GitHub Actions** | https://github.com/lb19082004/Practica-devops/actions |

---

## 📦 Instalación Local

### Requisitos
- Node.js 20+
- npm 10+
- Docker (opcional, para ejecutar localmente)
- Git

### Pasos

```bash
# 1. Clonar repositorio
git clone https://github.com/lb19082004/Practica-devops.git
cd Practica-devops

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm start
# La app estará en http://localhost:3000

# 4. Ejecutar pruebas
npm test

# 5. Ver pruebas en modo watch (desarrollo)
npm test:watch
```

---

## 🧪 Pruebas Unitarias

La aplicación incluye **5 pruebas unitarias** que validan:

```javascript
✓ GET / debe retornar HTML con "Saludos Leury Brand"
✓ GET /api/v1/info debe retornar JSON con información
✓ GET /saludo/:nombre debe retornar saludo personalizado
✓ GET /health debe retornar status healthy
✓ GET /api/v1/info debe incluir timestamp válido
```

**Ejecutar tests:**
```bash
npm test
```

**Resultado esperado:**
```
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total ✅
```

---

## 🐳 Docker - Ejecutar Localmente

### Build de imagen
```bash
docker build -t practica-devops:latest .
```

### Ejecutar contenedor
```bash
docker run -p 3000:3000 practica-devops:latest
```

### Visitar la app
```
http://localhost:3000
```

### Detener contenedor
```bash
docker ps          # Ver contenedores activos
docker stop <ID>   # Detener por ID
```

---

## 📡 API Endpoints

### 1. Página Principal (HTML)
```
GET /
Respuesta: Página HTML con UI bonita, gradiente morado
```

### 2. Saludo Personalizado
```
GET /api/v1/saludo/:nombre

Ejemplo:
  GET /api/v1/saludo/Leury
  
Respuesta JSON:
{
  "mensaje": "¡Hola Leury! 🎉",
  "estado": "OK"
}
```

### 3. Información de la App
```
GET /api/v1/info

Respuesta JSON:
{
  "mensaje": "¡Hola Mundo! 👋",
  "estado": "OK",
  "timestamp": "2026-04-25T22:08:49.134Z",
  "version": "1.0.0",
  "autor": "Leury Brand"
}
```

### 4. Health Check
```
GET /health

Respuesta JSON:
{
  "status": "healthy"
}
```

### Pruebas desde terminal
```bash
# HTML de bienvenida
curl http://localhost:3000/

# Saludo personalizado
curl http://localhost:3000/api/v1/saludo/Leury

# Info de la app
curl http://localhost:3000/api/v1/info

# Health check
curl http://localhost:3000/health
```

---

## 🚀 GitHub Actions - Pipeline CI/CD

### Flujo Automático (al hacer push)

1. **CHECKOUT** - Descarga el código
2. **BUILD DOCKER** - Construye imagen multi-stage
3. **LOGIN DOCKER HUB** - Autentica con credentials
4. **PUSH DOCKER** - Sube imagen con tags:
   - `lb19/practica-devops:latest`
   - `lb19/practica-devops:<commit-sha>`
5. **DEPLOY RENDER** - Redeploy automático en producción

### Ver el pipeline en GitHub
```
Repo → Actions → Ver workflow "CI/CD Pipeline - DevOps"
```

### Archivo de configuración
```
.github/workflows/ci-cd.yml
```

---

## 🔐 Secrets Configurados en GitHub

Para que el pipeline funcione, se configuraron 4 secrets:

| Secret | Descripción | Estado |
|--------|-------------|--------|
| `DOCKER_USERNAME` | Usuario Docker Hub (lb19) | ✅ Configurado |
| `DOCKER_PASSWORD` | Token Docker Hub | ✅ Configurado |
| `RENDER_SERVICE_ID` | ID del servicio Render | ✅ Configurado |
| `RENDER_DEPLOY_KEY` | Deploy key de Render | ✅ Configurado |

**Nota:** Los secrets están seguros en GitHub y no se muestran en logs.

---

## 📁 Estructura del Proyecto

```
practica-devops/
│
├── src/
│   └── app.js                    # Aplicación Express con HTML embebido
│
├── tests/
│   └── app.test.js               # 5 pruebas unitarias con Jest
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml             # Pipeline GitHub Actions automático
│
├── Dockerfile                    # Multi-stage build (builder + production)
├── .dockerignore                 # Excluir node_modules, tests, etc.
├── .gitignore                    # Excluir node_modules, .env, etc.
├── jest.config.js                # Configuración de Jest
├── package.json                  # Dependencias y scripts
├── package-lock.json             # Lock de versiones
└── README.md                     # Documentación (este archivo)
```

---

## 🔄 Ciclo de Desarrollo Típico

### 1. Desarrollo Local
```bash
cd practica-devops
npm install
npm start          # Ejecutar en http://localhost:3000
npm test           # Correr pruebas
```

### 2. Hacer cambios y commitear
```bash
# Editar archivos...
git add .
git commit -m "feat: agregar nueva funcionalidad"
```

### 3. Push a GitHub
```bash
git push origin main
```

### 4. Ver GitHub Actions ejecutándose
```
GitHub repo → Actions → Ver workflow
(Esperar ~1-2 minutos a que complete)
```

### 5. Verificar en Docker Hub
```
https://hub.docker.com/r/lb19/practica-devops
Debe haber nueva imagen con tag "latest"
```

### 6. Verificar en Render
```
https://practica-devops-latest.onrender.com
(Refresh en navegador - puede tardar 1-2 min)
```

---

## 🎨 Interfaz de Usuario

La aplicación incluye una **página HTML responsiva** con:

- **Gradiente morado** - Fondo degradado profesional
- **Animación cohete** - Cohete que rebota
- **Reloj en vivo** - Hora actualizada cada segundo
- **Información personalizada** - Saludos para Leury Brand
- **Status badge** - Indicador "Sistema Operativo" en verde
- **API Endpoints listados** - Documentación integrada
- **Stack tecnológico** - Badges con tecnologías usadas

---

## 🛠️ Variables de Entorno

```bash
# En desarrollo
NODE_ENV=development
PORT=3000

# En producción (Render)
NODE_ENV=production
PORT=3000 (Render lo asigna automáticamente)
```

---

## 📊 Ejemplo de Commit y Deploy

**Paso 1: Hacer cambio**
```bash
# Cambiar mensaje en src/app.js
git add src/app.js
git commit -m "fix: actualizar mensaje"
git push origin main
```

**Resultado:**
1. GitHub Actions se ejecuta automáticamente ⚡
2. Tests pasan ✅
3. Imagen Docker se construye y sube 🐳
4. Render redeploy automático 🚀
5. App actualizada en producción (en ~1-2 minutos)

---

## ⚠️ Troubleshooting

### "Tests no pasan"
```bash
npm test -- --verbose
# Ver exactamente qué falla
```

### "Docker build falla"
```bash
docker build -t practica-devops . --progress=plain
# Ver logs detallados
```

### "GitHub Actions falla"
1. Ir a **Actions** en el repo
2. Click en el run rojo (fallido)
3. Ver logs y buscar el error específico
4. Verificar que los secrets estén correctos

### "Imagen no aparece en Docker Hub"
- Verificar `DOCKER_USERNAME` y `DOCKER_PASSWORD` en Secrets
- Revisar que el token de Docker Hub no esté expirado
- Ver logs en GitHub Actions

### "Render no actualiza"
- Esperar 1-2 minutos después del push
- Hacer `Ctrl + Shift + R` (refresh forzado)
- En Render → Manual Deploy → Deploy latest reference

---

## 📚 Recursos Documentación

| Recurso | URL |
|---------|-----|
| GitHub Actions Docs | https://docs.github.com/en/actions |
| Docker Docs | https://docs.docker.com/ |
| Express.js Docs | https://expressjs.com/ |
| Jest Testing | https://jestjs.io/ |
| Render Docs | https://render.com/docs |
| Node.js Docs | https://nodejs.org/docs/ |

---

## 📈 Mejoras Futuras

Posibles mejoras para la próxima iteración:

- [ ] Agregar endpoint POST con validación
- [ ] Implementar autenticación JWT
- [ ] Agregar base de datos (PostgreSQL)
- [ ] Crear dashboard con métricas
- [ ] Agregar logging centralizado
- [ ] Implementar rate limiting
- [ ] Agregar API documentation con Swagger
- [ ] Crear tests de integración
- [ ] Implementar CI/CD más avanzado

---

## 🤝 Créditos

**Autor Principal:** Leury Brand   
**Institución:** ITLA (Instituto Tecnológico de las Américas)  
**Herramientas:** GitHub, Docker, Render, Express.js, Jest

---

## 📄 Licencia

MIT License - Libre para usar y modificar

---

## 📞 Contacto

Para preguntas sobre esta práctica:
- GitHub Issues: https://github.com/lb19082004/Practica-devops/issues
- Email: (tu email aquí)

---

**Última actualización:** Abril 25, 2026  
**Estado:** ✅ En Producción y Funcionando
