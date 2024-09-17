# API-WEB-TEXT-TO-IMAGE
Development of a website to use a text-to-image API from Huggingface (Bun and Hono)

How to use:
1-Install Bun (It is like Node.js) :

    Windows---> powershell -c "irm bun.sh/install.ps1 | iex"
    Linux & macOS---> curl -fsSL https://bun.sh/install | bash
2-In the terminal, we have to install hono (Framework to build Web Applications using Server and Clients)

    > bun install hono
3-Run our API-WEB (Running at http://localhost:3000)

    > bun run ./server.ts

Decisiones Tomadas:
Lo primero de todo fue pensar como quería que fuese mi diseño de la página web, para ello utilicé figma (https://www.figma.com/design/enveXovFTYNMB2LO6Oa0ic/Untitled?node-id=0-1&t=4BQFKDWyoJWOIzWb-1).

Una vez definido el diseño, investigué sobre el uso de Bootstrap para acelerar la creación de componentes y Tailwind CSS para lograr un diseño moderno y responsive. Después de implementar una primera versión visual, me informé acerca de como funcionaban los tokens y la utilización de APIS en huggingface y desarrollé una versión con la api implementada y el token de acceso a la vista(Grave Error)

Posteriormente, aprendí sobre Node.js para manejar variables de entorno y usar la comunicación entre servidor y cliente. Finalmente, descubrí Bun y Hono, una mejora de Node.js lanzada en 2021, y utilicé estas herramientas para completar y optimizar mi web.

