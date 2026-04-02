# 🧪 Ecommerce QA Automation - Playwright

Proyecto de automatización de pruebas end-to-end para un flujo de comercio electrónico utilizando **Playwright** y buenas prácticas de QA Automation.

---

## 🚀 Tecnologías utilizadas

* Playwright
* JavaScript
* Node.js
* GitHub Actions (CI/CD)

---

## 📌 Objetivo del proyecto

Validar el flujo principal de un ecommerce:

* Login de usuario
* Navegación de productos
* Validación de inventario
* Flujo de compra (en progreso)

---

## 🧱 Estructura del proyecto

```
ecommerce-qa-automation/
│
├── pages/               # Page Object Model
│   ├── loginPage.js
│   ├── inventoryPage.js
│   └── cartPage.js
│
├── tests/
│   └── ui/
│       ├── login.spec.js
│
├── playwright-report/   # Reportes de ejecución
├── test-results/
├── package.json
└── README.md
```

---

## ▶️ Ejecución de pruebas

Instalar dependencias:

```
npm install
```

Ejecutar pruebas:

```
npx playwright test
```

Ver reporte:

```
npx playwright show-report
```

---

## ⚙️ Integración continua (CI/CD)

Este proyecto usa GitHub Actions para:

* Instalar dependencias
* Ejecutar pruebas automáticamente
* Generar reportes

Cada push a la rama `main` dispara la ejecución automática.

---

## 📊 Reportes

Los reportes se generan automáticamente en cada ejecución y pueden descargarse desde:

👉 GitHub Actions → Artifacts

---

## 🧠 Buenas prácticas implementadas

* Page Object Model (POM)
* Separación de lógica de pruebas
* Uso de selectores estables
* Automatización en CI/CD

---

## 📈 Próximas mejoras

* Flujo completo de compra (checkout)
* Pruebas API
* Manejo de datos dinámicos
* Integración con reportes avanzados (Allure)

---

## 👩‍💻 Autor

**Merce Galindo**
QA Automation | Full Stack Developer

---

## ⭐ Si te gusta este proyecto

¡Dale estrella ⭐ al repositorio!