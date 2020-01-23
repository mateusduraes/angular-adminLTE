import { configuration } from './../../configuration';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public projectName: any = configuration.projectName;
  public userDefault: string = configuration.userDefaultImage;
  private classes: string[] = [configuration.skin, 'sidebar-mini'];

  constructor(private router: Router) {}

  public async logout(): Promise<void> {
    this.router.navigate(['/auth/login']);
  }

  ngOnInit() {
    $(() => {
      const layout = $('body').data('lte.layout');
      if (layout) {
        layout.fix();
      }
      const trees: any = $('[data-widget="tree"]');
      if (trees) {
        trees.tree();
      }
    });
    const body = document.getElementsByTagName('body')[0];
    for (const cl of this.classes) {
      body.classList.add(cl);
    }
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    for (const cl of this.classes) {
      body.classList.remove(cl);
    }
  }
}
