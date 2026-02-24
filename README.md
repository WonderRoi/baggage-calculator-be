# ✈️ Baggage Calculator - Backend

Prisma ORM 기반 MySQL 데이터베이스를 Apollo Server(GraphQL)로 노출하는 백엔드 API 서버입니다.

---

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Server**: Apollo Server v5
- **Language**: TypeScript
- **Database**: MySQL
- **ORM**: Prisma
- **Driver**: MariaDB Adapter (MySQL 호환)

---

## 📂 프로젝트 구조

```
src
├── schema # GraphQL typeDefs
├── resolvers # Query resolver
├── prisma # Prisma client 연결
└── index.ts # Apollo Server 엔트리
```

---

## 📌 주요 기능

- `items` 조회
- `limitPresets` 조회
- Prisma ORM을 통한 DB 접근
- GraphQL 스키마 기반 타입 안정성

---

## 🚀 실행 방법

1. 환경 변수 설정 (.env)

DATABASE_URL="mysql://user:password@localhost:3306/baggage_calculator_db"

2. Prisma 설정

npx prisma generate
npx prisma migrate dev

3. 서버 실행

npm run dev

GraphQL Endpoint
http://localhost:4000/graphql

---

## 📦 Seed 데이터

npx prisma db seed
