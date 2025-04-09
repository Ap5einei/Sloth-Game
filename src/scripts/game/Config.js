import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    startScene: Game,

    board: {
        rows: 8,
        cols: 8
    },

    tilesColors: ['blue', 'green', 'orange', 'red', 'pink', 'yellow', 'purple', 'cyan'],

};
