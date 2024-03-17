-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT[],
    "reference" TEXT[],
    "image" TEXT NOT NULL,
    "type" TEXT,
    "url" TEXT,
    "desc" TEXT,
    "keywords" TEXT[],
    "date" TIMESTAMP(3),

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

