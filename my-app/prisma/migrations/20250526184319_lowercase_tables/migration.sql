-- CreateTable
CREATE TABLE `dbMedicamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dosagem` INTEGER NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `dbMedicamento_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dbMedicamento` ADD CONSTRAINT `dbMedicamento_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuario`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
