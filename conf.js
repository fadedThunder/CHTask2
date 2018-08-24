
require("babel-register")({
    presets: [ 'es2015' ]
})

exports.config = {
    directConnect: true,
    specs: 'Specs/GoogleSpec.js',
    baseUrl: 'http://images.google.com',
    params:
        {
            imageName:'Hills',
            imageNumber:'5',
        },


    onPrepare: () => {
        // set browser size...
        browser.manage().window().maximize();

    },

    capabilities: {
        'browserName': 'chrome'
    },

    "dependencies": {
        "protractor": "5.3.2",
        "chance": "^0.7.5",
        "jasmine-spec-reporter": "^2.4.0",
        "protractor-flake": "3.0.1"
    },
};
