import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'View-Child';
  @ViewChild('text') text!: ElementRef;
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.text.nativeElement.innerHTML =
      'This text is coming after using view child property';
    this.renderer.setStyle(this.text.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.text.nativeElement, 'font-weight', 'bold');
  }
  showConsole() {
    console.log(
      'this method is called by another component using view child property'
    );
  }
}
