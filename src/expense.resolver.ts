import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpenseService } from './expense.service';
import { Expense } from './schemas/expense.schema';
import { CreateExpenseDto } from './dtos/create-expense.dto';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}
  @Query(() => String)
  hello(): string {
    return 'Hello GraphQL';
  }
  @Mutation(() => Expense)
  async createExpense(
    @Args('createExpenseInput') createExpenseInput: CreateExpenseDto,
  ) {
    return this.expenseService.createExpense(createExpenseInput);
  }
}
