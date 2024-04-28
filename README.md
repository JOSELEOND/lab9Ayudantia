# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install & Run
- yarn 
- yarn dev

Si trabajamos con TypeScript, el código se vería similar al de JavaScript, pero con algunas adiciones para el tipado y la definición de interfaces. Aquí tienes cómo se podría modificar el código para trabajar con TypeScript:
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    // Otros campos si los hay
}
Para tipar correctamente el objeto product en TypeScript, puedes definir una interfaz que describa la estructura esperada de los datos del producto.
