-- DropForeignKey
ALTER TABLE "WuphfUser" DROP CONSTRAINT "WuphfUser_email_fkey";

-- AddForeignKey
ALTER TABLE "WuphfUser" ADD CONSTRAINT "WuphfUser_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
