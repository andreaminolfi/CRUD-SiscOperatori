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

  constructor(private http: HttpClient) {}
  // invocato automaticamente dal framework dopo il costruttore
  ngOnInit(): void {
    this.getAll();
  }
  // acquisisce un array di siscoperatori
  getAll(): void {
    this.http
      .get<SiscOperatore[]>(`${baseUrl}/lista/noauth/full`)
      .subscribe((result) => {
        console.log(result);
        this.siscoperatori = result;
      });
  }
}
