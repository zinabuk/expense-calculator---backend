import { Schema, model } from 'mongoose';
const ExpenseSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'ETB' },
  category: { type: String, default: 'General' },
  date: { type: Date, default: () => new Date() },
  notes: { type: String },
  payer: { type: String },
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});


export const ExpenseModel = model('Expense', ExpenseSchema);
