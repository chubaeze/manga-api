import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMangaDto } from './dto/create-manga.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';
import { Manga, MangaDocument } from './schemas/manga.schema';

@Injectable()
export class MangaService {
  constructor(@InjectModel(Manga.name) private mangaModel: Model<MangaDocument>) {}

  async create(createMangaDto: CreateMangaDto): Promise<MangaDocument> {
    const createdManga = new this.mangaModel(createMangaDto);
    return createdManga.save();
  }

  async findAll(): Promise<MangaDocument[]> {
    return this.mangaModel.find().exec();
  }

  async findById(id: string): Promise<MangaDocument> {
    return this.mangaModel.findById(id);
  }

  async update(
    id: string,
    updateMangaDto: UpdateMangaDto,
  ): Promise<MangaDocument> {
    return this.mangaModel
      .findByIdAndUpdate(id, updateMangaDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<MangaDocument> {
    return this.mangaModel.findByIdAndDelete(id).exec();
  }
}