-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "outline_keys" TEXT NOT NULL,
    "is_bot" BOOLEAN NOT NULL,
    "first_name" TEXT NOT NULL,
    "username" TEXT,
    "language_code" TEXT,
    "time_stop" BIGINT NOT NULL,
    "create_time" BIGINT NOT NULL,
    "test_period_is_over" BOOLEAN NOT NULL,
    "user_status" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VpnLocation" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "url_api" TEXT NOT NULL,
    "type_vpn" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "len_vpn" INTEGER NOT NULL,
    "limit_npm" INTEGER NOT NULL,

    CONSTRAINT "VpnLocation_pkey" PRIMARY KEY ("id")
);
