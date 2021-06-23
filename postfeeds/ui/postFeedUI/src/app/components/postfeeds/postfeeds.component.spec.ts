import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostfeedsComponent } from './postfeeds.component';

describe('PostfeedsComponent', () => {
  let component: PostfeedsComponent;
  let fixture: ComponentFixture<PostfeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
