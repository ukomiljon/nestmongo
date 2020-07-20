
import {Field, InputType} from 'type-graphql'
 
@InputType()
export class ReportInput {
    @Field()
    readonly title: string;
    @Field()
    readonly type: string
}

 
