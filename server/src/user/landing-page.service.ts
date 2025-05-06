import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LandingPageService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll() {
    const pages = await this.prismaService.landingPage.findMany();
    if (!pages || pages.length === 0) {
      throw new NotFoundException('Лендинги не найдены');
    }
    return pages;
  }

  public async getAll(authorId: string) {
    const pages = await this.prismaService.landingPage.findMany({
      where: { author: authorId },
    });

    if (!pages || pages.length === 0) {
      throw new NotFoundException(`Страницы для автора ${authorId} не найдены`);
    }

    return pages;
  }

  public async create(data: { name: string; author: string; url: string }) {
    return this.prismaService.landingPage.create({
      data,
    });
  }

  public async delete(id: number) {
    const page = await this.prismaService.landingPage.findUnique({
      where: { id },
    });

    if (!page) {
      throw new NotFoundException(`Страница с id ${id} не найдена`);
    }

    return this.prismaService.landingPage.delete({
      where: { id },
    });
  }

  public async findById(id: number) {
    const page = await this.prismaService.landingPage.findUnique({
      where: { id },
    });

    if (!page) {
      throw new NotFoundException(`Страница с id ${id} не найдена`);
    }

    return page;
  }
}