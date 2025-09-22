import { Controller, Get } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller()
export class AppController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  getHello(): string {
    return "hello";
  }
}
