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
      : this.updateNormalItem(item);
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
        : item.sellIn < 5
        ? Math.min(item.quality + 3, 50)
        : item.sellIn < 10
        ? Math.min(item.quality + 2, 50)
        : Math.min(item.quality + 1, 50);
    return item;
  };
}

module.exports = {
  Item,
  Shop,
};
