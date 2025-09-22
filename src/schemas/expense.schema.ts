import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, Float, ID } from '@nestjs/graphql';

export type ExpenseDocument = Expense & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Expense {
  @Field(() => ID)
  _id: string;

  @Field()               // <-- Add this
  @Prop({ required: true })
  title: string;         // <-- Add this

  @Field(() => Float)
  @Prop({ required: true })
  amount: number;

  @Field({ nullable: true })
  @Prop({ default: 'ETB' })
  currency: string;

  @Field({ nullable: true })
  @Prop({ default: 'General' })
  category: string;

  @Field({ nullable: true })
  @Prop({ default: () => new Date() })
  date: Date;

  @Field({ nullable: true })
  @Prop()
  notes?: string;

  @Field({ nullable: true })
  @Prop()
  payer?: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
