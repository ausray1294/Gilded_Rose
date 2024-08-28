const { Item, Shop } = require('../src/gilded_rose.js');
// You need more tests than just the ones written here, this is just to get you started.
// USE COVERAGE GUTTERS TO GUIDE YOUR TEST WRITING
describe('Gilded Rose Pin Down Tests', () => {
  test('Normal items should degrade in quality by 1 each day', () => {
    let normalItem = new Item('normal', 10, 20); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].name).not.toEqual('Sulfuras, Hand of Ragnaros');
    expect(items[0].quality).toBe(19); //check
  });

  test('Quality of "Aged Brie" should increase by 1 each day', () => {
    let agedBrie = new Item('Aged Brie', 10, 20);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
    expect(items[0].name).not.toEqual('Sulfuras, Hand of Ragnaros');
  });

  test('Quality of "Backstage passes" should increase by 3 when there are 5 days or less', () => {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(23);
  });

  test('Normal items should degrade in quality by 2 each day', () => {
    let normalItem = new Item('normal', 0, 20);
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(18);
  });

  test('Quality of Backstage passes should decreased to 0 when there are 0 days or less', () => {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  test('Quality of "Aged Brie" should increase by 2 when there are 0 or less days', () => {
    let agedBrie = new Item('Aged Brie', 0, 21);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(23);
  });

  test('Item, Sulfuras, Hand of Ragnaros, should not decrease in quality', () => {
    let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    const gildedRose = new Shop([sulfuras]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);
  });
});
