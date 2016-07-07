//#generation uses
var tick = 0;
var curX = 0;
var curY = 0;
var curZ = 0;
var cX = 0;
var cY = 0;
var cZ = 0;
var count = 0;
var changeBack = false;

//#common use
var blockId = 0;
var blockSub = 0;
var debug = 0;
var grineIdResult = 0;
var carry = 0;

//##grinder
var grinderClicked = 0;
var grindingItem = 0;
var grindingSub = 0;
var slot = 0;
var slotId = 0;
var slotSet = 0;
var slotSub = 0;

//#radioactive ore procesor
var radioactiveClick = 0;
var radioactiveProcesingId = 0;
var radioactiveProcesingSub = 0;
var radioactiveProcesingResultId = 0;
var radioactiveTakenSlot = 0;
var radioactiveTakenSlotId = 0;
var radioactiveTakenSlotSub = 0;
var radioactivePutSlot = 0;
var radioactivePutSlotId = 0;
var radioactivePutSlotSub = 0;

//try {
Block.defineBlock(249, "Normal_world_ores", [
		["OreCopper", 0],
		["OreCopper", 0],
		["OreCopper", 0],
		["OreCopper", 0],
		["OreCopper", 0],
		["OreCopper", 0], //end of copper(sub0)
		["OreLead", 0],
		["OreLead", 0],
		["OreLead", 0],
		["OreLead", 0],
		["OreLead", 0],
		["OreLead", 0], //end of lead(sub1)
		["OreAluminum", 0],
		["OreAluminum", 0],
		["OreAluminum", 0],
		["OreAluminum", 0],
		["OreAluminum", 0],
		["OreAluminum", 0], //end of aluminum(sub2)
		["OreNickel", 0],
		["OreNickel", 0],
		["OreNickel", 0],
		["OreNickel", 0],
		["OreNickel", 0],
		["OreNickel", 0], //end of nicle(sub3)
		["OrePlatinum", 0],
		["OrePlatinum", 0],
		["OrePlatinum", 0],
		["OrePlatinum", 0],
		["OrePlatinum", 0],
		["OrePlatinum", 0], //end of platinum(sub4)
		["OreSilver", 0],
		["OreSilver", 0],
		["OreSilver", 0],
		["OreSilver", 0],
		["OreSilver", 0],
		["OreSilver", 0], //end of silver(sub5)
		["OreTin", 0],
		["OreTin", 0],
		["OreTin", 0],
		["OreTin", 0],
		["OreTin", 0],
		["OreTin", 0], //end of tin 6
		["OreStibnite", 0], ["OreStibnite", 0], ["OreStibnite", 0], ["OreStibnite", 0], ["OreStibnite", 0], ["OreStibnite", 0], //end of OreStibnite sub 7
		["OreBauxite", 0], ["OreBauxite", 0], ["OreBauxite", 0], ["OreBauxite", 0], ["OreBauxite", 0], ["OreBauxite", 0], //end of OreBauxite sub 8
		["OreBeryllium", 0], ["OreBeryllium", 0], ["OreBeryllium", 0], ["OreBeryllium", 0], ["OreBeryllium", 0], ["OreBeryllium", 0], //end of OreBeryllium sub 9
		["OreChromite", 0], ["OreChromite", 0], ["OreChromite", 0], ["OreChromite", 0], ["OreChromite", 0], ["OreChromite", 0], //end of OreChromite sub 10
		["LithiumOre", 0], ["LithiumOre", 0], ["LithiumOre", 0], ["LithiumOre", 0], ["LithiumOre", 0], ["LithiumOre", 0], //end of LithiumOre sub 11
		//####radioactive!####
		["OreUranium", 0], ["OreUranium", 0], ["OreUranium", 0], ["OreUranium", 0], ["OreUranium", 0], ["OreUranium", 0], //end of LithiumOre sub 12
		["OrePotassium", 0], ["OrePotassium", 0], ["OrePotassium", 0], ["OrePotassium", 0], ["OrePotassium", 0], ["OrePotassium", 0], //end of LithiumOre sub 13
		["OreThorium", 0], ["OreThorium", 0], ["OreThorium", 0], ["OreThorium", 0], ["OreThorium", 0], ["OreThorium", 0], //end of LithiumOre sub 14
		["OreLutetium", 0], ["OreLutetium", 0], ["OreLutetium", 0], ["OreLutetium", 0], ["OreLutetium", 0], ["OreLutetium", 0]//end of LithiumOre sub 15

	],
	1, 1, true);

