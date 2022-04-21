-- AlterTable
ALTER TABLE "WuphfUser" ADD COLUMN     "avatarId" INTEGER;

-- CreateTable
CREATE TABLE "Avatar" (
    "avatarId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("avatarId")
);

-- AddForeignKey
ALTER TABLE "WuphfUser" ADD CONSTRAINT "WuphfUser_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("avatarId") ON DELETE SET NULL ON UPDATE CASCADE;
