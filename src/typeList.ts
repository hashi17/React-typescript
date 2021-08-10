/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let stx: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

// void ※無くても良い
const dunc1 = (): void => {
  const test = "test";
};

// null 型
let null1: null = null;

// undefined　型
let undefined1: undefined = undefined;

// object型
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "hashi" };
