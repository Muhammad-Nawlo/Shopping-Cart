import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})
export class AdminCategoriesComponent implements OnInit {
  categories: any[] = [];
  deletedCategory = false;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.categories = response.categories;
      }
    });
  }
  
  delete(category: any) {
    this.categoriesService.delete(category.id).subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.deletedCategory = true;
        this.categories = this.categories.filter((value) => {
          value.id != category.id;
        });
      }
    });
  }
}
