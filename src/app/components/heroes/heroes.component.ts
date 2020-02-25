import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../Services/heroes.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router) {

   }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  detailsHeroe(idx: number) {
    this.router.navigate(['/heroe', idx] );
  }


}


