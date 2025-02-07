const LoginPage = require('../pageobjects/LoginPage')
const Sorting = require('../pageobjects/Sorting');

describe("Sorting", () =>{
  
  it("should sort products by name A to Z", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await LoginPage.LoginButtonClick();
    await Sorting.sortProducts('az');    
        const isSortedAZ = await Sorting.areNamesSortedAZ();
        expect(isSortedAZ).toBe(true);
    });

    it('should sort products by name Z to A', async () => {
        await Sorting.sortProducts('za');
        const isSortedZA = await Sorting.areNamesSortedZA();
        expect(isSortedZA).toBe(true);
    });

    it('should sort products by price low to high', async () => {
        await Sorting.sortProducts('lohi');
        const isSortedLowToHigh = await Sorting.arePricesSortedLowToHigh();
        expect(isSortedLowToHigh).toBe(true);
    });

    it('should sort products by price high to low', async () => {
        await Sorting.sortProducts('hilo');
        const isSortedHighToLow = await Sorting.arePricesSortedHighToLow();
        expect(isSortedHighToLow).toBe(true);
    });
  });
