/*
  Warnings:
  - Added the required column `theme` to the `WuphfUser` table without a default value. This is not possible if the table is not empty.
*/
-- AlterTable
ALTER TABLE "WuphfUser" ADD COLUMN     "theme" TEXT NOT NULL;
