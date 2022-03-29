/*
  Warnings:

  - You are about to drop the column `authorId` on the `Wuphf` table. All the data in the column will be lost.
  - The primary key for the `WuphfUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `WuphfUser` table. All the data in the column will be lost.
  - Added the required column `postBody` to the `Wuphf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Wuphf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_userId_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "Wuphf" DROP CONSTRAINT "Wuphf_authorId_fkey";

-- AlterTable
ALTER TABLE "Follower" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "followerId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Likes" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Wuphf" DROP COLUMN "authorId",
ADD COLUMN     "postBody" VARCHAR(255) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WuphfUser" DROP CONSTRAINT "WuphfUser_pkey",
DROP COLUMN "id",
ALTER COLUMN "email" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "WuphfUser" ADD CONSTRAINT "WuphfUser_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wuphf" ADD CONSTRAINT "Wuphf_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WuphfUser"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WuphfUser"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WuphfUser"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "WuphfUser"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;
