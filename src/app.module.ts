import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://chubaeze:LBzWmZHAqjKXnV3Q@cluster0.ydmydyo.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    MangaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
