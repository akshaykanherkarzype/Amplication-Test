/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestOneWhereInput } from "./TestOneWhereInput";
import { Type } from "class-transformer";
import { TestOneOrderByInput } from "./TestOneOrderByInput";

@ArgsType()
class TestOneFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TestOneWhereInput,
  })
  @Field(() => TestOneWhereInput, { nullable: true })
  @Type(() => TestOneWhereInput)
  where?: TestOneWhereInput;

  @ApiProperty({
    required: false,
    type: [TestOneOrderByInput],
  })
  @Field(() => [TestOneOrderByInput], { nullable: true })
  @Type(() => TestOneOrderByInput)
  orderBy?: Array<TestOneOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TestOneFindManyArgs as TestOneFindManyArgs };
