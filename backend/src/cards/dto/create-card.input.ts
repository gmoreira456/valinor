import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCardInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  assignee?: string;

  @Field()
  priority: 'low' | 'medium' | 'high';

  @Field({ nullable: true })
  dueDate?: Date;

  @Field()
  status: 'backlog' | 'todo' | 'in-progress' | 'done';
}
