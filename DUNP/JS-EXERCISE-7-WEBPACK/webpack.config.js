const path = require("path");

module.exprots = {
    "mode": "development",
    "entry": "./index.js",
    "output": {
        "filename": "main.js",
        "path": path.resolve(__dirname, "dist")
            //treba da kreira main.js
    },
    "module": {
        "rules": [{
            "test": /\.css$/,
            "use": ["style-loader", "css-loader", "sass-loader"] //uvek prvo ide style loader pa onda css
                //sass loader nije hteo da se instalira

        }]


    }
}