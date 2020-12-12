import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() pages: number;
  @Input() isAdmin = false;
  @Input() adminPage = "";
  @Input() keyword = "";
  @Input() paginateStr = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(page: number): void {
    const url = !this.isAdmin 
                  ? this.keyword ? `/search/${this.keyword}/page/${page}`
                  : `${this.paginateStr}/page/${page}` 
                : `/admin/${this.adminPage}/${page}`;
    this.router.navigateByUrl(url);
    this.page = page;
  }

}
