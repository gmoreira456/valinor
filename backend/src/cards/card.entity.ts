import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity('cards')
export class Card {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Field()
  @Column({ type: 'text' })
  description: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  assignee: string;

  @Field()
  @Column({ type: 'varchar', length: 10 })
  priority: 'low' | 'medium' | 'high';

  @Field({ nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  dueDate: Date;

  @Field()
  @Column({ type: 'varchar', length: 20 })
  status: 'backlog' | 'todo' | 'in-progress' | 'done';
}
