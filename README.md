 # Proyecto Final React – E-commerce

Este proyecto es una aplicación web tipo **e-commerce** desarrollada con **React** como trabajo final del curso.

Permite navegar un catálogo de productos, ver el detalle de cada uno, agregar productos al carrito y finalizar una compra generando una orden en **Firebase Firestore**.

---

## 🛠 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Firebase / Firestore
- CSS

---

## Funcionalidades principales

- Listado dinámico de productos desde Firestore
- Navegación por categorías
- Vista en detalle de cada producto
- Selector de cantidad (ItemCount)
- Carrito de compras con:
  - Agregar y eliminar productos
  - Vaciar carrito
  - Cálculo de totales
- Checkout con formulario de compra
- Generación de orden en Firestore
- Visualización del ID de la orden al finalizar la compra
- Renderizado condicional:
  - Carrito vacío
  - Mensajes de estado
- Navegación SPA sin recarga de página

---

## Navegación

- Home
- Categorías
- Detalle de producto
- Carrito
- Checkout

---

## 🗂 Estructura del proyecto

- `NavBar`
- `CartWidget`
- `ItemListContainer`
- `ItemList`
- `Item`
- `ItemDetailContainer`
- `ItemDetail`
- `ItemCount`
- `Cart`
- `Checkout`

---

## Firebase

Se utiliza **Firestore** como base de datos para:
- Almacenar productos
- Registrar órdenes de compra

Las credenciales de Firebase se manejan mediante variables de entorno.

---

## Instalación y ejecución

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install

## Autor

Proyecto realizado por **Sheila** como trabajo final del curso de React.
Mi proyecto está online en Vercel:
https://react-chiesa-eq3s.vercel.app
