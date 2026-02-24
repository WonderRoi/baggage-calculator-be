import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding start...");

  await prisma.item.deleteMany();
  await prisma.limitPreset.deleteMany();

  const items = [
    //ex: { name: "clothes", weight: 10, imageUrl: "/images/items/clothes.png" },
    { name: "의류", weight: 6 },
    { name: "속옷", weight: 2 },
    { name: "신발", weight: 4 },
    { name: "세면도구", weight: 1 },
    { name: "화장품", weight: 2 },
    { name: "전자기기", weight: 4 },
    { name: "충전기", weight: 1 },
    { name: "상비약", weight: 1 },
    { name: "기념품", weight: 8 },
    { name: "기타", weight: 5 },
  ];

  await prisma.item.createMany({
    data: items.map((item, index) => ({
      ...item,
      sortOrder: index + 1,
    })),
  });

  const presets = [
    { name: "LCC 기본 (15kg)", maxWeight: 15 },
    { name: "일반 항공 평균 (20kg)", maxWeight: 20 },
    { name: "국제선 이코노미 (23kg)", maxWeight: 23 },
    { name: "비즈니스 클래스 (32kg)", maxWeight: 32 },
  ];

  await prisma.limitPreset.createMany({
    data: presets.map((preset, index) => ({
      ...preset,
      sortOrder: index + 1,
    })),
  });

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
