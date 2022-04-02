/*
  Warnings:

  - Added the required column `picture` to the `Rink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rink" ADD COLUMN     "picture" TEXT NOT NULL;
