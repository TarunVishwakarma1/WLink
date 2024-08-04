/*
  Warnings:

  - The values [AGENCY_OWNER,AGENCY_ADMIN,SUBACCOUNT_USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('WALLET_OWNER', 'WALLET_ADMIN', 'SUBACCOUNT_WALLET', 'SUBACCOUNT_GUEST');
ALTER TABLE "Invitation" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TABLE "Invitation" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "Invitation" ALTER COLUMN "role" SET DEFAULT 'SUBACCOUNT_WALLET';
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'SUBACCOUNT_WALLET';
COMMIT;

-- AlterTable
ALTER TABLE "Invitation" ALTER COLUMN "role" SET DEFAULT 'SUBACCOUNT_WALLET';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'SUBACCOUNT_WALLET';
