import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';

@Resolver(() => Card)
export class CardResolver {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) { }

  @Query(() => [Card])
  async cards(): Promise<Card[]> {
    return this.cardRepository.find();
  }

  @Query(() => Card, { nullable: true })
  async card(@Args('id') id: number): Promise<Card | null> {
    return this.cardRepository.findOne({ where: { id } });
  }

  @Mutation(() => Card)
  async createCard(@Args('input') input: CreateCardInput): Promise<Card> {
    const card = this.cardRepository.create(input);
    return this.cardRepository.save(card);
  }

  @Mutation(() => Card, { nullable: true })
  async updateCard(@Args('input') input: UpdateCardInput): Promise<Card | null> {
    await this.cardRepository.update(input.id, input);
    return this.cardRepository.findOne({ where: { id: input.id } });
  }

  @Mutation(() => Boolean)
  async deleteCard(@Args('id') id: number): Promise<boolean> {
    const result = await this.cardRepository.delete(id);
    return result.affected === 1;
  }
}
