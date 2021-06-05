const express = require('express');
const routers = require('../routes');
const config = require('../config');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger/swagger.json');

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
        return this._app.listen(config.PORT, () => {
            console.log(`${config.APP_NAME} running on port ${config.PORT}`);
        });
    }

    close = () => {
        this._app.close();
    }

    initMiddlewares = () => {
        console.log("Initializing middlewares...");
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(express.json());
        this._app.use(cors());

    }

    initRouters = () => {
        console.log("Initializing routes...");
        this._app.use("/bitly", this._routers.BitlyRoutes);
        this._app.use("/news", this._routers.NewsRoutes);
        this._app.use("/weather", this._routers.WeatherRoutes);
        this._app.use("/pixabay", this._routers.PixabayRoutes);

        // Swagger UI
        const options = {
            swaggerOptions: {
                validatorUrl: null
            },
            customCss: '.swagger-ui .topbar { background-color: pink; }'
        };
        
        this._app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
    }
};

module.exports = Server;