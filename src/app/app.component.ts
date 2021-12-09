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
    });
  }

}
