import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShellComponent } from './dialog-shell.component';

describe('DialogShellComponentComponent', () => {
  let component: DialogShellComponent;
  let fixture: ComponentFixture<DialogShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShellComponent],
    });
    fixture = TestBed.createComponent(DialogShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
