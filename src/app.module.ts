import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        "type": "mongodb",
        "url": "mongodb+srv://Cluster21633:martinloan479@cluster21633.avo1c74.mongodb.net/test?retryWrites=true&w=majority",
        "useNewUrlParser": true,
        "synchronize": true,
        "logging": true,
        "entities": ["src/users/*.*"],
        useFactory: async (config: ConfigService) => ({
          uri: config.get<string>('DB_HOST'),
         }),
         inject: [ConfigService],
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
