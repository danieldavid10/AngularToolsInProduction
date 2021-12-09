import { Component, OnInit } from '@angular/core';
import { PrinterPluginService } from './shared/services/printer-plugin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  printerList: string[] = [];

  constructor(private printerService: PrinterPluginService) { }

  ngOnInit(): void {
    // this.printerService.getPrintersInstalled().subscribe(resp => {
    //   this.printerList = resp;
    // }, error => {
    //   console.log(`error`, error);
    // });
    const url = `http://localhost:8000/impresoras`;
    fetch(url).then(response => response.json())
      .then(data => {
        this.printerList = data;
      });
  }

  onPrintDocument(printerName: string): void {
    const docUrl = 'https://parzibyte.github.io/plugin-silent-pdf-print-examples/ticket.pdf';
    this.printerService.getPrintDocument(docUrl, printerName).subscribe(resp => {
      alert('Impresion completa!');
    }, error => {
      console.log(`error`, error);
    });
  }

}
