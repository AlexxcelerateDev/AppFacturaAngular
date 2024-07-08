import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;
  constructor() {}

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return { ...this.invoice, total };
  }
  removeItem(id: number): void {
    this.invoice.items = this.invoice.items.filter((item) => item.id !== id);
  }
  addItem(item: Item): void {
    this.invoice.items = [...this.invoice.items, item];
  }
  calculateTotal(): number {
    return this.invoice.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
