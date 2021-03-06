import { Injectable } from "@angular/core";
@Injectable()
export class PixelsortingService {
    private images = [
        {
            id:1,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(1).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(1).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:2,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(2).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(2).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:3,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(3).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(3).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:4,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(4).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(4).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:5,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(5).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(5).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:6,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(6).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(6).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:7,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(7).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(7).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:8,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(8).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(8).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:9,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(9).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(9).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:10,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(10).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(10).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:11,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(11).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(11).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:12,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(12).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(12).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:13,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(13).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(13).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:14,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(14).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(14).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:15,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(15).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(15).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:16,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(16).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(16).jpg',
            webpLow:'',
            webpHigh:''
        },
        {
            id:17,
            jpgLow:'../../assets/designs/pixel-sorting/low/file(17).jpg', 
            jpgHigh:'../../assets/designs/pixel-sorting/high/file(17).jpg',
            webpLow:'',
            webpHigh:''
        }
      ];

    getImages() {
      return this.images;
    }
  
    getImage(id: number) {
      const image = this.images.find(
        (l) => {
          return l.id === id;
        }
      );
      return image;
    }
  }
  