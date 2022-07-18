import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientlistComponent } from './ingredientlist.component';

describe('IngredientlistComponent', () => {
  let component: IngredientlistComponent;
  let fixture: ComponentFixture<IngredientlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
