import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenContentListItemComponent } from './chosen-content-list-item.component';

describe('ChosenContentListItemComponent', () => {
  let component: ChosenContentListItemComponent;
  let fixture: ComponentFixture<ChosenContentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChosenContentListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenContentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
