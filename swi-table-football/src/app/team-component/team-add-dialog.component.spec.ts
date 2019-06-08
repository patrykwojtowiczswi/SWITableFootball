import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAddDialogComponent } from './team-add-dialog.component';

describe('TeamAddDialogComponent', () => {
  let component: TeamAddDialogComponent;
  let fixture: ComponentFixture<TeamAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
