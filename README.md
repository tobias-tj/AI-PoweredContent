# AI-Powered Content Generator

Este proyecto es una aplicación desarrollada con **Next.js** que utiliza inteligencia artificial para generar títulos, descripciones y hashtags optimizados para redes sociales. Además, cuenta con un sistema de monedas basado en **Stripe** que permite a los usuarios realizar una cantidad limitada de acciones de forma gratuita antes de requerir un pago.

## Tecnologías y Herramientas Utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones web.
- **Google Gemini**: Motor de IA para la generación de contenido.
- **Clerk Authentication**: Sistema de autenticación para la gestión de usuarios.
- **Neon Database Postgres**: Base de datos PostgreSQL para el almacenamiento de datos.
- **shadcn/ui**: Biblioteca de componentes de UI.
- **Stripe**: Integración de pagos para gestionar el sistema de monedas.
- **Prisma**: ORM para gestionar las interacciones con la base de datos.

## Configuración del Proyecto

### Archivos `.env` y `.env.local`

Para configurar el entorno de desarrollo, necesitarás crear dos archivos: `.env` y `.env.local`.

#### `.env`

Este archivo contiene las variables de entorno necesarias para que Prisma acceda a la base de datos.

```plaintext
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=your_database_url_here
```

#### `.env`

Este archivo contiene las variables de entorno necesarias para integrar Clerk Authentication, Google Gemini, y Stripe.

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

STRIPE_SECRET_KEY=your_stripe_secret_key_here

STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

```

Puesta en Marcha
Una vez configurados los archivos .env y .env.local, puedes iniciar el servidor de desarrollo con uno de los siguientes comandos:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
