import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { de, faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

import { PlantaListComponent } from './planta-list.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
    let component: PlantaListComponent;
    let fixture: ComponentFixture<PlantaListComponent>;
    let debug: DebugElement;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [ PlantaListComponent ],
        providers: [PlantaService]
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PlantaListComponent);
        component = fixture.componentInstance;

        for (let i = 0; i < 3; i++) {
            component.plantas.push(
                new Planta(
                    faker.number.int(),
                    faker.person.fullName(),
                    faker.person.fullName(),
                    faker.lorem.word(),
                    faker.number.int(),
                    faker.lorem.word(),
                    faker.lorem.word()
                )
            )
        }

        fixture.detectChanges();
        debug = fixture.debugElement;
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a table', () => {
        expect(debug.query(By.css('table.table'))).toBeTruthy();
    });

    it('should have a table header', () => {
        expect(debug.query(By.css('thead'))).toBeTruthy();
    });

    it('should create table headers correctly', () => {
        const tableHeaders = fixture.debugElement.queryAll(By.css('.table-title'));
        expect(tableHeaders.length).toBe(4);
        expect(tableHeaders[0].nativeElement.textContent).toBe('#');
        expect(tableHeaders[1].nativeElement.textContent).toBe('Nombre Común');
        expect(tableHeaders[2].nativeElement.textContent).toBe('Tipo');
        expect(tableHeaders[3].nativeElement.textContent).toBe('Clima');
    });

    it('should display 3 plants', () => {
        const tableRows = fixture.debugElement.queryAll(By.css('tr'));
        expect(tableRows.length).toBe(3);
    });

});

