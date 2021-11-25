import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  currentPage = 'profile';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  /*openDialogNewMovie() {
    let dialogRef = this.dialog.open(DialogMovieNewComponent, {
      height: '400px',
      width: '600px',
      disableClose: true
      data: {
        title: 'Crear nueva película',
        id: '1'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        alert('Se ha añadido la película');
        //TODO Refrescaría la lista de películas, para que apareciera la película nueva
        // que se ha añadido.
      } else {
        alert('Se ha cancelado la acción');
      }
    });
  }*/
}

