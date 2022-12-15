import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MangaService } from './manga.service';
import { CreateMangaDto } from './dto/create-manga.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';

@Controller('users')
export class MangaController {
  constructor(private readonly MangaService: MangaService) {}

  @Post()
  create(@Body() createMangaDto: CreateMangaDto) {
    return this.MangaService.create(createMangaDto);
  }

  @Get()
  findAll() {
    return this.MangaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.MangaService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangaDto: UpdateMangaDto) {
    return this.MangaService.update(id, updateMangaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MangaService.remove(id);
  }
}
