import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiscOperatore } from './model/siscoperatore';

const baseUrl =
  'http://work.siscom.eu:8081/Servizi/SiscSupportService/api/siscoperatori';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  siscoperatori: SiscOperatore[] = [];
  errors: string | null = null;

  constructor(private http: HttpClient) {}
  // invocato automaticamente dal framework dopo il costruttore
  ngOnInit(): void {
    this.getAll();
    this.getNews();
  }
  // acquisisce un array di siscoperatori
  getAll(): void {
    this.http.get<SiscOperatore[]>(`${baseUrl}/lista/noauth/full`).subscribe(
      (result) => {
        this.siscoperatori = result;
      },
      (error) => (this.errors = error)
    );
  }

  getNews(): void {
    this.http
      .get<any>(
        `https://servizipubblicaamministrazione.it/servizi/geotecsueservice/api/news/seleziona/1`
      )
      .subscribe((result) => {
        console.log(result);
      });
  }
}
