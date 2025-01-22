import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-list-component',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponentComponent {

}