Block.defineBlock(248, "Machines", [
		["handgrinderDno", 0],
		["handgrinderVrh", 0],
		["handgrinder", 0],
		["handgrinder", 0],
		["handgrinder", 0],
		["handgrinder", 0], //end of  Hand grinder(sub0);
		["assemblerBottom", 0], ["assemblerTop", 0], ["assemblerSide", 0], ["assemblerSide", 0], ["assemblerSide", 0], ["assemblerSide", 0],

		["RadioactiveProcesorBottom", 0], ["RadioactiveProcesorTop", 0], ["RadioactiveProcesor", 0], ["RadioactiveProcesor", 0], ["RadioactiveProcesor", 0], ["RadioactiveProcesor", 0]
	], 1, 1, true);

Block.defineBlock(247, "Wiers", [
		["wier", 0],
		["wier", 0],
		["wier", 0],
		["wier", 0],
		["wier", 0],
		["wier", 0]
	],
	1, 1, true);

Player.addItemCreativeInv(249, 1, 0);
Player.addItemCreativeInv(249, 1, 1);
Player.addItemCreativeInv(249, 1, 2);
Player.addItemCreativeInv(249, 1, 3);
Player.addItemCreativeInv(249, 1, 4);
Player.addItemCreativeInv(249, 1, 5);
Player.addItemCreativeInv(249, 1, 6);
Player.addItemCreativeInv(249, 1, 7);
Player.addItemCreativeInv(249, 1, 8);

ModPE.setItem(800, "wrench", 0, "Wrench", 1);

Player.addItemCreativeInv(249, 1, 9);
Player.addItemCreativeInv(249, 1, 10);
Player.addItemCreativeInv(249, 1, 11);
Player.addItemCreativeInv(249, 1, 12);
Player.addItemCreativeInv(249, 1, 13);
Player.addItemCreativeInv(249, 1, 14);
Player.addItemCreativeInv(249, 1, 15);

Player.addItemCreativeInv(248, 1, 0);
Player.addItemCreativeInv(248, 1, 1);
Player.addItemCreativeInv(248, 1, 2);

Player.addItemCreativeInv(248, 1, 0);
//id,amount,data

ModPE.setItem(1500, "ironBlen", 0, "Iron blend", 64);
ModPE.setItem(1501, "goldBlen", 0, "Gold blend", 64);
//
ModPE.setItem(1600, "copperBlen", 0, "Copper blend", 64);
ModPE.setItem(1601, "leadBlen", 0, "Lead blend", 64);
ModPE.setItem(1602, "aluminumBlend", 0, "Aluminum blend", 64);
ModPE.setItem(1603, "nicklBlen", 0, "Nickle blend", 64);
ModPE.setItem(1604, "platinumBlen", 0, "Platinum blend", 64);
ModPE.setItem(1605, "silverBlen", 0, "Silver blend", 64);
ModPE.setItem(1606, "tinBlen", 0, "Tin blend", 64);

//} catch (error) {    print("Import the texture pack first!");}

function modTick() {
	tick++;
	if (tick == 600) {
		tick = 0;
		dimensionCheck();
	}
	renameTick();
	breakTimeTick();
}

