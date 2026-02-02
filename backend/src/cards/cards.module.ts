import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardResolver } from './card.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardResolver],
})
export class CardsModule {}
