/*
  Warnings:

  - The `memberRole` column on the `Member` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "BoardRole" AS ENUM ('ADMIN', 'MEMBER', 'VIEWER');

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "memberRole",
ADD COLUMN     "memberRole" "BoardRole" NOT NULL DEFAULT 'MEMBER';

-- DropEnum
DROP TYPE "UserRole";
