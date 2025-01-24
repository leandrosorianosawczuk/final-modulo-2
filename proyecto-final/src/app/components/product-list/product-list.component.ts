import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product-list-component',
  imports: [
    MatListModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponentComponent {

}
