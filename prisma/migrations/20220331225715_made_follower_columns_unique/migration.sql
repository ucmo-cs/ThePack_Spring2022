/*
  Warnings:

  - The primary key for the `Follower` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Follower` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[followerId]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_pkey",
DROP COLUMN "id";

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "postsId" INTEGER NOT NULL,
    "commentBody" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Follower_userId_key" ON "Follower"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_followerId_key" ON "Follower"("followerId");

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Wuphf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
