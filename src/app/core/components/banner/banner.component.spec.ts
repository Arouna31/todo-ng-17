import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent); // create component testing instance
    component = fixture.componentInstance; // passe testing component instance to 'component' variable
    fixture.detectChanges(); // perform data binding
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should sloud have h1 tag', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeDefined();
  });

  it('should have h1 with test: Test Tour of Heroes', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(title.textContent).toBe('Test Tour of Heroes');
  });
});
