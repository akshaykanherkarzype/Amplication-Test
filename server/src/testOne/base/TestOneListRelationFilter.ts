/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestOneWhereInput } from "./TestOneWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TestOneListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TestOneWhereInput,
  })
  @ValidateNested()
  @Type(() => TestOneWhereInput)
  @IsOptional()
  @Field(() => TestOneWhereInput, {
    nullable: true,
  })
  every?: TestOneWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestOneWhereInput,
  })
  @ValidateNested()
  @Type(() => TestOneWhereInput)
  @IsOptional()
  @Field(() => TestOneWhereInput, {
    nullable: true,
  })
  some?: TestOneWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestOneWhereInput,
  })
  @ValidateNested()
  @Type(() => TestOneWhereInput)
  @IsOptional()
  @Field(() => TestOneWhereInput, {
    nullable: true,
  })
  none?: TestOneWhereInput;
}
export { TestOneListRelationFilter as TestOneListRelationFilter };