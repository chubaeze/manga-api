import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type MangaDocument = Manga & Document;

@Schema()
export class Manga {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;
}

export const MangaSchema = SchemaFactory.createForClass(Manga);
