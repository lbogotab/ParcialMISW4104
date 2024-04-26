import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];
  interiorCount = 0;
  exteriorCount = 0;

  constructor(private plantaService: PlantaService) { }
  
  getPlantsList() {
    this.plantaService.getPlants().subscribe(data => {
      this.plantas = data;
      this.countPlantsByType();
    });
  }

  countPlantsByType() {
    this.interiorCount = this.plantas.filter(plant => plant.tipo === 'Interior').length;
    this.exteriorCount = this.plantas.filter(plant => plant.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.getPlantsList();
  }

}
