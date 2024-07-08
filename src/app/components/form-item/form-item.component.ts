import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  @Output() addEventEmitter = new EventEmitter<Item>();

  private CounterId = 4;
  item: any = { product: '', price: '', quantity: '' };
  onSubmit(itemForm: NgForm): void {
    if (!itemForm.valid) {
      this.addEventEmitter.emit({ id: this.CounterId, ...this.item });
      this.CounterId++;
      this.item = { product: '', price: '', quantity: '' };
    }

    itemForm.reset();
    itemForm.resetForm();
  }
}
