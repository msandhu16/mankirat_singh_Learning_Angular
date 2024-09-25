import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenContentListComponent } from './chosen-content-list.component';

describe('ChosenContentListComponent', () => {
  let component: ChosenContentListComponent;
  let fixture: ComponentFixture<ChosenContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChosenContentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
