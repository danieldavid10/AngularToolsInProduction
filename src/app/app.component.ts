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
    this.printerService.getPrintersInstalled().subscribe(resp => {
      this.printerList = resp;
    }, error => {
      console.log(`error`, error);
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
