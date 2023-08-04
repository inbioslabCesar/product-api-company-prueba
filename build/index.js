"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])(); //acepta el express

app.listen(4000); //se mantenga escuchando en el puerto 3000
console.log('Server Listen on port', 4000);