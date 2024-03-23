import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSmallComponent } from './chat-small.component';

describe('ChatSmallComponent', () => {
  let component: ChatSmallComponent;
  let fixture: ComponentFixture<ChatSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
