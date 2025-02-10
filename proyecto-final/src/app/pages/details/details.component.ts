import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
  productsDetails: Array<any>;
  detail!: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.productsDetails = [
      {
        id: 'pantalón',
        details: 'Los pantalones más antiguos conocidos, que datan del periodo comprendido entre los siglos XIII y X a. C., se encontraron en el cementerio de Yanghai, en Turpan, Sinkiang (Tocharia), en la actual China occidental. Hechos de lana, los pantalones tenían las piernas rectas y la entrepierna ancha y probablemente estaban hechos para montar a caballo. En la mayor parte de Europa, los pantalones se han usado desde la antigüedad y durante todo el período Medieval, convirtiéndose en la forma más común de ropa para la parte inferior del cuerpo de los hombres adultos en el mundo moderno.',
        image: 'img/pantalon.jpeg'
      },
      {
        id: 'polera',
        details: 'Una camiseta es una prenda de ropa de abrigo por lo general de mangas cortas, cuello redondo o en forma de "V". Existen diversos diseños, que varían algunas de sus características básicas, por ejemplo, modificando el cuello redondo (también llamado "en caja") por otro en "V" (o de pico) o añadiendo bolsillos. Además de manga corta, las hay de manga larga e incluso sin mangas, y también de tirantes (esta última llamada también esqueleto, camisilla o franelilla). Su longitud varía desde la mitad del muslo hasta por encima del ombligo, aunque lo normal es que acabe donde empieza el pantalón o falda, es decir, sobre las caderas.',
        image: 'img/polera.jpg'
      },
      {
        id: 'zapato',
        details: 'La fabricación del calzado como tal, se venía realizando de modo artesanal desde los inicios históricos. Y aunque ya en la época romana se produjo una cantidad de calzado enorme, los procesos eran artesanales, por lo tanto, el proceso de producción masiva podría decirse que no apareció hasta la época de la Revolución Industrial. El proceso artesanal es un proceso eminentemente manual en el que no se utiliza tecnología sofisticada. Hecho en un pequeño taller familiar o en una comunidad nativa, se utilizan generalmente materiales naturales de gran calidad, utilizándose también en algunos casos químicos y procesos industriales de todo tipo para elaborarlos.',
        image: 'img/zapato.jpeg'
      },
      {
        id: 'medias',
        details: 'Se llaman medias a las prendas que cubren las piernas, desde los pies hasta media pantorrilla o hasta medio muslo. Suelen ser de tejido sintético (elastano, nailon) o bien de algodón y su función es proteger del frío o simplemente estética, tienen distintos colores llamativos. Para sujetarse, algunas llevan una banda elástica llamada liga. Muchas veces esta liga está adornada con encaje.',
        image: 'img/medias.jpg'
      }
    ];
  }

  ngOnInit(): void {
    // let showDetails;
    this.route.params.subscribe(params => {
      const showDetails = Array.from(this.productsDetails)
        .filter(item => item.id.toLowerCase().includes(params['id'].toLowerCase()));

    this.detail = showDetails[0];
    });
  }
}
