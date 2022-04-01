/*
  Warnings:

  - The primary key for the `Likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Likes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Comments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,followerId]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,wuphfId]` on the table `Likes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Follower_followerId_key";

-- DropIndex
DROP INDEX "Follower_userId_key";

-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "Comments_userId_key" ON "Comments"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_userId_followerId_key" ON "Follower"("userId", "followerId");

-- CreateIndex
CREATE UNIQUE INDEX "Likes_userId_wuphfId_key" ON "Likes"("userId", "wuphfId");

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WuphfUser"("userName") ON DELETE SET NULL ON UPDATE CASCADE;
