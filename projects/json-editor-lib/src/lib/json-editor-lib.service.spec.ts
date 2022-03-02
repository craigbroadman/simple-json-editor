import { TestBed } from '@angular/core/testing';

import { JsonEditorLibService } from './json-editor-lib.service';

describe('JsonEditorLibService', () => {
  let service: JsonEditorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonEditorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
