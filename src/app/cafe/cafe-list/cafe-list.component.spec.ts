import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CafeListComponent],
      providers: [CafeService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const cafe = new Cafe(
        +faker.random.numeric(3),
        faker.name.firstName(),
        faker.lorem.word(i),
        +faker.random.numeric(3),
        faker.lorem.word(10 - i),
        faker.company.name(),
        faker.image.imageUrl()
      );
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <td.fw-bold> elements', () => {
    expect(debug.queryAll(By.css('td.fw-bold'))).toHaveSize(3);
  });

  it('should have td tag with the cafe.name', () => {
    debug.queryAll(By.css('td.name')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.cafes[i].nombre);
    });
  });

  it('should have td tag with the cafe.type', () => {
    debug.queryAll(By.css('td.type')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.cafes[i].tipo);
    });
  });
  it('should have td tag with the cafe.region', () => {
    debug.queryAll(By.css('td.region')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.cafes[i].region);
    });
  });
});
