# Skeleton for Nestjs with Fastify, Prisma and Swagger

## Install

### Nestjs

  npm i -g @nestjs/cli
  nest new nestjs-prisma-skeleton
  cd nestjs-prisma-skeleton

### Fastify 

  https://docs.nestjs.com/techniques/performance

  npm i @nestjs/platform-fastify

  Edit main.ts like described

### Adding example resource

$ nest g resource user
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
CREATE src/user/user.controller.spec.ts (556 bytes)
CREATE src/user/user.controller.ts (883 bytes)
CREATE src/user/user.module.ts (241 bytes)
CREATE src/user/user.service.spec.ts (446 bytes)
CREATE src/user/user.service.ts (607 bytes)
CREATE src/user/dto/create-user.dto.ts (30 bytes)
CREATE src/user/dto/update-user.dto.ts (164 bytes)
CREATE src/user/entities/user.entity.ts (21 bytes)
UPDATE src/app.module.ts (369 bytes)

$ nest g resource post
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
CREATE src/post/post.controller.spec.ts (556 bytes)
CREATE src/post/post.controller.ts (883 bytes)
CREATE src/post/post.module.ts (241 bytes)
CREATE src/post/post.service.spec.ts (446 bytes)
CREATE src/post/post.service.ts (607 bytes)
CREATE src/post/dto/create-post.dto.ts (30 bytes)
CREATE src/post/dto/update-post.dto.ts (164 bytes)
CREATE src/post/entities/post.entity.ts (21 bytes)
UPDATE src/app.module.ts (430 bytes)

### Adding swagger

  https://docs.nestjs.com/openapi/introduction
  
  npm install --save @nestjs/swagger
  npm i @fastify/static
  
  Edit main.ts like described

### Adding Prisma

  https://docs.nestjs.com/recipes/prisma

  npm install prisma --save-dev
  npx prisma
  npx prisma init

  Edit schema.prisma and .env

  npx prisma migrate dev --name init

  npm install @prisma/client