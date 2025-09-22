import {InputType, Field, Float} from "@nestjs/graphql";
import {IsNotEmpty, IsNumber, IsOptional, IsDateString} from "class-validator";

@InputType()
export class CreateExpenseDto {
  @Field() @IsNotEmpty() title: string;
  @Field(() => Float) @IsNumber() amount: number;
  @Field({ nullable: true }) @IsOptional() currency: string;
  @Field({ nullable: true }) @IsOptional() category?: string;
  @Field({ nullable: true }) @IsOptional() @IsDateString() date?: string;
  @Field({ nullable: true }) @IsOptional() notes?: string;
  @Field({ nullable: true }) @IsOptional() payer?: string;

}
