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

	it("Should allow to update owner", async () => {
    const logger = await Logger.deployed();
		await logger.updateOwner(franco, { from: mati });
		const owner = await logger.owner.call();
		assert.equal(owner, franco);
	});
	
	it("Should allow to update owner", async () => {
    const logger = await Logger.deployed();
		await logger.store(amountOfEmpanadasThatFrancoWantsToEat, { from: franco });
		const savedNumber = await logger.savedNumber.call()
		assert.equal(savedNumber, amountOfEmpanadasThatFrancoWantsToEat);
  });
});
