const express = require('express');
const routers = require('../routes');
const config = require('../config');
const cors = require('cors');

const { ErrorMiddleware } = require("../middlewares");

class Server {

    constructor(){
        console.log("Initializing server...");

        // init app
        this._app = express();

        // init app level middlewares
        this.initMiddlewares();

        // init routers
        this._routers = routers;
        this.initRouters();

        // Setting error middleware
        this._app.use(ErrorMiddleware);

    }

    start = () => {
        this._app.listen(config.PORT, () => {
            console.log(`${config.APP_NAME} running on port ${config.PORT}`);
        })
    }

    initMiddlewares = () => {
        console.log("Initializing middlewares...");
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(express.json());
        const corsOptions = {
            origin: config.CORS_ORIGIN
        };
        this._app.use(cors(corsOptions));

    }

    initRouters = () => {
        console.log("Initializing routes...");
        this._app.use("/bitly", this._routers.BitlyRoutes);
        this._app.use("/news", this._routers.NewsRoutes);
        this._app.use("/weather", this._routers.WeatherRoutes);
        this._app.use("/pixabay", this._routers.PixabayRoutes);
    }
};

module.exports = Server;