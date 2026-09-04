/*
  Warnings:

  - The values [USER,OWNER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/

-- ১. প্রথমেই "User" টেবিল থেকে "role" কলামটি ড্রপ করে দিচ্ছি যেন ডিপেন্ডেন্সি কেটে যায়
ALTER TABLE "User" DROP COLUMN IF EXISTS "role";

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN', 'MEMBER', 'VIEWER');
ALTER TABLE "public"."Member" ALTER COLUMN "memberRole" DROP DEFAULT;

-- "Member" টেবিলের টাইপ আপডেট করা হচ্ছে
ALTER TABLE "Member" ALTER COLUMN "memberRole" TYPE "UserRole_new" USING ("memberRole"::text::"UserRole_new");

-- পুরাতন টাইপ রিনেম এবং নতুন টাইপ সেট করা হচ্ছে
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";

-- এখন নিরাপদে পুরাতন টাইপ ড্রপ করা যাবে
DROP TYPE IF EXISTS "UserRole_old";

ALTER TABLE "Member" ALTER COLUMN "memberRole" SET DEFAULT 'MEMBER';
COMMIT;

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "memberRole" SET DEFAULT 'MEMBER';
