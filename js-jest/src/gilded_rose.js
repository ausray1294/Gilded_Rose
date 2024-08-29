class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items = this.items.map((item) => this.checkNameFunction(item));
    return this.items;
  }

  checkNameFunction = (item) => {
    return item.name == 'Aged Brie'
      ? this.updateAgedBrie(item)
      : item.name == 'Backstage passes to a TAFKAL80ETC concert'
      ? this.updateBackstagePass(item)
      : item.name == 'Sulfuras, Hand of Ragnaros'
      ? item
      : // : item.name.includes('Conjured')
        // ? this.updateConjuredItems(item)
        this.updateNormalItem(item);
  };

  updateNormalItem = (item) => {
    item.sellIn -= 1;
    item.quality = item.quality > 0 ? item.quality - 1 : item.quality;
    item.quality = item.sellIn < 0 && item.quality > 0 ? item.quality - 1 : item.quality;
    return item;
  };

  updateAgedBrie = (item) => {
    item.sellIn -= 1;
    item.quality = item.quality < 50 ? item.quality + 1 : item.quality;
    item.quality = item.sellIn < 0 && item.quality < 50 ? item.quality + 1 : item.quality;
    return item;
  };

  updateBackstagePass = (item) => {
    item.sellIn -= 1;
    item.quality =
      item.sellIn < 0
        ? 0
        : item.sellIn <= 5
        ? Math.min(item.quality + 3, 50)
        : item.sellIn <= 10
        ? Math.min(item.quality + 2, 50)
        : Math.min(item.quality + 1, 50);
    return item;
  };

  // updateConjuredItems = (item) => {
  //   item.sellIn -= 1;
  //   item.quality = item.sellIn > 0 ? Math.min(item.quality - 2, 0) : Math.min(item.quality - 4, 0);
  //   return item;
  // };
}

module.exports = {
  Item,
  Shop,
};

// class Item {
//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// class Shop {
//   constructor(items = []) {
//     this.items = items;
//   }
//   updateQuality() {
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
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//           }
//         }
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
// }

// module.exports = {
//   Item,
//   Shop,
// };
