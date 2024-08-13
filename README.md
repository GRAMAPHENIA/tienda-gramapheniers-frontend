# shad/cn

`npx create-next-app@latest my-app --typescript --tailwind --eslint`

# Paquete lucide-react

`npm install lucide-react`

# Menu List

`npx shadcn-ui@latest add navigation-menu`

# Pop Over

`npx shadcn-ui@latest add popover`

# Separator

`npx shadcn-ui@latest add separator`

# Temas Light & Dark

`npm install next-themes`

# DropDownMenu

`npx shadcn-ui@latest add dropdown-menu`

# Carousel de texto

`npx shadcn-ui@latest add carousel`

# Card

`npx shadcn-ui@latest add card`

# Plugins para Carousel

- Se pueden utilizar `plugins` adicionales para agregar funcionalidades al carrusel.

`npm install embla-carousel-autoplay --save
`

Más información en la
[Documentación del plugin Carousel](https://www.embla-carousel.com/api/plugins/).

<!-- # Volvemos a Strapi

Dentro de `panel, settings, roles` en `USERS & PERMISSIONS PLUGIN` hacemos click en `public` luego en `Product` en el `check` de `findOne` hacemos click en la ruidita obteniendo asi la url en el panel derecho. En este caso `/api/products/:id` -->

# Peticiones del producto

![Texto alternativo](public\conecciones.png)

# Vista general del proyecto andando

![Texto alternativo](public\coneccion-vs-code.png)

# API

Dentro de la carpeta `frontend-gramapheniers` creamos la carpeta `api` y dentro de esta el archivo `useGetFeaturedProducts.tsx`.

- _En este archivo tendremos la funcion por la cual vamos a obtener todos los productos de_ `destacados`.

# Tipado

En la raiz de la carpeta `frontend-gramapheniers` creamos una nueva carpeta bajo el nombre `types` y dentro de esta el archivo `response.ts`

# Skeleton

Dentro de la carpeta `components` creamos un nuevo componente de nombre `skeletonSchema.tsx`

instalamos desde `shadcn` el componente `skeleton`.

`npx shadcn-ui@latest add skeleton`

# Componente banner-discount

# API CONSEGUIR PRODUCTOS

Dentro de la carpeta api creamos un nuevo componente de nombre `getProducts.tsx` donde se va agenerar una nueva funcion, la cual va a ser la encargada de obtener todas nuestras categorias.

# Carpeta types

Dentro de la carpeta `types` generamos un nuevo archivo de nombre `categories.ts`

# Components

Dentro de la carpeta `components` creamoun nuevo archivo de nombre `banner-product.tsx`.

# SISTEMA DE RUTAS

## ROUTES: Carpeta (routes) dentro del frontend

Dentro de la carpeta `app` creamos la carpeta `(routes)` dentro de esta la carpeta `category` dentro de esta la carpeta `[categorySlug]` y dentro de esta ultima el archivo page.tsx.

- La forma que se tiene de escribir el nombre de la carpeta `[categorySlug]` entre corchetes, se utiliza para recibir cualquier parametro dentro de la url de `/category/...`

Dentro de la carpeta `(routes)` creamos la carpeta `cart` y dentro de esta el archivo page.tsx.

## Maquetacion de `categorySlug`

Dentro de la carpeta `api` creamos el archivo de nombre `getCategoryProducts.tsx` dentro vamos a indicar una peticion.

# Nuevo componente

Dentro de la carpeta `category` y dentro de `components` creamos un nuevo componente de nombre:

`filters-controls-category.tsx`

# WARNING de cambio estructural INFO !!!

- Pasamos la carpeta de `components` que se encuentra en category dentro de la carpeta `[categorySlug]`

# Nuevo componente

Dentro de la carpeta `[categorySlug]` y dentro de `components` creamos un nuevo componente de nombre:

`filter-origin.tsx`

# Un nuevo END/POINT

Dentro del directorio `api` creamos un archivo de nombre `getProductField.tsx`

# Radio Group

`npx shadcn-ui@latest add radio-group`

# Label

`npx shadcn-ui@latest add label`

# CARPETA: `types`

Dentro de la carpeta `types` creamos el archivo de nombre `filter.ts`

# Nuevo componente

Dentro de la carpeta `[categorySlug]` y dentro de `components` creamos un nuevo componente de nombre:

`product-cad.tsx`

# Nueva funcion

Creamos dentro de la carpeta `lib` un nuevo archivo de nombre `formatPrice.tsx`

# Dando funcionalidad al filtro de CATEGORY

# INICIO DE PAGINA DE PRODUCTO

Dentro del directorio `app`, `(routes)` creamos una nueva carpeta de nombre `product` y dentro de esta, la carpeta `[productSlug]` con el archivo `page.tsx` dentro. Tambien generaremos dentro de `[productSlug]` la carpeta `components`.

# NUEVA PETICION

Creamos un nuevo archivo dentro de la carpeta `api` bajo el nombre de `getProductBySlug.tsx`. Dentro del mismo es que se hara la peticion.

# Nuevo archivo

Dentro de las carpetas `product/[productSlug]/components` creamos el archivo de nombre `skeleton-product.tsx`.

# Nuevo componente

Dentro de las carpetas `product/[productSlug]/components` creamos el archivo de nombre `carousele-product.tsx`.

# Nuevo componente

Dentro de las carpetas `product/[productSlug]/components` creamos el archivo de nombre `info-product.tsx`.

# CARRO DE COMPRAS

## Para el carro de compras **_Zustand_**.

Crear un contexto y obtenerlo atravez de nuestro `Local Storage` de forma que incluso recargando la pagina, podamos tener la informacion de nuestro `carro de compras` o lo que nosotros querramos.

# ZUSTAND

Sitio web: https://zustand-demo.pmnd.rs/

## instalacion:

`npm install zustand`

# NUEVO DIRECTORIO

Creamos dentro de la raiz de `frontend-gramapheniers` nuevo directorio bajo el nombre de `use-cart.tsx`.

# TOAST

Ingresamos a `shad/cn` y buscamos el componente de `toast`.

`npx shadcn-ui@latest add toast`

# PAGE CART

- Maquetacion del `page.tsx`.

Dentro de `app/(routes)/cart/` creamos una nueva carpeta de `components` y dentro de esta el archivo de nombre `cart-item.tsx`.

# LOVED PRODUCTS

Dentro de `app/(routes)/` creamos una nueva carpeta de nombre `loved-products` dentro de esata un archivo de nombre `page.tsx`.

# NUEVO HOOK

Dentro de la carpeta `hooks` creamos el archivo de nombre `use-loved-products.tsx`.

# LOVED PRODUCT

Dentro de la carpeta `(routes)/loved-products/` la carpeta `components` y dentro de esta, el archivo de nombre `loved-item-product.tsx`.

# SHARED

Dentro de la carpeta de `components` creamos una nueva carpeta de nombre `shared`. Esta carpeta va a ser de componentes compartidos.

<!-- STRIPE NO CUBRE ARGENTINA Y PARA ESO VAMOS A USAR MERCADO PAGO -->

# MERCADO PAGO

# API

Dentro de la carpeta `api` creamos un nuevo directorio de nombre `payments.tsx`

# AXIOS

- Biblioteca de JavaScript que permite hacer solicitudes HTTP desde el navegador y Node.js.

## INSTALACION

`npm install axios`

...continuamos con `payments.tsx`.

# Mercado Pago

## INSTALACION

`npm install nextjs-toploader`
