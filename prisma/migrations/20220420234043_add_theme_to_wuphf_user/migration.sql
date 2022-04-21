-- AlterTable
ALTER TABLE "WuphfUser" ADD COLUMN     "theme" TEXT NOT NULL;
UPDATE "WuphfUser" SET "theme" = "light";