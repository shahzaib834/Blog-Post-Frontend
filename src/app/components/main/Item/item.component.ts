import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  id: any;

  constructor (private router: ActivatedRoute) {}

  ngOnInit(): void {
      this.id = this.router.snapshot.paramMap.get('id');
  }
}
