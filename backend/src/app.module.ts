import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Card } from './cards/card.entity';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST') || 'localhost',
        port: parseInt(config.get('DB_PORT') || '5432', 10),
        username: config.get('DB_USERNAME') || 'postgres',
        password: config.get('DB_PASSWORD') || '1379',
        database: config.get('DB_DATABASE') || 'kanban',
        entities: [Card, __dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }) as any,
      inject: [ConfigService],
    }),
    CardsModule,
  ],
})
export class AppModule { }