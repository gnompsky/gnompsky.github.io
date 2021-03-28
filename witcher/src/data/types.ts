export type Database = { [itemName: string]: Item };

export interface Item {
    name: string;
    category: Category;
    weight: number;
    craftingRecipe?: CraftingRecipe;
    forageInstructions?: ForageInstructions;
    buyInfo?: BuyInfo;
}

export interface Weapon extends Item {
    accuracy: number;
    concealment: ConcealmentType;
    damage: string;
    damageType: DamageType|DamageType[];
    effects: (WeaponEffect|WeaponEffectType)[];
    enhancements: number;
    hands: number;
    range: number|string;
    reliability: number;
}

export interface Ammunition extends Item {
    concealment: ConcealmentType;
    damageType: DamageType|DamageType[];
    effects: (WeaponEffect|WeaponEffectType)[];
    reliability: number;
}

export interface WeaponEffect {
    type: WeaponEffectType;
    value: number;
}

export interface CraftingRecipe {
    dc: number;
    craftTimeMinutes: number;
    components: CraftingComponent[];
    investmentCost: number;
    diagramCost: number;
    diagramLevel: SkillLevel
}

export interface CraftingComponent {
    itemName: string;
    quantity: number;
}

export interface ForageInstructions {
    location: string;
    quantity: string;
    dc: number;
}

export interface BuyInfo {
    availability: Availability;
    cost: number;
}

export enum ConcealmentType {
    Tiny,
    Small,
    Large,
    CantHide,
}

export enum DamageType {
    Slashing,
    Piercing,
    Bludgeoning,
    Elemental,
}

export enum WeaponEffectType {
    Ablating,
    ArmourPiercing,
    Balanced,
    BleedingX,
    Brawling,
    Concealment,
    FocusX,
    Grappling,
    GreaterFocus,
    LongReach,
    Meteorite,
    NonLethal,
    SlowReload,
    StunX,
}

export enum SkillLevel {
    Novice,
    Journeyman,
    Master,
}

export enum Availability {
    Everywhere,
    Common,
    Poor,
    Rare,
}

export enum Category {
    CraftingMaterial,
    HidesAndAnimalParts,
    AlchemicalTreatments,
    IngotsAndMinerals,
    Weapons,
    Ammunition,
}