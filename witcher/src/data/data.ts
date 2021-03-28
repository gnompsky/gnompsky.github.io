import type {
    Ammunition,
    Database,
    Item, 
    Weapon,
} from "./types";

import {
    Availability,
    Category,
    ConcealmentType,
    DamageType,
    SkillLevel,
    WeaponEffectType,
} from "./types";

export const items: Item[] = [
    // Crafting Materials
    {
        name: 'Ashes',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 1,
        },
        forageInstructions: {
            dc: 10,
            location: 'Fires & burned items',
            quantity: '1d10',
        }
    },
    {
        name: 'Coal',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 1,
        },
        forageInstructions: {
            dc: 14,
            location: 'Fires, mountains or underground',
            quantity: '1d10',
        }
    },
    {
        name: 'Cotton',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 1,
        },
        forageInstructions: {
            dc: 12,
            location: 'Fields & plantations',
            quantity: '1d10',
        }
    },
    {
        name: 'Double Woven Linen',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 22,
        },
        craftingRecipe: {
            craftTimeMinutes: 30,
            dc: 14,
            diagramCost: 30,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 15,
            components: [
                {
                    itemName: 'Linen',
                    quantity: 1,
                },
                {
                    itemName: 'Thread',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Glass',
        category: Category.CraftingMaterial,
        weight: 0.5,
        buyInfo: {
            availability: Availability.Poor,
            cost: 5,
        }
    },
    {
        name: 'Hardened Timber',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 16,
        },
        craftingRecipe: {
            craftTimeMinutes: 30,
            dc: 12,
            diagramCost: 21,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 11,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Resin',
                    quantity: 4,
                },
            ],
        },
    },
    {
        name: 'Linen',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 9,
        },
        craftingRecipe: {
            craftTimeMinutes: 15,
            dc: 10,
            diagramCost: 12,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 6,
            components: [
                {
                    itemName: 'Thread',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Oil',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 3,
        },
    },
    {
        name: 'Resin',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 2,
        },
        forageInstructions: {
            dc: 10,
            location: 'Forests',
            quantity: '1d6',
        }
    },
    {
        name: 'Silk',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 50,
        },
    },
    {
        name: 'Thread',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 3,
        },
        craftingRecipe: {
            craftTimeMinutes: 15,
            dc: 10,
            diagramCost: 4,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 2,
            components: [
                {
                    itemName: 'Cotton',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Timber',
        category: Category.CraftingMaterial,
        weight: 1,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 3,
        },
        forageInstructions: {
            dc: 8,
            location: 'Forests',
            quantity: '2d6',
        },
    },
    {
        name: 'Wax',
        category: Category.CraftingMaterial,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 2,
        },
        forageInstructions: {
            dc: 12,
            location: 'Forests & fields',
            quantity: '1d6',
        },
    },

    // Hides and Animal Parts
    {
        name: 'Beast Bones',
        category: Category.HidesAndAnimalParts,
        weight: 4,
        buyInfo: {
            availability: Availability.Common,
            cost: 8,
        },
        forageInstructions: {
            dc: 0,
            location: 'Found on monsters & beasts',
            quantity: 'Variable',
        },
    },
    {
        name: 'Cow Hide',
        category: Category.HidesAndAnimalParts,
        weight: 5,
        buyInfo: {
            availability: Availability.Common,
            cost: 10,
        },
    },
    {
        name: 'Draconid Leather',
        category: Category.HidesAndAnimalParts,
        weight: 5,
        buyInfo: {
            availability: Availability.Rare,
            cost: 58,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 18,
            diagramCost: 78,
            diagramLevel: SkillLevel.Master,
            investmentCost: 39,
            components: [
                {
                    itemName: 'Draconid Scales',
                    quantity: 1,
                },
                {
                    itemName: 'Tanning Herb',
                    quantity: 3,
                },
            ],
        },
    },
    {
        name: 'Draconid Scales',
        category: Category.HidesAndAnimalParts,
        weight: 5,
        buyInfo: {
            availability: Availability.Rare,
            cost: 30,
        },
        forageInstructions: {
            dc: 0,
            location: 'Found on wyverns',
            quantity: '1d6',
        },
    },
    {
        name: 'Feathers',
        category: Category.HidesAndAnimalParts,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 4,
        },
        forageInstructions: {
            dc: 0,
            location: 'Found on birds',
            quantity: '1d6',
        },
    },
    {
        name: 'Hardened Leather',
        category: Category.HidesAndAnimalParts,
        weight: 3,
        buyInfo: {
            availability: Availability.Poor,
            cost: 48,
        },
        craftingRecipe: {
            craftTimeMinutes: 30,
            dc: 14,
            diagramCost: 64,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 32,
            components: [
                {
                    itemName: 'Leather',
                    quantity: 1,
                },
                {
                    itemName: 'Wax',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Leather',
        category: Category.HidesAndAnimalParts,
        weight: 2,
        buyInfo: {
            availability: Availability.Common,
            cost: 28,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 12,
            diagramCost: 38,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 19,
            components: [
                {
                    itemName: 'Cow Hide',
                    quantity: 1,
                },
                {
                    itemName: 'Tanning Herb',
                    quantity: 3,
                },
            ],
        },
    },
    {
        name: 'Lyrian Leather',
        category: Category.HidesAndAnimalParts,
        weight: 2,
        buyInfo: {
            availability: Availability.Poor,
            cost: 60,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 17,
            diagramCost: 80,
            diagramLevel: SkillLevel.Journeyman,
            investmentCost: 40,
            components: [
                {
                    itemName: 'Leather',
                    quantity: 1,
                },
                {
                    itemName: 'Ogre Wax',
                    quantity: 1,
                },
                {
                    itemName: 'Coal',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Wolf Hide',
        category: Category.HidesAndAnimalParts,
        weight: 3,
        buyInfo: {
            availability: Availability.Common,
            cost: 14,
        },
        forageInstructions: {
            dc: 0,
            location: 'Found on wolves',
            quantity: '3',
        },
    },

    // Alchemical Treatments
    {
        name: 'Darkening Oil',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 24,
        },
        forageInstructions: {
            dc: 16,
            location: 'Forests',
            quantity: '1d6',
        },
    },
    {
        name: 'Drake Oil',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 45,
        },
        forageInstructions: {
            dc: 16,
            location: 'Rivers & coasts',
            quantity: '1d6',
        },
    },
    {
        name: 'Ester Grease',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 8,
        },
        forageInstructions: {
            dc: 14,
            location: 'Forests & fields',
            quantity: '1d10',
        },
    },
    {
        name: 'Etching Acid',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 2,
        },
        forageInstructions: {
            dc: 14,
            location: 'Caves & mountains',
            quantity: '1d10',
        },
    },
    {
        name: 'Fifth Essence',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 82,
        },
        forageInstructions: {
            dc: 0,
            location: 'Places of Power, mages & fiends',
            quantity: 'Variable',
        },
    },
    {
        name: 'Ogre Wax',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 10,
        },
        forageInstructions: {
            dc: 14,
            location: 'Caves',
            quantity: '1d10',
        },
    },
    {
        name: 'Sharpening Grit',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 32,
        },
        forageInstructions: {
            dc: 16,
            location: 'Mountains & caves',
            quantity: '1d6',
        },
    },
    {
        name: 'Tanning Herbs',
        category: Category.AlchemicalTreatments,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Common,
            cost: 3,
        },
        forageInstructions: {
            dc: 14,
            location: 'Fields & forests',
            quantity: '1d10',
        },
    },

    // Ingots & Minerals
    {
        name: 'Dark Iron',
        category: Category.IngotsAndMinerals,
        weight: 1.5,
        buyInfo: {
            availability: Availability.Rare,
            cost: 52,
        },
        forageInstructions: {
            dc: 18,
            location: 'Mountains & underground',
            quantity: '1d6',
        },
    },
    {
        name: 'Dark Steel',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 82,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 17,
            diagramCost: 110,
            diagramLevel: SkillLevel.Journeyman,
            investmentCost: 55,
            components: [
                {
                    itemName: 'Dark Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Coal',
                    quantity: 3,
                },
            ],
        },
    },
    {
        name: 'Dimeritium',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 240,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 20,
            diagramCost: 320,
            diagramLevel: SkillLevel.Master,
            investmentCost: 160,
            components: [
                {
                    itemName: 'Glowing Ore',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Gemstone',
        category: Category.IngotsAndMinerals,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 100,
        },
        forageInstructions: {
            dc: 24,
            location: 'Mountains & underground',
            quantity: '1d6/2',
        },
    },
    {
        name: 'Glowing Ore',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 80,
        },
        forageInstructions: {
            dc: 20,
            location: 'Mountains & underground',
            quantity: '1d6/2',
        },
    },
    {
        name: 'Gold',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 85,
        },
        forageInstructions: {
            dc: 18,
            location: 'Mountains & underground',
            quantity: '1d6/2',
        },
    },
    {
        name: 'Iron',
        category: Category.IngotsAndMinerals,
        weight: 1.5,
        buyInfo: {
            availability: Availability.Poor,
            cost: 30,
        },
        forageInstructions: {
            dc: 16,
            location: 'Mountains & underground',
            quantity: '1d6',
        },
    },
    {
        name: 'Mahakaman Dimeritium',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 300,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 24,
            diagramCost: 402,
            diagramLevel: SkillLevel.Master,
            investmentCost: 201,
            components: [
                {
                    itemName: 'Glowing Ore',
                    quantity: 2,
                },
                {
                    itemName: 'River Clay',
                    quantity: 3,
                },
                {
                    itemName: 'Ashes',
                    quantity: 2,
                },
                {
                    itemName: 'Beast Bones',
                    quantity: 3,
                },
            ],
        },
    },
    {
        name: 'Mahakaman Steel',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 114,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 22,
            diagramCost: 152,
            diagramLevel: SkillLevel.Master,
            investmentCost: 76,
            components: [
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Coal',
                    quantity: 5,
                },
                {
                    itemName: 'Ashes',
                    quantity: 2,
                },
                {
                    itemName: 'River Clay',
                    quantity: 3,
                },
                {
                    itemName: 'Beast Bones',
                    quantity: 3,
                },
            ],
        },
    },
    {
        name: 'Meteorite',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 98,
        },
        forageInstructions: {
            dc: 24,
            location: 'Anywhere above ground',
            quantity: '1d6/2',
        },
    },
    {
        name: 'River Clay',
        category: Category.IngotsAndMinerals,
        weight: 1.5,
        buyInfo: {
            availability: Availability.Poor,
            cost: 5,
        },
        forageInstructions: {
            dc: 14,
            location: 'Rivers or shores',
            quantity: '1d6',
        },
    },
    {
        name: 'Silver',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Rare,
            cost: 72,
        },
        forageInstructions: {
            dc: 16,
            location: 'Mountains & underground',
            quantity: '1d6/2',
        },
    },
    {
        name: 'Steel',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 48,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 15,
            diagramCost: 70,
            diagramLevel: SkillLevel.Journeyman,
            investmentCost: 35,
            components: [
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Coal',
                    quantity: 5,
                },
            ],
        },
    },
    {
        name: 'Stone',
        category: Category.IngotsAndMinerals,
        weight: 2,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 4,
        },
        forageInstructions: {
            dc: 8,
            location: 'Everywhere',
            quantity: '2d6',
        },
    },
    {
        name: 'Tretogor Steel',
        category: Category.IngotsAndMinerals,
        weight: 1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 64,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 16,
            diagramCost: 86,
            diagramLevel: SkillLevel.Journeyman,
            investmentCost: 43,
            components: [
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Coal',
                    quantity: 5,
                },
                {
                    itemName: 'Feathers',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Zerrikanian Powder',
        category: Category.IngotsAndMinerals,
        weight: 0.1,
        buyInfo: {
            availability: Availability.Poor,
            cost: 30,
        },
        forageInstructions: {
            dc: 18,
            location: 'Mountains or underground',
            quantity: '1d6/2',
        },
    },
];

