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
import { InternetStatusWhereInput } from "./InternetStatusWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InternetStatusListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InternetStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => InternetStatusWhereInput)
  @IsOptional()
  @Field(() => InternetStatusWhereInput, {
    nullable: true,
  })
  every?: InternetStatusWhereInput;

  @ApiProperty({
    required: false,
    type: () => InternetStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => InternetStatusWhereInput)
  @IsOptional()
  @Field(() => InternetStatusWhereInput, {
    nullable: true,
  })
  some?: InternetStatusWhereInput;

  @ApiProperty({
    required: false,
    type: () => InternetStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => InternetStatusWhereInput)
  @IsOptional()
  @Field(() => InternetStatusWhereInput, {
    nullable: true,
  })
  none?: InternetStatusWhereInput;
}
export { InternetStatusListRelationFilter as InternetStatusListRelationFilter };
