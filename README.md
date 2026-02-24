# ✈️ Baggage Calculator - Backend

Prisma ORM 기반 MySQL 데이터베이스를 Apollo Server(GraphQL)로 노출하는 백엔드 API 서버입니다.

---

## 🛠 Tech Stack

- Node.js
- Apollo Server v5
- TypeScript
- MySQL
- Prisma ORM
- MariaDB Adapter (MySQL 호환)

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

