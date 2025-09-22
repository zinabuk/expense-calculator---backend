import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { ExpenseService } from './expense.service';
import { Expense, ExpenseSchema } from './schemas/expense.schema';
import { ExpenseResolver } from './expense.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // <-- generate schema automatically
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/expense-calculator'), //  MongoDB URI
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
  ],
  controllers: [AppController],
  providers: [ExpenseService, ExpenseResolver],
})
export class AppModule {}