export const ammunition: Ammunition[] = [
    {
        name: 'Ammunition, Blunt (x5)',
        category: Category.Ammunition,
        weight: 0.1,
        concealment: ConcealmentType.Large,
        damageType: DamageType.Bludgeoning,
        effects: [WeaponEffectType.NonLethal],
        reliability: 10,
        buyInfo: {
            availability: Availability.Common,
            cost: 25,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 12,
            diagramCost: 74,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 37,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Feathers',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Ammunition, Standard (x30)',
        category: Category.Ammunition,
        weight: 0.5,
        concealment: ConcealmentType.Large,
        damageType: DamageType.Piercing,
        effects: [],
        reliability: 10,
        buyInfo: {
            availability: Availability.Common,
            cost: 30,
        },
        craftingRecipe: {
            craftTimeMinutes: 2*60,
            dc: 10,
            diagramCost: 14,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 37,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Feathers',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Ammunition, Broadhead (x10)',
        category: Category.Ammunition,
        weight: 0.1,
        concealment: ConcealmentType.Large,
        damageType: DamageType.Piercing,
        effects: [
            {
                type: WeaponEffectType.BleedingX,
                value: 100,
            },
        ],
        reliability: 10,
        buyInfo: {
            availability: Availability.Common,
            cost: 100,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 15,
            diagramCost: 125,
            diagramLevel: SkillLevel.Journeyman,
            investmentCost: 69,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Feathers',
                    quantity: 1,
                },
                {
                    itemName: 'Sharpening Grit',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Ammunition, Bodkin (x10)',
        category: Category.Ammunition,
        weight: 0.1,
        concealment: ConcealmentType.Large,
        damageType: DamageType.Piercing,
        effects: [WeaponEffectType.ArmourPiercing],
        reliability: 10,
        buyInfo: {
            availability: Availability.Common,
            cost: 150,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 16,
            diagramCost: 224,
            diagramLevel: SkillLevel.Journeyman,
            investmentCost: 110,
            components: [
                {
                    itemName: 'Hardened Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Steel',
                    quantity: 1,
                },
                {
                    itemName: 'Feathers',
                    quantity: 1,
                },
                {
                    itemName: 'Sharpening Grit',
                    quantity: 1,
                },
                {
                    itemName: 'Ogre Wax',
                    quantity: 1,
                },
            ],
        },
    },
];

export const weapons: Weapon[] = [
    {
        name: 'Arming Sword',
        category: Category.Weapons,
        weight: 2.5,
        accuracy: 0,
        concealment: ConcealmentType.Large,
        damage: '2d6+4',
        damageType: [DamageType.Piercing, DamageType.Slashing],
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 0,
        reliability: 15,
        buyInfo: {
            availability: Availability.Common,
            cost: 270,
        },
        craftingRecipe: {
            craftTimeMinutes: 7*60,
            dc: 13,
            diagramCost: 404,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 201,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 2,
                },
                {
                    itemName: 'Thread',
                    quantity: 1,
                },
                {
                    itemName: 'Hardened Leather',
                    quantity: 2,
                },
                {
                    itemName: 'Steel',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Brass Knuckles',
        category: Category.Weapons,
        weight: 0.5,
        accuracy: 1,
        concealment: ConcealmentType.Tiny,
        damage: '1d6',
        damageType: DamageType.Bludgeoning,
        effects: [WeaponEffectType.Brawling],
        enhancements: 1,
        hands: 1,
        range: 0,
        reliability: 15,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 50,
        },
        craftingRecipe: {
            craftTimeMinutes: 2*60,
            dc: 10,
            diagramCost: 125,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 72,
            components: [
                {
                    itemName: 'Steel',
                    quantity: 1,
                },
                {
                    itemName: 'Hardened Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Resin',
                    quantity: 3,
                },
                {
                    itemName: 'Wax',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Dagger',
        category: Category.Weapons,
        weight: 0.5,
        accuracy: 0,
        concealment: ConcealmentType.Small,
        damage: '1d6+2',
        damageType: [DamageType.Piercing, DamageType.Slashing],
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 0,
        reliability: 10,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 50,
        },
        craftingRecipe: {
            craftTimeMinutes: 2*60,
            dc: 8,
            diagramCost: 74,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 33,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Gleddyf',
        category: Category.Weapons,
        weight: 3,
        accuracy: 0,
        concealment: ConcealmentType.Large,
        damage: '3d6+2',
        damageType: [DamageType.Piercing, DamageType.Slashing],
        effects: [],
        enhancements: 0,
        hands: 2,
        range: 0,
        reliability: 5,
        buyInfo: {
            availability: Availability.Common,
            cost: 285,
        },
        craftingRecipe: {
            craftTimeMinutes: 7*60,
            dc: 14,
            diagramCost: 426,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 210,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Hardened Leather',
                    quantity: 1,
                },
                {
                    itemName: 'Leather',
                    quantity: 1,
                },
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Steel',
                    quantity: 2,
                },
                {
                    itemName: 'Oil',
                    quantity: 1,
                },
                {
                    itemName: 'Resin',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Hand Axe',
        category: Category.Weapons,
        weight: 1,
        accuracy: 0,
        concealment: ConcealmentType.Small,
        damage: '2d6+1',
        damageType: DamageType.Slashing,
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 0,
        reliability: 10,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 205,
        },
        craftingRecipe: {
            craftTimeMinutes: 3*60,
            dc: 10,
            diagramCost: 306,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 148,
            components: [
                {
                    itemName: 'Hardened Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Steel',
                    quantity: 1,
                },
                {
                    itemName: 'Hardened Leather',
                    quantity: 1
                },
                {
                    itemName: 'Leather',
                    quantity: 1,
                },
                {
                    itemName: 'Resin',
                    quantity: 4,
                },
            ],
        },
    },
    {
        name: 'Hunter\'s Falchion',
        category: Category.Weapons,
        weight: 2,
        accuracy: 0,
        concealment: ConcealmentType.Large,
        damage: '3d6',
        damageType: [DamageType.Piercing, DamageType.Slashing],
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 0,
        reliability: 15,
        buyInfo: {
            availability: Availability.Common,
            cost: 325,
        },
        craftingRecipe: {
            craftTimeMinutes: 7*60,
            dc: 14,
            diagramCost: 486,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 240,
            components: [
                {
                    itemName: 'Hardened Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Hardened Leather',
                    quantity: 2,
                },
                {
                    itemName: 'Steel',
                    quantity: 2,
                },
                {
                    itemName: 'Ester Grease',
                    quantity: 4,
                },
            ],
        },
    },
    {
        name: 'Iron Long Sword',
        category: Category.Weapons,
        weight: 1.5,
        accuracy: 0,
        concealment: ConcealmentType.Large,
        damage: '2d6+2',
        damageType: [DamageType.Piercing, DamageType.Slashing],
        effects: [],
        enhancements: 0,
        hands: 2,
        range: 0,
        reliability: 10,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 160,
        },
        craftingRecipe: {
            craftTimeMinutes: 5*60,
            dc: 10,
            diagramCost: 240,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 119,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Iron',
                    quantity: 2,
                },
                {
                    itemName: 'Leather',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Orions (x3)',
        category: Category.Weapons,
        weight: 0.1,
        accuracy: 1,
        concealment: ConcealmentType.Tiny,
        damage: '1d6',
        damageType: DamageType.Slashing,
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 'Body x4m',
        reliability: 5,
        buyInfo: {
            availability: Availability.Poor,
            cost: 300,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 12,
            diagramCost: 125,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 62,
            components: [
                {
                    itemName: 'Steel',
                    quantity: 1,
                },
                {
                    itemName: 'Oil',
                    quantity: 2,
                },
                {
                    itemName: 'River Clay',
                    quantity: 1,
                },
                {
                    itemName: 'Ashes',
                    quantity: 3,
                },
            ],
        },
    },
    {
        name: 'Short Bow',
        category: Category.Weapons,
        weight: 1,
        accuracy: 0,
        concealment: ConcealmentType.Large,
        damage: '3d6+3',
        damageType: DamageType.Piercing,
        effects: [],
        enhancements: 0,
        hands: 2,
        range: 100,
        reliability: 10,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 290,
        },
        craftingRecipe: {
            craftTimeMinutes: 8*60,
            dc: 15,
            diagramCost: 434,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 210,
            components: [
                {
                    itemName: 'Hardened Timber',
                    quantity: 5,
                },
                {
                    itemName: 'Thread',
                    quantity: 4,
                },
                {
                    itemName: 'Wax',
                    quantity: 2,
                },
                {
                    itemName: 'Resin',
                    quantity: 2,
                },
                {
                    itemName: 'Ester Grease',
                    quantity: 3,
                },
                {
                    itemName: 'Iron',
                    quantity: 1,
                },
                {
                    itemName: 'Leather',
                    quantity: 2,
                },
            ],
        },
    },
    {
        name: 'Spear',
        category: Category.Weapons,
        weight: 3.5,
        accuracy: 0,
        concealment: ConcealmentType.CantHide,
        damage: '3d6',
        damageType: [DamageType.Piercing, DamageType.Bludgeoning],
        effects: [WeaponEffectType.LongReach],
        enhancements: 1,
        hands: 2,
        range: 'Body x2m',
        reliability: 10,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 375,
        },
        craftingRecipe: {
            craftTimeMinutes: 6*60,
            dc: 12,
            diagramCost: 562,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 276,
            components: [
                {
                    itemName: 'Hardened Timber',
                    quantity: 5,
                },
                {
                    itemName: 'Steel',
                    quantity: 2,
                },
                {
                    itemName: 'Resin',
                    quantity: 2,
                },
                {
                    itemName: 'Leather',
                    quantity: 3,
                },
                {
                    itemName: 'Thread',
                    quantity: 4,
                },
            ],
        },
    },
    {
        name: 'Throwing Axes (x3)',
        category: Category.Weapons,
        weight: 1,
        accuracy: 0,
        concealment: ConcealmentType.Small,
        damage: '2d6',
        damageType: DamageType.Slashing,
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 'Body x2m',
        reliability: 10,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 225,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 10,
            diagramCost: 116,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 51,
            components: [
                {
                    itemName: 'Timber',
                    quantity: 1,
                },
                {
                    itemName: 'Steel',
                    quantity: 1,
                },
            ],
        },
    },
    {
        name: 'Throwing Knives (x3)',
        category: Category.Weapons,
        weight: 0.5,
        accuracy: 0,
        concealment: ConcealmentType.Tiny,
        damage: '1d6',
        damageType: DamageType.Piercing,
        effects: [],
        enhancements: 0,
        hands: 1,
        range: 'Body x4m',
        reliability: 5,
        buyInfo: {
            availability: Availability.Everywhere,
            cost: 150,
        },
        craftingRecipe: {
            craftTimeMinutes: 60,
            dc: 8,
            diagramCost: 74,
            diagramLevel: SkillLevel.Novice,
            investmentCost: 48,
            components: [
                {
                    itemName: 'Steel',
                    quantity: 1,
                },
            ],
        },
    },
];

const buildDatabase: () => Database = () => {
    const addToDatabase: (item: Item) => void = (item) => {
        if (database.hasOwnProperty(item.name)) {
            throw new Error(`Item ${item.name} is already referenced elsewhere: ${database[item.name]}`);
        }

        database[item.name] = item;
    };

    const database: Database = {};

    items.forEach(addToDatabase);
    ammunition.forEach(addToDatabase);
    weapons.forEach(addToDatabase);

    return Object.freeze(database);
}

export const lookup = buildDatabase();