function breakTimeTick() {
	var carry = Player.getCarriedItem();
	if (carry == 270) {
		Block.setDestroyTime(249, 2.50);
	} else if (carry == 274) {
		Block.setDestroyTime(249, 2.25);
	} else if (carry == 257) {
		Block.setDestroyTime(249, 1.90);
	} else if (carry == 285) {
		Block.setDestroyTime(249, 1.65);
	} else if (carry == 278) {
		Block.setDestroyTime(249, 1.75);
	} else {
		Block.setDestroyTime(249, 2.65);
	}
}

function dimensionCheck() {
	if (Player.getDimension() == DimensionId.NORMAL) {
		oreTick();
	}
}

function renameTick() {
	var carry = Player.getCarriedItem();
	var cD = Player.getCarriedItemData();
	var normalDimensionOre = "tile.Normal_world_ores.name";
	var machine = "tile.Machine.name";
	var wier = "tile.Wiers.name";
	if (carry == 249) {
		if (cD == 0) {
			ModPE.langEdit(normalDimensionOre, "Copper ore");
		} else if (cD == 1) {
			ModPE.langEdit(normalDimensionOre, "Lead ore");
		} else if (cD == 2) {
			ModPE.langEdit(normalDimensionOre, "Aluminum ore");
		} else if (cD == 3) {
			ModPE.langEdit(normalDimensionOre, "Nickle ore");
		} else if (cD == 4) {
			ModPE.langEdit(normalDimensionOre, "Platinum ore");
		} else if (cD == 5) {
			ModPE.langEdit(normalDimensionOre, "Silver ore");
		} else if (cD == 6) {
			ModPE.langEdit(normalDimensionOre, "Tin ore");
		} else if (cD == 7) {
			ModPE.langEdit(normalDimensionOre, "Stibnite ore");
		} else if (cD == 8) {
			ModPE.langEdit(normalDimensionOre, "Bauxite ore");
		} else if (cD == 9) {
			ModPE.langEdit(normalDimensionOre, "Beryllium ore");
		} else if (cD == 10) {			ModPE.langEdit(normalDimensionOre, "Lithium ore");}
		} else if (cD == 11) {			ModPE.langEdit(normalDimensionOre, "Uranium ore");}
		} else if (cD == 12) {			ModPE.langEdit(normalDimensionOre, "Chromite ore");}
		} else if (cD == 13) {			ModPE.langEdit(normalDimensionOre, "Chromite ore");}
		} else if (cD == 14) {			ModPE.langEdit(normalDimensionOre, "Chromite ore");}
		} else if (cD == 15) {			ModPE.langEdit(normalDimensionOre, "Chromite ore");}

	} else if (carry == 248) {
		if (cD == 0) {
			ModPE.langEdit(machine, "Hand grinder");
		} else if (cD == 1) {
			ModPE.langEdit(machine, "Assembler");
		} else if (cD == 2) {
			ModPE.langEdit(machine, "Radioactive Ore Procesor");
		}
	} else if (carry == 247) {
		if (cD == 0) {
			ModPE.langEdit(wier, "Wier");
		}
	}
}

function oreTick() {

	curX = Math.floor(Player.getX());
	curZ = Math.floor(Player.getZ());
	for (var i = 0; i < 16; i++) {
		if (curX < 0) {
			changeBack = true;
			curX = curX * (-1);
		}
		if (curX % 16 != 0) {
			curX--;
		}
		if (changeBack) {
			curX = curX * (-1);
		}
		changeBack = false;
		if (curZ < 0) {
			changeBack = true;
			curZ = curZ * (-1);
		}
		if (curZ % 16 != 0) {
			curZ--;
		}
		if (changeBack) {
			curZ = curZ * (-1);
		}
		changeBack = false;
	}
	curX++;
	curZ++;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curZ = curZ + 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curX = curX - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curZ = curZ - 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
	curX = curX + 16;
	spawnOres();
}

