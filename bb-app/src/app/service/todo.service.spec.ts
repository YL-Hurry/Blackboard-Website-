import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('EventServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
