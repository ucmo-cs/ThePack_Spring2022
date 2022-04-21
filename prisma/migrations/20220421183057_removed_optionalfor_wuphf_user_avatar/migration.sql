/*
  Warnings:

  - Made the column `avatarId` on table `WuphfUser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "WuphfUser" DROP CONSTRAINT "WuphfUser_avatarId_fkey";

-- AlterTable
ALTER TABLE "WuphfUser" ALTER COLUMN "avatarId" SET NOT NULL,
ALTER COLUMN "avatarId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "WuphfUser" ADD CONSTRAINT "WuphfUser_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("avatarId") ON DELETE RESTRICT ON UPDATE CASCADE;
