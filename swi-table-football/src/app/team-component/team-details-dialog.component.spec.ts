import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsDialogComponent } from './team-details-dialog.component';

describe('TeamDetailsDialogComponent', () => {
  let component: TeamDetailsDialogComponent;
  let fixture: ComponentFixture<TeamDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
