# 📦 Baggage Calculator – Backend

GraphQL API server for the **Baggage Calculator** project.

Built with:

* Node.js
* Apollo Server
* GraphQL
* Prisma ORM (v7)
* MySQL

---

## 🚀 Tech Stack

| Layer    | Tech                    |
| -------- | ----------------------- |
| Runtime  | Node.js                 |
| API      | GraphQL (Apollo Server) |
| ORM      | Prisma 7                |
| Database | MySQL                   |
| Language | TypeScript              |

---

## 📁 Project Structure

```
.
├── src
│   ├── index.ts        # Apollo server entry
│   ├── prisma.ts       # Prisma client setup
│   ├── schema.ts       # GraphQL typeDefs
│   └── resolvers.ts    # GraphQL resolvers
│
├── prisma
│   ├── schema.prisma
│   └── migrations
│
├── prisma.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Setup (Local Development)

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Setup MySQL

Create database:

```sql
CREATE DATABASE baggage;
CREATE USER 'app'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON baggage.* TO 'app'@'localhost';
GRANT CREATE, DROP ON *.* TO 'app'@'localhost';
FLUSH PRIVILEGES;
```

---

### 3️⃣ Environment variables

Create `.env` file:

```env
DATABASE_URL="mysql://app:your_password@localhost:3306/baggage"
PORT=4000
```

---

### 4️⃣ Run migrations

```bash
npx prisma migrate dev
```

---

### 5️⃣ Start server

```bash
npm run dev
```

Server runs at:

```
http://localhost:4000
```

---

## 📡 Example GraphQL Query

```graphql
query {
  categories {
    id
    name
  }
}
```

---

## 🧠 Architecture Notes

* Prisma 7 requires `prisma.config.ts`
* MySQL connection uses `@prisma/adapter-mariadb`
* Database migrations are version-controlled
* `.env` is excluded from Git

---

## 📌 Future Improvements

* Authentication (JWT)
* User-specific baggage sessions
* Deployment configuration
* Docker support
* CI/CD pipeline

---

## 👤 Author

Seongmin Park
