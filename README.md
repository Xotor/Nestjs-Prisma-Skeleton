# Skeleton for Nestjs with Fastify, Prisma and Swagger

## Install

### Nestjs

  npm i -g @nestjs/cli
  nest new nestjs-prisma-skeleton
  cd nestjs-prisma-skeleton

### Fastify 

  https://docs.nestjs.com/techniques/performance

  npm i --save @nestjs/platform-fastify

  Edit main.ts like described

### Adding example resource
  nest g resource blog
  ? What transport layer do you use? REST API
  ? Would you like to generate CRUD entry points? Yes
  CREATE src/blog/blog.controller.spec.ts (556 bytes)
  CREATE src/blog/blog.controller.ts (883 bytes)
  CREATE src/blog/blog.module.ts (241 bytes)
  CREATE src/blog/blog.service.spec.ts (446 bytes)
  CREATE src/blog/blog.service.ts (607 bytes)
  CREATE src/blog/dto/create-blog.dto.ts (30 bytes)
  CREATE src/blog/dto/update-blog.dto.ts (169 bytes)
  CREATE src/blog/entities/blog.entity.ts (21 bytes)
  UPDATE package.json (1994 bytes)
  UPDATE src/app.module.ts (308 bytes)
  ✔ Packages installed successfully.



