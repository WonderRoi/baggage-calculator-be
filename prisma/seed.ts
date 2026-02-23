import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding start...");

  await prisma.item.deleteMany();
  await prisma.limitPreset.deleteMany();

  await prisma.item.createMany({
    data: [
      { name: "의류 묶음(상의/하의)", weight: 10, imageUrl: "/images/items/clothes.png" },
      { name: "속옷·양말 묶음", weight: 5 },
      { name: "여벌 신발(운동화/슬리퍼)", weight: 5 },
      { name: "세면도구 파우치", weight: 5 },
      { name: "샴푸·바디워시 등 액체류 파우치", weight: 5 },
      { name: "기초 화장품 파우치(선크림 포함)", weight: 5 },
      { name: "상비약/구급 파우치", weight: 5 },
      { name: "압축파우치/정리 파우치 세트", weight: 5 },
      { name: "접이식 에코백/보조가방", weight: 5 },
      { name: "기념품/쇼핑 묶음(초기값)", weight: 2 },
    ],
  });

  await prisma.limitPreset.createMany({
    data: [
      { name: "LCC 기본 (15kg)", maxWeight: 15 },
      { name: "일반 항공 평균 (20kg)", maxWeight: 20 },
      { name: "국제선 이코노미 (23kg)", maxWeight: 23 },
      { name: "미주 노선 평균 (23kg x 2)", maxWeight: 46 },
      { name: "비즈니스 클래스 (32kg)", maxWeight: 32 },
    ],
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
