-- AlterTable
ALTER TABLE "cams" ADD COLUMN     "hidden" BOOLEAN DEFAULT false,
ADD COLUMN     "long_description" TEXT,
ADD COLUMN     "mbc_hosted_youtube" BOOLEAN DEFAULT false,
ADD COLUMN     "more_cams" TEXT,
ADD COLUMN     "title_slug" TEXT,
ADD COLUMN     "zip" TEXT;
