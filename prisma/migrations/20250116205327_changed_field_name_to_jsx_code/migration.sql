/*
  Warnings:

  - You are about to drop the column `html_code` on the `temp_banner` table. All the data in the column will be lost.
  - Added the required column `jsx_code` to the `temp_banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "temp_banner" DROP COLUMN "html_code",
ADD COLUMN     "jsx_code" TEXT NOT NULL;
