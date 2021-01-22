/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 27;
    this.vars.shift = 0;
    this.vars.control = 0;
    this.vars.alt = 0;
    this.vars.test = "c";
    this.vars.alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    this.vars._2 = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "+",
      "{",
      "}",
      "|",
      ":",
      "<",
      ">",
      "?",
      0,
      "enter"
    ];
    this.vars.allKeys = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    this.watchers.shift = new Watcher({
      label: "shift",
      style: "normal",
      visible: true,
      value: () => this.vars.shift,
      x: 244,
      y: 125
    });
    this.watchers.control = new Watcher({
      label: "control",
      style: "normal",
      visible: true,
      value: () => this.vars.control,
      x: 243,
      y: 98
    });
    this.watchers.alt = new Watcher({
      label: "alt",
      style: "normal",
      visible: true,
      value: () => this.vars.alt,
      x: 245,
      y: 151
    });
    this.watchers.test = new Watcher({
      label: "test",
      style: "normal",
      visible: true,
      value: () => this.vars.test,
      x: 244,
      y: 69
    });
  }
}