function spawnOres() {
	if (Level.getTile(curX, 1, curZ) != 57) {
		Level.setTile(curX, 1, curZ, 57, 0);
		Level.setTile(curX, 0, curZ, 7, 0);
		Level.setTile(curX, 2, curZ, 7, 0);
		Level.setTile(curX + 1, 1, curZ, 7, 0);
		Level.setTile(curX - 1, 1, curZ, 7, 0);
		Level.setTile(curX, 1, curZ + 1, 7, 0);
		Level.setTile(curX, 1, curZ - 1, 7, 0);

		oreGen(249, 0, 40, 75, 12, 4); //copper
		oreGen(249, 1, 36, 4, 2); //lead
		oreGen(249, 2, 16, 34, 3, 3); //aluminum
		oreGen(249, 3, 5, 20, 6, 2); //nickle
		oreGen(249, 4, 6, 55, 2, 7); //platinum
		oreGen(249, 5, 5, 30, 6, 2); //silver
		oreGen(249, 6, 5, 30, 6, 2); //silver
		oreGen(249, 7, 16, 32, 2, 0); //OreStibnite
		oreGen(249, 8, 16, 32, 1, 0); //OreBauxite
		oreGen(249, 9, 16, 64, 1, 0); //OreBeryllium
		oreGen(249, 10, 16, 48, 2, 0); //OreChromite
			//###radioactive!#####
		oreGen(249, 11, 5, 16, 2, 0); //OreUranium
		oreGen(249, 12, 5, 16, 2, 0); //OrePotassium
		oreGen(249, 13, 5, 16, 2, 0); //OreThorium
		oreGen(249, 14, 5, 16, 2, 0); //OreLutetium
		
	
	


	}
}

