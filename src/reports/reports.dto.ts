import { Field, ID, ObjectType } from "type-graphql";


@ObjectType()
export class ReportType {
    @Field(() => ID)
    readonly id: string
    @Field()
    readonly title: string;
    @Field()
    readonly type: string
}

