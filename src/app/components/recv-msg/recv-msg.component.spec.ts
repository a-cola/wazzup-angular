import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecvMsgComponent } from './recv-msg.component';

describe('RecvMsgComponent', () => {
  let component: RecvMsgComponent;
  let fixture: ComponentFixture<RecvMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecvMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecvMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
