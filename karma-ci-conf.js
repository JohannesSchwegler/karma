module.exports = function (config) {

    require("./karma.conf")(config)
    config.set({

        preprocessors: {
            "{webapp,webapp/!(test)}/*.js": ["coverage"]
        },

        // This is merged onto the conig form karma.conf.js

        coverageReporter: {
            includeAllSources: true,
            reporters: [
                {
                    type: "html",
                    dir: "coverage"

                },
                {
                    type: "text"


                }


            ],
            check: {
                each: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100

                }
            }

        },

        reporters: ["progress","coverage"],

        browsers: ["ChromeHeadless"],
        singleRun: true

    });
};