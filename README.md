<div align="center">

# JavaScript — Estructuras Repetitivas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)

</div>

## 📋 Descripción

Colección de 15 ejercicios de JavaScript enfocados en estructuras repetitivas y patrones de bucles. Cubre `for`, `while` y `do-while`, con ejemplos progresivos que incluyen impresión de patrones, secuencias numéricas, números primos y lógica de bucles anidados.

## 🎯 Progresión de los ejercicios

| Rango | Enfoque |
|---|---|
| e1 – e3 | Bucles `for` simples: sumas, detección de números primos |
| e4 – e10 | Bucles anidados: arte ASCII, generación de patrones |
| e11 – e15 | Bucles combinados con lógica condicional y validación de entrada con `while` |

## 🛠️ Stack

- **Lenguaje:** JavaScript (Node.js)
- **Librería:** [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) — entrada interactiva por consola

## 📦 Instalación y ejecución

```bash
git clone https://github.com/Camilocostas/JavaScript---Estructuras-Repetitivas.git
cd Estructuras_repetitivas
npm install
```

Ejecutar un ejercicio puntual:

```bash
node e1.js     # Suma de 1 a 100 (sin input)
node e3.js     # Números primos del 2 al 1000 (sin input)
node e4.js     # Patrón de diamante (sin input)
node e8.js     # Triángulo numérico (requiere input)
node e11.js    # Múltiplos de 3 (requiere input)
node e14.js    # Tabla/grilla personalizada (requiere input)
```

## 🗂️ Estructura

```
Estructuras_repetitivas/
├── e1.js ... e15.js                              # 15 ejercicios progresivos
├── Javascript estructuras de repetición.pdf       # Guía de referencia
├── package.json
└── package-lock.json
```

## ⚠️ Nota de mantenimiento

Este repo tiene actualmente la carpeta `node_modules/` versionada por error. Pendiente: agregarla al `.gitignore` y eliminarla del historial con `git rm -r --cached node_modules`.
