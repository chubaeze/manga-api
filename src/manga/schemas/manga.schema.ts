import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type MangaDocument = Manga & Document;

@Schema()
export class Manga {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  coverImage: string;

  @Prop({ default: Date.now() })
  uploadDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const MangaSchema = SchemaFactory.createForClass(Manga);
