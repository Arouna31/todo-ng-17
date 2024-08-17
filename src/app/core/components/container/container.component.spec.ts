import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponent],
    }).compileComponents();

    //Create the component instance for testing runner
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have a div', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div).toBeDefined();
  });

  it('should have a ng-content', () => {
    const ngContent: HTMLElement =
      fixture.nativeElement.querySelector('ng-content');
    expect(ngContent).toBeDefined();
  });

  it('should have a div with class container', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div.classList.contains('container')).toBe(true);
  });
});
