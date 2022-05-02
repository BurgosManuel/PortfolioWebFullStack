import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isEditing: boolean = false;
  aboutData: any;

  constructor(private portfolioData: PortfolioDataService) {
    this.portfolioData
      .getData()
      .subscribe((data) => (this.aboutData = data.about.description));
  }

  toggleEdition(editingState: boolean): void {
    this.isEditing = editingState;
  }

  ngOnInit(): void {}
}
