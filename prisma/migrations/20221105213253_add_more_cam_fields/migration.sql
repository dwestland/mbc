/*
  Warnings:

  - You are about to drop the column `zip` on the `cams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cams" DROP COLUMN "zip",
ADD COLUMN     "postal_code" TEXT,
ADD COLUMN     "youtube_id" TEXT;
