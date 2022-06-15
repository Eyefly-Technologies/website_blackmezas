# Instrucciones para hacer deploy

Para iniciar el servidor local:

### `yarn start`

Al realizar los cambios en el código, estos deben estar almacenados en GitHub de manera que se tiene que realizar commit y push a la rama principal.
Crear código optimizado para producción:

### `yarn build`

Reflejar los cambios al dominio:

### `yarn deploy`

Debido a que la página está almacenada en GitHub Pages, cada vez que se realiza un deploy, el dominio se desconfigura, de manera que se debe ingresar blackmezas.com en la configuración de este repositorio en settings -> pages -> custom domain.
