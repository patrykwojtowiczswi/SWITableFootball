import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAddDialogComponent } from './match-add-dialog.component';

describe('MatchAddDialogComponent', () => {
  let component: MatchAddDialogComponent;
  let fixture: ComponentFixture<MatchAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
