/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Keyboard extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Layout", "./Keyboard/costumes/Layout.svg", {
        x: 177.10612906183127,
        y: -53.16758261261265
      })
    ];

    this.sounds = [new Sound("Meow", "./Keyboard/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.myVariable = "";
    while (true) {
      yield* this.check();
      yield;
    }
  }

  *checkKey(key) {
    if (!(this.stage.vars.alt == 1)) {
      if (!(this.stage.vars.control == 1)) {
        if (this.stage.vars.shift == 0) {
          if (
            this.keyPressed(
              this.stage.vars.allKeys[this.stage.vars.myVariable - 1]
            )
          ) {
            this.stage.vars.test = this.stage.vars.alphabet[
              this.stage.vars.myVariable - 1
            ];
          }
        } else {
          if (
            this.keyPressed(
              this.stage.vars.allKeys[this.stage.vars.myVariable - 1]
            )
          ) {
            this.stage.vars.test = this.stage.vars._2[
              this.stage.vars.myVariable - 1
            ];
          }
        }
      }
    }
    if (this.keyPressed("" + "~" + "")) {
      this.stage.vars.test = "~";
    }
    if (this.keyPressed("" + "!" + "")) {
      this.stage.vars.test = "!";
    }
    if (this.keyPressed("" + "@" + "")) {
      this.stage.vars.test = "@";
    }
    if (this.keyPressed("" + "#" + "")) {
      this.stage.vars.test = "#";
    }
    if (this.keyPressed("" + "$" + "")) {
      this.stage.vars.test = "$";
    }
    if (this.keyPressed("" + "%" + "")) {
      this.stage.vars.test = "%";
    }
    if (this.keyPressed("" + "^" + "")) {
      this.stage.vars.test = "^";
    }
    if (this.keyPressed("" + "&" + "")) {
      this.stage.vars.test = "&";
    }
    if (this.keyPressed("" + "*" + "")) {
      this.stage.vars.test = "*";
    }
    if (this.keyPressed("" + "(" + "")) {
      this.stage.vars.test = "(";
    }
    if (this.keyPressed("" + ")" + "")) {
      this.stage.vars.test = ")";
    }
    if (this.keyPressed("" + "_" + "")) {
      this.stage.vars.test = "_";
    }
    if (this.keyPressed("" + "+" + "")) {
      this.stage.vars.test = "+";
    }
    if (this.keyPressed("" + "`" + "")) {
      this.stage.vars.test = "`";
    }
    if (this.keyPressed("" + 1 + "")) {
      this.stage.vars.test = 1;
    }
    if (this.keyPressed("" + 2 + "")) {
      this.stage.vars.test = 3;
    }
    if (this.keyPressed("" + 3 + "")) {
      this.stage.vars.test = 3;
    }
    if (this.keyPressed("" + 4 + "")) {
      this.stage.vars.test = 4;
    }
    if (this.keyPressed("" + 5 + "")) {
      this.stage.vars.test = 5;
    }
    if (this.keyPressed("" + 6 + "")) {
      this.stage.vars.test = 6;
    }
    if (this.keyPressed("" + 7 + "")) {
      this.stage.vars.test = 7;
    }
    if (this.keyPressed("" + 8 + "")) {
      this.stage.vars.test = 8;
    }
    if (this.keyPressed("" + 9 + "")) {
      this.stage.vars.test = 9;
    }
    if (this.keyPressed("" + 0 + "")) {
      this.stage.vars.test = 0;
    }
    if (this.keyPressed("" + "-" + "")) {
      this.stage.vars.test = "-";
    }
    if (this.keyPressed("" + "+" + "")) {
      this.stage.vars.test = "+";
    }
    if (this.keyPressed("" + "{" + "")) {
      this.stage.vars.test = "{";
    }
    if (this.keyPressed("" + "}" + "")) {
      this.stage.vars.test = "}";
    }
    if (this.keyPressed("" + "[" + "")) {
      this.stage.vars.test = "[";
    }
    if (this.keyPressed("" + "]" + "")) {
      this.stage.vars.test = "]";
    }
    if (this.keyPressed("" + "|" + "")) {
      this.stage.vars.test = "|";
    }
    if (this.keyPressed("" + "\\" + "")) {
      this.stage.vars.test = "\\";
    }
    if (this.keyPressed("" + ":" + "")) {
      this.stage.vars.test = ":";
    }
    if (this.keyPressed("" + ";" + "")) {
      this.stage.vars.test = ";";
    }
    if (this.keyPressed("" + '"' + "")) {
      this.stage.vars.test = '"';
    }
    if (this.keyPressed("" + "'" + "")) {
      this.stage.vars.test = "'";
    }
    if (this.keyPressed("" + "<" + "")) {
      this.stage.vars.test = "<";
    }
    if (this.keyPressed("" + "," + "")) {
      this.stage.vars.test = ",";
    }
    if (this.keyPressed("" + "." + "")) {
      this.stage.vars.test = ".";
    }
    if (this.keyPressed("" + ">" + "")) {
      this.stage.vars.test = ">";
    }
    if (this.keyPressed("" + "?" + "")) {
      this.stage.vars.test = "?";
    }
    if (this.keyPressed("" + "/" + "")) {
      this.stage.vars.test = "/";
    }
    if (this.keyPressed("" + "enter" + "")) {
      this.stage.vars.test = "Enter Key";
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("alt")) {
        this.stage.vars.alt = 1;
      } else {
        this.stage.vars.alt = 0;
      }
      if (this.keyPressed("shift")) {
        this.stage.vars.shift = 1;
      } else {
        this.stage.vars.shift = 0;
      }
      if (this.keyPressed("control")) {
        this.stage.vars.control = 1;
      } else {
        this.stage.vars.control = 0;
      }
      yield;
    }
  }

  *check() {
    this.stage.vars.myVariable = 1;
    for (let i = 0; i < this.stage.vars.allKeys.length; i++) {
      this.warp(this.checkKey)(
        this.stage.vars.allKeys[this.stage.vars.myVariable - 1]
      );
      this.stage.vars.myVariable += 1;
    }
  }
}
