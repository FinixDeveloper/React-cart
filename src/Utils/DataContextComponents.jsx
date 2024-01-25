import React, { useState } from 'react';

export const ProductContext = React.createContext(null);

function DataContextComponents({ children }) {
  const [user, setUser] = useState({
    "products": [
          {
              "id": 1,
              "title": "iPhone 9",
              "description": "An apple mobile which is nothing like apple",
              "price": 549,
              "discountPercentage": 12.96,
              "rating": 4.69,
              "stock": 94,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.postimg.cc/L8RvGg2Q/images.jpg",
              "images": [
                  "https://i.postimg.cc/2yWR9Lr8/iphonex-front-crop-top-corner-splash-720-770x433.webp",
                  "https://i.postimg.cc/1tZpVLXC/getty-846148982-408529.jpg",
                  "https://i.postimg.cc/qvsBMSfM/i-Phone-9-and-9-plus-5e71d68b799a9.jpg",
                  "https://i.postimg.cc/2yWR9Lr8/iphonex-front-crop-top-corner-splash-720-770x433.webp",
                  "https://i.postimg.cc/L8RvGg2Q/images.jpg"
              ]
          },
          {
              "id": 2,
              "title": "iPhone X",
              "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
              "price": 899,
              "discountPercentage": 17.94,
              "rating": 4.44,
              "stock": 34,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.postimg.cc/jqHgxYvF/Screenshot-2017-09-18-at-01-28-06.webp",
              "images": [
                  "https://i.postimg.cc/jqHgxYvF/Screenshot-2017-09-18-at-01-28-06.webp",
                  "https://i.dummyjson.com/data/products/2/2.jpg",
                  "https://i.dummyjson.com/data/products/2/3.jpg",
                  "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              ]
          },
          {
              "id": 3,
              "title": "Samsung Universe 9",
              "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
              "price": 1249,
              "discountPercentage": 15.46,
              "rating": 4.09,
              "stock": 36,
              "brand": "Samsung",
              "category": "smartphones",
              "thumbnail": "https://i.postimg.cc/h48Hvdpg/Samsung-Galaxy-Note-9-Ice-Universe-Weibo-July-16-Collage.webp",
              "images": [
                  "https://i.postimg.cc/h48Hvdpg/Samsung-Galaxy-Note-9-Ice-Universe-Weibo-July-16-Collage.webp"
              ]
          },
          {
              "id": 4,
              "title": "OPPOF19",
              "description": "OPPO F19 is officially announced on April 2021.",
              "price": 280,
              "discountPercentage": 17.91,
              "rating": 4.3,
              "stock": 123,
              "brand": "OPPO",
              "category": "smartphones",
              "thumbnail": "https://i.postimg.cc/xCPDwJZ0/Oppo-F19-launch.webp",
              "images": [
                  "https://i.postimg.cc/xCPDwJZ0/Oppo-F19-launch.webp",
                  "https://i.dummyjson.com/data/products/4/2.jpg",
                  "https://i.dummyjson.com/data/products/4/3.jpg",
                  "https://i.dummyjson.com/data/products/4/4.jpg",
                  "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
              ]
          },
          {
              "id": 5,
              "title": "Huawei P30",
              "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
              "price": 499,
              "discountPercentage": 10.58,
              "rating": 4.09,
              "stock": 32,
              "brand": "Huawei",
              "category": "smartphones",
              "thumbnail": "https://i.postimg.cc/MKH2LGmS/4-zu-3-Huawei-P30-Lite-New-Edition.jpg",
              "images": [
                  "https://i.postimg.cc/MKH2LGmS/4-zu-3-Huawei-P30-Lite-New-Edition.jpg",
                  "https://i.dummyjson.com/data/products/5/2.jpg",
                  "https://i.dummyjson.com/data/products/5/3.jpg"
              ]
          }
      ]});

      return (
        <ProductContext.Provider value={{ user, setUser }}>
          {children}
        </ProductContext.Provider>
      );
    }
    
    export default DataContextComponents;