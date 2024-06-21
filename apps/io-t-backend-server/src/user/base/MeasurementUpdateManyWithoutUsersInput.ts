/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MeasurementWhereUniqueInput } from "../../measurement/base/MeasurementWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MeasurementUpdateManyWithoutUsersInput {
  @Field(() => [MeasurementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeasurementWhereUniqueInput],
  })
  connect?: Array<MeasurementWhereUniqueInput>;

  @Field(() => [MeasurementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeasurementWhereUniqueInput],
  })
  disconnect?: Array<MeasurementWhereUniqueInput>;

  @Field(() => [MeasurementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeasurementWhereUniqueInput],
  })
  set?: Array<MeasurementWhereUniqueInput>;
}

export { MeasurementUpdateManyWithoutUsersInput as MeasurementUpdateManyWithoutUsersInput };
