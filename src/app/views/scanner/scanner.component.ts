import { ChangeDetectorRef, Component, OnInit, Output, EventEmitter } from '@angular/core';
import Quagga from 'quagga';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  @Output() closeScanner: EventEmitter<string>= new EventEmitter();

  title = 'Angular-readbarcode-quagga';
  barcode = '';
  configQuagga = {
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: '#inputBarcode',
      singleChannel: false // true: only the red color-channel is read
    },
    locator: {
      patchSize: 'medium',
      halfSample: true
    },
    locate: true,
    numOfWorkers: 4,
    decoder: {
      readers: ['ean_reader','ean_8_reader','code_39_reader','code_39_vin_reader','codabar_reader','upc_reader','upc_e_reader']
    }
  };
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.startScanner()
  }
  continue(){
    this.closeScanner.emit(this.barcode);
  }
  startScanner() {
    this.barcode = '';
    this.ref.detectChanges();

    Quagga.onProcessed((result) => this.onProcessed(result));

    Quagga.onDetected((result) => this.logCode(result));

    Quagga.init(this.configQuagga, (err) => {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
      console.log('Barcode: initialization finished. Ready to start');
    });


  }

  private onProcessed(result: any) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
        result.boxes.filter(function (box) {
          return box !== result.box;
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 });
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
      }
    }
  }

  private logCode(result) {
    const code:string = result.codeResult.code;
    if (this.barcode !== code) {
      if(code.length < 10){
        this.startScanner()    
      }
      this.barcode = code;
      this.ref.detectChanges();
      console.log(this.barcode);
      Quagga.stop();
    }

  }


}
