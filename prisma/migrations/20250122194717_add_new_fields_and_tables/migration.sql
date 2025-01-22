-- AlterTable
ALTER TABLE "cams" ADD COLUMN     "continent" TEXT,
ADD COLUMN     "time_zone" TEXT,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "temp_banner" (
    "id" SERIAL NOT NULL,
    "is_visible" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "jsx_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "temp_banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cams_tags" (
    "cam_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cams_tags_pkey" PRIMARY KEY ("cam_id","tag_id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "tag"("name");

-- AddForeignKey
ALTER TABLE "cams_tags" ADD CONSTRAINT "cams_tags_cam_id_fkey" FOREIGN KEY ("cam_id") REFERENCES "cams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cams_tags" ADD CONSTRAINT "cams_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
