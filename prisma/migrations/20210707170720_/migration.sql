-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post.title_unique" ON "Post"("title");
