import { CommonModule } from '@angular/common';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[synButton]'
})
export class ButtonDirective {
  @HostBinding('class.test')
  test = true
}
