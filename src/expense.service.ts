import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense, ExpenseDocument } from './schemas/expense.schema';
import { CreateExpenseDto } from './dtos/create-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(@InjectModel(Expense.name) private readonly expenseModel: Model<ExpenseDocument>) {}

  async createExpense(createExpenseDto: CreateExpenseDto) {
    console.log('Creating expense:', createExpenseDto);
    const createdExpense = new this.expenseModel(createExpenseDto);
    return createdExpense.save();
  }
}
