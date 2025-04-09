import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Loader } from "./Loader";

class Application {
    run(config) {
        // Register GSAP PixiPlugin
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        // Save configuration
        this.config = config;

        // Create PIXI application
        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        // Load assets using Loader
        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload().then(() => this.start());
    }

    // Retrieve texture resource by key
    res(key) {
        return this.loader.resources[key].texture;
    }

    // Create a PIXI sprite from a loaded resource
    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }

    // Start the application by loading the initial scene
    start() {
        this.scene = new this.config["startScene"]();
        this.app.stage.addChild(this.scene.container);
    }
}

// Export an instance of the Application class
export const App = new Application();
