var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: "GuilinZ/leecode",
    token: "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"
});

app.use('/myapp', nuts.router);
app.listen(4000);