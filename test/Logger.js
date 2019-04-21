const Logger = artifacts.require("Logger");

contract("Logger", async accounts => { 
	const mati = accounts[0];
	const franco = accounts[1];
	const amountOfEmpanadasThatMatiWantsToEat = 14;
	const amountOfEmpanadasThatFrancoWantsToEat = 4;

	it("Should store the amount of empanadas that I want to eat", async () => {
    const logger = await Logger.deployed();
		await logger.store(amountOfEmpanadasThatMatiWantsToEat, { from: mati });
		const savedNumber = await logger.savedNumber.call()
		assert.equal(savedNumber, amountOfEmpanadasThatMatiWantsToEat);
	});
	
  it("Should not store the amount of empanadas that Franco wants to eat", async () => {
    const logger = await Logger.deployed();
		await logger.store(amountOfEmpanadasThatFrancoWantsToEat, { from: franco });
		const savedNumber = await logger.savedNumber.call()
		assert.equal(savedNumber, amountOfEmpanadasThatMatiWantsToEat);
  });
});
