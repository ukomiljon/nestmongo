import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  readonly name: string;
  @Field(() => String)
  readonly email: string;
  @Field()
  readonly password: string;
}
