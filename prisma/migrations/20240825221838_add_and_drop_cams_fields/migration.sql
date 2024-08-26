/*
  Warnings:

  - You are about to drop the column `mbc_hosted` on the `cams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cams" DROP COLUMN "mbc_hosted",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "drone_footage" BOOLEAN DEFAULT false;
