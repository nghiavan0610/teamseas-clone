/*
  Warnings:

  - You are about to drop the column `slug` on the `User` table. All the data in the column will be lost.
  - Made the column `donate` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "slug",
ALTER COLUMN "donate" SET NOT NULL,
ALTER COLUMN "donate" DROP DEFAULT;
