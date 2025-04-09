import * as PIXI from "pixi.js";
import { App } from "../system/App";
    
export class Game {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();

        const field = new Field(1, 1);
        this.container.addChild(field.sprite);
        
        this.ajustPosition();

        this.board = new Board();
        this.container.addChild(this.board.container);

    }
    createBackground() {
        this.bg = App.sprite("bg");
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }

    ajustPosition() {
        this.fieldSize = this.fields[0].sprite.width;
        this.width = this.cols * this.fieldSize;
        this.height = this.rows * this.fieldSize;
        this.container.x = (window.innerWidth - this.width) / 2 + this.fieldSize / 2;
        this.container.y = (window.innerHeight - this.height) / 2 + this.fieldSize / 2;
    }

}