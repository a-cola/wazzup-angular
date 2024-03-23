import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedChatComponent } from './opened-chat.component';

describe('OpenedChatComponent', () => {
  let component: OpenedChatComponent;
  let fixture: ComponentFixture<OpenedChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenedChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenedChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
