function hbsHelpers(hbs) {
    return hbs.create({
        layoutsDir: './web/views/layouts',
        defaultLayout: 'layout.hbs',
        helpers: {
            inc: function(value, options) {
                return parseInt(value) + 1;
            },
            ifThird: function(index, options) {
                if (index % 3 == 0) {
                    return options.fn(this);
                } else {
                    return options.inverse(this);
                }
            }
        }
    });
}

module.exports = hbsHelpers;