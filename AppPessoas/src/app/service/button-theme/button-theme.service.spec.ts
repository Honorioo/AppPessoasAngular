import { TestBed } from '@angular/core/testing';

import { ButtonThemeService } from './button-theme.service';

describe('ButtonThemeService', () => {
  let service: ButtonThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
