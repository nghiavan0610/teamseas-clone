-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "total" INTEGER NOT NULL DEFAULT 0;
