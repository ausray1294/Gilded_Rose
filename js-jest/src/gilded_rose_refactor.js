// this.items.map((item) => {
//       let result = checkNameFunction(item)
//       return result;
// }
// //}

//   checkNameFunction = (item) => {
//     if (item) {
//       item.name == 'Aged Brie'
//       ? updateAgedBrie(item) :
//       item.name == 'Backstage passes to a TAFKAL80ETC concert'
//       ? updateBackstagePass(item) :
//       item.name == 'Sulfuras, Hand of Ragnaros'
//       ? item :
//       updateNormalItem(item)
//     }
//     return item
//   }
//   updateNormalItem = (item) => {
//     item.sellIn -= 1;
//     item.quality = item.quality > 0 ? item.quality - 1 : item.quality
//     item.quality = item.sellIn < 0 && item.quality > 0 ? item.quality - 1 : item.quality
//     return item
//   }

//   updateAgedBrie = (item) => {
//     item.sellIn -= 1;
//     item.quality = item.quality < 50 ? item.quality + 1 : item.quality
//     item.quality = item.sellIn < 0 && item.quality < 50 ? item.quality + 1 : item.quality
//     return item

//   updateBackstagePass = (item) => {
//     item.sellIn -= 1;
//     item.quality = item.sellIn < 0
//       ? 0 : item.sellIn < 5
//       ? Math.min(item.quality + 3, 50)
//       : item.sellIn < 10
//       ? Math.min(item.quality + 2, 50)
//       :Math.min(item.quality + 1, 50)
//     return item
//   }

// //}

// //
//   checkNameFunction = (item) => {
//     if (item) {
//       item.name == 'Aged Brie'
//       ? updateAgedBrie(item) :
//       item.name == 'Backstage passes to a TAFKAL80ETC concert'
//       ? updateBackstagePass(item) :
//       item.name == 'Sulfuras, Hand of Ragnaros'
//       ? item :
//       updateNormalItem(item)
//     }
//     return item
//   }
//   updateNormalItem = (item) => {
//     item.sellIn > 0 ? item.sellIn =- 1 : item.quality =- 1
//     item.quality > 0 ? item.quality =- 1 : item
//     return item
//   }

//   updateAgedBrie = (item) => {
//     if (item.quality == 49) {
//       item.sellIn > 0 ? item.sellIn =- 1 : item.qulity =+ 1
//       item.quality > 0 ? item.quality =+ 1 : item.quality =+ 1
//     if (item.quality === 50 && item.sellIn <= 0) {
//         return item
//       }
//     } else if (item.quality > 0 && item.quality >= 48) {
//       item.sellIn > 0 ? item.sellIn =- 1 : item.qulity =+ 2
//       item.quality > 0 ? item.quality =+ 1 : item.quality =+ 2
//     }
//     return item
//   }

//   updateBackstagePass = (item) => {
//     item.sellIn < 12 ?

//     item.sellIn < 0 ? item.quality = 0 : item
//   }

//   //
//     for (let i = 0; i < this.items.length; i++) {
//       if (
//         this.items[i].name != 'Aged Brie' &&
//         this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
//       ) {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         const helperShop = new Shop(this.items);
//         helperShop.handleQualityLessThan50(this.items[i]);
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }

//     return this.items;
//   }

//   handleQualityLessThan50 = (item) => {
//     console.log(`Item quality: ${item.quality}`);
//     if (item.quality < 50) {
//       item.quality = item.quality + 1;
//       if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
//         if (item.sellIn < 11) {
//           if (item.quality < 50) {
//             item.quality = item.quality + 1;
//           }
//         }
//         if (item.sellIn < 6) {
//           if (item.quality < 50) {
//             item.quality = item.quality + 1;
//           }
//         }
//       }
//     }
//   };
// }
