import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  category: any = {};
  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id:any = this.acRoute.snapshot.paramMap.get('id');
    if (id !='new') {
      this.categoryService.get(id).subscribe((response:any) => {
        if(response.msg == 'ok'){
          this.category.name = response.category.name;
          this.category.id = response.category.id;
        }
      });
    }
  }
  add(data: any) {
    this.categoryService.add(this.category).subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.router.navigate(['/admin-categories']);
      }
    });
  }
  delete(category: any) {
    this.categoryService.delete(category.id).subscribe((response: any) => {
      if (response.msg == 'ok') {
this.router.navigate(['/admin-categories'])
      }
    });
  }
}
