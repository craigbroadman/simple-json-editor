import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonEditorLibComponent } from './json-editor-lib.component';

describe('JsonEditorLibComponent', () => {
  let component: JsonEditorLibComponent;
  let fixture: ComponentFixture<JsonEditorLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonEditorLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonEditorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