function random(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oreGen(id, sub, minH, maxH, rndMin, rndMax) {
	cX = curX;
	cZ = curZ;
	cX = cX + Math.floor(Math.random() * 10) + 2;
	cZ = cZ + Math.floor(Math.random() * 10) + 2;
	cY = random(minH, maxH); //random high (from 10 to 40)
	count = random(rndMin, rndMax); //how many of one ore spawn
	Level.setTile(cX, cY, cZ, id, sub);
	for (var i = 0; i < count; i++) {
		if (Math.floor(Math.random() * 3) + 1 == 2) {
			cX++;
		} else {
			if (Math.floor(Math.random() * 3) + 1 == 2) {}
			else {
				cX--;
			}
		}
		if (Math.floor(Math.random() * 3) + 1 == 2) {
			cZ++;
		} else {
			if (Math.floor(Math.random() * 3) + 1 == 2) {}
			else {
				cZ--;
			}
		}
		if (Math.floor(Math.random() * 3) + 1 == 2) {
			cY++;
			if (cY > 50) {
				cY--;
			}
		} else {
			if (Math.floor(Math.random() * 3) + 1 == 2) {}
			else {
				cY--;
				if (cY < 5) {
					cY++;
				}
			}
		}
		Level.setTile(cX, cY, cZ, id, sub);
	}
	//end of gen of smth

	//end of generating ores
}
//

function destroyBlock(x, y, z, side) {
	var blockId = Level.getTile(x, y, z);
	var blockDmg = Level.getData(x, y, z);
	var carry = Player.getCarriedItem();
	if (blockId == 249) {
		preventDefault();
		Level.setTile(x, y, z, 0, 0);
		if (blockDmg == 0) {
			if (carry == 274 || carry == 278 || carry == 257 || carry == 285) { //copper stonePick+
				Level.dropItem(x, y, z, 0.25, 2249, 1, 0);
			}
		} else if (blockDmg == 1) {
			if (carry == 278 || carry == 257 || carry == 285) { //lead ironPick+
				Level.dropItem(x, y, z, 0.25, 249, 1, 1);
			}
		} else if (blockDmg == 2) {
			if (carry == 278 || carry == 257 || carry == 285) { //lead ironPick+
				Level.dropItem(x, y, z, 0.25, 249, 1, 2);
			}
		}
		//#####  skip 249:2 since it dosent gen and isnt working yet!! ##
		else if (blockDmg == 3) {
			if (carry == 274 || carry == 278 || carry == 257 || carry == 285) { //ferrosus stone+
				Level.dropItem(x, y, z, 0.25, 249, 1, 3);
			}
		} else if (blockDmg == 4) {
			if (carry == 274 || carry == 278 || carry == 257 || carry == 285) { //ferrosus stone+
				Level.dropItem(x, y, z, 0.25, 249, 1, 4);
			}
		} else if (blockDmg == 5) {
			if (carry == 274 || carry == 278 || carry == 257 || carry == 285) { //ferrosus stone+
				Level.dropItem(x, y, z, 0.25, 249, 1, 5);
			}
		} else if (blockDmg == 6) {
			if (carry == 274 || carry == 278 || carry == 257 || carry == 285) { //ferrosus stone+
				Level.dropItem(x, y, z, 0.25, 249, 1, 6);
			}
		}
	}
}

function procCmd(command) {
	var cmd = command.split(" ");
	if (cmd[0] == "dev") {
		Player.addItemInventory(249, 64, 0);
		Player.addItemInventory(249, 64, 1);
		Player.addItemInventory(249, 64, 2);
		Player.addItemInventory(249, 64, 3);
		Player.addItemInventory(249, 64, 4);
		Player.addItemInventory(249, 64, 5);
		Player.addItemInventory(249, 64, 6);
		Player.addItemInventory(249, 64, 7);
		Player.addItemInventory(249, 64, 8);
		Player.addItemInventory(249, 64, 9);
		Player.addItemInventory(249, 64, 10);
		Player.addItemInventory(249, 64, 11);
		Player.addItemInventory(249, 64, 12);
		Player.addItemInventory(249, 64, 13);
		Player.addItemInventory(249, 64, 14);
		Player.addItemInventory(249, 64, 15);
		//###
		Player.addItemInventory(248, 64, 0);
		Player.addItemInventory(248, 64, 1);
		Player.addItemInventory(248, 64, 2);
		Player.addItemInventory(54, 64, 0);
		//###
		Player.addItemInventory(15, 64, 0);
		//###
		Player.addItemInventory(274, 1, 0);
		Player.addItemInventory(278, 1, 0);
		Player.addItemInventory(257, 1, 0);
		Player.addItemInventory(285, 1, 0);
		Player.addItemInventory(270, 1, 0);
	} else if (cmd[0] == "day") {
		Level.setTime(8000);
	} else if (cmd[0] == "rep") {
		grinderClicked = 0;
		grindingItem = 0;
		grindingSub = 0;
		slot = 0;
		slotId = 0;
		slotSet = 0;
		slotSub = 0;
	} else if (cmd[0] == "vars") {
		clientMessage("grinderClicked=" + grinderClicked);
		clientMessage("grindingItem=" + grindingItem);
		clientMessage("grindingSub=" + grindingSub);
		clientMessage("slot==" + slot);
		clientMessage("slotId=" + slotId);
		clientMessage("slotSub=" + slotSub);
		clientMessage("slotSet=" + slotSet);
	} else if (cmd[0] == "debug") {
		debug = 1;
		clientMessage("Are you shure to do thet?");
		clientMessage("It will erase storage and machine proces!");
		clientMessage("enter /1 for yes and /0 for no!");
	} else if (cmd[0] == "1" && debug == 1) {
		debug = 0;
		grinderClicked = 0;
		grindingItem = 0;
		grindingSub = 0;
		slot = 0;
		slotId = 0;
		slotSet = 0;
		slotSub = 0;
	} else if (cmd[0] == "0" && debug == 1) {
		debug = 0;
	} else if (cmd[0] == "devM") {
		devMenu();
	}
}

function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
	blockId = Level.getTile(x, y, z);
	blockSub = Level.getData(x, y, z);
	//clientMessage("x: " + x + "y!: " + y + "z: " + z);
	var sub = Player.getCarriedItemData();

	if (carry == 800) {
		wrenchUse();
	} else {
		if (blockId == 248 && blockSub == 0) {
			preventDefault();
			if (slot == 27) {
				slot = 0;
			} else {

				if (grinderClicked == 0) {
					if (Level.getTile(x, y + 1, z) == 54) {
						while (slot <= 26) {
							slotId = Level.getChestSlot(x, y + 1, z, slot);
							if (slotId == 249 || slotId == 15 || slotId == 14 || slotId == 265 || slotId == 266) {
								grindingItem = Level.getChestSlot(x, y + 1, z, slot);
								grindingSub = Level.getChestSlotData(x, y + 1, z, slot);
								if (grindingSub == 0 || grindingSub == 1 || grindingSub == 2 || grindingSub == 3 || grindingSub == 4 || grindingSub == 5 || grindingSub == 6 || grindingSub == 7 || grindingSub == 8 || grindingSub == 9 || grindingSub == 10 || grindingSub == 11) {
									if (Level.getChestSlotCount(x, y + 1, z, slot) == 0) {
										Level.setChestSlot(x, y + 1, z, slot, 0, 0, 0);
										slot++;
										clientMessage("0 in chest - fixed!");
										grinderClicked = 0;
										grindingItem = 0;
										grindingSub = 0;
										slot = 0;
										slotId = 0;
										slotSet = 0;
										slotSub = 0;

									} else {
										Level.setChestSlot(x, y + 1, z, slot, grindingItem, grindingSub, Level.getChestSlotCount(x, y + 1, z, slot) - 1);
										grinderClicked++;
										clientMessage("Grinding: " + grindingItem);
										slot = 30;
									}
								}
							} else {
								slot++;
							}
						}
					} else {
						if (itemid == 249 || itemid == 15 || itemid == 14 || itemid == 265 || itemid == 266) {
							Player.setInventorySlot(Player.getSelectedSlotId(), itemid, Player.getCarriedItemCount() - 1, Player.getCarriedItemData());
							grindingItem = itemid;
							grindingSub = sub;
							grinderClicked++;
							clientMessage("Grinding: " + grindingItem);
						}
					}
				} else if (grinderClicked == 8) {
					if (Level.getTile(x, y + 1, z) == 54) {
						if (grindingItem == 15) {
							grineIdResult = 1500;
						} else if (grindingItem == 265) {
							grineIdResult = 1500;
						} else if (grindingItem == 14) {
							grineIdResult = 1501;
						} else if (grindingItem == 266) {
							grineIdResult = 1501;
						} else if (grindingItem == 249 && grindingSub == 0) {
							grineIdResult = 1600;
						} else if (grindingItem == 249 && grindingSub == 1) {
							grineIdResult = 1601;
						}
						//else if(grindingItem == 249 && grindingSub ==2){grineIdResult =1602;}
						else if (grindingItem == 249 && grindingSub == 3) {
							grineIdResult = 1603;
						} else if (grindingItem == 249 && grindingSub == 4) {
							grineIdResult = 1604;
						} else if (grindingItem == 249 && grindingSub == 5) {
							grineIdResult = 1605;
						} else if (grindingItem == 249 && grindingSub == 6) {
							grineIdResult = 1606;
						}
						while (slotSet <= 26) {
							slotId = Level.getChestSlot(x, y + 1, z, slotSet);
							slotSub = Level.getChestSlotData(x, y + 1, z, slotSet);
							if (slotId == grineIdResult || slotId == 0) {
								if (grindingItem == 15) { //### pretvorit u function i popravit multiple error!
									Level.setChestSlot(x, y + 1, z, slotSet, 1500, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 265) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1500, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 1);
								} else if (grindingItem == 14) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1501, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 266) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1501, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 1);
								} else if (grindingItem == 249 && grindingSub == 0) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1600, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 249 && grindingSub == 1) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1601, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 249 && grindingSub == 2) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1602, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 249 && grindingSub == 3) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1603, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 249 && grindingSub == 4) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1604, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 249 && grindingSub == 5) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1605, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								} else if (grindingItem == 249 && grindingSub == 6) {
									Level.setChestSlot(x, y + 1, z, slotSet, 1606, 0, Level.getChestSlotCount(x, y + 1, z, slotSet) + 2);
								}
								slotSet = 30;
							} else {
								slotSet++;
							}
						}
						grinderClicked = 0;
						grindingItem = 0;
						grindingSub = 0;
						clientMessage("done, puted in chest!");
						slotId = 0;
						slotSet = 0;
						slot = 0;
						slotSub = 0;
					} else {
						if (grindingItem == 15) {
							Level.dropItem(x, y + 1, z, 0.25, 1500, 2, 0);
						} else if (grindingItem == 265) {
							Level.dropItem(x, y + 1, z, 0.25, 1500, 1, 0);
						} else if (grindingItem == 14) {
							Level.dropItem(x, y + 1, z, 0.25, 1501, 2, 0);
						} else if (grindingItem == 266) {
							Level.dropItem(x, y + 1, z, 0.25, 1501, 1, 0);
						} else if (grindingItem == 249 && grindingSub == 0) {
							Level.dropItem(x, y + 1, z, 0.25, 1600, 2, 0);
						} else if (grindingItem == 249 && grindingSub == 1) {
							Level.dropItem(x, y + 1, z, 0.25, 1601, 2, 0);
						} else if (grindingItem == 249 && grindingSub == 2) {
							Level.dropItem(x, y + 1, z, 0.25, 1602, 2, 0);
						} else if (grindingItem == 249 && grindingSub == 3) {
							Level.dropItem(x, y + 1, z, 0.25, 1603, 2, 0);
						} else if (grindingItem == 249 && grindingSub == 4) {
							Level.dropItem(x, y + 1, z, 0.25, 1604, 2, 0);
						} else if (grindingItem == 249 && grindingSub == 5) {
							Level.dropItem(x, y + 1, z, 0.25, 1605, 2, 0);
						} else if (grindingItem == 249 && grindingSub == 6) {
							Level.dropItem(x, y + 1, z, 0.25, 1606, 2, 0);
						}
						grinderClicked = 0;
						grindingItem = 0;
						grindingSub = 0;
					}
				} else {
					grinderClicked++;
					clientMessage("times clicked: " + grinderClicked);
				}
			}

		} else if (blockId == 248 && blockSub == 1) {
			clientMessage("useD");
		} else if (blockId == 248 && blockSub == 2) {
			if (radioactiveClick == 0) {
				// radioactiveClick++;
				if (Level.getTile(x, y + 1, z) == 54) {
					while (radioactiveTakenSlot <= 27) {
						radioactiveTakenSlotId = Level.getChestSlot(x, y + 1, z);
						radioactiveTakenSlotSub = Level.getChestSlotData(x, y + 1, z);
						if (radioactiveTakenSlotId == 249) {
							if (radioactiveTakenSlotSub == 12 || radioactiveTakenSlotSub == 13 || radioactiveTakenSlotSub == 14 || radioactiveTakenSlotSub == 15) { //12,13,14,15
								radioactiveClick++;
								radioactiveProcesingId = radioactiveTakenSlotId;
								radioactiveProcesingSub = radioactiveTakenSlotSub;
								if (Level.getChestSlotCount(x, y + 1, z) == 0) {}
								Level.setChestSlot(x, y + 1, z, radioactiveTakenSlot, 0, Level.getChestSlotCount(x, y + 1, z) - 1);
							}
						}
						//if idk
					}
				}
			}
		}
	}
}

function guiPrevent() {}

function blockLostPrevent() {}

function radioactiveProcesF() {}

function wierRfTransfer() {}

function wrenchUse(x, y, z) {
	carry = Player.getCarriedItem();
	blockId = Level.getTile(x, y, z);
	blockSub = Level.getData(x, y, z);

	if (blockId == 247 || blockId == 248) {
		Level.setTile(x, y, z, 0, 0);
		Level.dropItem(x, y, z, 0, 25, blockId, 1, blockSub);
		blockLostPrevent();
	}
}

function devMenu() {}

function RfOutput() {}

function RfInput() {}
