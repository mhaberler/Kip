import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetMapLibreComponent } from './widget-maplibre.component';

describe('WidgetMapLibreComponent', () => {
  let component: WidgetMapLibreComponent;
  let fixture: ComponentFixture<WidgetMapLibreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMapLibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMapLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
