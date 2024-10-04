/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/conversion.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDecimalToHex": () => (/* binding */ convertDecimalToHex),
/* harmony export */   "convertHexToDecimal": () => (/* binding */ convertHexToDecimal),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "hsvToRgb": () => (/* binding */ hsvToRgb),
/* harmony export */   "numberInputToObject": () => (/* binding */ numberInputToObject),
/* harmony export */   "parseIntFromHex": () => (/* binding */ parseIntFromHex),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* binding */ rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* binding */ rgbToHsv),
/* harmony export */   "rgbToRgb": () => (/* binding */ rgbToRgb),
/* harmony export */   "rgbaToArgbHex": () => (/* binding */ rgbaToArgbHex),
/* harmony export */   "rgbaToHex": () => (/* binding */ rgbaToHex)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255) * 255,
        g: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255) * 255,
        b: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360);
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    l = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360) * 6;
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    v = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "names": () => (/* binding */ names)
/* harmony export */ });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/format-input.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputToRGB": () => (/* binding */ inputToRGB),
/* harmony export */   "isValidCSSUnit": () => (/* binding */ isValidCSSUnit),
/* harmony export */   "stringInputToObject": () => (/* binding */ stringInputToObject)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToRgb)(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            v = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.v);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb)(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            l = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.l);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hslToRgb)(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = (0,_util__WEBPACK_IMPORTED_MODULE_1__.boundAlpha)(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinyColor": () => (/* binding */ TinyColor),
/* harmony export */   "tinycolor": () => (/* binding */ tinycolor)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");




var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.numberInputToObject)(color);
        }
        this.originalInput = color;
        var rgb = (0,_format_input__WEBPACK_IMPORTED_MODULE_1__.inputToRGB)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = (0,_util__WEBPACK_IMPORTED_MODULE_2__.boundAlpha)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbaToHex)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_3__.names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/util.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bound01": () => (/* binding */ bound01),
/* harmony export */   "boundAlpha": () => (/* binding */ boundAlpha),
/* harmony export */   "clamp01": () => (/* binding */ clamp01),
/* harmony export */   "convertToPercentage": () => (/* binding */ convertToPercentage),
/* harmony export */   "isOnePointZero": () => (/* binding */ isOnePointZero),
/* harmony export */   "isPercentage": () => (/* binding */ isPercentage),
/* harmony export */   "pad2": () => (/* binding */ pad2)
/* harmony export */ });
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "./src/config/commands.ts":
/*!********************************!*\
  !*** ./src/config/commands.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commands": () => (/* binding */ commands)
/* harmony export */ });
const commands = {
    generalSettings: 'generalSettings',
    export: 'export',
    sendSettings: 'sendSettings',
    urlExport: 'urlExport',
    help: 'help',
    demo: 'demo',
    openUrl: 'openUrl',
    reset: 'reset',
    saveSettings: 'saveSettings',
    closePlugin: 'closePlugin'
};


/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* istanbul ignore file */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ui: {
        generalSettings: {
            width: 550,
            height: 755
        },
        export: {
            width: 550,
            height: 356
        },
        urlExport: {
            width: 550,
            height: 650
        }
    },
    key: {
        lastVersionSettingsOpened: 'lastVersionSettingsOpened',
        fileId: 'fileId',
        settings: 'settings',
        extensionPluginData: 'org.lukasoppermann.figmaDesignTokens',
        extensionFigmaStyleId: 'styleId',
        extensionVariableStyleId: 'variableId',
        extensionAlias: 'alias',
        authType: {
            token: 'token',
            gitlabToken: 'gitlab_token',
            gitlabCommit: 'gitlab_commit',
            basic: 'Basic',
            bearer: 'Bearer'
        }
    },
    exclusionPrefixDefault: ['_', '.'],
    fileExtensions: [
        {
            label: '.tokens.json',
            value: '.tokens.json'
        },
        {
            label: '.tokens',
            value: '.tokens'
        },
        {
            label: '.json',
            value: '.json'
        }
    ]
});


/***/ }),

/***/ "./src/config/defaultSettings.ts":
/*!***************************************!*\
  !*** ./src/config/defaultSettings.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSettings": () => (/* binding */ defaultSettings)
/* harmony export */ });
const defaultSettings = {
    filename: 'design-tokens',
    extension: '.tokens.json',
    nameConversion: 'default',
    tokenFormat: 'standard',
    compression: false,
    urlJsonCompression: true,
    serverUrl: undefined,
    eventType: 'update-tokens',
    accessToken: undefined,
    acceptHeader: 'application/vnd.github.everest-preview+json',
    contentType: 'text/plain;charset=UTF-8',
    authType: 'token',
    reference: 'main',
    exclusionPrefix: '',
    excludeExtensionProp: false,
    alias: 'alias, ref, reference',
    keyInName: false,
    prefixInName: true,
    modeReference: true,
    prefix: {
        color: 'color',
        gradient: 'gradient',
        typography: 'typography',
        font: 'font',
        effect: 'effect',
        grid: 'grid',
        border: 'border, borders',
        breakpoint: 'breakpoint, breakpoints',
        radius: 'radius, radii',
        size: 'size, sizes',
        spacing: 'spacing',
        motion: 'motion',
        opacity: 'opacity, opacities'
    },
    exports: {
        color: true,
        gradient: true,
        font: true,
        typography: true,
        effect: true,
        grid: true,
        border: true,
        breakpoint: true,
        radius: true,
        size: true,
        spacing: true,
        motion: true,
        opacity: true,
        variables: true
    }
};


/***/ }),

/***/ "./src/config/tokenTypes.ts":
/*!**********************************!*\
  !*** ./src/config/tokenTypes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenTypes": () => (/* binding */ tokenTypes)
/* harmony export */ });
/* istanbul ignore file */
const tokenTypes = {
    color: {
        label: 'Colors',
        key: 'color'
    },
    gradient: {
        label: 'Gradients',
        key: 'gradient'
    },
    font: {
        label: 'Font Styles',
        key: 'font'
    },
    typography: {
        label: 'Typography',
        key: 'typography',
        exclude: ['original']
    },
    effect: {
        label: 'Effects',
        key: 'effect'
    },
    grid: {
        label: 'Grids',
        key: 'grid'
    },
    border: {
        label: 'Borders',
        key: 'border'
    },
    breakpoint: {
        label: 'Breakpoints',
        key: 'breakpoint'
    },
    radius: {
        label: 'Radii',
        key: 'radius'
    },
    size: {
        label: 'Sizes',
        key: 'size'
    },
    spacing: {
        label: 'Spacing',
        key: 'spacing'
    },
    motion: {
        label: 'Motion',
        key: 'motion'
    },
    opacity: {
        label: 'Opacity',
        key: 'opacity'
    },
    variables: {
        label: 'Figma Variables (BETA)',
        key: 'variables',
        exclude: ['original']
    }
};


/***/ }),

/***/ "./src/extractor/extractBorders.ts":
/*!*****************************************!*\
  !*** ./src/extractor/extractBorders.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const strokeJoins = {
    MITER: 'miter',
    BEVEL: 'bevel',
    ROUND: 'round'
};
const strokeAligns = {
    CENTER: 'center',
    INSIDE: 'inside',
    OUTSIDE: 'outside'
};
const extractBorders = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray))
        // remove nodes with no border property
        .filter(node => node.strokes.length > 0)
        // convert borders
        .map(node => ({
        name: node.name,
        category: 'border',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.border.key,
        description: node.description || null,
        values: {
            strokeAlign: {
                value: strokeAligns[node.strokeAlign],
                type: 'string'
            },
            dashPattern: {
                value: [...(node.dashPattern !== undefined && node.dashPattern.length > 0 ? node.dashPattern : [0, 0])],
                type: 'string'
            },
            strokeCap: {
                value: ((typeof node.strokeCap === 'string') ? node.strokeCap.toLowerCase() : 'mixed'),
                type: 'string'
            },
            strokeJoin: {
                value: strokeJoins[node.strokeJoin],
                type: 'string'
            },
            strokeMiterLimit: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(node.strokeMiterLimit),
                unit: 'degree',
                type: 'number'
            },
            // strokeStyleId: {
            //   value: node.strokeStyleId
            // },
            strokeWeight: {
                value: node.strokeWeight,
                unit: 'pixel',
                type: 'number'
            },
            stroke: {
                value: node.strokes[0],
                type: 'color'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.border.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractBorders);


/***/ }),

/***/ "./src/extractor/extractBreakpoints.ts":
/*!*********************************************!*\
  !*** ./src/extractor/extractBreakpoints.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractBreakpoints = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray)).map(node => ({
        name: node.name,
        category: 'breakpoint',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.breakpoint.key,
        description: node.description || null,
        values: {
            width: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.width, 2),
                unit: 'pixel',
                type: 'number'
            },
            height: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.height, 2),
                unit: 'pixel',
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.breakpoint.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractBreakpoints);


/***/ }),

/***/ "./src/extractor/extractColors.ts":
/*!****************************************!*\
  !*** ./src/extractor/extractColors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_convertColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/convertColor */ "./src/utilities/convertColor.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const transparentFill = {
    fill: {
        value: { r: 0, g: 0, b: 0, a: 0 },
        type: 'color',
        blendMode: 'normal'
    }
};
const parseDescription = (description = '', aliasArray) => {
    aliasArray = !aliasArray || aliasArray.filter(i => i).length === 0 ? ['Ref:'] : aliasArray;
    const regex = new RegExp('(' + aliasArray.join('|').toLowerCase() + ')' + ':?\\s');
    // split description in lines
    let alias;
    const descriptionLines = description.split(/\r?\n/)
        // find match
        .filter(line => {
        if (line.toLowerCase().match(regex)) {
            alias = line.toLowerCase().replace(regex, '').trim();
            return false;
        }
        return true;
    });
    // return object
    return {
        alias: alias,
        description: descriptionLines.join('\n')
    };
};
const addAlias = (alias) => alias ? ({ [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionAlias]: alias }) : ({});
const gradientType = {
    GRADIENT_LINEAR: 'linear',
    GRADIENT_RADIAL: 'radial',
    GRADIENT_ANGULAR: 'angular',
    GRADIENT_DIAMOND: 'diamond'
};
const isGradient = (paint) => ['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'].includes(paint === null || paint === void 0 ? void 0 : paint.type);
const rotationFromMatrix = ([[x1, y1], [x2, y2]]) => {
    // https://stackoverflow.com/questions/24909586/find-rotation-angle-for-affine-transform
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180.0 / Math.PI) + 315;
    return angle > 360 ? angle - 360 : angle;
};
const extractFills = (paint) => {
    var _a;
    if (paint.type === 'SOLID') {
        return {
            fill: {
                value: (0,_utilities_convertColor__WEBPACK_IMPORTED_MODULE_1__.convertPaintToRgba)(paint),
                type: 'color',
                blendMode: ((_a = paint.blendMode) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'normal'
            }
        };
    }
    if (['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'].includes(paint.type)) {
        return {
            gradientType: {
                value: gradientType[paint.type],
                type: 'string'
            },
            rotation: {
                // https://stackoverflow.com/questions/24909586/find-rotation-angle-for-affine-transform
                value: rotationFromMatrix(paint.gradientTransform),
                type: 'number',
                unit: 'degree'
            },
            stops: paint.gradientStops.map(stop => ({
                position: {
                    value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_2__["default"])(stop.position),
                    type: 'number'
                },
                color: {
                    value: (0,_utilities_convertColor__WEBPACK_IMPORTED_MODULE_1__.roundRgba)(stop.color),
                    type: 'color'
                }
            })),
            opacity: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_2__["default"])(paint.opacity),
                type: 'number'
            }
        };
    }
    // return null if no matching type
    /* istanbul ignore next */
    return null;
};
const extractColors = (tokenNodes, prefixArray) => {
    // get all paint styles
    return tokenNodes
        .reduce((previousValue, node) => {
        // ignore image-only fills
        const paintsAfterImageFilter = node.paints.filter(paint => paint.type !== 'IMAGE');
        if (node.paints.length && paintsAfterImageFilter.length === 0) {
            return previousValue;
        }
        // remove images fills from tokens
        node.paints = paintsAfterImageFilter;
        const { alias, description } = parseDescription(node.description, prefixArray.alias);
        const nodeIsGradient = isGradient(node.paints[0]);
        const values = node.paints.length ? node.paints.map(paint => extractFills(paint)) : [transparentFill];
        return [
            ...previousValue,
            {
                name: `${nodeIsGradient ? prefixArray.gradient[0] : prefixArray.color[0]}/${node.name}`,
                category: nodeIsGradient ? 'gradient' : 'color',
                exportKey: (nodeIsGradient ? _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.gradient.key : _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.color.key),
                description: description,
                values,
                extensions: {
                    [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: Object.assign({ [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionFigmaStyleId]: node.id, exportKey: (nodeIsGradient ? _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.gradient.key : _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.color.key) }, (addAlias(alias)))
                }
            }
        ];
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractColors);


/***/ }),

/***/ "./src/extractor/extractEffects.ts":
/*!*****************************************!*\
  !*** ./src/extractor/extractEffects.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_convertColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/convertColor */ "./src/utilities/convertColor.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");



const effectType = {
    LAYER_BLUR: 'layerBlur',
    BACKGROUND_BLUR: 'backgroundBlur',
    DROP_SHADOW: 'dropShadow',
    INNER_SHADOW: 'innerShadow'
};
const blurValues = (effect) => ({
    effectType: {
        value: effectType[effect.type],
        type: 'string'
    },
    radius: {
        value: effect.radius,
        unit: 'pixel',
        type: 'number'
    }
});
const shadowValues = effect => ({
    effectType: {
        value: effectType[effect.type],
        type: 'string'
    },
    radius: {
        value: effect.radius,
        unit: 'pixel',
        type: 'number'
    },
    color: {
        value: (0,_utilities_convertColor__WEBPACK_IMPORTED_MODULE_1__.roundRgba)(effect.color),
        type: 'color'
    },
    offset: {
        x: {
            value: effect.offset.x,
            unit: 'pixel',
            type: 'number'
        },
        y: {
            value: effect.offset.y,
            unit: 'pixel',
            type: 'number'
        }
    },
    spread: {
        value: effect.spread,
        unit: 'pixel',
        type: 'number'
    }
});
const extractEffects = (tokenNodes, prefixArray) => {
    // get effect styles
    return tokenNodes
        // remove tokens with no grid
        .filter(node => node.effects.length > 0)
        // build
        .map(node => ({
        name: `${prefixArray[0]}/${node.name}`,
        category: 'effect',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.effect.key,
        description: node.description || null,
        values: node.effects.map((effect) => effect.type === 'LAYER_BLUR' || effect.type === 'BACKGROUND_BLUR'
            ? blurValues(effect)
            : shadowValues(effect)),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionPluginData]: {
                [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionFigmaStyleId]: node.id,
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.effect.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEffects);


/***/ }),

/***/ "./src/extractor/extractFonts.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractFonts.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");



const textDecorations = {
    NONE: 'none',
    UNDERLINE: 'underline',
    STRIKETHROUGH: 'line-through'
};
const textCases = {
    ORIGINAL: 'none',
    UPPER: 'uppercase',
    LOWER: 'lowercase',
    TITLE: 'capitalize',
    SMALL_CAPS: 'small-caps'
};
const fontWeights = {
    100: 100,
    thin: 100,
    w1: 100,
    200: 200,
    w2: 200,
    extralight: 200,
    ultralight: 200,
    extraleicht: 200,
    300: 300,
    light: 300,
    leicht: 300,
    w3: 300,
    400: 400,
    normal: 400,
    regular: 400,
    buch: 400,
    w4: 400,
    500: 500,
    medium: 500,
    kraeftig: 500,
    kräftig: 500,
    w5: 500,
    600: 600,
    semibold: 600,
    demibold: 600,
    halbfett: 600,
    w6: 600,
    700: 700,
    bold: 700,
    dreiviertelfett: 700,
    w7: 700,
    800: 800,
    extrabold: 800,
    ultabold: 800,
    fett: 800,
    w8: 800,
    900: 900,
    black: 900,
    heavy: 900,
    super: 900,
    extrafett: 900,
    w9: 900
};
const fontStretch = {
    normal: 'normal',
    condensed: 'condensed',
    expanded: 'expanded',
    extended: 'expanded'
};
const fontStyles = {
    normal: 'normal',
    italic: 'italic',
    kursiv: 'italic',
    oblique: 'oblique'
};
const parseFontWeight = (fontStyle) => {
    const parts = fontStyle.toLowerCase().split(' ');
    let weight = parts[0];
    // merge if space after extra
    if (['extra', 'ultra', 'semi', 'demi'].includes(parts[0]) && ['bold', 'light'].includes(parts[1])) {
        weight = `${parts[0]}${parts[1]}`;
    }
    return fontWeights[weight] || 400;
};
const parseFontStretch = (fontStyle) => {
    const parts = fontStyle.toLowerCase().split(' ');
    return fontStretch[parts[parts.length - 1]] || fontStretch[parts[parts.length - 2]] || 'normal';
};
const parseFontStyle = (fontStyle) => {
    const part = fontStyle.toLowerCase().split(' ').pop();
    return fontStyles[part] || 'normal';
};
const extractFonts = (tokenNodes, prefixArray) => {
    // get raw text styles
    return tokenNodes.map(node => ({
        name: `${prefixArray[0]}/${node.name}`,
        category: 'font',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.font.key,
        description: node.description || undefined,
        values: {
            fontSize: {
                value: node.fontSize,
                unit: 'pixel',
                type: 'number'
            },
            textDecoration: {
                value: textDecorations[node.textDecoration],
                type: 'string'
            },
            fontFamily: {
                value: node.fontName.family,
                type: 'string'
            },
            fontWeight: {
                value: parseFontWeight(node.fontName.style),
                type: 'number'
            },
            fontStyle: {
                value: parseFontStyle(node.fontName.style),
                type: 'string'
            },
            fontStretch: {
                value: parseFontStretch(node.fontName.style),
                type: 'string'
            },
            _fontStyleOld: {
                value: node.fontName.style,
                type: 'string'
            },
            letterSpacing: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.letterSpacing.value),
                unit: (node.letterSpacing.unit.toLowerCase() === 'pixels' ? 'pixel' : node.letterSpacing.unit.toLowerCase()),
                type: 'number'
            },
            lineHeight: {
                // @ts-ignore
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.lineHeight.value) || 'normal',
                unit: node.lineHeight.unit.toLowerCase() === 'pixels' ? 'pixel' : node.lineHeight.unit.toLowerCase(),
                type: (Object.prototype.hasOwnProperty.call(node.lineHeight, 'value') ? 'number' : 'string')
            },
            paragraphIndent: {
                value: node.paragraphIndent,
                unit: 'pixel',
                type: 'number'
            },
            paragraphSpacing: {
                value: node.paragraphSpacing,
                unit: 'pixel',
                type: 'number'
            },
            textCase: {
                value: textCases[node.textCase] || 'none',
                type: 'string'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionPluginData]: {
                [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionFigmaStyleId]: node.id,
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.font.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractFonts);


/***/ }),

/***/ "./src/extractor/extractGrids.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractGrids.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");


const gridValues = (grid) => ({
    pattern: {
        value: grid.pattern.toLowerCase(),
        type: 'string'
    },
    sectionSize: {
        value: grid.sectionSize,
        unit: 'pixel',
        type: 'number'
    }
});
const getCount = count => {
    if (count === Infinity) {
        return {
            value: 'auto',
            type: 'string'
        };
    }
    return {
        value: count,
        type: 'number'
    };
};
const rowColumnValues = (grid) => (Object.assign(Object.assign(Object.assign({ pattern: {
        value: grid.pattern.toLowerCase(),
        type: 'string'
    } }, (grid.sectionSize !== undefined && {
    sectionSize: {
        value: grid.sectionSize,
        unit: 'pixel',
        type: 'number'
    }
})), { gutterSize: {
        value: grid.gutterSize,
        unit: 'pixel',
        type: 'number'
    }, alignment: {
        value: grid.alignment.toLowerCase(),
        type: 'string'
    }, count: getCount(grid.count) }), (grid.offset !== undefined && {
    offset: {
        value: grid.offset,
        unit: 'pixel',
        type: 'number'
    }
})));
const extractGrids = (tokenNodes, prefixArray) => {
    // get grid styles
    return tokenNodes
        // remove tokens with no grid
        .filter(node => node.layoutGrids.length > 0)
        // build
        .map(node => ({
        name: `${prefixArray[0]}/${node.name}`,
        category: 'grid',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.grid.key,
        description: node.description || null,
        values: node.layoutGrids.map((grid) => grid.pattern === 'GRID' ? gridValues(grid) : rowColumnValues(grid)),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.extensionPluginData]: {
                [_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.extensionFigmaStyleId]: node.id,
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.grid.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractGrids);


/***/ }),

/***/ "./src/extractor/extractMotion.ts":
/*!****************************************!*\
  !*** ./src/extractor/extractMotion.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__testing": () => (/* binding */ __testing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");



const direction = (transition) => {
    if (Object.prototype.hasOwnProperty.call(transition, 'direction')) {
        return {
            direction: {
                value: transition.direction.toLowerCase(),
                type: 'string'
            }
        };
    }
};
const easings = {
    CUSTOM_CUBIC_BEZIER: {
        type: 'custom-cubicBezier',
        curveType: 'cubicBezier',
        easing: undefined
    },
    CUSTOM_SPRING: {
        type: 'custom-spring',
        curveType: 'spring',
        easing: undefined
    },
    LINEAR: {
        type: 'linear',
        curveType: 'cubicBezier',
        easing: {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        }
    },
    EASE_IN: {
        type: 'ease-in',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.41999998688697815,
            y1: 0,
            x2: 1,
            y2: 1
        }
    },
    EASE_OUT: {
        type: 'ease-out',
        curveType: 'cubicBezier',
        easing: {
            x1: 0,
            y1: 0,
            x2: 0.5799999833106995,
            y2: 1
        }
    },
    EASE_IN_AND_OUT: {
        type: 'ease-in-out',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.41999998688697815,
            y1: 0,
            x2: 0.5799999833106995,
            y2: 1
        }
    },
    EASE_IN_BACK: {
        type: 'ease-in-back',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.30000001192092896,
            y1: -0.05000000074505806,
            x2: 0.699999988079071,
            y2: -0.5
        }
    },
    EASE_OUT_BACK: {
        type: 'ease-out-back',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.44999998807907104,
            y1: 1.4500000476837158,
            x2: 0.800000011920929,
            y2: 1
        }
    },
    EASE_IN_AND_OUT_BACK: {
        type: 'ease-in-out-back',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.699999988079071,
            y1: -0.4000000059604645,
            x2: 0.4000000059604645,
            y2: 1.399999976158142
        }
    },
    BOUNCY: {
        type: 'bouncy',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 600,
            damping: 15
        }
    },
    GENTLE: {
        type: 'gentle',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 100,
            damping: 15
        }
    },
    QUICK: {
        type: 'quick',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 300,
            damping: 20
        }
    },
    SLOW: {
        type: 'slow',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 80,
            damping: 20
        }
    }
};
const formatEasingFunction = easingObject => {
    // spring curve
    if (easingObject.curveType === 'spring') {
        return {
            mass: {
                value: easingObject.easing.mass,
                type: 'number'
            },
            stiffness: {
                value: easingObject.easing.stiffness,
                type: 'number'
            },
            damping: {
                value: easingObject.easing.damping,
                type: 'number'
            }
        };
    }
    // spring bezier
    if (easingObject.curveType === 'cubicBezier') {
        return {
            x1: {
                // @ts-ignore
                value: easingObject.easing.x1,
                type: 'number'
            },
            x2: {
                // @ts-ignore
                value: easingObject.easing.x2,
                type: 'number'
            },
            y1: {
                // @ts-ignore
                value: easingObject.easing.y1,
                type: 'number'
            },
            y2: {
                // @ts-ignore
                value: easingObject.easing.y2,
                type: 'number'
            }
        };
    }
};
const easing = (easing) => {
    // abort if invalid easing type
    if (!('type' in easing) || easings[easing.type] === undefined) {
        return undefined;
    }
    // return custom easing
    if (easing.type === 'CUSTOM_CUBIC_BEZIER') {
        // @ts-ignore
        easings.CUSTOM_CUBIC_BEZIER.easing = {
            x1: easing.easingFunctionCubicBezier.x1,
            y1: easing.easingFunctionCubicBezier.y1,
            x2: easing.easingFunctionCubicBezier.x2,
            y2: easing.easingFunctionCubicBezier.y2
        };
    }
    // TODO: remove when figma typings are updated
    // @ts-ignore
    if (easing.type === 'CUSTOM_SPRING') {
        // @ts-ignore
        easings.CUSTOM_SPRING.easing = {
            // @ts-ignore
            mass: easing.easingFunctionSpring.mass,
            // @ts-ignore
            stiffness: easing.easingFunctionSpring.stiffness,
            // @ts-ignore
            damping: easing.easingFunctionSpring.damping
        };
    }
    return {
        easingType: {
            value: easings[easing.type].type,
            type: 'string'
        },
        easingCurveType: {
            value: easings[easing.type].curveType,
            type: 'string'
        },
        easingFunction: formatEasingFunction(easings[easing.type])
    };
};
const filterValidMotionTokens = (node) => {
    var _a;
    const validEasingTypes = Object.keys(easings);
    // @ts-ignore
    if (node.reactions.length > 0 && ((_a = node.reactions[0].action) === null || _a === void 0 ? void 0 : _a.type) === 'NODE' && node.reactions[0].action.transition !== null && validEasingTypes.includes(node.reactions[0].action.transition.easing.type)) {
        return true;
    }
    return false;
};
const extractMotion = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_1__.filterByPrefix)(prefixArray))
        // filter to only include items which have a transition property
        .filter(filterValidMotionTokens)
        // retrieve values
        .map((node) => ({
        name: node.name,
        category: 'motion',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.motion.key,
        description: node.description || null,
        values: Object.assign(Object.assign({ transitionType: {
                value: node.reactions[0].action.transition.type.toLocaleLowerCase(),
                type: 'string'
            }, duration: {
                value: Math.round((node.reactions[0].action.transition.duration + Number.EPSILON) * 1000) / 1000,
                unit: 's',
                type: 'number'
            } }, easing(node.reactions[0].action.transition.easing)), direction(node.reactions[0].action.transition)),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.motion.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractMotion);
const __testing = {
    easing: easing
};


/***/ }),

/***/ "./src/extractor/extractOpacities.ts":
/*!*******************************************!*\
  !*** ./src/extractor/extractOpacities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractOpacities = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray)).map(node => ({
        name: node.name,
        category: 'opacity',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.opacity.key,
        description: node.description || null,
        values: {
            opacity: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.opacity, 2),
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.opacity.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractOpacities);


/***/ }),

/***/ "./src/extractor/extractRadii.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractRadii.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractRadii = (tokenNodes, prefixArray) => {
    // get the type of the corner radius
    const getRadiusType = radius => {
        if (typeof radius === 'number') {
            return 'single';
        }
        return 'mixed';
    };
    // get the individual radii
    const getRadii = (node) => ({
        topLeft: {
            value: node.topLeftRadius || 0,
            unit: 'pixel',
            type: 'number'
        },
        topRight: {
            value: node.topRightRadius || 0,
            unit: 'pixel',
            type: 'number'
        },
        bottomRight: {
            value: node.bottomRightRadius || 0,
            unit: 'pixel',
            type: 'number'
        },
        bottomLeft: {
            value: node.bottomLeftRadius || 0,
            unit: 'pixel',
            type: 'number'
        }
    });
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray))
        .map(node => ({
        name: node.name,
        category: 'radius',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.radius.key,
        description: node.description || null,
        values: Object.assign(Object.assign({}, (typeof node.cornerRadius === 'number' && {
            radius: {
                value: node.cornerRadius,
                unit: 'pixel',
                type: 'number'
            }
        })), { radiusType: {
                value: getRadiusType(node.cornerRadius),
                type: 'string'
            }, radii: getRadii(node), smoothing: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.cornerSmoothing, 2),
                comment: 'Percent as decimal from 0.0 - 1.0',
                type: 'number'
            } }),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.radius.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractRadii);


/***/ }),

/***/ "./src/extractor/extractSizes.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractSizes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractSizes = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray)).map(node => ({
        name: node.name,
        category: 'size',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.size.key,
        description: node.description || null,
        values: {
            width: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.width, 2),
                unit: 'pixel',
                type: 'number'
            },
            height: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.height, 2),
                unit: 'pixel',
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.size.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractSizes);


/***/ }),

/***/ "./src/extractor/extractSpacing.ts":
/*!*****************************************!*\
  !*** ./src/extractor/extractSpacing.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractSpacing = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray))
        .map(node => ({
        name: node.name,
        category: 'spacing',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.spacing.key,
        description: node.description || null,
        values: {
            top: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingTop, 2),
                unit: 'pixel',
                type: 'number'
            },
            right: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingRight, 2),
                unit: 'pixel',
                type: 'number'
            },
            bottom: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingBottom, 2),
                unit: 'pixel',
                type: 'number'
            },
            left: {
                value: (0,_utilities_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingLeft, 2),
                unit: 'pixel',
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.spacing.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractSpacing);


/***/ }),

/***/ "./src/extractor/extractUtilities.ts":
/*!*******************************************!*\
  !*** ./src/extractor/extractUtilities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterByPrefix": () => (/* binding */ filterByPrefix)
/* harmony export */ });
const filterByPrefix = (prefixArray) => node => {
    // abort if wrong argument
    if (!Array.isArray(prefixArray))
        return;
    // extract prefix from node name
    const nodePrefix = node.name.substr(0, node.name.indexOf('/')).replace(/\s+/g, '');
    // abort if no prefix
    if (nodePrefix.length === 0)
        return;
    // return array
    return prefixArray.includes(nodePrefix);
};


/***/ }),

/***/ "./src/utilities/accessToken.ts":
/*!**************************************!*\
  !*** ./src/utilities/accessToken.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAccessToken": () => (/* binding */ getAccessToken),
/* harmony export */   "setAccessToken": () => (/* binding */ setAccessToken)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @name getAccessToken
 * @description returns the access token for the current file or undefined
 * @param fileId {string} — ID of the current file
 */
const getAccessToken = (fileId) => __awaiter(void 0, void 0, void 0, function* () {
    // get all access tokens
    const accessTokens = yield figma.clientStorage.getAsync('accessTokens');
    // if access tokens object is present
    if (accessTokens !== undefined && accessTokens instanceof Object) {
        // retrieve the access token from the cache
        const accessToken = accessTokens[fileId];
        // return the access token or an empty string
        return accessToken || '';
    }
    // return empty string if no token is stored
    return '';
});
/**
 * @name setAccessToken
 * @description store the access token for the current given file in the user clientStorage
 * @param fileId {string} — ID of the current file
 * @param fileId {string} — access token
 */
/* istanbul ignore next */
const setAccessToken = (fileId, accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    // get the access token object
    const accessTokens = (yield figma.clientStorage.getAsync('accessTokens')) || {};
    // merge tokens
    const mergedTokens = Object.assign(Object.assign({}, accessTokens), { [fileId]: accessToken });
    // merge the new token into the object
    return yield figma.clientStorage.setAsync('accessTokens', mergedTokens);
});



/***/ }),

/***/ "./src/utilities/buildFigmaData.ts":
/*!*****************************************!*\
  !*** ./src/utilities/buildFigmaData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterByNameProperty */ "./src/utilities/filterByNameProperty.ts");
/* harmony import */ var _getPaintStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPaintStyles */ "./src/utilities/getPaintStyles.ts");
/* harmony import */ var _getGridStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getGridStyles */ "./src/utilities/getGridStyles.ts");
/* harmony import */ var _getTokenNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTokenNodes */ "./src/utilities/getTokenNodes.ts");
/* harmony import */ var _getTextStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getTextStyles */ "./src/utilities/getTextStyles.ts");
/* harmony import */ var _getEffectStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getEffectStyles */ "./src/utilities/getEffectStyles.ts");






/**
 * @function buildFigmaData – return an object with all styles & frame to use for export
 * @param {PluginAPI} figma — the figma PluginAPI object
 * @param options – options object
 */
const buildFigmaData = (figma, settings) => {
    // use spread operator because the original is readOnly
    const tokenFrames = (0,_getTokenNodes__WEBPACK_IMPORTED_MODULE_3__["default"])([...figma.root.children]);
    // get user exclusion prefixes
    const userExclusionPrefixes = settings.exclusionPrefix.split(',').map(item => item.replace(/\s+/g, ''));
    // get data from figma
    return {
        tokenFrames: tokenFrames,
        paintStyles: (0,_getPaintStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(figma.getLocalPaintStyles()).filter(item => (0,_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes)),
        gridStyles: (0,_getGridStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(figma.getLocalGridStyles()).filter(item => (0,_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes)),
        textStyles: (0,_getTextStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(figma.getLocalTextStyles()).filter(item => (0,_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes)),
        effectStyles: (0,_getEffectStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(figma.getLocalEffectStyles()).filter(item => (0,_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes))
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFigmaData);


/***/ }),

/***/ "./src/utilities/changeNotation.ts":
/*!*****************************************!*\
  !*** ./src/utilities/changeNotation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeNotation": () => (/* binding */ changeNotation)
/* harmony export */ });
const changeNotation = (name, currentDelimiter = '/', desiredDelimiter = '.') => {
    return name.split(currentDelimiter).join(desiredDelimiter).toLowerCase();
};


/***/ }),

/***/ "./src/utilities/convertColor.ts":
/*!***************************************!*\
  !*** ./src/utilities/convertColor.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertPaintToRgba": () => (/* binding */ convertPaintToRgba),
/* harmony export */   "convertRgbaObjectToString": () => (/* binding */ convertRgbaObjectToString),
/* harmony export */   "rgbaObjectToHex8": () => (/* binding */ rgbaObjectToHex8),
/* harmony export */   "roundRgba": () => (/* binding */ roundRgba)
/* harmony export */ });
/* harmony import */ var _roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");


const roundRgba = (rgba, opacity) => {
    var _a;
    return ({
        r: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(rgba.r * 255, 0),
        g: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(rgba.g * 255, 0),
        b: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(rgba.b * 255, 0),
        a: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])((_a = opacity !== null && opacity !== void 0 ? opacity : rgba.a) !== null && _a !== void 0 ? _a : 1)
    });
};
const convertPaintToRgba = (paint) => {
    if (paint.type === 'SOLID' && paint.visible === true) {
        return roundRgba(paint.color, paint.opacity);
    }
    return null;
};
const convertRgbaObjectToString = (rgbaObject) => `rgba(${rgbaObject.r}, ${rgbaObject.g}, ${rgbaObject.b}, ${rgbaObject.a})`;
const rgbaObjectToHex8 = (rgbaObject) => {
    // return value
    return (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__.tinycolor)(convertRgbaObjectToString(rgbaObject)).toHex8String();
};


/***/ }),

/***/ "./src/utilities/extractTokenNodeValues.ts":
/*!*************************************************!*\
  !*** ./src/utilities/extractTokenNodeValues.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _convertColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertColor */ "./src/utilities/convertColor.ts");

/**
 * Return an array of solid stroke colors
 */
const getSolidStrokes = (paints) => {
    // clone without reference
    return [...paints]
        .map(paint => (0,_convertColor__WEBPACK_IMPORTED_MODULE_0__.convertPaintToRgba)(paint))
        .filter(paint => paint != null);
};
/**
 * extractTokenNodeValues
 * @param node: SceneNode
 * @returns node object
 */
const extractTokenNodeValues = (node) => {
    var _a;
    return ({
        name: node.name,
        // @ts-ignore
        description: node.description || undefined,
        bottomLeftRadius: node.bottomLeftRadius,
        bottomRightRadius: node.bottomRightRadius,
        topLeftRadius: node.topLeftRadius,
        topRightRadius: node.topRightRadius,
        cornerRadius: node.cornerRadius || undefined,
        cornerSmoothing: node.cornerSmoothing,
        strokes: getSolidStrokes(node.strokes),
        strokeWeight: node.strokeWeight,
        strokeStyleId: node.strokeStyleId,
        strokeMiterLimit: node.strokeMiterLimit,
        strokeJoin: node.strokeJoin,
        strokeCap: node.strokeCap,
        dashPattern: node.dashPattern,
        strokeAlign: node.strokeAlign,
        width: node.width,
        height: node.height,
        reactions: node.reactions || undefined,
        // @ts-ignore
        paddingTop: node.paddingTop || 0,
        // @ts-ignore
        paddingRight: node.paddingRight || 0,
        // @ts-ignore
        paddingBottom: node.paddingBottom || 0,
        // @ts-ignore
        paddingLeft: node.paddingLeft || 0,
        opacity: (_a = node.opacity) !== null && _a !== void 0 ? _a : 1
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractTokenNodeValues);


/***/ }),

/***/ "./src/utilities/filterByNameProperty.ts":
/*!***********************************************!*\
  !*** ./src/utilities/filterByNameProperty.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");

const exclusionPrefix = (exclusionPrefixStrings) => {
    return [
        ..._config_config__WEBPACK_IMPORTED_MODULE_0__["default"].exclusionPrefixDefault,
        ...exclusionPrefixStrings
    ];
};
const filterByPropertyName = (object, exclusionPrefixStrings) => !exclusionPrefix(exclusionPrefixStrings).includes(object.name.trim().substr(0, 1));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterByPropertyName);


/***/ }),

/***/ "./src/utilities/getEffectStyles.ts":
/*!******************************************!*\
  !*** ./src/utilities/getEffectStyles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getEffectStyles
 * @param {Array<EffectStyle>} styles – the effectStyle from the figma file
 */
const getEffectStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            effects: style.effects
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEffectStyles);


/***/ }),

/***/ "./src/utilities/getFileId.ts":
/*!************************************!*\
  !*** ./src/utilities/getFileId.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");

const getFileId = (figma) => {
    let fileId = figma.root.getPluginData(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.fileId);
    // set plugin id if it does not exist
    if (fileId === undefined || fileId === '') {
        figma.root.setPluginData(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.fileId, figma.root.name + ' ' + Math.floor(Math.random() * 1000000000));
        // grab file ID
        fileId = figma.root.getPluginData(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.fileId);
    }
    return fileId;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFileId);


/***/ }),

/***/ "./src/utilities/getGridStyles.ts":
/*!****************************************!*\
  !*** ./src/utilities/getGridStyles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getGridStyles
 * @param {Array} gridStyles – the gridStyles from the figma file
 */
const getGridStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            layoutGrids: style.layoutGrids
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGridStyles);


/***/ }),

/***/ "./src/utilities/getPaintStyles.ts":
/*!*****************************************!*\
  !*** ./src/utilities/getPaintStyles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getPaintStyles
 * @param {Array} paintStyles – the paintStyles from the figma file (somehow still connected)
 */
const getPaintStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            paints: style.paints
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaintStyles);


/***/ }),

/***/ "./src/utilities/getTextStyles.ts":
/*!****************************************!*\
  !*** ./src/utilities/getTextStyles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getTextStyles
 * @param {Array<TextStyle>} styles – the paintStyles from the figma file (somehow still connected)
 */
const getTextStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            fontSize: style.fontSize,
            textDecoration: style.textDecoration,
            fontName: style.fontName,
            letterSpacing: style.letterSpacing,
            lineHeight: style.lineHeight,
            paragraphIndent: style.paragraphIndent,
            paragraphSpacing: style.paragraphSpacing,
            textCase: style.textCase
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTextStyles);


/***/ }),

/***/ "./src/utilities/getTokenJson.ts":
/*!***************************************!*\
  !*** ./src/utilities/getTokenJson.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportRawTokenArray": () => (/* binding */ exportRawTokenArray)
/* harmony export */ });
/* harmony import */ var _extractor_extractColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extractor/extractColors */ "./src/extractor/extractColors.ts");
/* harmony import */ var _extractor_extractGrids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extractor/extractGrids */ "./src/extractor/extractGrids.ts");
/* harmony import */ var _extractor_extractFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extractor/extractFonts */ "./src/extractor/extractFonts.ts");
/* harmony import */ var _extractor_extractEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extractor/extractEffects */ "./src/extractor/extractEffects.ts");
/* harmony import */ var _extractor_extractMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extractor/extractMotion */ "./src/extractor/extractMotion.ts");
/* harmony import */ var _extractor_extractSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extractor/extractSizes */ "./src/extractor/extractSizes.ts");
/* harmony import */ var _extractor_extractSpacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extractor/extractSpacing */ "./src/extractor/extractSpacing.ts");
/* harmony import */ var _extractor_extractBorders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extractor/extractBorders */ "./src/extractor/extractBorders.ts");
/* harmony import */ var _extractor_extractRadii__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../extractor/extractRadii */ "./src/extractor/extractRadii.ts");
/* harmony import */ var _extractor_extractBreakpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../extractor/extractBreakpoints */ "./src/extractor/extractBreakpoints.ts");
/* harmony import */ var _extractor_extractOpacities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../extractor/extractOpacities */ "./src/extractor/extractOpacities.ts");
/* harmony import */ var _buildFigmaData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buildFigmaData */ "./src/utilities/buildFigmaData.ts");
/* harmony import */ var _getVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getVariables */ "./src/utilities/getVariables.ts");













const getPrefixArray = (prefixString = '') => prefixString.split(',').map(item => item.replace(/\s+/g, ''));
const exportRawTokenArray = (figma, settings) => {
    const figmaData = (0,_buildFigmaData__WEBPACK_IMPORTED_MODULE_11__["default"])(figma, settings);
    // get tokens
    return [
        ...(0,_extractor_extractSizes__WEBPACK_IMPORTED_MODULE_5__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.size)),
        ...(0,_extractor_extractBreakpoints__WEBPACK_IMPORTED_MODULE_9__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.breakpoint)),
        ...(0,_extractor_extractSpacing__WEBPACK_IMPORTED_MODULE_6__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.spacing)),
        ...(0,_extractor_extractBorders__WEBPACK_IMPORTED_MODULE_7__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.border)),
        ...(0,_extractor_extractRadii__WEBPACK_IMPORTED_MODULE_8__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.radius)),
        ...(0,_extractor_extractMotion__WEBPACK_IMPORTED_MODULE_4__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.motion)),
        ...(0,_extractor_extractOpacities__WEBPACK_IMPORTED_MODULE_10__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.opacity)),
        ...(0,_extractor_extractColors__WEBPACK_IMPORTED_MODULE_0__["default"])(figmaData.paintStyles, { color: getPrefixArray(settings.prefix.color), gradient: getPrefixArray(settings.prefix.gradient), alias: getPrefixArray(settings.alias) }),
        ...(0,_extractor_extractGrids__WEBPACK_IMPORTED_MODULE_1__["default"])(figmaData.gridStyles, getPrefixArray(settings.prefix.grid)),
        ...(0,_extractor_extractFonts__WEBPACK_IMPORTED_MODULE_2__["default"])(figmaData.textStyles, getPrefixArray(settings.prefix.font)),
        ...(0,_extractor_extractEffects__WEBPACK_IMPORTED_MODULE_3__["default"])(figmaData.effectStyles, getPrefixArray(settings.prefix.effect)),
        ...(0,_getVariables__WEBPACK_IMPORTED_MODULE_12__.getVariables)(figma, settings)
    ];
};


/***/ }),

/***/ "./src/utilities/getTokenNodes.ts":
/*!****************************************!*\
  !*** ./src/utilities/getTokenNodes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__testing": () => (/* binding */ __testing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _extractTokenNodeValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractTokenNodeValues */ "./src/utilities/extractTokenNodeValues.ts");
/* harmony import */ var _isTokenNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isTokenNode */ "./src/utilities/isTokenNode.ts");


// the name that token frames have
const tokenFrameName = '_tokens';
// check if a frame is a _token frame
const isTokenFrame = (node) => node.type === 'FRAME' && node.name.trim().toLowerCase().substr(0, tokenFrameName.length) === tokenFrameName;
// return only nodes that are frames
const getFrameNodes = (nodes) => [...nodes.map(page => page.findChildren(node => isTokenFrame(node))).reduce((flatten, arr) => [...flatten, ...arr])];
/**
 * getVariantName
 * creates the variant name of the parent and child name
 */
const getVariantName = (parentName, childName) => {
    // split into array
    childName = childName.split(',')
        // remove hidden names
        .filter(part => !['_', '.'].includes(part.trim().substr(0, 1)))
        // cleanup names, only return value part
        .map(part => part.split('=')[1])
        // combine
        .join('/');
    // return full name
    return `${parentName}/${childName}`;
};
/**
 * Returns all frames from the file that have a name that starts with _tokens or the user defined token specifier
 *
 * @param pages PageNodes
 */
const getTokenNodes = (pages) => {
    // get token frames
    const tokenFrames = getFrameNodes(pages);
    // get all children of token frames
    return tokenFrames.map(frame => frame
        // check if children are of valid types
        .findAll(
    /* istanbul ignore next */
    node => (0,_isTokenNode__WEBPACK_IMPORTED_MODULE_1__["default"])(node)))
        // merges all children into one array
        .reduce((flatten, arr) => [...flatten, ...arr], [])
        // unpack variants & warn about deprecated types
        .map((item) => {
        if (item.type === 'RECTANGLE' || item.type === 'FRAME') {
            console.warn('Please use only main components and variants, other types may be deprecated as tokens in the future');
        }
        // unpack variants
        if (item.type === 'COMPONENT_SET') {
            // TODO: Name is overwriting real object in figma
            // -> create clone and move to new array to return
            return item.children.map((child) => (Object.assign(Object.assign({}, (0,_extractTokenNodeValues__WEBPACK_IMPORTED_MODULE_0__["default"])(child)), { name: getVariantName(item.name, child.name) })));
        }
        // return normal item as array to unpack later
        // @ts-ignore
        return [(0,_extractTokenNodeValues__WEBPACK_IMPORTED_MODULE_0__["default"])(item)];
    })
        // merges the variant children into one array
        .reduce((flatten, arr) => [...flatten, ...arr], []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTokenNodes);
const __testing = {
    isTokenNode: _isTokenNode__WEBPACK_IMPORTED_MODULE_1__["default"],
    isTokenFrame: isTokenFrame
};


/***/ }),

/***/ "./src/utilities/getVariableTypeByValue.ts":
/*!*************************************************!*\
  !*** ./src/utilities/getVariableTypeByValue.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVariableTypeByValue": () => (/* binding */ getVariableTypeByValue)
/* harmony export */ });
const getVariableTypeByValue = (value) => {
    if (typeof value === 'boolean')
        return 'string';
    if (typeof value === 'number')
        return 'dimension';
    if (typeof value === 'object')
        return 'color';
    if (typeof value === 'string')
        return 'string';
};


/***/ }),

/***/ "./src/utilities/getVariables.ts":
/*!***************************************!*\
  !*** ./src/utilities/getVariables.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVariables": () => (/* binding */ getVariables)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _convertColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertColor */ "./src/utilities/convertColor.ts");
/* harmony import */ var _roundWithDecimals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _handleVariableAlias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleVariableAlias */ "./src/utilities/handleVariableAlias.ts");
/* harmony import */ var _processAliasModes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processAliasModes */ "./src/utilities/processAliasModes.ts");






const extractVariable = (variable, value, mode) => {
    let category = "color";
    let values = {};
    if (value.type === "VARIABLE_ALIAS") {
        return (0,_handleVariableAlias__WEBPACK_IMPORTED_MODULE_4__["default"])(variable, value, mode);
    }
    switch (variable.resolvedType) {
        case "COLOR":
            category = "color";
            values = {
                fill: {
                    value: (0,_convertColor__WEBPACK_IMPORTED_MODULE_2__.roundRgba)(value),
                    type: "color",
                    blendMode: "normal",
                },
            };
            break;
        case "FLOAT":
            category = "dimension";
            values = (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_3__["default"])(value, 2);
            break;
        case "STRING":
            category = "string";
            values = value;
            break;
        case "BOOLEAN":
            category = "boolean";
            values = value;
            break;
    }
    return {
        name: variable.name,
        description: variable.description || undefined,
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.variables.key,
        category,
        values,
    };
};
const getVariables = (figma, settings) => {
    const excludedCollectionIds = figma.variables
        .getLocalVariableCollections()
        .filter((collection) => ![".", "_", ...settings.exclusionPrefix.split(",")].includes(collection.name.charAt(0)))
        .map((collection) => collection.id);
    // get collections
    const collections = Object.fromEntries(figma.variables
        .getLocalVariableCollections()
        .map((collection) => [collection.id, collection]));
    // get variables
    const variables = figma.variables
        .getLocalVariables()
        .filter((variable) => excludedCollectionIds.includes(variable.variableCollectionId))
        .map((variable) => {
        // get collection name and modes
        const { variableCollectionId } = variable;
        const { name: collection, modes } = collections[variableCollectionId];
        // return each mode value as a separate variable
        return Object.entries(variable.valuesByMode).map(([id, value]) => {
            // Only add mode if there's more than one
            const addMode = settings.modeReference && modes.length > 1;
            return Object.assign(Object.assign({}, extractVariable(variable, value, modes.find(({ modeId }) => modeId === id))), { 
                // name is contstructed from collection, mode and variable name
                name: addMode
                    ? `${collection}/${modes.find(({ modeId }) => modeId === id).name}/${variable.name}`
                    : `${collection}/${variable.name}`, 
                // add mnetadata to extensions
                extensions: {
                    [_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.extensionPluginData]: {
                        mode: settings.modeReference
                            ? modes.find(({ modeId }) => modeId === id).name
                            : undefined,
                        collection: collection,
                        scopes: variable.scopes,
                        [_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.extensionVariableStyleId]: variable.id,
                        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.variables.key,
                    },
                } });
        });
    });
    return settings.modeReference
        ? (0,_processAliasModes__WEBPACK_IMPORTED_MODULE_5__["default"])(variables.flat())
        : variables.flat();
};


/***/ }),

/***/ "./src/utilities/getVersionDifference.ts":
/*!***********************************************!*\
  !*** ./src/utilities/getVersionDifference.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _semVerDifference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./semVerDifference */ "./src/utilities/semVerDifference.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "./src/utilities/version.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getVersionDifference = (figma) => __awaiter(void 0, void 0, void 0, function* () {
    // get version & version difference
    const lastVersionSettingsOpened = yield figma.clientStorage.getAsync(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.lastVersionSettingsOpened);
    const versionDifference = (0,_semVerDifference__WEBPACK_IMPORTED_MODULE_0__["default"])(_version__WEBPACK_IMPORTED_MODULE_1__["default"], lastVersionSettingsOpened);
    // update version
    if (!lastVersionSettingsOpened || lastVersionSettingsOpened !== _version__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        yield figma.clientStorage.setAsync(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.lastVersionSettingsOpened, _version__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    // return version Difference
    return versionDifference;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getVersionDifference);


/***/ }),

/***/ "./src/utilities/handleVariableAlias.ts":
/*!**********************************************!*\
  !*** ./src/utilities/handleVariableAlias.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _src_utilities_getVariableTypeByValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utilities/getVariableTypeByValue */ "./src/utilities/getVariableTypeByValue.ts");
/* harmony import */ var _src_utilities_changeNotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/utilities/changeNotation */ "./src/utilities/changeNotation.ts");



function handleVariableAlias(variable, value, mode) {
    const resolvedAlias = figma.variables.getVariableById(value.id);
    const collection = figma.variables.getVariableCollectionById(resolvedAlias.variableCollectionId);
    return {
        description: variable.description || undefined,
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.variables.key,
        category: (0,_src_utilities_getVariableTypeByValue__WEBPACK_IMPORTED_MODULE_1__.getVariableTypeByValue)(Object.values(resolvedAlias.valuesByMode)[0]),
        values: `{${collection.name.toLowerCase()}.${(0,_src_utilities_changeNotation__WEBPACK_IMPORTED_MODULE_2__.changeNotation)(resolvedAlias.name, '/', '.')}}`,
        // this is being stored so we can properly update the design tokens later to account for all
        // modes when using aliases
        aliasCollectionName: collection.name.toLowerCase(),
        aliasMode: mode
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleVariableAlias);


/***/ }),

/***/ "./src/utilities/isTokenNode.ts":
/*!**************************************!*\
  !*** ./src/utilities/isTokenNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// the node types that can be used for tokens
const tokenNodeTypes = [
    'COMPONENT',
    'COMPONENT_SET',
    'RECTANGLE',
    'FRAME'
];
/**
 * check if a node is a valid token node type
 * Currently: 'COMPONENT', 'FRAME or 'RECTANGLE'
 * @param SceneNode node
 */
const isTokenNode = (node) => {
    return node.parent.type !== 'COMPONENT_SET' && tokenNodeTypes.includes(node.type) && node.name.length > 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTokenNode);


/***/ }),

/***/ "./src/utilities/processAliasModes.ts":
/*!********************************************!*\
  !*** ./src/utilities/processAliasModes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const processAliasModes = (variables) => {
    return variables.reduce((collector, variable) => {
        // only one mode will be passed in if any
        if (!variable.aliasMode) {
            collector.push(variable);
            return collector;
        }
        // alias mode singular because only one is shown
        const { aliasMode, aliasCollectionName } = variable;
        // this was only added for this function to process that data so before we return the variables, we can remove it
        delete variable.aliasMode;
        delete variable.aliasCollectionName;
        collector.push(Object.assign(Object.assign({}, variable), { values: variable.values }));
        return collector;
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processAliasModes);


/***/ }),

/***/ "./src/utilities/roundWithDecimals.ts":
/*!********************************************!*\
  !*** ./src/utilities/roundWithDecimals.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If the provided value is a number
 * it is rounded to 3 decimal positions
 * otherwise it is returned as is
 * @param value number
 * @param decimalPlaces int
 */
const roundWithDecimals = (value, decimalPlaces = 2) => {
    // exit if value is undefined
    if (value === undefined) {
        return;
    }
    // check for correct inputs
    if (typeof value !== 'number' || typeof decimalPlaces !== 'number') {
        throw new Error(`Invalid parameters, both value "${value}" (${typeof value}) and decimalPlaces "${decimalPlaces}" (${typeof decimalPlaces}) must be of type number`);
    }
    // set decimal places
    const factorOfTen = Math.pow(10, decimalPlaces);
    // round result and return
    return Math.round(value * factorOfTen) / factorOfTen;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roundWithDecimals);


/***/ }),

/***/ "./src/utilities/semVerDifference.ts":
/*!*******************************************!*\
  !*** ./src/utilities/semVerDifference.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((currentSemVer, prevSemVers = '1.0.0') => {
    const [pMajor, pMinor, pPatch] = prevSemVers.split('.');
    const [cMajor, cMinor, cPatch] = currentSemVer.split('.');
    if (pMajor < cMajor) {
        return 'major';
    }
    if (pMinor < cMinor) {
        return 'minor';
    }
    if (pPatch < cPatch) {
        return 'patch';
    }
});


/***/ }),

/***/ "./src/utilities/settings.ts":
/*!***********************************!*\
  !*** ./src/utilities/settings.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettings": () => (/* binding */ getSettings),
/* harmony export */   "resetSettings": () => (/* binding */ resetSettings),
/* harmony export */   "setSettings": () => (/* binding */ setSettings)
/* harmony export */ });
/* harmony import */ var _config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/defaultSettings */ "./src/config/defaultSettings.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
/* harmony import */ var _stringifyJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringifyJson */ "./src/utilities/stringifyJson.ts");



const fixMissing = (defaults, current) => Object.fromEntries(Object.entries(defaults).map(([key, value]) => {
    if (value !== undefined && typeof current[key] !== typeof value) {
        return [key, defaults[key]];
    }
    return [key, current[key]];
}));
/**
 * get the current users settings
 * for settings that are not set, the defaults will be used
 * @return object
 */
const getSettings = () => {
    let storedSettings = figma.root.getPluginData(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.settings);
    // return defaults if no settings are present
    if (storedSettings === '') {
        return _config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings;
    }
    // parse stored settings
    storedSettings = JSON.parse(storedSettings);
    // fix issues on first level
    const fixedSettings = fixMissing(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings, storedSettings);
    fixedSettings.prefix = fixMissing(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings.prefix, fixedSettings.prefix);
    fixedSettings.exports = fixMissing(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings.exports, fixedSettings.exports);
    // return settings
    return fixedSettings;
};
/**
 * @name saveSettings
 * @description save the user settings to the "cache"
 * @param {UserSettings} settings
 */
const setSettings = (settings) => {
    settings = Object.assign(Object.assign({}, _config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings), settings);
    // store public settings that should be shared across org
    figma.root.setPluginData(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.settings, (0,_stringifyJson__WEBPACK_IMPORTED_MODULE_2__.stringifyJson)(settings));
};
/**
 * @name resetSettings
 * @description resetSettings the user settings to the "cache"
 */
const resetSettings = () => figma.root.setPluginData(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.settings, (0,_stringifyJson__WEBPACK_IMPORTED_MODULE_2__.stringifyJson)(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings));
// exports



/***/ }),

/***/ "./src/utilities/stringifyJson.ts":
/*!****************************************!*\
  !*** ./src/utilities/stringifyJson.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyJson": () => (/* binding */ stringifyJson)
/* harmony export */ });
const stringifyJson = (object, compression = true) => {
    if (compression === true) {
        return JSON.stringify(object);
    }
    // return uncompressed json
    return JSON.stringify(object, null, 2);
};


/***/ }),

/***/ "./src/utilities/version.ts":
/*!**********************************!*\
  !*** ./src/utilities/version.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* istanbul ignore file */
const version = '6.10.6';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/settings */ "./src/utilities/settings.ts");
/* harmony import */ var _utilities_accessToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/accessToken */ "./src/utilities/accessToken.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
/* harmony import */ var _config_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/commands */ "./src/config/commands.ts");
/* harmony import */ var _utilities_getVersionDifference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/getVersionDifference */ "./src/utilities/getVersionDifference.ts");
/* harmony import */ var _utilities_getFileId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/getFileId */ "./src/utilities/getFileId.ts");
/* harmony import */ var _utilities_getTokenJson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/getTokenJson */ "./src/utilities/getTokenJson.ts");
/* harmony import */ var _utilities_stringifyJson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/stringifyJson */ "./src/utilities/stringifyJson.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// initiate UI
figma.showUI(__html__, {
    themeColors: true,
    visible: false
});
// ---------------------------------
// open UI
if ([_config_commands__WEBPACK_IMPORTED_MODULE_3__.commands["export"], _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.urlExport, _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.generalSettings].includes(figma.command)) {
    // wrap in function because of async client Storage
    const openUi = () => __awaiter(void 0, void 0, void 0, function* () {
        // Get the user settings
        const userSettings = (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_0__.getSettings)();
        // get the current version differences to the last time the plugin was opened
        const versionDifference = yield (0,_utilities_getVersionDifference__WEBPACK_IMPORTED_MODULE_4__["default"])(figma);
        // resize UI if needed
        figma.ui.resize(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].width, _config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].height);
        if (versionDifference !== undefined && versionDifference !== 'patch') {
            figma.ui.resize(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].width, _config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].height + 60);
        }
        // write tokens to json file
        figma.ui.postMessage({
            command: figma.command,
            payload: {
                settings: Object.assign(Object.assign({}, userSettings), { accessToken: yield (0,_utilities_accessToken__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)((0,_utilities_getFileId__WEBPACK_IMPORTED_MODULE_5__["default"])(figma)) }),
                data: (0,_utilities_stringifyJson__WEBPACK_IMPORTED_MODULE_7__.stringifyJson)((0,_utilities_getTokenJson__WEBPACK_IMPORTED_MODULE_6__.exportRawTokenArray)(figma, userSettings)),
                versionDifference: versionDifference,
                metadata: {
                    filename: figma.root.name
                }
            }
        } || {});
        // register the settings UI
        figma.ui.show();
    });
    // run function
    openUi();
}
/**
 * Open Help
 * Open github help page
 */
if (figma.command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.help) {
    figma.ui.postMessage({
        command: _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.help,
        payload: {
            url: 'https://github.com/lukasoppermann/design-tokens'
        }
    });
}
/**
 * Open demo
 */
if (figma.command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.demo) {
    figma.ui.postMessage({
        command: _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.demo,
        payload: {
            url: 'https://www.figma.com/file/2MQ759R5kJtzQn4qSHuqR7/Design-Tokens-for-Figma?node-id=231%3A2'
        }
    });
}
/**
 * Reset settings
 */
if (figma.command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.reset) {
    (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_0__.resetSettings)();
    // send message
    figma.notify('⚙️ Settings have been reset.');
    figma.closePlugin();
}
/**
 * React to messages
 */
figma.ui.onmessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const { command, payload } = message;
    /**
     * on closePlugin
     * close plugin and show notification if available
     */
    if (command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.closePlugin) {
        // show notification if send
        if ((payload === null || payload === void 0 ? void 0 : payload.notification) !== undefined && (payload === null || payload === void 0 ? void 0 : payload.notification) !== '') {
            figma.notify(payload.notification);
        }
        // close plugin
        figma.ui.hide();
        figma.closePlugin();
    }
    /**
     * on saveSettings
     * save settings, access token and close plugin
     */
    if (command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.saveSettings) {
        // store settings
        (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_0__.setSettings)(payload.settings);
        // accessToken
        yield (0,_utilities_accessToken__WEBPACK_IMPORTED_MODULE_1__.setAccessToken)((0,_utilities_getFileId__WEBPACK_IMPORTED_MODULE_5__["default"])(figma), payload.accessToken);
        // close plugin
        if (payload.closePlugin && payload.closePlugin === true) {
            figma.closePlugin();
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLFVBQVU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRSw0QkFBNEIsd0NBQXdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHdDQUF3QyxrREFBa0Q7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29CO0FBQ3JCO0FBQ087QUFDUCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpRUFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUVBQXFC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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBYztBQUNwQyxJQUFJLGtFQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFxQjtBQUN6QztBQUNBLFFBQVEsZ0VBQVc7QUFDbkI7QUFDQSxjQUFjLHNFQUFjLENBQUMsZ0VBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vbm9kZV9tb2R1bGVzL0BjdHJsL3Rpbnljb2xvci9kaXN0L21vZHVsZS9jb252ZXJzaW9uLmpzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9ub2RlX21vZHVsZXMvQGN0cmwvdGlueWNvbG9yL2Rpc3QvbW9kdWxlL2Nzcy1jb2xvci1uYW1lcy5qcyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vbm9kZV9tb2R1bGVzL0BjdHJsL3Rpbnljb2xvci9kaXN0L21vZHVsZS9mb3JtYXQtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL25vZGVfbW9kdWxlcy9AY3RybC90aW55Y29sb3IvZGlzdC9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL25vZGVfbW9kdWxlcy9AY3RybC90aW55Y29sb3IvZGlzdC9tb2R1bGUvdXRpbC5qcyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2NvbmZpZy9jb21tYW5kcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9jb25maWcvZGVmYXVsdFNldHRpbmdzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvY29uZmlnL3Rva2VuVHlwZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEJvcmRlcnMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEJyZWFrcG9pbnRzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RDb2xvcnMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEVmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEZvbnRzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RHcmlkcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2V4dHJhY3Rvci9leHRyYWN0TW90aW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RPcGFjaXRpZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdFJhZGlpLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RTaXplcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2V4dHJhY3Rvci9leHRyYWN0U3BhY2luZy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2V4dHJhY3Rvci9leHRyYWN0VXRpbGl0aWVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2FjY2Vzc1Rva2VuLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2J1aWxkRmlnbWFEYXRhLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2NoYW5nZU5vdGF0aW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2NvbnZlcnRDb2xvci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9leHRyYWN0VG9rZW5Ob2RlVmFsdWVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2ZpbHRlckJ5TmFtZVByb3BlcnR5LnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2dldEVmZmVjdFN0eWxlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRGaWxlSWQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZ2V0R3JpZFN0eWxlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRQYWludFN0eWxlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRUZXh0U3R5bGVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2dldFRva2VuSnNvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRUb2tlbk5vZGVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2dldFZhcmlhYmxlVHlwZUJ5VmFsdWUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZ2V0VmFyaWFibGVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2dldFZlcnNpb25EaWZmZXJlbmNlLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2hhbmRsZVZhcmlhYmxlQWxpYXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvaXNUb2tlbk5vZGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvcHJvY2Vzc0FsaWFzTW9kZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvcm91bmRXaXRoRGVjaW1hbHMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvc2VtVmVyRGlmZmVyZW5jZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9zdHJpbmdpZnlKc29uLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL3ZlcnNpb24udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm91bmQwMSwgcGFkMiB9IGZyb20gJy4vdXRpbCc7XG4vLyBgcmdiVG9Ic2xgLCBgcmdiVG9Ic3ZgLCBgaHNsVG9SZ2JgLCBgaHN2VG9SZ2JgIG1vZGlmaWVkIGZyb206XG4vLyA8aHR0cDovL21qaWphY2tzb24uY29tLzIwMDgvMDIvcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jb252ZXJzaW9uLWFsZ29yaXRobXMtaW4tamF2YXNjcmlwdD5cbi8qKlxuICogSGFuZGxlIGJvdW5kcyAvIHBlcmNlbnRhZ2UgY2hlY2tpbmcgdG8gY29uZm9ybSB0byBDU1MgY29sb3Igc3BlY1xuICogPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvPlxuICogKkFzc3VtZXM6KiByLCBnLCBiIGluIFswLCAyNTVdIG9yIFswLCAxXVxuICogKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiBbMCwgMjU1XVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9SZ2IociwgZywgYikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IGJvdW5kMDEociwgMjU1KSAqIDI1NSxcbiAgICAgICAgZzogYm91bmQwMShnLCAyNTUpICogMjU1LFxuICAgICAgICBiOiBib3VuZDAxKGIsIDI1NSkgKiAyNTUsXG4gICAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gUkdCIGNvbG9yIHZhbHVlIHRvIEhTTC5cbiAqICpBc3N1bWVzOiogciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbiAqICpSZXR1cm5zOiogeyBoLCBzLCBsIH0gaW4gWzAsMV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSHNsKHIsIGcsIGIpIHtcbiAgICByID0gYm91bmQwMShyLCAyNTUpO1xuICAgIGcgPSBib3VuZDAxKGcsIDI1NSk7XG4gICAgYiA9IGJvdW5kMDEoYiwgMjU1KTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIHZhciBoID0gMDtcbiAgICB2YXIgcyA9IDA7XG4gICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgIHMgPSAwO1xuICAgICAgICBoID0gMDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgfVxuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIGw6IGwgfTtcbn1cbmZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkge1xuICAgICAgICB0ICs9IDE7XG4gICAgfVxuICAgIGlmICh0ID4gMSkge1xuICAgICAgICB0IC09IDE7XG4gICAgfVxuICAgIGlmICh0IDwgMSAvIDYpIHtcbiAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogKDYgKiB0KTtcbiAgICB9XG4gICAgaWYgKHQgPCAxIC8gMikge1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG4gICAgaWYgKHQgPCAyIC8gMykge1xuICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgfVxuICAgIHJldHVybiBwO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBIU0wgY29sb3IgdmFsdWUgdG8gUkdCLlxuICpcbiAqICpBc3N1bWVzOiogaCBpcyBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAzNjBdIGFuZCBzIGFuZCBsIGFyZSBjb250YWluZWQgWzAsIDFdIG9yIFswLCAxMDBdXG4gKiAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIHRoZSBzZXQgWzAsIDI1NV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwpIHtcbiAgICB2YXIgcjtcbiAgICB2YXIgZztcbiAgICB2YXIgYjtcbiAgICBoID0gYm91bmQwMShoLCAzNjApO1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgbCA9IGJvdW5kMDEobCwgMTAwKTtcbiAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAvLyBhY2hyb21hdGljXG4gICAgICAgIGcgPSBsO1xuICAgICAgICBiID0gbDtcbiAgICAgICAgciA9IGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNWXG4gKlxuICogKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gb3IgWzAsIDFdXG4gKiAqUmV0dXJuczoqIHsgaCwgcywgdiB9IGluIFswLDFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hzdihyLCBnLCBiKSB7XG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG4gICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCA9IDA7XG4gICAgdmFyIHYgPSBtYXg7XG4gICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgdmFyIHMgPSBtYXggPT09IDAgPyAwIDogZCAvIG1heDtcbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSA2O1xuICAgIH1cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCB2OiB2IH07XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIEhTViBjb2xvciB2YWx1ZSB0byBSR0IuXG4gKlxuICogKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIHYgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDEwMF1cbiAqICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHN2VG9SZ2IoaCwgcywgdikge1xuICAgIGggPSBib3VuZDAxKGgsIDM2MCkgKiA2O1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgdiA9IGJvdW5kMDEodiwgMTAwKTtcbiAgICB2YXIgaSA9IE1hdGguZmxvb3IoaCk7XG4gICAgdmFyIGYgPSBoIC0gaTtcbiAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgIHZhciB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xuICAgIHZhciBtb2QgPSBpICUgNjtcbiAgICB2YXIgciA9IFt2LCBxLCBwLCBwLCB0LCB2XVttb2RdO1xuICAgIHZhciBnID0gW3QsIHYsIHYsIHEsIHAsIHBdW21vZF07XG4gICAgdmFyIGIgPSBbcCwgcCwgdCwgdiwgdiwgcV1bbW9kXTtcbiAgICByZXR1cm4geyByOiByICogMjU1LCBnOiBnICogMjU1LCBiOiBiICogMjU1IH07XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIFJHQiBjb2xvciB0byBoZXhcbiAqXG4gKiBBc3N1bWVzIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XVxuICogUmV0dXJucyBhIDMgb3IgNiBjaGFyYWN0ZXIgaGV4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiLCBhbGxvdzNDaGFyKSB7XG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihNYXRoLnJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoTWF0aC5yb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKE1hdGgucm91bmQoYikudG9TdHJpbmcoMTYpKSxcbiAgICBdO1xuICAgIC8vIFJldHVybiBhIDMgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzNDaGFyICYmXG4gICAgICAgIGhleFswXS5zdGFydHNXaXRoKGhleFswXS5jaGFyQXQoMSkpICYmXG4gICAgICAgIGhleFsxXS5zdGFydHNXaXRoKGhleFsxXS5jaGFyQXQoMSkpICYmXG4gICAgICAgIGhleFsyXS5zdGFydHNXaXRoKGhleFsyXS5jaGFyQXQoMSkpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCk7XG4gICAgfVxuICAgIHJldHVybiBoZXguam9pbignJyk7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIFJHQkEgY29sb3IgcGx1cyBhbHBoYSB0cmFuc3BhcmVuY3kgdG8gaGV4XG4gKlxuICogQXNzdW1lcyByLCBnLCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBhbmRcbiAqIGEgaW4gWzAsIDFdLiBSZXR1cm5zIGEgNCBvciA4IGNoYXJhY3RlciByZ2JhIGhleFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZXhwb3J0IGZ1bmN0aW9uIHJnYmFUb0hleChyLCBnLCBiLCBhLCBhbGxvdzRDaGFyKSB7XG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihNYXRoLnJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoTWF0aC5yb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKE1hdGgucm91bmQoYikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKSxcbiAgICBdO1xuICAgIC8vIFJldHVybiBhIDQgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzRDaGFyICYmXG4gICAgICAgIGhleFswXS5zdGFydHNXaXRoKGhleFswXS5jaGFyQXQoMSkpICYmXG4gICAgICAgIGhleFsxXS5zdGFydHNXaXRoKGhleFsxXS5jaGFyQXQoMSkpICYmXG4gICAgICAgIGhleFsyXS5zdGFydHNXaXRoKGhleFsyXS5jaGFyQXQoMSkpICYmXG4gICAgICAgIGhleFszXS5zdGFydHNXaXRoKGhleFszXS5jaGFyQXQoMSkpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCkgKyBoZXhbM10uY2hhckF0KDApO1xuICAgIH1cbiAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHRvIGFuIEFSR0IgSGV4OCBzdHJpbmdcbiAqIFJhcmVseSB1c2VkLCBidXQgcmVxdWlyZWQgZm9yIFwidG9GaWx0ZXIoKVwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZ2JhVG9BcmdiSGV4KHIsIGcsIGIsIGEpIHtcbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpLFxuICAgICAgICBwYWQyKE1hdGgucm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihNYXRoLnJvdW5kKGcpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoTWF0aC5yb3VuZChiKS50b1N0cmluZygxNikpLFxuICAgIF07XG4gICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbn1cbi8qKiBDb252ZXJ0cyBhIGRlY2ltYWwgdG8gYSBoZXggdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGVjaW1hbFRvSGV4KGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGQpICogMjU1KS50b1N0cmluZygxNik7XG59XG4vKiogQ29udmVydHMgYSBoZXggdmFsdWUgdG8gYSBkZWNpbWFsICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEhleFRvRGVjaW1hbChoKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50RnJvbUhleChoKSAvIDI1NTtcbn1cbi8qKiBQYXJzZSBhIGJhc2UtMTYgaGV4IHZhbHVlIGludG8gYSBiYXNlLTEwIGludGVnZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludEZyb21IZXgodmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlcklucHV0VG9PYmplY3QoY29sb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBjb2xvciA+PiAxNixcbiAgICAgICAgZzogKGNvbG9yICYgMHhmZjAwKSA+PiA4LFxuICAgICAgICBiOiBjb2xvciAmIDB4ZmYsXG4gICAgfTtcbn1cbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWhhbWFzMTAvY3NzLWNvbG9yLW5hbWVzL2Jsb2IvbWFzdGVyL2Nzcy1jb2xvci1uYW1lcy5qc29uXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IHZhciBuYW1lcyA9IHtcbiAgICBhbGljZWJsdWU6ICcjZjBmOGZmJyxcbiAgICBhbnRpcXVld2hpdGU6ICcjZmFlYmQ3JyxcbiAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgYXF1YW1hcmluZTogJyM3ZmZmZDQnLFxuICAgIGF6dXJlOiAnI2YwZmZmZicsXG4gICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICBiaXNxdWU6ICcjZmZlNGM0JyxcbiAgICBibGFjazogJyMwMDAwMDAnLFxuICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgYmx1ZTogJyMwMDAwZmYnLFxuICAgIGJsdWV2aW9sZXQ6ICcjOGEyYmUyJyxcbiAgICBicm93bjogJyNhNTJhMmEnLFxuICAgIGJ1cmx5d29vZDogJyNkZWI4ODcnLFxuICAgIGNhZGV0Ymx1ZTogJyM1ZjllYTAnLFxuICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICBjaG9jb2xhdGU6ICcjZDI2OTFlJyxcbiAgICBjb3JhbDogJyNmZjdmNTAnLFxuICAgIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVlZCcsXG4gICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICBjcmltc29uOiAnI2RjMTQzYycsXG4gICAgY3lhbjogJyMwMGZmZmYnLFxuICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgZGFya2N5YW46ICcjMDA4YjhiJyxcbiAgICBkYXJrZ29sZGVucm9kOiAnI2I4ODYwYicsXG4gICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICBkYXJrZ3JlZW46ICcjMDA2NDAwJyxcbiAgICBkYXJrZ3JleTogJyNhOWE5YTknLFxuICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgIGRhcmttYWdlbnRhOiAnIzhiMDA4YicsXG4gICAgZGFya29saXZlZ3JlZW46ICcjNTU2YjJmJyxcbiAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgZGFya29yY2hpZDogJyM5OTMyY2MnLFxuICAgIGRhcmtyZWQ6ICcjOGIwMDAwJyxcbiAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgZGFya3NlYWdyZWVuOiAnIzhmYmM4ZicsXG4gICAgZGFya3NsYXRlYmx1ZTogJyM0ODNkOGInLFxuICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICBkYXJrc2xhdGVncmV5OiAnIzJmNGY0ZicsXG4gICAgZGFya3R1cnF1b2lzZTogJyMwMGNlZDEnLFxuICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICBkZWVwcGluazogJyNmZjE0OTMnLFxuICAgIGRlZXBza3libHVlOiAnIzAwYmZmZicsXG4gICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgIGRpbWdyZXk6ICcjNjk2OTY5JyxcbiAgICBkb2RnZXJibHVlOiAnIzFlOTBmZicsXG4gICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgZmxvcmFsd2hpdGU6ICcjZmZmYWYwJyxcbiAgICBmb3Jlc3RncmVlbjogJyMyMjhiMjInLFxuICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICBnYWluc2Jvcm86ICcjZGNkY2RjJyxcbiAgICBnaG9zdHdoaXRlOiAnI2Y4ZjhmZicsXG4gICAgZ29sZGVucm9kOiAnI2RhYTUyMCcsXG4gICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgIGdyYXk6ICcjODA4MDgwJyxcbiAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgIGdyZWVueWVsbG93OiAnI2FkZmYyZicsXG4gICAgZ3JleTogJyM4MDgwODAnLFxuICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgaG90cGluazogJyNmZjY5YjQnLFxuICAgIGluZGlhbnJlZDogJyNjZDVjNWMnLFxuICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgIGl2b3J5OiAnI2ZmZmZmMCcsXG4gICAga2hha2k6ICcjZjBlNjhjJyxcbiAgICBsYXZlbmRlcmJsdXNoOiAnI2ZmZjBmNScsXG4gICAgbGF2ZW5kZXI6ICcjZTZlNmZhJyxcbiAgICBsYXduZ3JlZW46ICcjN2NmYzAwJyxcbiAgICBsZW1vbmNoaWZmb246ICcjZmZmYWNkJyxcbiAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICBsaWdodGNvcmFsOiAnI2YwODA4MCcsXG4gICAgbGlnaHRjeWFuOiAnI2UwZmZmZicsXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICBsaWdodGdyYXk6ICcjZDNkM2QzJyxcbiAgICBsaWdodGdyZWVuOiAnIzkwZWU5MCcsXG4gICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgbGlnaHRwaW5rOiAnI2ZmYjZjMScsXG4gICAgbGlnaHRzYWxtb246ICcjZmZhMDdhJyxcbiAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICcjNzc4ODk5JyxcbiAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsXG4gICAgbGlnaHR5ZWxsb3c6ICcjZmZmZmUwJyxcbiAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgbGltZWdyZWVuOiAnIzMyY2QzMicsXG4gICAgbGluZW46ICcjZmFmMGU2JyxcbiAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgbWFyb29uOiAnIzgwMDAwMCcsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogJyM2NmNkYWEnLFxuICAgIG1lZGl1bWJsdWU6ICcjMDAwMGNkJyxcbiAgICBtZWRpdW1vcmNoaWQ6ICcjYmE1NWQzJyxcbiAgICBtZWRpdW1wdXJwbGU6ICcjOTM3MGRiJyxcbiAgICBtZWRpdW1zZWFncmVlbjogJyMzY2IzNzEnLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogJyM3YjY4ZWUnLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwZmE5YScsXG4gICAgbWVkaXVtdHVycXVvaXNlOiAnIzQ4ZDFjYycsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAnI2M3MTU4NScsXG4gICAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gICAgbWludGNyZWFtOiAnI2Y1ZmZmYScsXG4gICAgbWlzdHlyb3NlOiAnI2ZmZTRlMScsXG4gICAgbW9jY2FzaW46ICcjZmZlNGI1JyxcbiAgICBuYXZham93aGl0ZTogJyNmZmRlYWQnLFxuICAgIG5hdnk6ICcjMDAwMDgwJyxcbiAgICBvbGRsYWNlOiAnI2ZkZjVlNicsXG4gICAgb2xpdmU6ICcjODA4MDAwJyxcbiAgICBvbGl2ZWRyYWI6ICcjNmI4ZTIzJyxcbiAgICBvcmFuZ2U6ICcjZmZhNTAwJyxcbiAgICBvcmFuZ2VyZWQ6ICcjZmY0NTAwJyxcbiAgICBvcmNoaWQ6ICcjZGE3MGQ2JyxcbiAgICBwYWxlZ29sZGVucm9kOiAnI2VlZThhYScsXG4gICAgcGFsZWdyZWVuOiAnIzk4ZmI5OCcsXG4gICAgcGFsZXR1cnF1b2lzZTogJyNhZmVlZWUnLFxuICAgIHBhbGV2aW9sZXRyZWQ6ICcjZGI3MDkzJyxcbiAgICBwYXBheWF3aGlwOiAnI2ZmZWZkNScsXG4gICAgcGVhY2hwdWZmOiAnI2ZmZGFiOScsXG4gICAgcGVydTogJyNjZDg1M2YnLFxuICAgIHBpbms6ICcjZmZjMGNiJyxcbiAgICBwbHVtOiAnI2RkYTBkZCcsXG4gICAgcG93ZGVyYmx1ZTogJyNiMGUwZTYnLFxuICAgIHB1cnBsZTogJyM4MDAwODAnLFxuICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICByZWQ6ICcjZmYwMDAwJyxcbiAgICByb3N5YnJvd246ICcjYmM4ZjhmJyxcbiAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICBzYWRkbGVicm93bjogJyM4YjQ1MTMnLFxuICAgIHNhbG1vbjogJyNmYTgwNzInLFxuICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICBzZWFncmVlbjogJyMyZThiNTcnLFxuICAgIHNlYXNoZWxsOiAnI2ZmZjVlZScsXG4gICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgc2lsdmVyOiAnI2MwYzBjMCcsXG4gICAgc2t5Ymx1ZTogJyM4N2NlZWInLFxuICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgIHNsYXRlZ3JheTogJyM3MDgwOTAnLFxuICAgIHNsYXRlZ3JleTogJyM3MDgwOTAnLFxuICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICBzcHJpbmdncmVlbjogJyMwMGZmN2YnLFxuICAgIHN0ZWVsYmx1ZTogJyM0NjgyYjQnLFxuICAgIHRhbjogJyNkMmI0OGMnLFxuICAgIHRlYWw6ICcjMDA4MDgwJyxcbiAgICB0aGlzdGxlOiAnI2Q4YmZkOCcsXG4gICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgdHVycXVvaXNlOiAnIzQwZTBkMCcsXG4gICAgdmlvbGV0OiAnI2VlODJlZScsXG4gICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIHdoaXRlc21va2U6ICcjZjVmNWY1JyxcbiAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICB5ZWxsb3dncmVlbjogJyM5YWNkMzInLFxufTtcbiIsImltcG9ydCB7IGNvbnZlcnRIZXhUb0RlY2ltYWwsIGhzbFRvUmdiLCBoc3ZUb1JnYiwgcGFyc2VJbnRGcm9tSGV4LCByZ2JUb1JnYiB9IGZyb20gJy4vY29udmVyc2lvbic7XG5pbXBvcnQgeyBuYW1lcyB9IGZyb20gJy4vY3NzLWNvbG9yLW5hbWVzJztcbmltcG9ydCB7IGJvdW5kQWxwaGEsIGNvbnZlcnRUb1BlcmNlbnRhZ2UgfSBmcm9tICcuL3V0aWwnO1xuLyoqXG4gKiBHaXZlbiBhIHN0cmluZyBvciBvYmplY3QsIGNvbnZlcnQgdGhhdCBpbnB1dCB0byBSR0JcbiAqXG4gKiBQb3NzaWJsZSBzdHJpbmcgaW5wdXRzOlxuICogYGBgXG4gKiBcInJlZFwiXG4gKiBcIiNmMDBcIiBvciBcImYwMFwiXG4gKiBcIiNmZjAwMDBcIiBvciBcImZmMDAwMFwiXG4gKiBcIiNmZjAwMDAwMFwiIG9yIFwiZmYwMDAwMDBcIlxuICogXCJyZ2IgMjU1IDAgMFwiIG9yIFwicmdiICgyNTUsIDAsIDApXCJcbiAqIFwicmdiIDEuMCAwIDBcIiBvciBcInJnYiAoMSwgMCwgMClcIlxuICogXCJyZ2JhICgyNTUsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDI1NSwgMCwgMCwgMVwiXG4gKiBcInJnYmEgKDEuMCwgMCwgMCwgMSlcIiBvciBcInJnYmEgMS4wLCAwLCAwLCAxXCJcbiAqIFwiaHNsKDAsIDEwMCUsIDUwJSlcIiBvciBcImhzbCAwIDEwMCUgNTAlXCJcbiAqIFwiaHNsYSgwLCAxMDAlLCA1MCUsIDEpXCIgb3IgXCJoc2xhIDAgMTAwJSA1MCUsIDFcIlxuICogXCJoc3YoMCwgMTAwJSwgMTAwJSlcIiBvciBcImhzdiAwIDEwMCUgMTAwJVwiXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9SR0IoY29sb3IpIHtcbiAgICB2YXIgcmdiID0geyByOiAwLCBnOiAwLCBiOiAwIH07XG4gICAgdmFyIGEgPSAxO1xuICAgIHZhciBzID0gbnVsbDtcbiAgICB2YXIgdiA9IG51bGw7XG4gICAgdmFyIGwgPSBudWxsO1xuICAgIHZhciBvayA9IGZhbHNlO1xuICAgIHZhciBmb3JtYXQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb2xvciA9IHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IucikgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuZykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuYikpIHtcbiAgICAgICAgICAgIHJnYiA9IHJnYlRvUmdiKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gU3RyaW5nKGNvbG9yLnIpLnN1YnN0cigtMSkgPT09ICclJyA/ICdwcmdiJyA6ICdyZ2InO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLmgpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnMpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnYpKSB7XG4gICAgICAgICAgICBzID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5zKTtcbiAgICAgICAgICAgIHYgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnYpO1xuICAgICAgICAgICAgcmdiID0gaHN2VG9SZ2IoY29sb3IuaCwgcywgdik7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSAnaHN2JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5sKSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICBsID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5sKTtcbiAgICAgICAgICAgIHJnYiA9IGhzbFRvUmdiKGNvbG9yLmgsIHMsIGwpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gJ2hzbCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb2xvciwgJ2EnKSkge1xuICAgICAgICAgICAgYSA9IGNvbG9yLmE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSA9IGJvdW5kQWxwaGEoYSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2s6IG9rLFxuICAgICAgICBmb3JtYXQ6IGNvbG9yLmZvcm1hdCB8fCBmb3JtYXQsXG4gICAgICAgIHI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgocmdiLnIsIDApKSxcbiAgICAgICAgZzogTWF0aC5taW4oMjU1LCBNYXRoLm1heChyZ2IuZywgMCkpLFxuICAgICAgICBiOiBNYXRoLm1pbigyNTUsIE1hdGgubWF4KHJnYi5iLCAwKSksXG4gICAgICAgIGE6IGEsXG4gICAgfTtcbn1cbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jaW50ZWdlcnM+XG52YXIgQ1NTX0lOVEVHRVIgPSAnWy1cXFxcK10/XFxcXGQrJT8nO1xuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNudW1iZXItdmFsdWU+XG52YXIgQ1NTX05VTUJFUiA9ICdbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/Jztcbi8vIEFsbG93IHBvc2l0aXZlL25lZ2F0aXZlIGludGVnZXIvbnVtYmVyLiAgRG9uJ3QgY2FwdHVyZSB0aGUgZWl0aGVyL29yLCBqdXN0IHRoZSBlbnRpcmUgb3V0Y29tZS5cbnZhciBDU1NfVU5JVCA9IFwiKD86XCIuY29uY2F0KENTU19OVU1CRVIsIFwiKXwoPzpcIikuY29uY2F0KENTU19JTlRFR0VSLCBcIilcIik7XG4vLyBBY3R1YWwgbWF0Y2hpbmcuXG4vLyBQYXJlbnRoZXNlcyBhbmQgY29tbWFzIGFyZSBvcHRpb25hbCwgYnV0IG5vdCByZXF1aXJlZC5cbi8vIFdoaXRlc3BhY2UgY2FuIHRha2UgdGhlIHBsYWNlIG9mIGNvbW1hcyBvciBvcGVuaW5nIHBhcmVuXG52YXIgUEVSTUlTU0lWRV9NQVRDSDMgPSBcIltcXFxcc3xcXFxcKF0rKFwiLmNvbmNhdChDU1NfVU5JVCwgXCIpWyx8XFxcXHNdKyhcIikuY29uY2F0KENTU19VTklULCBcIilbLHxcXFxcc10rKFwiKS5jb25jYXQoQ1NTX1VOSVQsIFwiKVxcXFxzKlxcXFwpP1wiKTtcbnZhciBQRVJNSVNTSVZFX01BVENINCA9IFwiW1xcXFxzfFxcXFwoXSsoXCIuY29uY2F0KENTU19VTklULCBcIilbLHxcXFxcc10rKFwiKS5jb25jYXQoQ1NTX1VOSVQsIFwiKVssfFxcXFxzXSsoXCIpLmNvbmNhdChDU1NfVU5JVCwgXCIpWyx8XFxcXHNdKyhcIikuY29uY2F0KENTU19VTklULCBcIilcXFxccypcXFxcKT9cIik7XG52YXIgbWF0Y2hlcnMgPSB7XG4gICAgQ1NTX1VOSVQ6IG5ldyBSZWdFeHAoQ1NTX1VOSVQpLFxuICAgIHJnYjogbmV3IFJlZ0V4cCgncmdiJyArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICByZ2JhOiBuZXcgUmVnRXhwKCdyZ2JhJyArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICBoc2w6IG5ldyBSZWdFeHAoJ2hzbCcgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgaHNsYTogbmV3IFJlZ0V4cCgnaHNsYScgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgaHN2OiBuZXcgUmVnRXhwKCdoc3YnICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgIGhzdmE6IG5ldyBSZWdFeHAoJ2hzdmEnICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgIGhleDM6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICBoZXg2OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgaGV4NDogL14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICBoZXg4OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxufTtcbi8qKlxuICogUGVybWlzc2l2ZSBzdHJpbmcgcGFyc2luZy4gIFRha2UgaW4gYSBudW1iZXIgb2YgZm9ybWF0cywgYW5kIG91dHB1dCBhbiBvYmplY3RcbiAqIGJhc2VkIG9uIGRldGVjdGVkIGZvcm1hdC4gIFJldHVybnMgYHsgciwgZywgYiB9YCBvciBgeyBoLCBzLCBsIH1gIG9yIGB7IGgsIHMsIHZ9YFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nSW5wdXRUb09iamVjdChjb2xvcikge1xuICAgIGNvbG9yID0gY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBuYW1lZCA9IGZhbHNlO1xuICAgIGlmIChuYW1lc1tjb2xvcl0pIHtcbiAgICAgICAgY29sb3IgPSBuYW1lc1tjb2xvcl07XG4gICAgICAgIG5hbWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogMCwgZzogMCwgYjogMCwgYTogMCwgZm9ybWF0OiAnbmFtZScgfTtcbiAgICB9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHN0cmluZyBpbnB1dCB1c2luZyByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgIC8vIEtlZXAgbW9zdCBvZiB0aGUgbnVtYmVyIGJvdW5kaW5nIG91dCBvZiB0aGlzIGZ1bmN0aW9uIC0gZG9uJ3Qgd29ycnkgYWJvdXQgWzAsMV0gb3IgWzAsMTAwXSBvciBbMCwzNjBdXG4gICAgLy8gSnVzdCByZXR1cm4gYW4gb2JqZWN0IGFuZCBsZXQgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25zIGhhbmRsZSB0aGF0LlxuICAgIC8vIFRoaXMgd2F5IHRoZSByZXN1bHQgd2lsbCBiZSB0aGUgc2FtZSB3aGV0aGVyIHRoZSB0aW55Y29sb3IgaXMgaW5pdGlhbGl6ZWQgd2l0aCBzdHJpbmcgb3Igb2JqZWN0LlxuICAgIHZhciBtYXRjaCA9IG1hdGNoZXJzLnJnYi5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0Y2hbMV0sIGc6IG1hdGNoWzJdLCBiOiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBtYXRjaCA9IG1hdGNoZXJzLnJnYmEuZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGNoWzFdLCBnOiBtYXRjaFsyXSwgYjogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaHNsLmV4ZWMoY29sb3IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaHNsYS5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCBsOiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgbWF0Y2ggPSBtYXRjaGVycy5oc3YuZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgdjogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgbWF0Y2ggPSBtYXRjaGVycy5oc3ZhLmV4ZWMoY29sb3IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBtYXRjaCA9IG1hdGNoZXJzLmhleDguZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBhOiBjb252ZXJ0SGV4VG9EZWNpbWFsKG1hdGNoWzRdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyAnbmFtZScgOiAnaGV4OCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaGV4Ni5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyAnbmFtZScgOiAnaGV4JyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbWF0Y2ggPSBtYXRjaGVycy5oZXg0LmV4ZWMoY29sb3IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdICsgbWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdICsgbWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgbWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSArIG1hdGNoWzRdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyAnbmFtZScgOiAnaGV4OCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaGV4My5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArIG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyAnbmFtZScgOiAnaGV4JyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgaXQgbG9va3MgbGlrZSBhIENTUyB1bml0XG4gKiAoc2VlIGBtYXRjaGVyc2AgYWJvdmUgZm9yIGRlZmluaXRpb24pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZENTU1VuaXQoY29sb3IpIHtcbiAgICByZXR1cm4gQm9vbGVhbihtYXRjaGVycy5DU1NfVU5JVC5leGVjKFN0cmluZyhjb2xvcikpKTtcbn1cbiIsImltcG9ydCB7IG51bWJlcklucHV0VG9PYmplY3QsIHJnYmFUb0hleCwgcmdiVG9IZXgsIHJnYlRvSHNsLCByZ2JUb0hzdiB9IGZyb20gJy4vY29udmVyc2lvbic7XG5pbXBvcnQgeyBuYW1lcyB9IGZyb20gJy4vY3NzLWNvbG9yLW5hbWVzJztcbmltcG9ydCB7IGlucHV0VG9SR0IgfSBmcm9tICcuL2Zvcm1hdC1pbnB1dCc7XG5pbXBvcnQgeyBib3VuZDAxLCBib3VuZEFscGhhLCBjbGFtcDAxIH0gZnJvbSAnLi91dGlsJztcbnZhciBUaW55Q29sb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGlueUNvbG9yKGNvbG9yLCBvcHRzKSB7XG4gICAgICAgIGlmIChjb2xvciA9PT0gdm9pZCAwKSB7IGNvbG9yID0gJyc7IH1cbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBJZiBpbnB1dCBpcyBhbHJlYWR5IGEgdGlueWNvbG9yLCByZXR1cm4gaXRzZWxmXG4gICAgICAgIGlmIChjb2xvciBpbnN0YW5jZW9mIFRpbnlDb2xvcikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb2xvciA9IG51bWJlcklucHV0VG9PYmplY3QoY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbnB1dCA9IGNvbG9yO1xuICAgICAgICB2YXIgcmdiID0gaW5wdXRUb1JHQihjb2xvcik7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbnB1dCA9IGNvbG9yO1xuICAgICAgICB0aGlzLnIgPSByZ2IucjtcbiAgICAgICAgdGhpcy5nID0gcmdiLmc7XG4gICAgICAgIHRoaXMuYiA9IHJnYi5iO1xuICAgICAgICB0aGlzLmEgPSByZ2IuYTtcbiAgICAgICAgdGhpcy5yb3VuZEEgPSBNYXRoLnJvdW5kKDEwMCAqIHRoaXMuYSkgLyAxMDA7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gKF9hID0gb3B0cy5mb3JtYXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHJnYi5mb3JtYXQ7XG4gICAgICAgIHRoaXMuZ3JhZGllbnRUeXBlID0gb3B0cy5ncmFkaWVudFR5cGU7XG4gICAgICAgIC8vIERvbid0IGxldCB0aGUgcmFuZ2Ugb2YgWzAsMjU1XSBjb21lIGJhY2sgaW4gWzAsMV0uXG4gICAgICAgIC8vIFBvdGVudGlhbGx5IGxvc2UgYSBsaXR0bGUgYml0IG9mIHByZWNpc2lvbiBoZXJlLCBidXQgd2lsbCBmaXggaXNzdWVzIHdoZXJlXG4gICAgICAgIC8vIC41IGdldHMgaW50ZXJwcmV0ZWQgYXMgaGFsZiBvZiB0aGUgdG90YWwsIGluc3RlYWQgb2YgaGFsZiBvZiAxXG4gICAgICAgIC8vIElmIGl0IHdhcyBzdXBwb3NlZCB0byBiZSAxMjgsIHRoaXMgd2FzIGFscmVhZHkgdGFrZW4gY2FyZSBvZiBieSBgaW5wdXRUb1JnYmBcbiAgICAgICAgaWYgKHRoaXMuciA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuciA9IE1hdGgucm91bmQodGhpcy5yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5nID0gTWF0aC5yb3VuZCh0aGlzLmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmIgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmIgPSBNYXRoLnJvdW5kKHRoaXMuYik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gcmdiLm9rO1xuICAgIH1cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmlzRGFyayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJpZ2h0bmVzcygpIDwgMTI4O1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5pc0xpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZXJjZWl2ZWQgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IsIGZyb20gMC0yNTUuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5nZXRCcmlnaHRuZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9BRVJUI2NvbG9yLWNvbnRyYXN0XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHJldHVybiAocmdiLnIgKiAyOTkgKyByZ2IuZyAqIDU4NyArIHJnYi5iICogMTE0KSAvIDEwMDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZXJjZWl2ZWQgbHVtaW5hbmNlIG9mIGEgY29sb3IsIGZyb20gMC0xLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZ2V0THVtaW5hbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHZhciBSO1xuICAgICAgICB2YXIgRztcbiAgICAgICAgdmFyIEI7XG4gICAgICAgIHZhciBSc1JHQiA9IHJnYi5yIC8gMjU1O1xuICAgICAgICB2YXIgR3NSR0IgPSByZ2IuZyAvIDI1NTtcbiAgICAgICAgdmFyIEJzUkdCID0gcmdiLmIgLyAyNTU7XG4gICAgICAgIGlmIChSc1JHQiA8PSAwLjAzOTI4KSB7XG4gICAgICAgICAgICBSID0gUnNSR0IgLyAxMi45MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZXhwb25lbnRpYXRpb24tb3BlcmF0b3JcbiAgICAgICAgICAgIFIgPSBNYXRoLnBvdygoUnNSR0IgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR3NSR0IgPD0gMC4wMzkyOCkge1xuICAgICAgICAgICAgRyA9IEdzUkdCIC8gMTIuOTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWV4cG9uZW50aWF0aW9uLW9wZXJhdG9yXG4gICAgICAgICAgICBHID0gTWF0aC5wb3coKEdzUkdCICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJzUkdCIDw9IDAuMDM5MjgpIHtcbiAgICAgICAgICAgIEIgPSBCc1JHQiAvIDEyLjkyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1leHBvbmVudGlhdGlvbi1vcGVyYXRvclxuICAgICAgICAgICAgQiA9IE1hdGgucG93KChCc1JHQiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjIxMjYgKiBSICsgMC43MTUyICogRyArIDAuMDcyMiAqIEI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbHBoYSB2YWx1ZSBvZiBhIGNvbG9yLCBmcm9tIDAtMS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmdldEFscGhhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYWxwaGEgdmFsdWUgb24gdGhlIGN1cnJlbnQgY29sb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWxwaGEgLSBUaGUgbmV3IGFscGhhIHZhbHVlLiBUaGUgYWNjZXB0ZWQgcmFuZ2UgaXMgMC0xLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuc2V0QWxwaGEgPSBmdW5jdGlvbiAoYWxwaGEpIHtcbiAgICAgICAgdGhpcy5hID0gYm91bmRBbHBoYShhbHBoYSk7XG4gICAgICAgIHRoaXMucm91bmRBID0gTWF0aC5yb3VuZCgxMDAgKiB0aGlzLmEpIC8gMTAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhcyBhIEhTVkEgb2JqZWN0LlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9Ic3YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHN2LmggKiAzNjAsIHM6IGhzdi5zLCB2OiBoc3YudiwgYTogdGhpcy5hIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoc3ZhIHZhbHVlcyBpbnRlcnBvbGF0ZWQgaW50byBhIHN0cmluZyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICAgICAqIFwiaHN2YSh4eHgsIHh4eCwgeHh4LCB4eClcIi5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSHN2U3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgICAgIHZhciBoID0gTWF0aC5yb3VuZChoc3YuaCAqIDM2MCk7XG4gICAgICAgIHZhciBzID0gTWF0aC5yb3VuZChoc3YucyAqIDEwMCk7XG4gICAgICAgIHZhciB2ID0gTWF0aC5yb3VuZChoc3YudiAqIDEwMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmEgPT09IDEgPyBcImhzdihcIi5jb25jYXQoaCwgXCIsIFwiKS5jb25jYXQocywgXCIlLCBcIikuY29uY2F0KHYsIFwiJSlcIikgOiBcImhzdmEoXCIuY29uY2F0KGgsIFwiLCBcIikuY29uY2F0KHMsIFwiJSwgXCIpLmNvbmNhdCh2LCBcIiUsIFwiKS5jb25jYXQodGhpcy5yb3VuZEEsIFwiKVwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhcyBhIEhTTEEgb2JqZWN0LlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9Ic2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHNsLmggKiAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCwgYTogdGhpcy5hIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoc2xhIHZhbHVlcyBpbnRlcnBvbGF0ZWQgaW50byBhIHN0cmluZyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICAgICAqIFwiaHNsYSh4eHgsIHh4eCwgeHh4LCB4eClcIi5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSHNsU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgICAgIHZhciBoID0gTWF0aC5yb3VuZChoc2wuaCAqIDM2MCk7XG4gICAgICAgIHZhciBzID0gTWF0aC5yb3VuZChoc2wucyAqIDEwMCk7XG4gICAgICAgIHZhciBsID0gTWF0aC5yb3VuZChoc2wubCAqIDEwMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmEgPT09IDEgPyBcImhzbChcIi5jb25jYXQoaCwgXCIsIFwiKS5jb25jYXQocywgXCIlLCBcIikuY29uY2F0KGwsIFwiJSlcIikgOiBcImhzbGEoXCIuY29uY2F0KGgsIFwiLCBcIikuY29uY2F0KHMsIFwiJSwgXCIpLmNvbmNhdChsLCBcIiUsIFwiKS5jb25jYXQodGhpcy5yb3VuZEEsIFwiKVwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhleCB2YWx1ZSBvZiB0aGUgY29sb3IuXG4gICAgICogQHBhcmFtIGFsbG93M0NoYXIgd2lsbCBzaG9ydGVuIGhleCB2YWx1ZSB0byAzIGNoYXIgaWYgcG9zc2libGVcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSGV4ID0gZnVuY3Rpb24gKGFsbG93M0NoYXIpIHtcbiAgICAgICAgaWYgKGFsbG93M0NoYXIgPT09IHZvaWQgMCkgeyBhbGxvdzNDaGFyID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIsIGFsbG93M0NoYXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvciAtd2l0aCBhICMgYXBwZW5lZC5cbiAgICAgKiBAcGFyYW0gYWxsb3czQ2hhciB3aWxsIHNob3J0ZW4gaGV4IHZhbHVlIHRvIDMgY2hhciBpZiBwb3NzaWJsZVxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9IZXhTdHJpbmcgPSBmdW5jdGlvbiAoYWxsb3czQ2hhcikge1xuICAgICAgICBpZiAoYWxsb3czQ2hhciA9PT0gdm9pZCAwKSB7IGFsbG93M0NoYXIgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy50b0hleChhbGxvdzNDaGFyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhleCA4IHZhbHVlIG9mIHRoZSBjb2xvci5cbiAgICAgKiBAcGFyYW0gYWxsb3c0Q2hhciB3aWxsIHNob3J0ZW4gaGV4IHZhbHVlIHRvIDQgY2hhciBpZiBwb3NzaWJsZVxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9IZXg4ID0gZnVuY3Rpb24gKGFsbG93NENoYXIpIHtcbiAgICAgICAgaWYgKGFsbG93NENoYXIgPT09IHZvaWQgMCkgeyBhbGxvdzRDaGFyID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHJnYmFUb0hleCh0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCB0aGlzLmEsIGFsbG93NENoYXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGV4IDggdmFsdWUgb2YgdGhlIGNvbG9yIC13aXRoIGEgIyBhcHBlbmVkLlxuICAgICAqIEBwYXJhbSBhbGxvdzRDaGFyIHdpbGwgc2hvcnRlbiBoZXggdmFsdWUgdG8gNCBjaGFyIGlmIHBvc3NpYmxlXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hleDhTdHJpbmcgPSBmdW5jdGlvbiAoYWxsb3c0Q2hhcikge1xuICAgICAgICBpZiAoYWxsb3c0Q2hhciA9PT0gdm9pZCAwKSB7IGFsbG93NENoYXIgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy50b0hleDgoYWxsb3c0Q2hhcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXMgYSBSR0JBIG9iamVjdC5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvUmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogTWF0aC5yb3VuZCh0aGlzLnIpLFxuICAgICAgICAgICAgZzogTWF0aC5yb3VuZCh0aGlzLmcpLFxuICAgICAgICAgICAgYjogTWF0aC5yb3VuZCh0aGlzLmIpLFxuICAgICAgICAgICAgYTogdGhpcy5hLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgUkdCQSB2YWx1ZXMgaW50ZXJwb2xhdGVkIGludG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAgICAgKiBcIlJHQkEoeHh4LCB4eHgsIHh4eCwgeHgpXCIuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b1JnYlN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKHRoaXMucik7XG4gICAgICAgIHZhciBnID0gTWF0aC5yb3VuZCh0aGlzLmcpO1xuICAgICAgICB2YXIgYiA9IE1hdGgucm91bmQodGhpcy5iKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYSA9PT0gMSA/IFwicmdiKFwiLmNvbmNhdChyLCBcIiwgXCIpLmNvbmNhdChnLCBcIiwgXCIpLmNvbmNhdChiLCBcIilcIikgOiBcInJnYmEoXCIuY29uY2F0KHIsIFwiLCBcIikuY29uY2F0KGcsIFwiLCBcIikuY29uY2F0KGIsIFwiLCBcIikuY29uY2F0KHRoaXMucm91bmRBLCBcIilcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXMgYSBSR0JBIG9iamVjdC5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvUGVyY2VudGFnZVJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZtdCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKGJvdW5kMDEoeCwgMjU1KSAqIDEwMCksIFwiJVwiKTsgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IGZtdCh0aGlzLnIpLFxuICAgICAgICAgICAgZzogZm10KHRoaXMuZyksXG4gICAgICAgICAgICBiOiBmbXQodGhpcy5iKSxcbiAgICAgICAgICAgIGE6IHRoaXMuYSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFJHQkEgcmVsYXRpdmUgdmFsdWVzIGludGVycG9sYXRlZCBpbnRvIGEgc3RyaW5nXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b1BlcmNlbnRhZ2VSZ2JTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBybmQgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gTWF0aC5yb3VuZChib3VuZDAxKHgsIDI1NSkgKiAxMDApOyB9O1xuICAgICAgICByZXR1cm4gdGhpcy5hID09PSAxXG4gICAgICAgICAgICA/IFwicmdiKFwiLmNvbmNhdChybmQodGhpcy5yKSwgXCIlLCBcIikuY29uY2F0KHJuZCh0aGlzLmcpLCBcIiUsIFwiKS5jb25jYXQocm5kKHRoaXMuYiksIFwiJSlcIilcbiAgICAgICAgICAgIDogXCJyZ2JhKFwiLmNvbmNhdChybmQodGhpcy5yKSwgXCIlLCBcIikuY29uY2F0KHJuZCh0aGlzLmcpLCBcIiUsIFwiKS5jb25jYXQocm5kKHRoaXMuYiksIFwiJSwgXCIpLmNvbmNhdCh0aGlzLnJvdW5kQSwgXCIpXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlICdyZWFsJyBuYW1lIG9mIHRoZSBjb2xvciAtaWYgdGhlcmUgaXMgb25lLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZXggPSAnIycgKyByZ2JUb0hleCh0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCBmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhuYW1lcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICAgICAgaWYgKGhleCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHZhciBmb3JtYXRTZXQgPSBCb29sZWFuKGZvcm1hdCk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCAhPT0gbnVsbCAmJiBmb3JtYXQgIT09IHZvaWQgMCA/IGZvcm1hdCA6IHRoaXMuZm9ybWF0O1xuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNBbHBoYSA9IHRoaXMuYSA8IDEgJiYgdGhpcy5hID49IDA7XG4gICAgICAgIHZhciBuZWVkc0FscGhhRm9ybWF0ID0gIWZvcm1hdFNldCAmJiBoYXNBbHBoYSAmJiAoZm9ybWF0LnN0YXJ0c1dpdGgoJ2hleCcpIHx8IGZvcm1hdCA9PT0gJ25hbWUnKTtcbiAgICAgICAgaWYgKG5lZWRzQWxwaGFGb3JtYXQpIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgXCJ0cmFuc3BhcmVudFwiLCBhbGwgb3RoZXIgbm9uLWFscGhhIGZvcm1hdHNcbiAgICAgICAgICAgIC8vIHdpbGwgcmV0dXJuIHJnYmEgd2hlbiB0aGVyZSBpcyB0cmFuc3BhcmVuY3kuXG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnbmFtZScgJiYgdGhpcy5hID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdyZ2InKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3ByZ2InKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUGVyY2VudGFnZVJnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdoZXgnIHx8IGZvcm1hdCA9PT0gJ2hleDYnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2hleDMnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdoZXg0Jykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2hleDgnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICduYW1lJykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b05hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnaHNsJykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzbFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdoc3YnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHN2U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFN0cmluZyB8fCB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvTnVtYmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQodGhpcy5yKSA8PCAxNikgKyAoTWF0aC5yb3VuZCh0aGlzLmcpIDw8IDgpICsgTWF0aC5yb3VuZCh0aGlzLmIpO1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IodGhpcy50b1N0cmluZygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIExpZ2h0ZW4gdGhlIGNvbG9yIGEgZ2l2ZW4gYW1vdW50LiBQcm92aWRpbmcgMTAwIHdpbGwgYWx3YXlzIHJldHVybiB3aGl0ZS5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUubGlnaHRlbiA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIGhzbC5sICs9IGFtb3VudCAvIDEwMDtcbiAgICAgICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoaHNsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEJyaWdodGVuIHRoZSBjb2xvciBhIGdpdmVuIGFtb3VudCwgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuYnJpZ2h0ZW4gPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICByZ2IuciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgcmdiLnIgLSBNYXRoLnJvdW5kKDI1NSAqIC0oYW1vdW50IC8gMTAwKSkpKTtcbiAgICAgICAgcmdiLmcgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHJnYi5nIC0gTWF0aC5yb3VuZCgyNTUgKiAtKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgICAgIHJnYi5iID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCByZ2IuYiAtIE1hdGgucm91bmQoMjU1ICogLShhbW91bnQgLyAxMDApKSkpO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihyZ2IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGFya2VuIHRoZSBjb2xvciBhIGdpdmVuIGFtb3VudCwgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiBQcm92aWRpbmcgMTAwIHdpbGwgYWx3YXlzIHJldHVybiBibGFjay5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZGFya2VuID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgaHNsLmwgLT0gYW1vdW50IC8gMTAwO1xuICAgICAgICBoc2wubCA9IGNsYW1wMDEoaHNsLmwpO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihoc2wpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWl4IHRoZSBjb2xvciB3aXRoIHB1cmUgd2hpdGUsIGZyb20gMCB0byAxMDAuXG4gICAgICogUHJvdmlkaW5nIDAgd2lsbCBkbyBub3RoaW5nLCBwcm92aWRpbmcgMTAwIHdpbGwgYWx3YXlzIHJldHVybiB3aGl0ZS5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudGludCA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLm1peCgnd2hpdGUnLCBhbW91bnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWl4IHRoZSBjb2xvciB3aXRoIHB1cmUgYmxhY2ssIGZyb20gMCB0byAxMDAuXG4gICAgICogUHJvdmlkaW5nIDAgd2lsbCBkbyBub3RoaW5nLCBwcm92aWRpbmcgMTAwIHdpbGwgYWx3YXlzIHJldHVybiBibGFjay5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuc2hhZGUgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICByZXR1cm4gdGhpcy5taXgoJ2JsYWNrJywgYW1vdW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlc2F0dXJhdGUgdGhlIGNvbG9yIGEgZ2l2ZW4gYW1vdW50LCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIFByb3ZpZGluZyAxMDAgd2lsbCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGdyZXlzY2FsZVxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5kZXNhdHVyYXRlID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgaHNsLnMgLT0gYW1vdW50IC8gMTAwO1xuICAgICAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihoc2wpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2F0dXJhdGUgdGhlIGNvbG9yIGEgZ2l2ZW4gYW1vdW50LCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5zYXR1cmF0ZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIGhzbC5zICs9IGFtb3VudCAvIDEwMDtcbiAgICAgICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoaHNsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXBsZXRlbHkgZGVzYXR1cmF0ZXMgYSBjb2xvciBpbnRvIGdyZXlzY2FsZS5cbiAgICAgKiBTYW1lIGFzIGNhbGxpbmcgYGRlc2F0dXJhdGUoMTAwKWBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmdyZXlzY2FsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzYXR1cmF0ZSgxMDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BpbiB0YWtlcyBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGFtb3VudCB3aXRoaW4gWy0zNjAsIDM2MF0gaW5kaWNhdGluZyB0aGUgY2hhbmdlIG9mIGh1ZS5cbiAgICAgKiBWYWx1ZXMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlIHdpbGwgYmUgd3JhcHBlZCBpbnRvIHRoaXMgcmFuZ2UuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5zcGluID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICB2YXIgaHVlID0gKGhzbC5oICsgYW1vdW50KSAlIDM2MDtcbiAgICAgICAgaHNsLmggPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihoc2wpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWl4IHRoZSBjdXJyZW50IGNvbG9yIGEgZ2l2ZW4gYW1vdW50IHdpdGggYW5vdGhlciBjb2xvciwgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiAwIG1lYW5zIG5vIG1peGluZyAocmV0dXJuIGN1cnJlbnQgY29sb3IpLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUubWl4ID0gZnVuY3Rpb24gKGNvbG9yLCBhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDUwOyB9XG4gICAgICAgIHZhciByZ2IxID0gdGhpcy50b1JnYigpO1xuICAgICAgICB2YXIgcmdiMiA9IG5ldyBUaW55Q29sb3IoY29sb3IpLnRvUmdiKCk7XG4gICAgICAgIHZhciBwID0gYW1vdW50IC8gMTAwO1xuICAgICAgICB2YXIgcmdiYSA9IHtcbiAgICAgICAgICAgIHI6IChyZ2IyLnIgLSByZ2IxLnIpICogcCArIHJnYjEucixcbiAgICAgICAgICAgIGc6IChyZ2IyLmcgLSByZ2IxLmcpICogcCArIHJnYjEuZyxcbiAgICAgICAgICAgIGI6IChyZ2IyLmIgLSByZ2IxLmIpICogcCArIHJnYjEuYixcbiAgICAgICAgICAgIGE6IChyZ2IyLmEgLSByZ2IxLmEpICogcCArIHJnYjEuYSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IocmdiYSk7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmFuYWxvZ291cyA9IGZ1bmN0aW9uIChyZXN1bHRzLCBzbGljZXMpIHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHZvaWQgMCkgeyByZXN1bHRzID0gNjsgfVxuICAgICAgICBpZiAoc2xpY2VzID09PSB2b2lkIDApIHsgc2xpY2VzID0gMzA7IH1cbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgdmFyIHBhcnQgPSAzNjAgLyBzbGljZXM7XG4gICAgICAgIHZhciByZXQgPSBbdGhpc107XG4gICAgICAgIGZvciAoaHNsLmggPSAoaHNsLmggLSAoKHBhcnQgKiByZXN1bHRzKSA+PiAxKSArIDcyMCkgJSAzNjA7IC0tcmVzdWx0czspIHtcbiAgICAgICAgICAgIGhzbC5oID0gKGhzbC5oICsgcGFydCkgJSAzNjA7XG4gICAgICAgICAgICByZXQucHVzaChuZXcgVGlueUNvbG9yKGhzbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZ1c2lvbi9qUXVlcnkteGNvbG9yL2Jsb2IvbWFzdGVyL2pxdWVyeS54Y29sb3IuanNcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmNvbXBsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIGhzbC5oID0gKGhzbC5oICsgMTgwKSAlIDM2MDtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoaHNsKTtcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUubW9ub2Nocm9tYXRpYyA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgIGlmIChyZXN1bHRzID09PSB2b2lkIDApIHsgcmVzdWx0cyA9IDY7IH1cbiAgICAgICAgdmFyIGhzdiA9IHRoaXMudG9Ic3YoKTtcbiAgICAgICAgdmFyIGggPSBoc3YuaDtcbiAgICAgICAgdmFyIHMgPSBoc3YucztcbiAgICAgICAgdmFyIHYgPSBoc3YudjtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICB2YXIgbW9kaWZpY2F0aW9uID0gMSAvIHJlc3VsdHM7XG4gICAgICAgIHdoaWxlIChyZXN1bHRzLS0pIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKG5ldyBUaW55Q29sb3IoeyBoOiBoLCBzOiBzLCB2OiB2IH0pKTtcbiAgICAgICAgICAgIHYgPSAodiArIG1vZGlmaWNhdGlvbikgJSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnNwbGl0Y29tcGxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgdmFyIGggPSBoc2wuaDtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBuZXcgVGlueUNvbG9yKHsgaDogKGggKyA3MikgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgICAgIG5ldyBUaW55Q29sb3IoeyBoOiAoaCArIDIxNikgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXB1dGUgaG93IHRoZSBjb2xvciB3b3VsZCBhcHBlYXIgb24gYSBiYWNrZ3JvdW5kXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5vbkJhY2tncm91bmQgPSBmdW5jdGlvbiAoYmFja2dyb3VuZCkge1xuICAgICAgICB2YXIgZmcgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHZhciBiZyA9IG5ldyBUaW55Q29sb3IoYmFja2dyb3VuZCkudG9SZ2IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3Ioe1xuICAgICAgICAgICAgcjogYmcuciArIChmZy5yIC0gYmcucikgKiBmZy5hLFxuICAgICAgICAgICAgZzogYmcuZyArIChmZy5nIC0gYmcuZykgKiBmZy5hLFxuICAgICAgICAgICAgYjogYmcuYiArIChmZy5iIC0gYmcuYikgKiBmZy5hLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBgcG9seWFkKDMpYFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudHJpYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlhZCgzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBgcG9seWFkKDQpYFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudGV0cmFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5YWQoNCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgcG9seWFkIGNvbG9ycywgbGlrZSAoZm9yIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIGV0Yy4uLilcbiAgICAgKiBtb25hZCwgZHlhZCwgdHJpYWQsIHRldHJhZCwgcGVudGFkLCBoZXhhZCwgaGVwdGFkLCBvY3RhZCwgZXRjLi4uXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5wb2x5YWQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICB2YXIgaCA9IGhzbC5oO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW3RoaXNdO1xuICAgICAgICB2YXIgaW5jcmVtZW50ID0gMzYwIC8gbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBUaW55Q29sb3IoeyBoOiAoaCArIGkgKiBpbmNyZW1lbnQpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBjb21wYXJlIGNvbG9yIHZzIGN1cnJlbnQgY29sb3JcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICByZXR1cm4gdGhpcy50b1JnYlN0cmluZygpID09PSBuZXcgVGlueUNvbG9yKGNvbG9yKS50b1JnYlN0cmluZygpO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbnlDb2xvcjtcbn0oKSk7XG5leHBvcnQgeyBUaW55Q29sb3IgfTtcbi8vIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRhYmlsaXR5IHdpdGggdjFcbmV4cG9ydCBmdW5jdGlvbiB0aW55Y29sb3IoY29sb3IsIG9wdHMpIHtcbiAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICcnOyB9XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihjb2xvciwgb3B0cyk7XG59XG4iLCIvKipcbiAqIFRha2UgaW5wdXQgZnJvbSBbMCwgbl0gYW5kIHJldHVybiBpdCBhcyBbMCwgMV1cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kMDEobiwgbWF4KSB7XG4gICAgaWYgKGlzT25lUG9pbnRaZXJvKG4pKSB7XG4gICAgICAgIG4gPSAnMTAwJSc7XG4gICAgfVxuICAgIHZhciBpc1BlcmNlbnQgPSBpc1BlcmNlbnRhZ2Uobik7XG4gICAgbiA9IG1heCA9PT0gMzYwID8gbiA6IE1hdGgubWluKG1heCwgTWF0aC5tYXgoMCwgcGFyc2VGbG9hdChuKSkpO1xuICAgIC8vIEF1dG9tYXRpY2FsbHkgY29udmVydCBwZXJjZW50YWdlIGludG8gbnVtYmVyXG4gICAgaWYgKGlzUGVyY2VudCkge1xuICAgICAgICBuID0gcGFyc2VJbnQoU3RyaW5nKG4gKiBtYXgpLCAxMCkgLyAxMDA7XG4gICAgfVxuICAgIC8vIEhhbmRsZSBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnNcbiAgICBpZiAoTWF0aC5hYnMobiAtIG1heCkgPCAwLjAwMDAwMSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLy8gQ29udmVydCBpbnRvIFswLCAxXSByYW5nZSBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgaWYgKG1heCA9PT0gMzYwKSB7XG4gICAgICAgIC8vIElmIG4gaXMgYSBodWUgZ2l2ZW4gaW4gZGVncmVlcyxcbiAgICAgICAgLy8gd3JhcCBhcm91bmQgb3V0LW9mLXJhbmdlIHZhbHVlcyBpbnRvIFswLCAzNjBdIHJhbmdlXG4gICAgICAgIC8vIHRoZW4gY29udmVydCBpbnRvIFswLCAxXS5cbiAgICAgICAgbiA9IChuIDwgMCA/IChuICUgbWF4KSArIG1heCA6IG4gJSBtYXgpIC8gcGFyc2VGbG9hdChTdHJpbmcobWF4KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBuIG5vdCBhIGh1ZSBnaXZlbiBpbiBkZWdyZWVzXG4gICAgICAgIC8vIENvbnZlcnQgaW50byBbMCwgMV0gcmFuZ2UgaWYgaXQgaXNuJ3QgYWxyZWFkeS5cbiAgICAgICAgbiA9IChuICUgbWF4KSAvIHBhcnNlRmxvYXQoU3RyaW5nKG1heCkpO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbn1cbi8qKlxuICogRm9yY2UgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcDAxKHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB2YWwpKTtcbn1cbi8qKlxuICogTmVlZCB0byBoYW5kbGUgMS4wIGFzIDEwMCUsIHNpbmNlIG9uY2UgaXQgaXMgYSBudW1iZXIsIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UgYmV0d2VlbiBpdCBhbmQgMVxuICogPGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzQyMjA3Mi9qYXZhc2NyaXB0LWhvdy10by1kZXRlY3QtbnVtYmVyLWFzLWEtZGVjaW1hbC1pbmNsdWRpbmctMS0wPlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPbmVQb2ludFplcm8obikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ3N0cmluZycgJiYgbi5pbmRleE9mKCcuJykgIT09IC0xICYmIHBhcnNlRmxvYXQobikgPT09IDE7XG59XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiBzdHJpbmcgcGFzc2VkIGluIGlzIGEgcGVyY2VudGFnZVxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdzdHJpbmcnICYmIG4uaW5kZXhPZignJScpICE9PSAtMTtcbn1cbi8qKlxuICogUmV0dXJuIGEgdmFsaWQgYWxwaGEgdmFsdWUgWzAsMV0gd2l0aCBhbGwgaW52YWxpZCB2YWx1ZXMgYmVpbmcgc2V0IHRvIDFcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQWxwaGEoYSkge1xuICAgIGEgPSBwYXJzZUZsb2F0KGEpO1xuICAgIGlmIChpc05hTihhKSB8fCBhIDwgMCB8fCBhID4gMSkge1xuICAgICAgICBhID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59XG4vKipcbiAqIFJlcGxhY2UgYSBkZWNpbWFsIHdpdGggaXQncyBwZXJjZW50YWdlIHZhbHVlXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9QZXJjZW50YWdlKG4pIHtcbiAgICBpZiAobiA8PSAxKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChOdW1iZXIobikgKiAxMDAsIFwiJVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG4vKipcbiAqIEZvcmNlIGEgaGV4IHZhbHVlIHRvIGhhdmUgMiBjaGFyYWN0ZXJzXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWQyKGMpIHtcbiAgICByZXR1cm4gYy5sZW5ndGggPT09IDEgPyAnMCcgKyBjIDogU3RyaW5nKGMpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNvbW1hbmRzID0ge1xuICAgIGdlbmVyYWxTZXR0aW5nczogJ2dlbmVyYWxTZXR0aW5ncycsXG4gICAgZXhwb3J0OiAnZXhwb3J0JyxcbiAgICBzZW5kU2V0dGluZ3M6ICdzZW5kU2V0dGluZ3MnLFxuICAgIHVybEV4cG9ydDogJ3VybEV4cG9ydCcsXG4gICAgaGVscDogJ2hlbHAnLFxuICAgIGRlbW86ICdkZW1vJyxcbiAgICBvcGVuVXJsOiAnb3BlblVybCcsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgc2F2ZVNldHRpbmdzOiAnc2F2ZVNldHRpbmdzJyxcbiAgICBjbG9zZVBsdWdpbjogJ2Nsb3NlUGx1Z2luJ1xufTtcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdWk6IHtcbiAgICAgICAgZ2VuZXJhbFNldHRpbmdzOiB7XG4gICAgICAgICAgICB3aWR0aDogNTUwLFxuICAgICAgICAgICAgaGVpZ2h0OiA3NTVcbiAgICAgICAgfSxcbiAgICAgICAgZXhwb3J0OiB7XG4gICAgICAgICAgICB3aWR0aDogNTUwLFxuICAgICAgICAgICAgaGVpZ2h0OiAzNTZcbiAgICAgICAgfSxcbiAgICAgICAgdXJsRXhwb3J0OiB7XG4gICAgICAgICAgICB3aWR0aDogNTUwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2NTBcbiAgICAgICAgfVxuICAgIH0sXG4gICAga2V5OiB7XG4gICAgICAgIGxhc3RWZXJzaW9uU2V0dGluZ3NPcGVuZWQ6ICdsYXN0VmVyc2lvblNldHRpbmdzT3BlbmVkJyxcbiAgICAgICAgZmlsZUlkOiAnZmlsZUlkJyxcbiAgICAgICAgc2V0dGluZ3M6ICdzZXR0aW5ncycsXG4gICAgICAgIGV4dGVuc2lvblBsdWdpbkRhdGE6ICdvcmcubHVrYXNvcHBlcm1hbm4uZmlnbWFEZXNpZ25Ub2tlbnMnLFxuICAgICAgICBleHRlbnNpb25GaWdtYVN0eWxlSWQ6ICdzdHlsZUlkJyxcbiAgICAgICAgZXh0ZW5zaW9uVmFyaWFibGVTdHlsZUlkOiAndmFyaWFibGVJZCcsXG4gICAgICAgIGV4dGVuc2lvbkFsaWFzOiAnYWxpYXMnLFxuICAgICAgICBhdXRoVHlwZToge1xuICAgICAgICAgICAgdG9rZW46ICd0b2tlbicsXG4gICAgICAgICAgICBnaXRsYWJUb2tlbjogJ2dpdGxhYl90b2tlbicsXG4gICAgICAgICAgICBnaXRsYWJDb21taXQ6ICdnaXRsYWJfY29tbWl0JyxcbiAgICAgICAgICAgIGJhc2ljOiAnQmFzaWMnLFxuICAgICAgICAgICAgYmVhcmVyOiAnQmVhcmVyJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBleGNsdXNpb25QcmVmaXhEZWZhdWx0OiBbJ18nLCAnLiddLFxuICAgIGZpbGVFeHRlbnNpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnLnRva2Vucy5qc29uJyxcbiAgICAgICAgICAgIHZhbHVlOiAnLnRva2Vucy5qc29uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJy50b2tlbnMnLFxuICAgICAgICAgICAgdmFsdWU6ICcudG9rZW5zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJy5qc29uJyxcbiAgICAgICAgICAgIHZhbHVlOiAnLmpzb24nXG4gICAgICAgIH1cbiAgICBdXG59O1xuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICBmaWxlbmFtZTogJ2Rlc2lnbi10b2tlbnMnLFxuICAgIGV4dGVuc2lvbjogJy50b2tlbnMuanNvbicsXG4gICAgbmFtZUNvbnZlcnNpb246ICdkZWZhdWx0JyxcbiAgICB0b2tlbkZvcm1hdDogJ3N0YW5kYXJkJyxcbiAgICBjb21wcmVzc2lvbjogZmFsc2UsXG4gICAgdXJsSnNvbkNvbXByZXNzaW9uOiB0cnVlLFxuICAgIHNlcnZlclVybDogdW5kZWZpbmVkLFxuICAgIGV2ZW50VHlwZTogJ3VwZGF0ZS10b2tlbnMnLFxuICAgIGFjY2Vzc1Rva2VuOiB1bmRlZmluZWQsXG4gICAgYWNjZXB0SGVhZGVyOiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi5ldmVyZXN0LXByZXZpZXcranNvbicsXG4gICAgY29udGVudFR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnLFxuICAgIGF1dGhUeXBlOiAndG9rZW4nLFxuICAgIHJlZmVyZW5jZTogJ21haW4nLFxuICAgIGV4Y2x1c2lvblByZWZpeDogJycsXG4gICAgZXhjbHVkZUV4dGVuc2lvblByb3A6IGZhbHNlLFxuICAgIGFsaWFzOiAnYWxpYXMsIHJlZiwgcmVmZXJlbmNlJyxcbiAgICBrZXlJbk5hbWU6IGZhbHNlLFxuICAgIHByZWZpeEluTmFtZTogdHJ1ZSxcbiAgICBtb2RlUmVmZXJlbmNlOiB0cnVlLFxuICAgIHByZWZpeDoge1xuICAgICAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICAgICAgZ3JhZGllbnQ6ICdncmFkaWVudCcsXG4gICAgICAgIHR5cG9ncmFwaHk6ICd0eXBvZ3JhcGh5JyxcbiAgICAgICAgZm9udDogJ2ZvbnQnLFxuICAgICAgICBlZmZlY3Q6ICdlZmZlY3QnLFxuICAgICAgICBncmlkOiAnZ3JpZCcsXG4gICAgICAgIGJvcmRlcjogJ2JvcmRlciwgYm9yZGVycycsXG4gICAgICAgIGJyZWFrcG9pbnQ6ICdicmVha3BvaW50LCBicmVha3BvaW50cycsXG4gICAgICAgIHJhZGl1czogJ3JhZGl1cywgcmFkaWknLFxuICAgICAgICBzaXplOiAnc2l6ZSwgc2l6ZXMnLFxuICAgICAgICBzcGFjaW5nOiAnc3BhY2luZycsXG4gICAgICAgIG1vdGlvbjogJ21vdGlvbicsXG4gICAgICAgIG9wYWNpdHk6ICdvcGFjaXR5LCBvcGFjaXRpZXMnXG4gICAgfSxcbiAgICBleHBvcnRzOiB7XG4gICAgICAgIGNvbG9yOiB0cnVlLFxuICAgICAgICBncmFkaWVudDogdHJ1ZSxcbiAgICAgICAgZm9udDogdHJ1ZSxcbiAgICAgICAgdHlwb2dyYXBoeTogdHJ1ZSxcbiAgICAgICAgZWZmZWN0OiB0cnVlLFxuICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICBib3JkZXI6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnQ6IHRydWUsXG4gICAgICAgIHJhZGl1czogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdHJ1ZSxcbiAgICAgICAgc3BhY2luZzogdHJ1ZSxcbiAgICAgICAgbW90aW9uOiB0cnVlLFxuICAgICAgICBvcGFjaXR5OiB0cnVlLFxuICAgICAgICB2YXJpYWJsZXM6IHRydWVcbiAgICB9XG59O1xuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbmV4cG9ydCBjb25zdCB0b2tlblR5cGVzID0ge1xuICAgIGNvbG9yOiB7XG4gICAgICAgIGxhYmVsOiAnQ29sb3JzJyxcbiAgICAgICAga2V5OiAnY29sb3InXG4gICAgfSxcbiAgICBncmFkaWVudDoge1xuICAgICAgICBsYWJlbDogJ0dyYWRpZW50cycsXG4gICAgICAgIGtleTogJ2dyYWRpZW50J1xuICAgIH0sXG4gICAgZm9udDoge1xuICAgICAgICBsYWJlbDogJ0ZvbnQgU3R5bGVzJyxcbiAgICAgICAga2V5OiAnZm9udCdcbiAgICB9LFxuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgbGFiZWw6ICdUeXBvZ3JhcGh5JyxcbiAgICAgICAga2V5OiAndHlwb2dyYXBoeScsXG4gICAgICAgIGV4Y2x1ZGU6IFsnb3JpZ2luYWwnXVxuICAgIH0sXG4gICAgZWZmZWN0OiB7XG4gICAgICAgIGxhYmVsOiAnRWZmZWN0cycsXG4gICAgICAgIGtleTogJ2VmZmVjdCdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgICAgbGFiZWw6ICdHcmlkcycsXG4gICAgICAgIGtleTogJ2dyaWQnXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgICAgbGFiZWw6ICdCb3JkZXJzJyxcbiAgICAgICAga2V5OiAnYm9yZGVyJ1xuICAgIH0sXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgICBsYWJlbDogJ0JyZWFrcG9pbnRzJyxcbiAgICAgICAga2V5OiAnYnJlYWtwb2ludCdcbiAgICB9LFxuICAgIHJhZGl1czoge1xuICAgICAgICBsYWJlbDogJ1JhZGlpJyxcbiAgICAgICAga2V5OiAncmFkaXVzJ1xuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgICBsYWJlbDogJ1NpemVzJyxcbiAgICAgICAga2V5OiAnc2l6ZSdcbiAgICB9LFxuICAgIHNwYWNpbmc6IHtcbiAgICAgICAgbGFiZWw6ICdTcGFjaW5nJyxcbiAgICAgICAga2V5OiAnc3BhY2luZydcbiAgICB9LFxuICAgIG1vdGlvbjoge1xuICAgICAgICBsYWJlbDogJ01vdGlvbicsXG4gICAgICAgIGtleTogJ21vdGlvbidcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbGFiZWw6ICdPcGFjaXR5JyxcbiAgICAgICAga2V5OiAnb3BhY2l0eSdcbiAgICB9LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsYWJlbDogJ0ZpZ21hIFZhcmlhYmxlcyAoQkVUQSknLFxuICAgICAgICBrZXk6ICd2YXJpYWJsZXMnLFxuICAgICAgICBleGNsdWRlOiBbJ29yaWdpbmFsJ11cbiAgICB9XG59O1xuIiwiaW1wb3J0IHJvdW5kV2l0aERlY2ltYWxzIGZyb20gJy4uL3V0aWxpdGllcy9yb3VuZFdpdGhEZWNpbWFscyc7XG5pbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCB7IGZpbHRlckJ5UHJlZml4IH0gZnJvbSAnLi9leHRyYWN0VXRpbGl0aWVzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3Qgc3Ryb2tlSm9pbnMgPSB7XG4gICAgTUlURVI6ICdtaXRlcicsXG4gICAgQkVWRUw6ICdiZXZlbCcsXG4gICAgUk9VTkQ6ICdyb3VuZCdcbn07XG5jb25zdCBzdHJva2VBbGlnbnMgPSB7XG4gICAgQ0VOVEVSOiAnY2VudGVyJyxcbiAgICBJTlNJREU6ICdpbnNpZGUnLFxuICAgIE9VVFNJREU6ICdvdXRzaWRlJ1xufTtcbmNvbnN0IGV4dHJhY3RCb3JkZXJzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpXG4gICAgICAgIC8vIHJlbW92ZSBub2RlcyB3aXRoIG5vIGJvcmRlciBwcm9wZXJ0eVxuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5zdHJva2VzLmxlbmd0aCA+IDApXG4gICAgICAgIC8vIGNvbnZlcnQgYm9yZGVyc1xuICAgICAgICAubWFwKG5vZGUgPT4gKHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICBjYXRlZ29yeTogJ2JvcmRlcicsXG4gICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5ib3JkZXIua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHN0cm9rZUFsaWduOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cm9rZUFsaWduc1tub2RlLnN0cm9rZUFsaWduXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhc2hQYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFsuLi4obm9kZS5kYXNoUGF0dGVybiAhPT0gdW5kZWZpbmVkICYmIG5vZGUuZGFzaFBhdHRlcm4ubGVuZ3RoID4gMCA/IG5vZGUuZGFzaFBhdHRlcm4gOiBbMCwgMF0pXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZUNhcDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAoKHR5cGVvZiBub2RlLnN0cm9rZUNhcCA9PT0gJ3N0cmluZycpID8gbm9kZS5zdHJva2VDYXAudG9Mb3dlckNhc2UoKSA6ICdtaXhlZCcpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlSm9pbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJva2VKb2luc1tub2RlLnN0cm9rZUpvaW5dLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlTWl0ZXJMaW1pdDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLnN0cm9rZU1pdGVyTGltaXQpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdkZWdyZWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gc3Ryb2tlU3R5bGVJZDoge1xuICAgICAgICAgICAgLy8gICB2YWx1ZTogbm9kZS5zdHJva2VTdHlsZUlkXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5zdHJva2VzWzBdLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uUGx1Z2luRGF0YV06IHtcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuYm9yZGVyLmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RCb3JkZXJzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSAnLi4vdXRpbGl0aWVzL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCB7IGZpbHRlckJ5UHJlZml4IH0gZnJvbSAnLi9leHRyYWN0VXRpbGl0aWVzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZXh0cmFjdEJyZWFrcG9pbnRzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpLm1hcChub2RlID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdicmVha3BvaW50JyxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmJyZWFrcG9pbnQua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kV2l0aERlY2ltYWxzKG5vZGUud2lkdGgsIDIpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5oZWlnaHQsIDIpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uUGx1Z2luRGF0YV06IHtcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuYnJlYWtwb2ludC5rZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBleHRyYWN0QnJlYWtwb2ludHM7XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCB7IGNvbnZlcnRQYWludFRvUmdiYSwgcm91bmRSZ2JhIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbnZlcnRDb2xvcic7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSAnLi4vdXRpbGl0aWVzL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgdHJhbnNwYXJlbnRGaWxsID0ge1xuICAgIGZpbGw6IHtcbiAgICAgICAgdmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LFxuICAgICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgICBibGVuZE1vZGU6ICdub3JtYWwnXG4gICAgfVxufTtcbmNvbnN0IHBhcnNlRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24gPSAnJywgYWxpYXNBcnJheSkgPT4ge1xuICAgIGFsaWFzQXJyYXkgPSAhYWxpYXNBcnJheSB8fCBhbGlhc0FycmF5LmZpbHRlcihpID0+IGkpLmxlbmd0aCA9PT0gMCA/IFsnUmVmOiddIDogYWxpYXNBcnJheTtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJygnICsgYWxpYXNBcnJheS5qb2luKCd8JykudG9Mb3dlckNhc2UoKSArICcpJyArICc6P1xcXFxzJyk7XG4gICAgLy8gc3BsaXQgZGVzY3JpcHRpb24gaW4gbGluZXNcbiAgICBsZXQgYWxpYXM7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MaW5lcyA9IGRlc2NyaXB0aW9uLnNwbGl0KC9cXHI/XFxuLylcbiAgICAgICAgLy8gZmluZCBtYXRjaFxuICAgICAgICAuZmlsdGVyKGxpbmUgPT4ge1xuICAgICAgICBpZiAobGluZS50b0xvd2VyQ2FzZSgpLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgICAgYWxpYXMgPSBsaW5lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShyZWdleCwgJycpLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyByZXR1cm4gb2JqZWN0XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25MaW5lcy5qb2luKCdcXG4nKVxuICAgIH07XG59O1xuY29uc3QgYWRkQWxpYXMgPSAoYWxpYXMpID0+IGFsaWFzID8gKHsgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uQWxpYXNdOiBhbGlhcyB9KSA6ICh7fSk7XG5jb25zdCBncmFkaWVudFR5cGUgPSB7XG4gICAgR1JBRElFTlRfTElORUFSOiAnbGluZWFyJyxcbiAgICBHUkFESUVOVF9SQURJQUw6ICdyYWRpYWwnLFxuICAgIEdSQURJRU5UX0FOR1VMQVI6ICdhbmd1bGFyJyxcbiAgICBHUkFESUVOVF9ESUFNT05EOiAnZGlhbW9uZCdcbn07XG5jb25zdCBpc0dyYWRpZW50ID0gKHBhaW50KSA9PiBbJ0dSQURJRU5UX0xJTkVBUicsICdHUkFESUVOVF9SQURJQUwnLCAnR1JBRElFTlRfQU5HVUxBUicsICdHUkFESUVOVF9ESUFNT05EJ10uaW5jbHVkZXMocGFpbnQgPT09IG51bGwgfHwgcGFpbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaW50LnR5cGUpO1xuY29uc3Qgcm90YXRpb25Gcm9tTWF0cml4ID0gKFtbeDEsIHkxXSwgW3gyLCB5Ml1dKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ5MDk1ODYvZmluZC1yb3RhdGlvbi1hbmdsZS1mb3ItYWZmaW5lLXRyYW5zZm9ybVxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKSAqICgxODAuMCAvIE1hdGguUEkpICsgMzE1O1xuICAgIHJldHVybiBhbmdsZSA+IDM2MCA/IGFuZ2xlIC0gMzYwIDogYW5nbGU7XG59O1xuY29uc3QgZXh0cmFjdEZpbGxzID0gKHBhaW50KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwYWludC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbnZlcnRQYWludFRvUmdiYShwYWludCksXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICBibGVuZE1vZGU6ICgoX2EgPSBwYWludC5ibGVuZE1vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpKSB8fCAnbm9ybWFsJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoWydHUkFESUVOVF9MSU5FQVInLCAnR1JBRElFTlRfUkFESUFMJywgJ0dSQURJRU5UX0FOR1VMQVInLCAnR1JBRElFTlRfRElBTU9ORCddLmluY2x1ZGVzKHBhaW50LnR5cGUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncmFkaWVudFR5cGU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ3JhZGllbnRUeXBlW3BhaW50LnR5cGVdLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm90YXRpb246IHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDkwOTU4Ni9maW5kLXJvdGF0aW9uLWFuZ2xlLWZvci1hZmZpbmUtdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdGF0aW9uRnJvbU1hdHJpeChwYWludC5ncmFkaWVudFRyYW5zZm9ybSksXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgdW5pdDogJ2RlZ3JlZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9wczogcGFpbnQuZ3JhZGllbnRTdG9wcy5tYXAoc3RvcCA9PiAoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhzdG9wLnBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFJnYmEoc3RvcC5jb2xvciksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xvcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kV2l0aERlY2ltYWxzKHBhaW50Lm9wYWNpdHkpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHJldHVybiBudWxsIGlmIG5vIG1hdGNoaW5nIHR5cGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGV4dHJhY3RDb2xvcnMgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyBnZXQgYWxsIHBhaW50IHN0eWxlc1xuICAgIHJldHVybiB0b2tlbk5vZGVzXG4gICAgICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIG5vZGUpID0+IHtcbiAgICAgICAgLy8gaWdub3JlIGltYWdlLW9ubHkgZmlsbHNcbiAgICAgICAgY29uc3QgcGFpbnRzQWZ0ZXJJbWFnZUZpbHRlciA9IG5vZGUucGFpbnRzLmZpbHRlcihwYWludCA9PiBwYWludC50eXBlICE9PSAnSU1BR0UnKTtcbiAgICAgICAgaWYgKG5vZGUucGFpbnRzLmxlbmd0aCAmJiBwYWludHNBZnRlckltYWdlRmlsdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIGltYWdlcyBmaWxscyBmcm9tIHRva2Vuc1xuICAgICAgICBub2RlLnBhaW50cyA9IHBhaW50c0FmdGVySW1hZ2VGaWx0ZXI7XG4gICAgICAgIGNvbnN0IHsgYWxpYXMsIGRlc2NyaXB0aW9uIH0gPSBwYXJzZURlc2NyaXB0aW9uKG5vZGUuZGVzY3JpcHRpb24sIHByZWZpeEFycmF5LmFsaWFzKTtcbiAgICAgICAgY29uc3Qgbm9kZUlzR3JhZGllbnQgPSBpc0dyYWRpZW50KG5vZGUucGFpbnRzWzBdKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gbm9kZS5wYWludHMubGVuZ3RoID8gbm9kZS5wYWludHMubWFwKHBhaW50ID0+IGV4dHJhY3RGaWxscyhwYWludCkpIDogW3RyYW5zcGFyZW50RmlsbF07XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5wcmV2aW91c1ZhbHVlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGAke25vZGVJc0dyYWRpZW50ID8gcHJlZml4QXJyYXkuZ3JhZGllbnRbMF0gOiBwcmVmaXhBcnJheS5jb2xvclswXX0vJHtub2RlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogbm9kZUlzR3JhZGllbnQgPyAnZ3JhZGllbnQnIDogJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IChub2RlSXNHcmFkaWVudCA/IHRva2VuVHlwZXMuZ3JhZGllbnQua2V5IDogdG9rZW5UeXBlcy5jb2xvci5rZXkpLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXTogT2JqZWN0LmFzc2lnbih7IFtjb25maWcua2V5LmV4dGVuc2lvbkZpZ21hU3R5bGVJZF06IG5vZGUuaWQsIGV4cG9ydEtleTogKG5vZGVJc0dyYWRpZW50ID8gdG9rZW5UeXBlcy5ncmFkaWVudC5rZXkgOiB0b2tlblR5cGVzLmNvbG9yLmtleSkgfSwgKGFkZEFsaWFzKGFsaWFzKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH0sIFtdKTtcbn07XG5leHBvcnQgZGVmYXVsdCBleHRyYWN0Q29sb3JzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgeyByb3VuZFJnYmEgfSBmcm9tICcuLi91dGlsaXRpZXMvY29udmVydENvbG9yJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZWZmZWN0VHlwZSA9IHtcbiAgICBMQVlFUl9CTFVSOiAnbGF5ZXJCbHVyJyxcbiAgICBCQUNLR1JPVU5EX0JMVVI6ICdiYWNrZ3JvdW5kQmx1cicsXG4gICAgRFJPUF9TSEFET1c6ICdkcm9wU2hhZG93JyxcbiAgICBJTk5FUl9TSEFET1c6ICdpbm5lclNoYWRvdydcbn07XG5jb25zdCBibHVyVmFsdWVzID0gKGVmZmVjdCkgPT4gKHtcbiAgICBlZmZlY3RUeXBlOiB7XG4gICAgICAgIHZhbHVlOiBlZmZlY3RUeXBlW2VmZmVjdC50eXBlXSxcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHJhZGl1czoge1xuICAgICAgICB2YWx1ZTogZWZmZWN0LnJhZGl1cyxcbiAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9XG59KTtcbmNvbnN0IHNoYWRvd1ZhbHVlcyA9IGVmZmVjdCA9PiAoe1xuICAgIGVmZmVjdFR5cGU6IHtcbiAgICAgICAgdmFsdWU6IGVmZmVjdFR5cGVbZWZmZWN0LnR5cGVdLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgcmFkaXVzOiB7XG4gICAgICAgIHZhbHVlOiBlZmZlY3QucmFkaXVzLFxuICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6IHJvdW5kUmdiYShlZmZlY3QuY29sb3IpLFxuICAgICAgICB0eXBlOiAnY29sb3InXG4gICAgfSxcbiAgICBvZmZzZXQ6IHtcbiAgICAgICAgeDoge1xuICAgICAgICAgICAgdmFsdWU6IGVmZmVjdC5vZmZzZXQueCxcbiAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB5OiB7XG4gICAgICAgICAgICB2YWx1ZTogZWZmZWN0Lm9mZnNldC55LFxuICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNwcmVhZDoge1xuICAgICAgICB2YWx1ZTogZWZmZWN0LnNwcmVhZCxcbiAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9XG59KTtcbmNvbnN0IGV4dHJhY3RFZmZlY3RzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gZ2V0IGVmZmVjdCBzdHlsZXNcbiAgICByZXR1cm4gdG9rZW5Ob2Rlc1xuICAgICAgICAvLyByZW1vdmUgdG9rZW5zIHdpdGggbm8gZ3JpZFxuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5lZmZlY3RzLmxlbmd0aCA+IDApXG4gICAgICAgIC8vIGJ1aWxkXG4gICAgICAgIC5tYXAobm9kZSA9PiAoe1xuICAgICAgICBuYW1lOiBgJHtwcmVmaXhBcnJheVswXX0vJHtub2RlLm5hbWV9YCxcbiAgICAgICAgY2F0ZWdvcnk6ICdlZmZlY3QnLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuZWZmZWN0LmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiBub2RlLmVmZmVjdHMubWFwKChlZmZlY3QpID0+IGVmZmVjdC50eXBlID09PSAnTEFZRVJfQkxVUicgfHwgZWZmZWN0LnR5cGUgPT09ICdCQUNLR1JPVU5EX0JMVVInXG4gICAgICAgICAgICA/IGJsdXJWYWx1ZXMoZWZmZWN0KVxuICAgICAgICAgICAgOiBzaGFkb3dWYWx1ZXMoZWZmZWN0KSksXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uRmlnbWFTdHlsZUlkXTogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuZWZmZWN0LmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RFZmZlY3RzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSAnLi4vdXRpbGl0aWVzL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgdGV4dERlY29yYXRpb25zID0ge1xuICAgIE5PTkU6ICdub25lJyxcbiAgICBVTkRFUkxJTkU6ICd1bmRlcmxpbmUnLFxuICAgIFNUUklLRVRIUk9VR0g6ICdsaW5lLXRocm91Z2gnXG59O1xuY29uc3QgdGV4dENhc2VzID0ge1xuICAgIE9SSUdJTkFMOiAnbm9uZScsXG4gICAgVVBQRVI6ICd1cHBlcmNhc2UnLFxuICAgIExPV0VSOiAnbG93ZXJjYXNlJyxcbiAgICBUSVRMRTogJ2NhcGl0YWxpemUnLFxuICAgIFNNQUxMX0NBUFM6ICdzbWFsbC1jYXBzJ1xufTtcbmNvbnN0IGZvbnRXZWlnaHRzID0ge1xuICAgIDEwMDogMTAwLFxuICAgIHRoaW46IDEwMCxcbiAgICB3MTogMTAwLFxuICAgIDIwMDogMjAwLFxuICAgIHcyOiAyMDAsXG4gICAgZXh0cmFsaWdodDogMjAwLFxuICAgIHVsdHJhbGlnaHQ6IDIwMCxcbiAgICBleHRyYWxlaWNodDogMjAwLFxuICAgIDMwMDogMzAwLFxuICAgIGxpZ2h0OiAzMDAsXG4gICAgbGVpY2h0OiAzMDAsXG4gICAgdzM6IDMwMCxcbiAgICA0MDA6IDQwMCxcbiAgICBub3JtYWw6IDQwMCxcbiAgICByZWd1bGFyOiA0MDAsXG4gICAgYnVjaDogNDAwLFxuICAgIHc0OiA0MDAsXG4gICAgNTAwOiA1MDAsXG4gICAgbWVkaXVtOiA1MDAsXG4gICAga3JhZWZ0aWc6IDUwMCxcbiAgICBrcsOkZnRpZzogNTAwLFxuICAgIHc1OiA1MDAsXG4gICAgNjAwOiA2MDAsXG4gICAgc2VtaWJvbGQ6IDYwMCxcbiAgICBkZW1pYm9sZDogNjAwLFxuICAgIGhhbGJmZXR0OiA2MDAsXG4gICAgdzY6IDYwMCxcbiAgICA3MDA6IDcwMCxcbiAgICBib2xkOiA3MDAsXG4gICAgZHJlaXZpZXJ0ZWxmZXR0OiA3MDAsXG4gICAgdzc6IDcwMCxcbiAgICA4MDA6IDgwMCxcbiAgICBleHRyYWJvbGQ6IDgwMCxcbiAgICB1bHRhYm9sZDogODAwLFxuICAgIGZldHQ6IDgwMCxcbiAgICB3ODogODAwLFxuICAgIDkwMDogOTAwLFxuICAgIGJsYWNrOiA5MDAsXG4gICAgaGVhdnk6IDkwMCxcbiAgICBzdXBlcjogOTAwLFxuICAgIGV4dHJhZmV0dDogOTAwLFxuICAgIHc5OiA5MDBcbn07XG5jb25zdCBmb250U3RyZXRjaCA9IHtcbiAgICBub3JtYWw6ICdub3JtYWwnLFxuICAgIGNvbmRlbnNlZDogJ2NvbmRlbnNlZCcsXG4gICAgZXhwYW5kZWQ6ICdleHBhbmRlZCcsXG4gICAgZXh0ZW5kZWQ6ICdleHBhbmRlZCdcbn07XG5jb25zdCBmb250U3R5bGVzID0ge1xuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgaXRhbGljOiAnaXRhbGljJyxcbiAgICBrdXJzaXY6ICdpdGFsaWMnLFxuICAgIG9ibGlxdWU6ICdvYmxpcXVlJ1xufTtcbmNvbnN0IHBhcnNlRm9udFdlaWdodCA9IChmb250U3R5bGUpID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IGZvbnRTdHlsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XG4gICAgbGV0IHdlaWdodCA9IHBhcnRzWzBdO1xuICAgIC8vIG1lcmdlIGlmIHNwYWNlIGFmdGVyIGV4dHJhXG4gICAgaWYgKFsnZXh0cmEnLCAndWx0cmEnLCAnc2VtaScsICdkZW1pJ10uaW5jbHVkZXMocGFydHNbMF0pICYmIFsnYm9sZCcsICdsaWdodCddLmluY2x1ZGVzKHBhcnRzWzFdKSkge1xuICAgICAgICB3ZWlnaHQgPSBgJHtwYXJ0c1swXX0ke3BhcnRzWzFdfWA7XG4gICAgfVxuICAgIHJldHVybiBmb250V2VpZ2h0c1t3ZWlnaHRdIHx8IDQwMDtcbn07XG5jb25zdCBwYXJzZUZvbnRTdHJldGNoID0gKGZvbnRTdHlsZSkgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gZm9udFN0eWxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4gZm9udFN0cmV0Y2hbcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dIHx8IGZvbnRTdHJldGNoW3BhcnRzW3BhcnRzLmxlbmd0aCAtIDJdXSB8fCAnbm9ybWFsJztcbn07XG5jb25zdCBwYXJzZUZvbnRTdHlsZSA9IChmb250U3R5bGUpID0+IHtcbiAgICBjb25zdCBwYXJ0ID0gZm9udFN0eWxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5wb3AoKTtcbiAgICByZXR1cm4gZm9udFN0eWxlc1twYXJ0XSB8fCAnbm9ybWFsJztcbn07XG5jb25zdCBleHRyYWN0Rm9udHMgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyBnZXQgcmF3IHRleHQgc3R5bGVzXG4gICAgcmV0dXJuIHRva2VuTm9kZXMubWFwKG5vZGUgPT4gKHtcbiAgICAgICAgbmFtZTogYCR7cHJlZml4QXJyYXlbMF19LyR7bm9kZS5uYW1lfWAsXG4gICAgICAgIGNhdGVnb3J5OiAnZm9udCcsXG4gICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5mb250LmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRleHREZWNvcmF0aW9uc1tub2RlLnRleHREZWNvcmF0aW9uXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5mb250TmFtZS5mYW1pbHksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250V2VpZ2h0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlRm9udFdlaWdodChub2RlLmZvbnROYW1lLnN0eWxlKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHlsZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZvbnRTdHlsZShub2RlLmZvbnROYW1lLnN0eWxlKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHJldGNoOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlRm9udFN0cmV0Y2gobm9kZS5mb250TmFtZS5zdHlsZSksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfZm9udFN0eWxlT2xkOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZm9udE5hbWUuc3R5bGUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kV2l0aERlY2ltYWxzKG5vZGUubGV0dGVyU3BhY2luZy52YWx1ZSksXG4gICAgICAgICAgICAgICAgdW5pdDogKG5vZGUubGV0dGVyU3BhY2luZy51bml0LnRvTG93ZXJDYXNlKCkgPT09ICdwaXhlbHMnID8gJ3BpeGVsJyA6IG5vZGUubGV0dGVyU3BhY2luZy51bml0LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZUhlaWdodDoge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5saW5lSGVpZ2h0LnZhbHVlKSB8fCAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICB1bml0OiBub2RlLmxpbmVIZWlnaHQudW5pdC50b0xvd2VyQ2FzZSgpID09PSAncGl4ZWxzJyA/ICdwaXhlbCcgOiBub2RlLmxpbmVIZWlnaHQudW5pdC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHR5cGU6IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZS5saW5lSGVpZ2h0LCAndmFsdWUnKSA/ICdudW1iZXInIDogJ3N0cmluZycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyYWdyYXBoSW5kZW50OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucGFyYWdyYXBoSW5kZW50LFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJhZ3JhcGhTcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucGFyYWdyYXBoU3BhY2luZyxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dENhc2U6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGV4dENhc2VzW25vZGUudGV4dENhc2VdIHx8ICdub25lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvbkZpZ21hU3R5bGVJZF06IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmZvbnQua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdEZvbnRzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGdyaWRWYWx1ZXMgPSAoZ3JpZCkgPT4gKHtcbiAgICBwYXR0ZXJuOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnBhdHRlcm4udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHNlY3Rpb25TaXplOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnNlY3Rpb25TaXplLFxuICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH1cbn0pO1xuY29uc3QgZ2V0Q291bnQgPSBjb3VudCA9PiB7XG4gICAgaWYgKGNvdW50ID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6ICdhdXRvJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBjb3VudCxcbiAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9O1xufTtcbmNvbnN0IHJvd0NvbHVtblZhbHVlcyA9IChncmlkKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBwYXR0ZXJuOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnBhdHRlcm4udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9IH0sIChncmlkLnNlY3Rpb25TaXplICE9PSB1bmRlZmluZWQgJiYge1xuICAgIHNlY3Rpb25TaXplOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnNlY3Rpb25TaXplLFxuICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH1cbn0pKSwgeyBndXR0ZXJTaXplOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLmd1dHRlclNpemUsXG4gICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSwgYWxpZ25tZW50OiB7XG4gICAgICAgIHZhbHVlOiBncmlkLmFsaWdubWVudC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sIGNvdW50OiBnZXRDb3VudChncmlkLmNvdW50KSB9KSwgKGdyaWQub2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYge1xuICAgIG9mZnNldDoge1xuICAgICAgICB2YWx1ZTogZ3JpZC5vZmZzZXQsXG4gICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfVxufSkpKTtcbmNvbnN0IGV4dHJhY3RHcmlkcyA9ICh0b2tlbk5vZGVzLCBwcmVmaXhBcnJheSkgPT4ge1xuICAgIC8vIGdldCBncmlkIHN0eWxlc1xuICAgIHJldHVybiB0b2tlbk5vZGVzXG4gICAgICAgIC8vIHJlbW92ZSB0b2tlbnMgd2l0aCBubyBncmlkXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmxheW91dEdyaWRzLmxlbmd0aCA+IDApXG4gICAgICAgIC8vIGJ1aWxkXG4gICAgICAgIC5tYXAobm9kZSA9PiAoe1xuICAgICAgICBuYW1lOiBgJHtwcmVmaXhBcnJheVswXX0vJHtub2RlLm5hbWV9YCxcbiAgICAgICAgY2F0ZWdvcnk6ICdncmlkJyxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmdyaWQua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IG5vZGUubGF5b3V0R3JpZHMubWFwKChncmlkKSA9PiBncmlkLnBhdHRlcm4gPT09ICdHUklEJyA/IGdyaWRWYWx1ZXMoZ3JpZCkgOiByb3dDb2x1bW5WYWx1ZXMoZ3JpZCkpLFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvbkZpZ21hU3R5bGVJZF06IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmdyaWQua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdEdyaWRzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVByZWZpeCB9IGZyb20gJy4vZXh0cmFjdFV0aWxpdGllcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGRpcmVjdGlvbiA9ICh0cmFuc2l0aW9uKSA9PiB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc2l0aW9uLCAnZGlyZWN0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0cmFuc2l0aW9uLmRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGVhc2luZ3MgPSB7XG4gICAgQ1VTVE9NX0NVQklDX0JFWklFUjoge1xuICAgICAgICB0eXBlOiAnY3VzdG9tLWN1YmljQmV6aWVyJyxcbiAgICAgICAgY3VydmVUeXBlOiAnY3ViaWNCZXppZXInLFxuICAgICAgICBlYXNpbmc6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgQ1VTVE9NX1NQUklORzoge1xuICAgICAgICB0eXBlOiAnY3VzdG9tLXNwcmluZycsXG4gICAgICAgIGN1cnZlVHlwZTogJ3NwcmluZycsXG4gICAgICAgIGVhc2luZzogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBMSU5FQVI6IHtcbiAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgIGN1cnZlVHlwZTogJ2N1YmljQmV6aWVyJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICB4MTogMCxcbiAgICAgICAgICAgIHkxOiAwLFxuICAgICAgICAgICAgeDI6IDEsXG4gICAgICAgICAgICB5MjogMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBFQVNFX0lOOiB7XG4gICAgICAgIHR5cGU6ICdlYXNlLWluJyxcbiAgICAgICAgY3VydmVUeXBlOiAnY3ViaWNCZXppZXInLFxuICAgICAgICBlYXNpbmc6IHtcbiAgICAgICAgICAgIHgxOiAwLjQxOTk5OTk4Njg4Njk3ODE1LFxuICAgICAgICAgICAgeTE6IDAsXG4gICAgICAgICAgICB4MjogMSxcbiAgICAgICAgICAgIHkyOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVBU0VfT1VUOiB7XG4gICAgICAgIHR5cGU6ICdlYXNlLW91dCcsXG4gICAgICAgIGN1cnZlVHlwZTogJ2N1YmljQmV6aWVyJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICB4MTogMCxcbiAgICAgICAgICAgIHkxOiAwLFxuICAgICAgICAgICAgeDI6IDAuNTc5OTk5OTgzMzEwNjk5NSxcbiAgICAgICAgICAgIHkyOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVBU0VfSU5fQU5EX09VVDoge1xuICAgICAgICB0eXBlOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICBjdXJ2ZVR5cGU6ICdjdWJpY0JlemllcicsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgeDE6IDAuNDE5OTk5OTg2ODg2OTc4MTUsXG4gICAgICAgICAgICB5MTogMCxcbiAgICAgICAgICAgIHgyOiAwLjU3OTk5OTk4MzMxMDY5OTUsXG4gICAgICAgICAgICB5MjogMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBFQVNFX0lOX0JBQ0s6IHtcbiAgICAgICAgdHlwZTogJ2Vhc2UtaW4tYmFjaycsXG4gICAgICAgIGN1cnZlVHlwZTogJ2N1YmljQmV6aWVyJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICB4MTogMC4zMDAwMDAwMTE5MjA5Mjg5NixcbiAgICAgICAgICAgIHkxOiAtMC4wNTAwMDAwMDA3NDUwNTgwNixcbiAgICAgICAgICAgIHgyOiAwLjY5OTk5OTk4ODA3OTA3MSxcbiAgICAgICAgICAgIHkyOiAtMC41XG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVBU0VfT1VUX0JBQ0s6IHtcbiAgICAgICAgdHlwZTogJ2Vhc2Utb3V0LWJhY2snLFxuICAgICAgICBjdXJ2ZVR5cGU6ICdjdWJpY0JlemllcicsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgeDE6IDAuNDQ5OTk5OTg4MDc5MDcxMDQsXG4gICAgICAgICAgICB5MTogMS40NTAwMDAwNDc2ODM3MTU4LFxuICAgICAgICAgICAgeDI6IDAuODAwMDAwMDExOTIwOTI5LFxuICAgICAgICAgICAgeTI6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgRUFTRV9JTl9BTkRfT1VUX0JBQ0s6IHtcbiAgICAgICAgdHlwZTogJ2Vhc2UtaW4tb3V0LWJhY2snLFxuICAgICAgICBjdXJ2ZVR5cGU6ICdjdWJpY0JlemllcicsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgeDE6IDAuNjk5OTk5OTg4MDc5MDcxLFxuICAgICAgICAgICAgeTE6IC0wLjQwMDAwMDAwNTk2MDQ2NDUsXG4gICAgICAgICAgICB4MjogMC40MDAwMDAwMDU5NjA0NjQ1LFxuICAgICAgICAgICAgeTI6IDEuMzk5OTk5OTc2MTU4MTQyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEJPVU5DWToge1xuICAgICAgICB0eXBlOiAnYm91bmN5JyxcbiAgICAgICAgY3VydmVUeXBlOiAnc3ByaW5nJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICBtYXNzOiAxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiA2MDAsXG4gICAgICAgICAgICBkYW1waW5nOiAxNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBHRU5UTEU6IHtcbiAgICAgICAgdHlwZTogJ2dlbnRsZScsXG4gICAgICAgIGN1cnZlVHlwZTogJ3NwcmluZycsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgbWFzczogMSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgZGFtcGluZzogMTVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUVVJQ0s6IHtcbiAgICAgICAgdHlwZTogJ3F1aWNrJyxcbiAgICAgICAgY3VydmVUeXBlOiAnc3ByaW5nJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICBtYXNzOiAxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAzMDAsXG4gICAgICAgICAgICBkYW1waW5nOiAyMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBTTE9XOiB7XG4gICAgICAgIHR5cGU6ICdzbG93JyxcbiAgICAgICAgY3VydmVUeXBlOiAnc3ByaW5nJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICBtYXNzOiAxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiA4MCxcbiAgICAgICAgICAgIGRhbXBpbmc6IDIwXG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZm9ybWF0RWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdPYmplY3QgPT4ge1xuICAgIC8vIHNwcmluZyBjdXJ2ZVxuICAgIGlmIChlYXNpbmdPYmplY3QuY3VydmVUeXBlID09PSAnc3ByaW5nJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFzczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdPYmplY3QuZWFzaW5nLm1hc3MsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGlmZm5lc3M6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZWFzaW5nT2JqZWN0LmVhc2luZy5zdGlmZm5lc3MsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYW1waW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGVhc2luZ09iamVjdC5lYXNpbmcuZGFtcGluZyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBzcHJpbmcgYmV6aWVyXG4gICAgaWYgKGVhc2luZ09iamVjdC5jdXJ2ZVR5cGUgPT09ICdjdWJpY0JlemllcicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgxOiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdPYmplY3QuZWFzaW5nLngxLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeDI6IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVhc2luZ09iamVjdC5lYXNpbmcueDIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5MToge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB2YWx1ZTogZWFzaW5nT2JqZWN0LmVhc2luZy55MSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHkyOiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdPYmplY3QuZWFzaW5nLnkyLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGVhc2luZyA9IChlYXNpbmcpID0+IHtcbiAgICAvLyBhYm9ydCBpZiBpbnZhbGlkIGVhc2luZyB0eXBlXG4gICAgaWYgKCEoJ3R5cGUnIGluIGVhc2luZykgfHwgZWFzaW5nc1tlYXNpbmcudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyByZXR1cm4gY3VzdG9tIGVhc2luZ1xuICAgIGlmIChlYXNpbmcudHlwZSA9PT0gJ0NVU1RPTV9DVUJJQ19CRVpJRVInKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWFzaW5ncy5DVVNUT01fQ1VCSUNfQkVaSUVSLmVhc2luZyA9IHtcbiAgICAgICAgICAgIHgxOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci54MSxcbiAgICAgICAgICAgIHkxOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci55MSxcbiAgICAgICAgICAgIHgyOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci54MixcbiAgICAgICAgICAgIHkyOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci55MlxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBUT0RPOiByZW1vdmUgd2hlbiBmaWdtYSB0eXBpbmdzIGFyZSB1cGRhdGVkXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChlYXNpbmcudHlwZSA9PT0gJ0NVU1RPTV9TUFJJTkcnKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWFzaW5ncy5DVVNUT01fU1BSSU5HLmVhc2luZyA9IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1hc3M6IGVhc2luZy5lYXNpbmdGdW5jdGlvblNwcmluZy5tYXNzLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc3RpZmZuZXNzOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25TcHJpbmcuc3RpZmZuZXNzLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZGFtcGluZzogZWFzaW5nLmVhc2luZ0Z1bmN0aW9uU3ByaW5nLmRhbXBpbmdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWFzaW5nVHlwZToge1xuICAgICAgICAgICAgdmFsdWU6IGVhc2luZ3NbZWFzaW5nLnR5cGVdLnR5cGUsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBlYXNpbmdDdXJ2ZVR5cGU6IHtcbiAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdzW2Vhc2luZy50eXBlXS5jdXJ2ZVR5cGUsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjogZm9ybWF0RWFzaW5nRnVuY3Rpb24oZWFzaW5nc1tlYXNpbmcudHlwZV0pXG4gICAgfTtcbn07XG5jb25zdCBmaWx0ZXJWYWxpZE1vdGlvblRva2VucyA9IChub2RlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHZhbGlkRWFzaW5nVHlwZXMgPSBPYmplY3Qua2V5cyhlYXNpbmdzKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKG5vZGUucmVhY3Rpb25zLmxlbmd0aCA+IDAgJiYgKChfYSA9IG5vZGUucmVhY3Rpb25zWzBdLmFjdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSAnTk9ERScgJiYgbm9kZS5yZWFjdGlvbnNbMF0uYWN0aW9uLnRyYW5zaXRpb24gIT09IG51bGwgJiYgdmFsaWRFYXNpbmdUeXBlcy5pbmNsdWRlcyhub2RlLnJlYWN0aW9uc1swXS5hY3Rpb24udHJhbnNpdGlvbi5lYXNpbmcudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBleHRyYWN0TW90aW9uID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpXG4gICAgICAgIC8vIGZpbHRlciB0byBvbmx5IGluY2x1ZGUgaXRlbXMgd2hpY2ggaGF2ZSBhIHRyYW5zaXRpb24gcHJvcGVydHlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJWYWxpZE1vdGlvblRva2VucylcbiAgICAgICAgLy8gcmV0cmlldmUgdmFsdWVzXG4gICAgICAgIC5tYXAoKG5vZGUpID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdtb3Rpb24nLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMubW90aW9uLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyB0cmFuc2l0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLnJlYWN0aW9uc1swXS5hY3Rpb24udHJhbnNpdGlvbi50eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQoKG5vZGUucmVhY3Rpb25zWzBdLmFjdGlvbi50cmFuc2l0aW9uLmR1cmF0aW9uICsgTnVtYmVyLkVQU0lMT04pICogMTAwMCkgLyAxMDAwLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSB9LCBlYXNpbmcobm9kZS5yZWFjdGlvbnNbMF0uYWN0aW9uLnRyYW5zaXRpb24uZWFzaW5nKSksIGRpcmVjdGlvbihub2RlLnJlYWN0aW9uc1swXS5hY3Rpb24udHJhbnNpdGlvbikpLFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5tb3Rpb24ua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdE1vdGlvbjtcbmV4cG9ydCBjb25zdCBfX3Rlc3RpbmcgPSB7XG4gICAgZWFzaW5nOiBlYXNpbmdcbn07XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICcuLi91dGlsaXRpZXMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgZmlsdGVyQnlQcmVmaXggfSBmcm9tICcuL2V4dHJhY3RVdGlsaXRpZXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBleHRyYWN0T3BhY2l0aWVzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpLm1hcChub2RlID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdvcGFjaXR5JyxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLm9wYWNpdHkua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5vcGFjaXR5LCAyKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5vcGFjaXR5LmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RPcGFjaXRpZXM7XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICcuLi91dGlsaXRpZXMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgZmlsdGVyQnlQcmVmaXggfSBmcm9tICcuL2V4dHJhY3RVdGlsaXRpZXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBleHRyYWN0UmFkaWkgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyBnZXQgdGhlIHR5cGUgb2YgdGhlIGNvcm5lciByYWRpdXNcbiAgICBjb25zdCBnZXRSYWRpdXNUeXBlID0gcmFkaXVzID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NpbmdsZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdtaXhlZCc7XG4gICAgfTtcbiAgICAvLyBnZXQgdGhlIGluZGl2aWR1YWwgcmFkaWlcbiAgICBjb25zdCBnZXRSYWRpaSA9IChub2RlKSA9PiAoe1xuICAgICAgICB0b3BMZWZ0OiB7XG4gICAgICAgICAgICB2YWx1ZTogbm9kZS50b3BMZWZ0UmFkaXVzIHx8IDAsXG4gICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAgdG9wUmlnaHQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBub2RlLnRvcFJpZ2h0UmFkaXVzIHx8IDAsXG4gICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzIHx8IDAsXG4gICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAgYm90dG9tTGVmdDoge1xuICAgICAgICAgICAgdmFsdWU6IG5vZGUuYm90dG9tTGVmdFJhZGl1cyB8fCAwLFxuICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyByZXR1cm4gYXMgb2JqZWN0XG4gICAgcmV0dXJuIHRva2VuTm9kZXMuZmlsdGVyKGZpbHRlckJ5UHJlZml4KHByZWZpeEFycmF5KSlcbiAgICAgICAgLm1hcChub2RlID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdyYWRpdXMnLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMucmFkaXVzLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sICh0eXBlb2Ygbm9kZS5jb3JuZXJSYWRpdXMgPT09ICdudW1iZXInICYmIHtcbiAgICAgICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmNvcm5lclJhZGl1cyxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSwgeyByYWRpdXNUeXBlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGdldFJhZGl1c1R5cGUobm9kZS5jb3JuZXJSYWRpdXMpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LCByYWRpaTogZ2V0UmFkaWkobm9kZSksIHNtb290aGluZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLmNvcm5lclNtb290aGluZywgMiksXG4gICAgICAgICAgICAgICAgY29tbWVudDogJ1BlcmNlbnQgYXMgZGVjaW1hbCBmcm9tIDAuMCAtIDEuMCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnJhZGl1cy5rZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBleHRyYWN0UmFkaWk7XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICcuLi91dGlsaXRpZXMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgZmlsdGVyQnlQcmVmaXggfSBmcm9tICcuL2V4dHJhY3RVdGlsaXRpZXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBleHRyYWN0U2l6ZXMgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyByZXR1cm4gYXMgb2JqZWN0XG4gICAgcmV0dXJuIHRva2VuTm9kZXMuZmlsdGVyKGZpbHRlckJ5UHJlZml4KHByZWZpeEFycmF5KSkubWFwKG5vZGUgPT4gKHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICBjYXRlZ29yeTogJ3NpemUnLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuc2l6ZS5rZXksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBub2RlLmRlc2NyaXB0aW9uIHx8IG51bGwsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS53aWR0aCwgMiksXG4gICAgICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLmhlaWdodCwgMiksXG4gICAgICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5zaXplLmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RTaXplcztcbiIsImltcG9ydCB7IHRva2VuVHlwZXMgfSBmcm9tICdAY29uZmlnL3Rva2VuVHlwZXMnO1xuaW1wb3J0IHJvdW5kV2l0aERlY2ltYWxzIGZyb20gJy4uL3V0aWxpdGllcy9yb3VuZFdpdGhEZWNpbWFscyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVByZWZpeCB9IGZyb20gJy4vZXh0cmFjdFV0aWxpdGllcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGV4dHJhY3RTcGFjaW5nID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpXG4gICAgICAgIC5tYXAobm9kZSA9PiAoe1xuICAgICAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgICAgIGNhdGVnb3J5OiAnc3BhY2luZycsXG4gICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5zcGFjaW5nLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5wYWRkaW5nVG9wLCAyKSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5wYWRkaW5nUmlnaHQsIDIpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib3R0b206IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5wYWRkaW5nQm90dG9tLCAyKSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLnBhZGRpbmdMZWZ0LCAyKSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnNwYWNpbmcua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdFNwYWNpbmc7XG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlQcmVmaXggPSAocHJlZml4QXJyYXkpID0+IG5vZGUgPT4ge1xuICAgIC8vIGFib3J0IGlmIHdyb25nIGFyZ3VtZW50XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHByZWZpeEFycmF5KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGV4dHJhY3QgcHJlZml4IGZyb20gbm9kZSBuYW1lXG4gICAgY29uc3Qgbm9kZVByZWZpeCA9IG5vZGUubmFtZS5zdWJzdHIoMCwgbm9kZS5uYW1lLmluZGV4T2YoJy8nKSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gICAgLy8gYWJvcnQgaWYgbm8gcHJlZml4XG4gICAgaWYgKG5vZGVQcmVmaXgubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gcmV0dXJuIGFycmF5XG4gICAgcmV0dXJuIHByZWZpeEFycmF5LmluY2x1ZGVzKG5vZGVQcmVmaXgpO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBAbmFtZSBnZXRBY2Nlc3NUb2tlblxuICogQGRlc2NyaXB0aW9uIHJldHVybnMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgZmlsZSBvciB1bmRlZmluZWRcbiAqIEBwYXJhbSBmaWxlSWQge3N0cmluZ30g4oCUIElEIG9mIHRoZSBjdXJyZW50IGZpbGVcbiAqL1xuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAoZmlsZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBnZXQgYWxsIGFjY2VzcyB0b2tlbnNcbiAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKCdhY2Nlc3NUb2tlbnMnKTtcbiAgICAvLyBpZiBhY2Nlc3MgdG9rZW5zIG9iamVjdCBpcyBwcmVzZW50XG4gICAgaWYgKGFjY2Vzc1Rva2VucyAhPT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VucyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgYWNjZXNzIHRva2VuIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5zW2ZpbGVJZF07XG4gICAgICAgIC8vIHJldHVybiB0aGUgYWNjZXNzIHRva2VuIG9yIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW4gfHwgJyc7XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSBzdHJpbmcgaWYgbm8gdG9rZW4gaXMgc3RvcmVkXG4gICAgcmV0dXJuICcnO1xufSk7XG4vKipcbiAqIEBuYW1lIHNldEFjY2Vzc1Rva2VuXG4gKiBAZGVzY3JpcHRpb24gc3RvcmUgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgZ2l2ZW4gZmlsZSBpbiB0aGUgdXNlciBjbGllbnRTdG9yYWdlXG4gKiBAcGFyYW0gZmlsZUlkIHtzdHJpbmd9IOKAlCBJRCBvZiB0aGUgY3VycmVudCBmaWxlXG4gKiBAcGFyYW0gZmlsZUlkIHtzdHJpbmd9IOKAlCBhY2Nlc3MgdG9rZW5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IHNldEFjY2Vzc1Rva2VuID0gKGZpbGVJZCwgYWNjZXNzVG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIGdldCB0aGUgYWNjZXNzIHRva2VuIG9iamVjdFxuICAgIGNvbnN0IGFjY2Vzc1Rva2VucyA9ICh5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKCdhY2Nlc3NUb2tlbnMnKSkgfHwge307XG4gICAgLy8gbWVyZ2UgdG9rZW5zXG4gICAgY29uc3QgbWVyZ2VkVG9rZW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY2Nlc3NUb2tlbnMpLCB7IFtmaWxlSWRdOiBhY2Nlc3NUb2tlbiB9KTtcbiAgICAvLyBtZXJnZSB0aGUgbmV3IHRva2VuIGludG8gdGhlIG9iamVjdFxuICAgIHJldHVybiB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKCdhY2Nlc3NUb2tlbnMnLCBtZXJnZWRUb2tlbnMpO1xufSk7XG5leHBvcnQgeyBnZXRBY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW4gfTtcbiIsImltcG9ydCBmaWx0ZXJCeVByb3BlcnR5TmFtZSBmcm9tICcuL2ZpbHRlckJ5TmFtZVByb3BlcnR5JztcbmltcG9ydCBnZXRQYWludFN0eWxlcyBmcm9tICcuL2dldFBhaW50U3R5bGVzJztcbmltcG9ydCBnZXRHcmlkU3R5bGVzIGZyb20gJy4vZ2V0R3JpZFN0eWxlcyc7XG5pbXBvcnQgZ2V0VG9rZW5Ob2RlcyBmcm9tICcuL2dldFRva2VuTm9kZXMnO1xuaW1wb3J0IGdldFRleHRTdHlsZXMgZnJvbSAnLi9nZXRUZXh0U3R5bGVzJztcbmltcG9ydCBnZXRFZmZlY3RTdHlsZXMgZnJvbSAnLi9nZXRFZmZlY3RTdHlsZXMnO1xuLyoqXG4gKiBAZnVuY3Rpb24gYnVpbGRGaWdtYURhdGEg4oCTIHJldHVybiBhbiBvYmplY3Qgd2l0aCBhbGwgc3R5bGVzICYgZnJhbWUgdG8gdXNlIGZvciBleHBvcnRcbiAqIEBwYXJhbSB7UGx1Z2luQVBJfSBmaWdtYSDigJQgdGhlIGZpZ21hIFBsdWdpbkFQSSBvYmplY3RcbiAqIEBwYXJhbSBvcHRpb25zIOKAkyBvcHRpb25zIG9iamVjdFxuICovXG5jb25zdCBidWlsZEZpZ21hRGF0YSA9IChmaWdtYSwgc2V0dGluZ3MpID0+IHtcbiAgICAvLyB1c2Ugc3ByZWFkIG9wZXJhdG9yIGJlY2F1c2UgdGhlIG9yaWdpbmFsIGlzIHJlYWRPbmx5XG4gICAgY29uc3QgdG9rZW5GcmFtZXMgPSBnZXRUb2tlbk5vZGVzKFsuLi5maWdtYS5yb290LmNoaWxkcmVuXSk7XG4gICAgLy8gZ2V0IHVzZXIgZXhjbHVzaW9uIHByZWZpeGVzXG4gICAgY29uc3QgdXNlckV4Y2x1c2lvblByZWZpeGVzID0gc2V0dGluZ3MuZXhjbHVzaW9uUHJlZml4LnNwbGl0KCcsJykubWFwKGl0ZW0gPT4gaXRlbS5yZXBsYWNlKC9cXHMrL2csICcnKSk7XG4gICAgLy8gZ2V0IGRhdGEgZnJvbSBmaWdtYVxuICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuRnJhbWVzOiB0b2tlbkZyYW1lcyxcbiAgICAgICAgcGFpbnRTdHlsZXM6IGdldFBhaW50U3R5bGVzKGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKSkuZmlsdGVyKGl0ZW0gPT4gZmlsdGVyQnlQcm9wZXJ0eU5hbWUoaXRlbSwgdXNlckV4Y2x1c2lvblByZWZpeGVzKSksXG4gICAgICAgIGdyaWRTdHlsZXM6IGdldEdyaWRTdHlsZXMoZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzKCkpLmZpbHRlcihpdGVtID0+IGZpbHRlckJ5UHJvcGVydHlOYW1lKGl0ZW0sIHVzZXJFeGNsdXNpb25QcmVmaXhlcykpLFxuICAgICAgICB0ZXh0U3R5bGVzOiBnZXRUZXh0U3R5bGVzKGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpKS5maWx0ZXIoaXRlbSA9PiBmaWx0ZXJCeVByb3BlcnR5TmFtZShpdGVtLCB1c2VyRXhjbHVzaW9uUHJlZml4ZXMpKSxcbiAgICAgICAgZWZmZWN0U3R5bGVzOiBnZXRFZmZlY3RTdHlsZXMoZmlnbWEuZ2V0TG9jYWxFZmZlY3RTdHlsZXMoKSkuZmlsdGVyKGl0ZW0gPT4gZmlsdGVyQnlQcm9wZXJ0eU5hbWUoaXRlbSwgdXNlckV4Y2x1c2lvblByZWZpeGVzKSlcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRmlnbWFEYXRhO1xuIiwiZXhwb3J0IGNvbnN0IGNoYW5nZU5vdGF0aW9uID0gKG5hbWUsIGN1cnJlbnREZWxpbWl0ZXIgPSAnLycsIGRlc2lyZWREZWxpbWl0ZXIgPSAnLicpID0+IHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdChjdXJyZW50RGVsaW1pdGVyKS5qb2luKGRlc2lyZWREZWxpbWl0ZXIpLnRvTG93ZXJDYXNlKCk7XG59O1xuIiwiaW1wb3J0IHJvdW5kV2l0aERlY2ltYWxzIGZyb20gJy4vcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgdGlueWNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcbmV4cG9ydCBjb25zdCByb3VuZFJnYmEgPSAocmdiYSwgb3BhY2l0eSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgcjogcm91bmRXaXRoRGVjaW1hbHMocmdiYS5yICogMjU1LCAwKSxcbiAgICAgICAgZzogcm91bmRXaXRoRGVjaW1hbHMocmdiYS5nICogMjU1LCAwKSxcbiAgICAgICAgYjogcm91bmRXaXRoRGVjaW1hbHMocmdiYS5iICogMjU1LCAwKSxcbiAgICAgICAgYTogcm91bmRXaXRoRGVjaW1hbHMoKF9hID0gb3BhY2l0eSAhPT0gbnVsbCAmJiBvcGFjaXR5ICE9PSB2b2lkIDAgPyBvcGFjaXR5IDogcmdiYS5hKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxKVxuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBjb252ZXJ0UGFpbnRUb1JnYmEgPSAocGFpbnQpID0+IHtcbiAgICBpZiAocGFpbnQudHlwZSA9PT0gJ1NPTElEJyAmJiBwYWludC52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByb3VuZFJnYmEocGFpbnQuY29sb3IsIHBhaW50Lm9wYWNpdHkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgY29uc3QgY29udmVydFJnYmFPYmplY3RUb1N0cmluZyA9IChyZ2JhT2JqZWN0KSA9PiBgcmdiYSgke3JnYmFPYmplY3Qucn0sICR7cmdiYU9iamVjdC5nfSwgJHtyZ2JhT2JqZWN0LmJ9LCAke3JnYmFPYmplY3QuYX0pYDtcbmV4cG9ydCBjb25zdCByZ2JhT2JqZWN0VG9IZXg4ID0gKHJnYmFPYmplY3QpID0+IHtcbiAgICAvLyByZXR1cm4gdmFsdWVcbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbnZlcnRSZ2JhT2JqZWN0VG9TdHJpbmcocmdiYU9iamVjdCkpLnRvSGV4OFN0cmluZygpO1xufTtcbiIsImltcG9ydCB7IGNvbnZlcnRQYWludFRvUmdiYSB9IGZyb20gJy4vY29udmVydENvbG9yJztcbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIHNvbGlkIHN0cm9rZSBjb2xvcnNcbiAqL1xuY29uc3QgZ2V0U29saWRTdHJva2VzID0gKHBhaW50cykgPT4ge1xuICAgIC8vIGNsb25lIHdpdGhvdXQgcmVmZXJlbmNlXG4gICAgcmV0dXJuIFsuLi5wYWludHNdXG4gICAgICAgIC5tYXAocGFpbnQgPT4gY29udmVydFBhaW50VG9SZ2JhKHBhaW50KSlcbiAgICAgICAgLmZpbHRlcihwYWludCA9PiBwYWludCAhPSBudWxsKTtcbn07XG4vKipcbiAqIGV4dHJhY3RUb2tlbk5vZGVWYWx1ZXNcbiAqIEBwYXJhbSBub2RlOiBTY2VuZU5vZGVcbiAqIEByZXR1cm5zIG5vZGUgb2JqZWN0XG4gKi9cbmNvbnN0IGV4dHJhY3RUb2tlbk5vZGVWYWx1ZXMgPSAobm9kZSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRlc2NyaXB0aW9uOiBub2RlLmRlc2NyaXB0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYm90dG9tTGVmdFJhZGl1czogbm9kZS5ib3R0b21MZWZ0UmFkaXVzLFxuICAgICAgICBib3R0b21SaWdodFJhZGl1czogbm9kZS5ib3R0b21SaWdodFJhZGl1cyxcbiAgICAgICAgdG9wTGVmdFJhZGl1czogbm9kZS50b3BMZWZ0UmFkaXVzLFxuICAgICAgICB0b3BSaWdodFJhZGl1czogbm9kZS50b3BSaWdodFJhZGl1cyxcbiAgICAgICAgY29ybmVyUmFkaXVzOiBub2RlLmNvcm5lclJhZGl1cyB8fCB1bmRlZmluZWQsXG4gICAgICAgIGNvcm5lclNtb290aGluZzogbm9kZS5jb3JuZXJTbW9vdGhpbmcsXG4gICAgICAgIHN0cm9rZXM6IGdldFNvbGlkU3Ryb2tlcyhub2RlLnN0cm9rZXMpLFxuICAgICAgICBzdHJva2VXZWlnaHQ6IG5vZGUuc3Ryb2tlV2VpZ2h0LFxuICAgICAgICBzdHJva2VTdHlsZUlkOiBub2RlLnN0cm9rZVN0eWxlSWQsXG4gICAgICAgIHN0cm9rZU1pdGVyTGltaXQ6IG5vZGUuc3Ryb2tlTWl0ZXJMaW1pdCxcbiAgICAgICAgc3Ryb2tlSm9pbjogbm9kZS5zdHJva2VKb2luLFxuICAgICAgICBzdHJva2VDYXA6IG5vZGUuc3Ryb2tlQ2FwLFxuICAgICAgICBkYXNoUGF0dGVybjogbm9kZS5kYXNoUGF0dGVybixcbiAgICAgICAgc3Ryb2tlQWxpZ246IG5vZGUuc3Ryb2tlQWxpZ24sXG4gICAgICAgIHdpZHRoOiBub2RlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG5vZGUuaGVpZ2h0LFxuICAgICAgICByZWFjdGlvbnM6IG5vZGUucmVhY3Rpb25zIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYWRkaW5nVG9wOiBub2RlLnBhZGRpbmdUb3AgfHwgMCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYWRkaW5nUmlnaHQ6IG5vZGUucGFkZGluZ1JpZ2h0IHx8IDAsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogbm9kZS5wYWRkaW5nQm90dG9tIHx8IDAsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFkZGluZ0xlZnQ6IG5vZGUucGFkZGluZ0xlZnQgfHwgMCxcbiAgICAgICAgb3BhY2l0eTogKF9hID0gbm9kZS5vcGFjaXR5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxXG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdFRva2VuTm9kZVZhbHVlcztcbiIsImltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZXhjbHVzaW9uUHJlZml4ID0gKGV4Y2x1c2lvblByZWZpeFN0cmluZ3MpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICAuLi5jb25maWcuZXhjbHVzaW9uUHJlZml4RGVmYXVsdCxcbiAgICAgICAgLi4uZXhjbHVzaW9uUHJlZml4U3RyaW5nc1xuICAgIF07XG59O1xuY29uc3QgZmlsdGVyQnlQcm9wZXJ0eU5hbWUgPSAob2JqZWN0LCBleGNsdXNpb25QcmVmaXhTdHJpbmdzKSA9PiAhZXhjbHVzaW9uUHJlZml4KGV4Y2x1c2lvblByZWZpeFN0cmluZ3MpLmluY2x1ZGVzKG9iamVjdC5uYW1lLnRyaW0oKS5zdWJzdHIoMCwgMSkpO1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVyQnlQcm9wZXJ0eU5hbWU7XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBnZXRFZmZlY3RTdHlsZXNcbiAqIEBwYXJhbSB7QXJyYXk8RWZmZWN0U3R5bGU+fSBzdHlsZXMg4oCTIHRoZSBlZmZlY3RTdHlsZSBmcm9tIHRoZSBmaWdtYSBmaWxlXG4gKi9cbmNvbnN0IGdldEVmZmVjdFN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAvLyBpbml0IHN0eWxlQXJyYXlcbiAgICBjb25zdCBzdHlsZUFycmF5ID0gW107XG4gICAgLy8gbG9vcCB0aHJvdWdoIEZpZ21hIHN0eWxlcyBhbmQgYWRkIHRvIGFycmF5XG4gICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICBzdHlsZUFycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogc3R5bGUubmFtZSxcbiAgICAgICAgICAgIGlkOiBzdHlsZS5pZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHlsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVmZmVjdHM6IHN0eWxlLmVmZmVjdHNcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIGFycmF5XG4gICAgcmV0dXJuIHN0eWxlQXJyYXk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0RWZmZWN0U3R5bGVzO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBnZXRGaWxlSWQgPSAoZmlnbWEpID0+IHtcbiAgICBsZXQgZmlsZUlkID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKGNvbmZpZy5rZXkuZmlsZUlkKTtcbiAgICAvLyBzZXQgcGx1Z2luIGlkIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgaWYgKGZpbGVJZCA9PT0gdW5kZWZpbmVkIHx8IGZpbGVJZCA9PT0gJycpIHtcbiAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKGNvbmZpZy5rZXkuZmlsZUlkLCBmaWdtYS5yb290Lm5hbWUgKyAnICcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKSk7XG4gICAgICAgIC8vIGdyYWIgZmlsZSBJRFxuICAgICAgICBmaWxlSWQgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoY29uZmlnLmtleS5maWxlSWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZUlkO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldEZpbGVJZDtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGdldEdyaWRTdHlsZXNcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWRTdHlsZXMg4oCTIHRoZSBncmlkU3R5bGVzIGZyb20gdGhlIGZpZ21hIGZpbGVcbiAqL1xuY29uc3QgZ2V0R3JpZFN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAvLyBpbml0IHN0eWxlQXJyYXlcbiAgICBjb25zdCBzdHlsZUFycmF5ID0gW107XG4gICAgLy8gbG9vcCB0aHJvdWdoIEZpZ21hIHN0eWxlcyBhbmQgYWRkIHRvIGFycmF5XG4gICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICBzdHlsZUFycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogc3R5bGUubmFtZSxcbiAgICAgICAgICAgIGlkOiBzdHlsZS5pZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHlsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxheW91dEdyaWRzOiBzdHlsZS5sYXlvdXRHcmlkc1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyByZXR1cm4gYXJyYXlcbiAgICByZXR1cm4gc3R5bGVBcnJheTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRHcmlkU3R5bGVzO1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2V0UGFpbnRTdHlsZXNcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaW50U3R5bGVzIOKAkyB0aGUgcGFpbnRTdHlsZXMgZnJvbSB0aGUgZmlnbWEgZmlsZSAoc29tZWhvdyBzdGlsbCBjb25uZWN0ZWQpXG4gKi9cbmNvbnN0IGdldFBhaW50U3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgIC8vIGluaXQgc3R5bGVBcnJheVxuICAgIGNvbnN0IHN0eWxlQXJyYXkgPSBbXTtcbiAgICAvLyBsb29wIHRocm91Z2ggRmlnbWEgc3R5bGVzIGFuZCBhZGQgdG8gYXJyYXlcbiAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgIHN0eWxlQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBzdHlsZS5uYW1lLFxuICAgICAgICAgICAgaWQ6IHN0eWxlLmlkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0eWxlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcGFpbnRzOiBzdHlsZS5wYWludHNcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIGFycmF5XG4gICAgcmV0dXJuIHN0eWxlQXJyYXk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0UGFpbnRTdHlsZXM7XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBnZXRUZXh0U3R5bGVzXG4gKiBAcGFyYW0ge0FycmF5PFRleHRTdHlsZT59IHN0eWxlcyDigJMgdGhlIHBhaW50U3R5bGVzIGZyb20gdGhlIGZpZ21hIGZpbGUgKHNvbWVob3cgc3RpbGwgY29ubmVjdGVkKVxuICovXG5jb25zdCBnZXRUZXh0U3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgIC8vIGluaXQgc3R5bGVBcnJheVxuICAgIGNvbnN0IHN0eWxlQXJyYXkgPSBbXTtcbiAgICAvLyBsb29wIHRocm91Z2ggRmlnbWEgc3R5bGVzIGFuZCBhZGQgdG8gYXJyYXlcbiAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgIHN0eWxlQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBzdHlsZS5uYW1lLFxuICAgICAgICAgICAgaWQ6IHN0eWxlLmlkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0eWxlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZm9udFNpemU6IHN0eWxlLmZvbnRTaXplLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHN0eWxlLnRleHREZWNvcmF0aW9uLFxuICAgICAgICAgICAgZm9udE5hbWU6IHN0eWxlLmZvbnROYW1lLFxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogc3R5bGUubGV0dGVyU3BhY2luZyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHN0eWxlLmxpbmVIZWlnaHQsXG4gICAgICAgICAgICBwYXJhZ3JhcGhJbmRlbnQ6IHN0eWxlLnBhcmFncmFwaEluZGVudCxcbiAgICAgICAgICAgIHBhcmFncmFwaFNwYWNpbmc6IHN0eWxlLnBhcmFncmFwaFNwYWNpbmcsXG4gICAgICAgICAgICB0ZXh0Q2FzZTogc3R5bGUudGV4dENhc2VcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIGFycmF5XG4gICAgcmV0dXJuIHN0eWxlQXJyYXk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0VGV4dFN0eWxlcztcbiIsImltcG9ydCBleHRyYWN0Q29sb3JzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0Q29sb3JzJztcbmltcG9ydCBleHRyYWN0R3JpZHMgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RHcmlkcyc7XG5pbXBvcnQgZXh0cmFjdEZvbnRzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0Rm9udHMnO1xuaW1wb3J0IGV4dHJhY3RFZmZlY3RzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0RWZmZWN0cyc7XG5pbXBvcnQgZXh0cmFjdE1vdGlvbiBmcm9tICcuLi9leHRyYWN0b3IvZXh0cmFjdE1vdGlvbic7XG5pbXBvcnQgZXh0cmFjdFNpemVzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0U2l6ZXMnO1xuaW1wb3J0IGV4dHJhY3RTcGFjaW5nIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0U3BhY2luZyc7XG5pbXBvcnQgZXh0cmFjdEJvcmRlcnMgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RCb3JkZXJzJztcbmltcG9ydCBleHRyYWN0UmFkaWkgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RSYWRpaSc7XG5pbXBvcnQgZXh0cmFjdEJyZWFrcG9pbnRzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0QnJlYWtwb2ludHMnO1xuaW1wb3J0IGV4dHJhY3RPcGFjaXRpZXMgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RPcGFjaXRpZXMnO1xuaW1wb3J0IGJ1aWxkRmlnbWFEYXRhIGZyb20gJy4vYnVpbGRGaWdtYURhdGEnO1xuaW1wb3J0IHsgZ2V0VmFyaWFibGVzIH0gZnJvbSAnLi9nZXRWYXJpYWJsZXMnO1xuY29uc3QgZ2V0UHJlZml4QXJyYXkgPSAocHJlZml4U3RyaW5nID0gJycpID0+IHByZWZpeFN0cmluZy5zcGxpdCgnLCcpLm1hcChpdGVtID0+IGl0ZW0ucmVwbGFjZSgvXFxzKy9nLCAnJykpO1xuZXhwb3J0IGNvbnN0IGV4cG9ydFJhd1Rva2VuQXJyYXkgPSAoZmlnbWEsIHNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgZmlnbWFEYXRhID0gYnVpbGRGaWdtYURhdGEoZmlnbWEsIHNldHRpbmdzKTtcbiAgICAvLyBnZXQgdG9rZW5zXG4gICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZXh0cmFjdFNpemVzKGZpZ21hRGF0YS50b2tlbkZyYW1lcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LnNpemUpKSxcbiAgICAgICAgLi4uZXh0cmFjdEJyZWFrcG9pbnRzKGZpZ21hRGF0YS50b2tlbkZyYW1lcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LmJyZWFrcG9pbnQpKSxcbiAgICAgICAgLi4uZXh0cmFjdFNwYWNpbmcoZmlnbWFEYXRhLnRva2VuRnJhbWVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXguc3BhY2luZykpLFxuICAgICAgICAuLi5leHRyYWN0Qm9yZGVycyhmaWdtYURhdGEudG9rZW5GcmFtZXMsIGdldFByZWZpeEFycmF5KHNldHRpbmdzLnByZWZpeC5ib3JkZXIpKSxcbiAgICAgICAgLi4uZXh0cmFjdFJhZGlpKGZpZ21hRGF0YS50b2tlbkZyYW1lcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LnJhZGl1cykpLFxuICAgICAgICAuLi5leHRyYWN0TW90aW9uKGZpZ21hRGF0YS50b2tlbkZyYW1lcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4Lm1vdGlvbikpLFxuICAgICAgICAuLi5leHRyYWN0T3BhY2l0aWVzKGZpZ21hRGF0YS50b2tlbkZyYW1lcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4Lm9wYWNpdHkpKSxcbiAgICAgICAgLi4uZXh0cmFjdENvbG9ycyhmaWdtYURhdGEucGFpbnRTdHlsZXMsIHsgY29sb3I6IGdldFByZWZpeEFycmF5KHNldHRpbmdzLnByZWZpeC5jb2xvciksIGdyYWRpZW50OiBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXguZ3JhZGllbnQpLCBhbGlhczogZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MuYWxpYXMpIH0pLFxuICAgICAgICAuLi5leHRyYWN0R3JpZHMoZmlnbWFEYXRhLmdyaWRTdHlsZXMsIGdldFByZWZpeEFycmF5KHNldHRpbmdzLnByZWZpeC5ncmlkKSksXG4gICAgICAgIC4uLmV4dHJhY3RGb250cyhmaWdtYURhdGEudGV4dFN0eWxlcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LmZvbnQpKSxcbiAgICAgICAgLi4uZXh0cmFjdEVmZmVjdHMoZmlnbWFEYXRhLmVmZmVjdFN0eWxlcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LmVmZmVjdCkpLFxuICAgICAgICAuLi5nZXRWYXJpYWJsZXMoZmlnbWEsIHNldHRpbmdzKVxuICAgIF07XG59O1xuIiwiaW1wb3J0IGV4dHJhY3RUb2tlbk5vZGVWYWx1ZXMgZnJvbSAnLi9leHRyYWN0VG9rZW5Ob2RlVmFsdWVzJztcbmltcG9ydCBpc1Rva2VuTm9kZSBmcm9tICcuL2lzVG9rZW5Ob2RlJztcbi8vIHRoZSBuYW1lIHRoYXQgdG9rZW4gZnJhbWVzIGhhdmVcbmNvbnN0IHRva2VuRnJhbWVOYW1lID0gJ190b2tlbnMnO1xuLy8gY2hlY2sgaWYgYSBmcmFtZSBpcyBhIF90b2tlbiBmcmFtZVxuY29uc3QgaXNUb2tlbkZyYW1lID0gKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3Vic3RyKDAsIHRva2VuRnJhbWVOYW1lLmxlbmd0aCkgPT09IHRva2VuRnJhbWVOYW1lO1xuLy8gcmV0dXJuIG9ubHkgbm9kZXMgdGhhdCBhcmUgZnJhbWVzXG5jb25zdCBnZXRGcmFtZU5vZGVzID0gKG5vZGVzKSA9PiBbLi4ubm9kZXMubWFwKHBhZ2UgPT4gcGFnZS5maW5kQ2hpbGRyZW4obm9kZSA9PiBpc1Rva2VuRnJhbWUobm9kZSkpKS5yZWR1Y2UoKGZsYXR0ZW4sIGFycikgPT4gWy4uLmZsYXR0ZW4sIC4uLmFycl0pXTtcbi8qKlxuICogZ2V0VmFyaWFudE5hbWVcbiAqIGNyZWF0ZXMgdGhlIHZhcmlhbnQgbmFtZSBvZiB0aGUgcGFyZW50IGFuZCBjaGlsZCBuYW1lXG4gKi9cbmNvbnN0IGdldFZhcmlhbnROYW1lID0gKHBhcmVudE5hbWUsIGNoaWxkTmFtZSkgPT4ge1xuICAgIC8vIHNwbGl0IGludG8gYXJyYXlcbiAgICBjaGlsZE5hbWUgPSBjaGlsZE5hbWUuc3BsaXQoJywnKVxuICAgICAgICAvLyByZW1vdmUgaGlkZGVuIG5hbWVzXG4gICAgICAgIC5maWx0ZXIocGFydCA9PiAhWydfJywgJy4nXS5pbmNsdWRlcyhwYXJ0LnRyaW0oKS5zdWJzdHIoMCwgMSkpKVxuICAgICAgICAvLyBjbGVhbnVwIG5hbWVzLCBvbmx5IHJldHVybiB2YWx1ZSBwYXJ0XG4gICAgICAgIC5tYXAocGFydCA9PiBwYXJ0LnNwbGl0KCc9JylbMV0pXG4gICAgICAgIC8vIGNvbWJpbmVcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAvLyByZXR1cm4gZnVsbCBuYW1lXG4gICAgcmV0dXJuIGAke3BhcmVudE5hbWV9LyR7Y2hpbGROYW1lfWA7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFsbCBmcmFtZXMgZnJvbSB0aGUgZmlsZSB0aGF0IGhhdmUgYSBuYW1lIHRoYXQgc3RhcnRzIHdpdGggX3Rva2VucyBvciB0aGUgdXNlciBkZWZpbmVkIHRva2VuIHNwZWNpZmllclxuICpcbiAqIEBwYXJhbSBwYWdlcyBQYWdlTm9kZXNcbiAqL1xuY29uc3QgZ2V0VG9rZW5Ob2RlcyA9IChwYWdlcykgPT4ge1xuICAgIC8vIGdldCB0b2tlbiBmcmFtZXNcbiAgICBjb25zdCB0b2tlbkZyYW1lcyA9IGdldEZyYW1lTm9kZXMocGFnZXMpO1xuICAgIC8vIGdldCBhbGwgY2hpbGRyZW4gb2YgdG9rZW4gZnJhbWVzXG4gICAgcmV0dXJuIHRva2VuRnJhbWVzLm1hcChmcmFtZSA9PiBmcmFtZVxuICAgICAgICAvLyBjaGVjayBpZiBjaGlsZHJlbiBhcmUgb2YgdmFsaWQgdHlwZXNcbiAgICAgICAgLmZpbmRBbGwoXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBub2RlID0+IGlzVG9rZW5Ob2RlKG5vZGUpKSlcbiAgICAgICAgLy8gbWVyZ2VzIGFsbCBjaGlsZHJlbiBpbnRvIG9uZSBhcnJheVxuICAgICAgICAucmVkdWNlKChmbGF0dGVuLCBhcnIpID0+IFsuLi5mbGF0dGVuLCAuLi5hcnJdLCBbXSlcbiAgICAgICAgLy8gdW5wYWNrIHZhcmlhbnRzICYgd2FybiBhYm91dCBkZXByZWNhdGVkIHR5cGVzXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ1JFQ1RBTkdMRScgfHwgaXRlbS50eXBlID09PSAnRlJBTUUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSB1c2Ugb25seSBtYWluIGNvbXBvbmVudHMgYW5kIHZhcmlhbnRzLCBvdGhlciB0eXBlcyBtYXkgYmUgZGVwcmVjYXRlZCBhcyB0b2tlbnMgaW4gdGhlIGZ1dHVyZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVucGFjayB2YXJpYW50c1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE5hbWUgaXMgb3ZlcndyaXRpbmcgcmVhbCBvYmplY3QgaW4gZmlnbWFcbiAgICAgICAgICAgIC8vIC0+IGNyZWF0ZSBjbG9uZSBhbmQgbW92ZSB0byBuZXcgYXJyYXkgdG8gcmV0dXJuXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleHRyYWN0VG9rZW5Ob2RlVmFsdWVzKGNoaWxkKSksIHsgbmFtZTogZ2V0VmFyaWFudE5hbWUoaXRlbS5uYW1lLCBjaGlsZC5uYW1lKSB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBub3JtYWwgaXRlbSBhcyBhcnJheSB0byB1bnBhY2sgbGF0ZXJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gW2V4dHJhY3RUb2tlbk5vZGVWYWx1ZXMoaXRlbSldO1xuICAgIH0pXG4gICAgICAgIC8vIG1lcmdlcyB0aGUgdmFyaWFudCBjaGlsZHJlbiBpbnRvIG9uZSBhcnJheVxuICAgICAgICAucmVkdWNlKChmbGF0dGVuLCBhcnIpID0+IFsuLi5mbGF0dGVuLCAuLi5hcnJdLCBbXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0VG9rZW5Ob2RlcztcbmV4cG9ydCBjb25zdCBfX3Rlc3RpbmcgPSB7XG4gICAgaXNUb2tlbk5vZGU6IGlzVG9rZW5Ob2RlLFxuICAgIGlzVG9rZW5GcmFtZTogaXNUb2tlbkZyYW1lXG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFZhcmlhYmxlVHlwZUJ5VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuICdkaW1lbnNpb24nO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICByZXR1cm4gJ2NvbG9yJztcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuICdzdHJpbmcnO1xufTtcbiIsImltcG9ydCBjb25maWcgZnJvbSBcIkBjb25maWcvY29uZmlnXCI7XG5pbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSBcIkBjb25maWcvdG9rZW5UeXBlc1wiO1xuaW1wb3J0IHsgcm91bmRSZ2JhIH0gZnJvbSBcIi4vY29udmVydENvbG9yXCI7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSBcIi4vcm91bmRXaXRoRGVjaW1hbHNcIjtcbmltcG9ydCBoYW5kbGVWYXJpYWJsZUFsaWFzIGZyb20gXCIuL2hhbmRsZVZhcmlhYmxlQWxpYXNcIjtcbmltcG9ydCBwcm9jZXNzQWxpYXNNb2RlcyBmcm9tIFwiLi9wcm9jZXNzQWxpYXNNb2Rlc1wiO1xuY29uc3QgZXh0cmFjdFZhcmlhYmxlID0gKHZhcmlhYmxlLCB2YWx1ZSwgbW9kZSkgPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IFwiY29sb3JcIjtcbiAgICBsZXQgdmFsdWVzID0ge307XG4gICAgaWYgKHZhbHVlLnR5cGUgPT09IFwiVkFSSUFCTEVfQUxJQVNcIikge1xuICAgICAgICByZXR1cm4gaGFuZGxlVmFyaWFibGVBbGlhcyh2YXJpYWJsZSwgdmFsdWUsIG1vZGUpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHZhcmlhYmxlLnJlc29sdmVkVHlwZSkge1xuICAgICAgICBjYXNlIFwiQ09MT1JcIjpcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgdmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kUmdiYSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGTE9BVFwiOlxuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcImRpbWVuc2lvblwiO1xuICAgICAgICAgICAgdmFsdWVzID0gcm91bmRXaXRoRGVjaW1hbHModmFsdWUsIDIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTVFJJTkdcIjpcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJCT09MRUFOXCI6XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwiYm9vbGVhblwiO1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdmFyaWFibGUubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHZhcmlhYmxlLmRlc2NyaXB0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnZhcmlhYmxlcy5rZXksXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICB2YWx1ZXMsXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2V0VmFyaWFibGVzID0gKGZpZ21hLCBzZXR0aW5ncykgPT4ge1xuICAgIGNvbnN0IGV4Y2x1ZGVkQ29sbGVjdGlvbklkcyA9IGZpZ21hLnZhcmlhYmxlc1xuICAgICAgICAuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zKClcbiAgICAgICAgLmZpbHRlcigoY29sbGVjdGlvbikgPT4gIVtcIi5cIiwgXCJfXCIsIC4uLnNldHRpbmdzLmV4Y2x1c2lvblByZWZpeC5zcGxpdChcIixcIildLmluY2x1ZGVzKGNvbGxlY3Rpb24ubmFtZS5jaGFyQXQoMCkpKVxuICAgICAgICAubWFwKChjb2xsZWN0aW9uKSA9PiBjb2xsZWN0aW9uLmlkKTtcbiAgICAvLyBnZXQgY29sbGVjdGlvbnNcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhmaWdtYS52YXJpYWJsZXNcbiAgICAgICAgLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9ucygpXG4gICAgICAgIC5tYXAoKGNvbGxlY3Rpb24pID0+IFtjb2xsZWN0aW9uLmlkLCBjb2xsZWN0aW9uXSkpO1xuICAgIC8vIGdldCB2YXJpYWJsZXNcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBmaWdtYS52YXJpYWJsZXNcbiAgICAgICAgLmdldExvY2FsVmFyaWFibGVzKClcbiAgICAgICAgLmZpbHRlcigodmFyaWFibGUpID0+IGV4Y2x1ZGVkQ29sbGVjdGlvbklkcy5pbmNsdWRlcyh2YXJpYWJsZS52YXJpYWJsZUNvbGxlY3Rpb25JZCkpXG4gICAgICAgIC5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgIC8vIGdldCBjb2xsZWN0aW9uIG5hbWUgYW5kIG1vZGVzXG4gICAgICAgIGNvbnN0IHsgdmFyaWFibGVDb2xsZWN0aW9uSWQgfSA9IHZhcmlhYmxlO1xuICAgICAgICBjb25zdCB7IG5hbWU6IGNvbGxlY3Rpb24sIG1vZGVzIH0gPSBjb2xsZWN0aW9uc1t2YXJpYWJsZUNvbGxlY3Rpb25JZF07XG4gICAgICAgIC8vIHJldHVybiBlYWNoIG1vZGUgdmFsdWUgYXMgYSBzZXBhcmF0ZSB2YXJpYWJsZVxuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModmFyaWFibGUudmFsdWVzQnlNb2RlKS5tYXAoKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGFkZCBtb2RlIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgY29uc3QgYWRkTW9kZSA9IHNldHRpbmdzLm1vZGVSZWZlcmVuY2UgJiYgbW9kZXMubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4dHJhY3RWYXJpYWJsZSh2YXJpYWJsZSwgdmFsdWUsIG1vZGVzLmZpbmQoKHsgbW9kZUlkIH0pID0+IG1vZGVJZCA9PT0gaWQpKSksIHsgXG4gICAgICAgICAgICAgICAgLy8gbmFtZSBpcyBjb250c3RydWN0ZWQgZnJvbSBjb2xsZWN0aW9uLCBtb2RlIGFuZCB2YXJpYWJsZSBuYW1lXG4gICAgICAgICAgICAgICAgbmFtZTogYWRkTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IGAke2NvbGxlY3Rpb259LyR7bW9kZXMuZmluZCgoeyBtb2RlSWQgfSkgPT4gbW9kZUlkID09PSBpZCkubmFtZX0vJHt2YXJpYWJsZS5uYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtjb2xsZWN0aW9ufS8ke3ZhcmlhYmxlLm5hbWV9YCwgXG4gICAgICAgICAgICAgICAgLy8gYWRkIG1uZXRhZGF0YSB0byBleHRlbnNpb25zXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogc2V0dGluZ3MubW9kZVJlZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kZXMuZmluZCgoeyBtb2RlSWQgfSkgPT4gbW9kZUlkID09PSBpZCkubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlczogdmFyaWFibGUuc2NvcGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uVmFyaWFibGVTdHlsZUlkXTogdmFyaWFibGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMudmFyaWFibGVzLmtleSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2V0dGluZ3MubW9kZVJlZmVyZW5jZVxuICAgICAgICA/IHByb2Nlc3NBbGlhc01vZGVzKHZhcmlhYmxlcy5mbGF0KCkpXG4gICAgICAgIDogdmFyaWFibGVzLmZsYXQoKTtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBzZW1WZXJEaWZmZXJlbmNlIGZyb20gJy4vc2VtVmVyRGlmZmVyZW5jZSc7XG5pbXBvcnQgY3VycmVudFZlcnNpb24gZnJvbSAnLi92ZXJzaW9uJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZ2V0VmVyc2lvbkRpZmZlcmVuY2UgPSAoZmlnbWEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIGdldCB2ZXJzaW9uICYgdmVyc2lvbiBkaWZmZXJlbmNlXG4gICAgY29uc3QgbGFzdFZlcnNpb25TZXR0aW5nc09wZW5lZCA9IHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoY29uZmlnLmtleS5sYXN0VmVyc2lvblNldHRpbmdzT3BlbmVkKTtcbiAgICBjb25zdCB2ZXJzaW9uRGlmZmVyZW5jZSA9IHNlbVZlckRpZmZlcmVuY2UoY3VycmVudFZlcnNpb24sIGxhc3RWZXJzaW9uU2V0dGluZ3NPcGVuZWQpO1xuICAgIC8vIHVwZGF0ZSB2ZXJzaW9uXG4gICAgaWYgKCFsYXN0VmVyc2lvblNldHRpbmdzT3BlbmVkIHx8IGxhc3RWZXJzaW9uU2V0dGluZ3NPcGVuZWQgIT09IGN1cnJlbnRWZXJzaW9uKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoY29uZmlnLmtleS5sYXN0VmVyc2lvblNldHRpbmdzT3BlbmVkLCBjdXJyZW50VmVyc2lvbik7XG4gICAgfVxuICAgIC8vIHJldHVybiB2ZXJzaW9uIERpZmZlcmVuY2VcbiAgICByZXR1cm4gdmVyc2lvbkRpZmZlcmVuY2U7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGdldFZlcnNpb25EaWZmZXJlbmNlO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgeyBnZXRWYXJpYWJsZVR5cGVCeVZhbHVlIH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxpdGllcy9nZXRWYXJpYWJsZVR5cGVCeVZhbHVlJztcbmltcG9ydCB7IGNoYW5nZU5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxpdGllcy9jaGFuZ2VOb3RhdGlvbic7XG5mdW5jdGlvbiBoYW5kbGVWYXJpYWJsZUFsaWFzKHZhcmlhYmxlLCB2YWx1ZSwgbW9kZSkge1xuICAgIGNvbnN0IHJlc29sdmVkQWxpYXMgPSBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkKHZhbHVlLmlkKTtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQ29sbGVjdGlvbkJ5SWQocmVzb2x2ZWRBbGlhcy52YXJpYWJsZUNvbGxlY3Rpb25JZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzY3JpcHRpb246IHZhcmlhYmxlLmRlc2NyaXB0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnZhcmlhYmxlcy5rZXksXG4gICAgICAgIGNhdGVnb3J5OiBnZXRWYXJpYWJsZVR5cGVCeVZhbHVlKE9iamVjdC52YWx1ZXMocmVzb2x2ZWRBbGlhcy52YWx1ZXNCeU1vZGUpWzBdKSxcbiAgICAgICAgdmFsdWVzOiBgeyR7Y29sbGVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCl9LiR7Y2hhbmdlTm90YXRpb24ocmVzb2x2ZWRBbGlhcy5uYW1lLCAnLycsICcuJyl9fWAsXG4gICAgICAgIC8vIHRoaXMgaXMgYmVpbmcgc3RvcmVkIHNvIHdlIGNhbiBwcm9wZXJseSB1cGRhdGUgdGhlIGRlc2lnbiB0b2tlbnMgbGF0ZXIgdG8gYWNjb3VudCBmb3IgYWxsXG4gICAgICAgIC8vIG1vZGVzIHdoZW4gdXNpbmcgYWxpYXNlc1xuICAgICAgICBhbGlhc0NvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgYWxpYXNNb2RlOiBtb2RlXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVZhcmlhYmxlQWxpYXM7XG4iLCIvLyB0aGUgbm9kZSB0eXBlcyB0aGF0IGNhbiBiZSB1c2VkIGZvciB0b2tlbnNcbmNvbnN0IHRva2VuTm9kZVR5cGVzID0gW1xuICAgICdDT01QT05FTlQnLFxuICAgICdDT01QT05FTlRfU0VUJyxcbiAgICAnUkVDVEFOR0xFJyxcbiAgICAnRlJBTUUnXG5dO1xuLyoqXG4gKiBjaGVjayBpZiBhIG5vZGUgaXMgYSB2YWxpZCB0b2tlbiBub2RlIHR5cGVcbiAqIEN1cnJlbnRseTogJ0NPTVBPTkVOVCcsICdGUkFNRSBvciAnUkVDVEFOR0xFJ1xuICogQHBhcmFtIFNjZW5lTm9kZSBub2RlXG4gKi9cbmNvbnN0IGlzVG9rZW5Ob2RlID0gKG5vZGUpID0+IHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnQudHlwZSAhPT0gJ0NPTVBPTkVOVF9TRVQnICYmIHRva2VuTm9kZVR5cGVzLmluY2x1ZGVzKG5vZGUudHlwZSkgJiYgbm9kZS5uYW1lLmxlbmd0aCA+IDA7XG59O1xuZXhwb3J0IGRlZmF1bHQgaXNUb2tlbk5vZGU7XG4iLCJjb25zdCBwcm9jZXNzQWxpYXNNb2RlcyA9ICh2YXJpYWJsZXMpID0+IHtcbiAgICByZXR1cm4gdmFyaWFibGVzLnJlZHVjZSgoY29sbGVjdG9yLCB2YXJpYWJsZSkgPT4ge1xuICAgICAgICAvLyBvbmx5IG9uZSBtb2RlIHdpbGwgYmUgcGFzc2VkIGluIGlmIGFueVxuICAgICAgICBpZiAoIXZhcmlhYmxlLmFsaWFzTW9kZSkge1xuICAgICAgICAgICAgY29sbGVjdG9yLnB1c2godmFyaWFibGUpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbGlhcyBtb2RlIHNpbmd1bGFyIGJlY2F1c2Ugb25seSBvbmUgaXMgc2hvd25cbiAgICAgICAgY29uc3QgeyBhbGlhc01vZGUsIGFsaWFzQ29sbGVjdGlvbk5hbWUgfSA9IHZhcmlhYmxlO1xuICAgICAgICAvLyB0aGlzIHdhcyBvbmx5IGFkZGVkIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHByb2Nlc3MgdGhhdCBkYXRhIHNvIGJlZm9yZSB3ZSByZXR1cm4gdGhlIHZhcmlhYmxlcywgd2UgY2FuIHJlbW92ZSBpdFxuICAgICAgICBkZWxldGUgdmFyaWFibGUuYWxpYXNNb2RlO1xuICAgICAgICBkZWxldGUgdmFyaWFibGUuYWxpYXNDb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgY29sbGVjdG9yLnB1c2goT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YXJpYWJsZSksIHsgdmFsdWVzOiB2YXJpYWJsZS52YWx1ZXMgfSkpO1xuICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xuICAgIH0sIFtdKTtcbn07XG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzQWxpYXNNb2RlcztcbiIsIi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGEgbnVtYmVyXG4gKiBpdCBpcyByb3VuZGVkIHRvIDMgZGVjaW1hbCBwb3NpdGlvbnNcbiAqIG90aGVyd2lzZSBpdCBpcyByZXR1cm5lZCBhcyBpc1xuICogQHBhcmFtIHZhbHVlIG51bWJlclxuICogQHBhcmFtIGRlY2ltYWxQbGFjZXMgaW50XG4gKi9cbmNvbnN0IHJvdW5kV2l0aERlY2ltYWxzID0gKHZhbHVlLCBkZWNpbWFsUGxhY2VzID0gMikgPT4ge1xuICAgIC8vIGV4aXQgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgY29ycmVjdCBpbnB1dHNcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGVjaW1hbFBsYWNlcyAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhcmFtZXRlcnMsIGJvdGggdmFsdWUgXCIke3ZhbHVlfVwiICgke3R5cGVvZiB2YWx1ZX0pIGFuZCBkZWNpbWFsUGxhY2VzIFwiJHtkZWNpbWFsUGxhY2VzfVwiICgke3R5cGVvZiBkZWNpbWFsUGxhY2VzfSkgbXVzdCBiZSBvZiB0eXBlIG51bWJlcmApO1xuICAgIH1cbiAgICAvLyBzZXQgZGVjaW1hbCBwbGFjZXNcbiAgICBjb25zdCBmYWN0b3JPZlRlbiA9IE1hdGgucG93KDEwLCBkZWNpbWFsUGxhY2VzKTtcbiAgICAvLyByb3VuZCByZXN1bHQgYW5kIHJldHVyblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogZmFjdG9yT2ZUZW4pIC8gZmFjdG9yT2ZUZW47XG59O1xuZXhwb3J0IGRlZmF1bHQgcm91bmRXaXRoRGVjaW1hbHM7XG4iLCJleHBvcnQgZGVmYXVsdCAoY3VycmVudFNlbVZlciwgcHJldlNlbVZlcnMgPSAnMS4wLjAnKSA9PiB7XG4gICAgY29uc3QgW3BNYWpvciwgcE1pbm9yLCBwUGF0Y2hdID0gcHJldlNlbVZlcnMuc3BsaXQoJy4nKTtcbiAgICBjb25zdCBbY01ham9yLCBjTWlub3IsIGNQYXRjaF0gPSBjdXJyZW50U2VtVmVyLnNwbGl0KCcuJyk7XG4gICAgaWYgKHBNYWpvciA8IGNNYWpvcikge1xuICAgICAgICByZXR1cm4gJ21ham9yJztcbiAgICB9XG4gICAgaWYgKHBNaW5vciA8IGNNaW5vcikge1xuICAgICAgICByZXR1cm4gJ21pbm9yJztcbiAgICB9XG4gICAgaWYgKHBQYXRjaCA8IGNQYXRjaCkge1xuICAgICAgICByZXR1cm4gJ3BhdGNoJztcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzIH0gZnJvbSAnQGNvbmZpZy9kZWZhdWx0U2V0dGluZ3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBzdHJpbmdpZnlKc29uIH0gZnJvbSAnLi9zdHJpbmdpZnlKc29uJztcbmNvbnN0IGZpeE1pc3NpbmcgPSAoZGVmYXVsdHMsIGN1cnJlbnQpID0+IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhkZWZhdWx0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY3VycmVudFtrZXldICE9PSB0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFtrZXksIGRlZmF1bHRzW2tleV1dO1xuICAgIH1cbiAgICByZXR1cm4gW2tleSwgY3VycmVudFtrZXldXTtcbn0pKTtcbi8qKlxuICogZ2V0IHRoZSBjdXJyZW50IHVzZXJzIHNldHRpbmdzXG4gKiBmb3Igc2V0dGluZ3MgdGhhdCBhcmUgbm90IHNldCwgdGhlIGRlZmF1bHRzIHdpbGwgYmUgdXNlZFxuICogQHJldHVybiBvYmplY3RcbiAqL1xuY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IHN0b3JlZFNldHRpbmdzID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKGNvbmZpZy5rZXkuc2V0dGluZ3MpO1xuICAgIC8vIHJldHVybiBkZWZhdWx0cyBpZiBubyBzZXR0aW5ncyBhcmUgcHJlc2VudFxuICAgIGlmIChzdG9yZWRTZXR0aW5ncyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgLy8gcGFyc2Ugc3RvcmVkIHNldHRpbmdzXG4gICAgc3RvcmVkU2V0dGluZ3MgPSBKU09OLnBhcnNlKHN0b3JlZFNldHRpbmdzKTtcbiAgICAvLyBmaXggaXNzdWVzIG9uIGZpcnN0IGxldmVsXG4gICAgY29uc3QgZml4ZWRTZXR0aW5ncyA9IGZpeE1pc3NpbmcoZGVmYXVsdFNldHRpbmdzLCBzdG9yZWRTZXR0aW5ncyk7XG4gICAgZml4ZWRTZXR0aW5ncy5wcmVmaXggPSBmaXhNaXNzaW5nKGRlZmF1bHRTZXR0aW5ncy5wcmVmaXgsIGZpeGVkU2V0dGluZ3MucHJlZml4KTtcbiAgICBmaXhlZFNldHRpbmdzLmV4cG9ydHMgPSBmaXhNaXNzaW5nKGRlZmF1bHRTZXR0aW5ncy5leHBvcnRzLCBmaXhlZFNldHRpbmdzLmV4cG9ydHMpO1xuICAgIC8vIHJldHVybiBzZXR0aW5nc1xuICAgIHJldHVybiBmaXhlZFNldHRpbmdzO1xufTtcbi8qKlxuICogQG5hbWUgc2F2ZVNldHRpbmdzXG4gKiBAZGVzY3JpcHRpb24gc2F2ZSB0aGUgdXNlciBzZXR0aW5ncyB0byB0aGUgXCJjYWNoZVwiXG4gKiBAcGFyYW0ge1VzZXJTZXR0aW5nc30gc2V0dGluZ3NcbiAqL1xuY29uc3Qgc2V0U2V0dGluZ3MgPSAoc2V0dGluZ3MpID0+IHtcbiAgICBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzKSwgc2V0dGluZ3MpO1xuICAgIC8vIHN0b3JlIHB1YmxpYyBzZXR0aW5ncyB0aGF0IHNob3VsZCBiZSBzaGFyZWQgYWNyb3NzIG9yZ1xuICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShjb25maWcua2V5LnNldHRpbmdzLCBzdHJpbmdpZnlKc29uKHNldHRpbmdzKSk7XG59O1xuLyoqXG4gKiBAbmFtZSByZXNldFNldHRpbmdzXG4gKiBAZGVzY3JpcHRpb24gcmVzZXRTZXR0aW5ncyB0aGUgdXNlciBzZXR0aW5ncyB0byB0aGUgXCJjYWNoZVwiXG4gKi9cbmNvbnN0IHJlc2V0U2V0dGluZ3MgPSAoKSA9PiBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoY29uZmlnLmtleS5zZXR0aW5ncywgc3RyaW5naWZ5SnNvbihkZWZhdWx0U2V0dGluZ3MpKTtcbi8vIGV4cG9ydHNcbmV4cG9ydCB7IGdldFNldHRpbmdzLCBzZXRTZXR0aW5ncywgcmVzZXRTZXR0aW5ncyB9O1xuIiwiZXhwb3J0IGNvbnN0IHN0cmluZ2lmeUpzb24gPSAob2JqZWN0LCBjb21wcmVzc2lvbiA9IHRydWUpID0+IHtcbiAgICBpZiAoY29tcHJlc3Npb24gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XG4gICAgfVxuICAgIC8vIHJldHVybiB1bmNvbXByZXNzZWQganNvblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIDIpO1xufTtcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5jb25zdCB2ZXJzaW9uID0gJzYuMTAuNic7XG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldFNldHRpbmdzLCByZXNldFNldHRpbmdzLCBzZXRTZXR0aW5ncyB9IGZyb20gJy4vdXRpbGl0aWVzL3NldHRpbmdzJztcbmltcG9ydCB7IGdldEFjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbiB9IGZyb20gJy4vdXRpbGl0aWVzL2FjY2Vzc1Rva2VuJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgY29tbWFuZHMgfSBmcm9tICdAY29uZmlnL2NvbW1hbmRzJztcbmltcG9ydCBnZXRWZXJzaW9uRGlmZmVyZW5jZSBmcm9tICcuL3V0aWxpdGllcy9nZXRWZXJzaW9uRGlmZmVyZW5jZSc7XG5pbXBvcnQgZ2V0RmlsZUlkIGZyb20gJy4vdXRpbGl0aWVzL2dldEZpbGVJZCc7XG5pbXBvcnQgeyBleHBvcnRSYXdUb2tlbkFycmF5IH0gZnJvbSAnLi91dGlsaXRpZXMvZ2V0VG9rZW5Kc29uJztcbmltcG9ydCB7IHN0cmluZ2lmeUpzb24gfSBmcm9tICcuL3V0aWxpdGllcy9zdHJpbmdpZnlKc29uJztcbi8vIGluaXRpYXRlIFVJXG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB0aGVtZUNvbG9yczogdHJ1ZSxcbiAgICB2aXNpYmxlOiBmYWxzZVxufSk7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG9wZW4gVUlcbmlmIChbY29tbWFuZHMuZXhwb3J0LCBjb21tYW5kcy51cmxFeHBvcnQsIGNvbW1hbmRzLmdlbmVyYWxTZXR0aW5nc10uaW5jbHVkZXMoZmlnbWEuY29tbWFuZCkpIHtcbiAgICAvLyB3cmFwIGluIGZ1bmN0aW9uIGJlY2F1c2Ugb2YgYXN5bmMgY2xpZW50IFN0b3JhZ2VcbiAgICBjb25zdCBvcGVuVWkgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB1c2VyIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCB2ZXJzaW9uIGRpZmZlcmVuY2VzIHRvIHRoZSBsYXN0IHRpbWUgdGhlIHBsdWdpbiB3YXMgb3BlbmVkXG4gICAgICAgIGNvbnN0IHZlcnNpb25EaWZmZXJlbmNlID0geWllbGQgZ2V0VmVyc2lvbkRpZmZlcmVuY2UoZmlnbWEpO1xuICAgICAgICAvLyByZXNpemUgVUkgaWYgbmVlZGVkXG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShjb25maWcudWlbZmlnbWEuY29tbWFuZF0ud2lkdGgsIGNvbmZpZy51aVtmaWdtYS5jb21tYW5kXS5oZWlnaHQpO1xuICAgICAgICBpZiAodmVyc2lvbkRpZmZlcmVuY2UgIT09IHVuZGVmaW5lZCAmJiB2ZXJzaW9uRGlmZmVyZW5jZSAhPT0gJ3BhdGNoJykge1xuICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKGNvbmZpZy51aVtmaWdtYS5jb21tYW5kXS53aWR0aCwgY29uZmlnLnVpW2ZpZ21hLmNvbW1hbmRdLmhlaWdodCArIDYwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3cml0ZSB0b2tlbnMgdG8ganNvbiBmaWxlXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGNvbW1hbmQ6IGZpZ21hLmNvbW1hbmQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdXNlclNldHRpbmdzKSwgeyBhY2Nlc3NUb2tlbjogeWllbGQgZ2V0QWNjZXNzVG9rZW4oZ2V0RmlsZUlkKGZpZ21hKSkgfSksXG4gICAgICAgICAgICAgICAgZGF0YTogc3RyaW5naWZ5SnNvbihleHBvcnRSYXdUb2tlbkFycmF5KGZpZ21hLCB1c2VyU2V0dGluZ3MpKSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uRGlmZmVyZW5jZTogdmVyc2lvbkRpZmZlcmVuY2UsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZpZ21hLnJvb3QubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB8fCB7fSk7XG4gICAgICAgIC8vIHJlZ2lzdGVyIHRoZSBzZXR0aW5ncyBVSVxuICAgICAgICBmaWdtYS51aS5zaG93KCk7XG4gICAgfSk7XG4gICAgLy8gcnVuIGZ1bmN0aW9uXG4gICAgb3BlblVpKCk7XG59XG4vKipcbiAqIE9wZW4gSGVscFxuICogT3BlbiBnaXRodWIgaGVscCBwYWdlXG4gKi9cbmlmIChmaWdtYS5jb21tYW5kID09PSBjb21tYW5kcy5oZWxwKSB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBjb21tYW5kOiBjb21tYW5kcy5oZWxwLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vbHVrYXNvcHBlcm1hbm4vZGVzaWduLXRva2VucydcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBPcGVuIGRlbW9cbiAqL1xuaWYgKGZpZ21hLmNvbW1hbmQgPT09IGNvbW1hbmRzLmRlbW8pIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGNvbW1hbmQ6IGNvbW1hbmRzLmRlbW8sXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlLzJNUTc1OVI1a0p0elFuNHFTSHVxUjcvRGVzaWduLVRva2Vucy1mb3ItRmlnbWE/bm9kZS1pZD0yMzElM0EyJ1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIFJlc2V0IHNldHRpbmdzXG4gKi9cbmlmIChmaWdtYS5jb21tYW5kID09PSBjb21tYW5kcy5yZXNldCkge1xuICAgIHJlc2V0U2V0dGluZ3MoKTtcbiAgICAvLyBzZW5kIG1lc3NhZ2VcbiAgICBmaWdtYS5ub3RpZnkoJ+Kame+4jyBTZXR0aW5ncyBoYXZlIGJlZW4gcmVzZXQuJyk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbi8qKlxuICogUmVhY3QgdG8gbWVzc2FnZXNcbiAqL1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgY29tbWFuZCwgcGF5bG9hZCB9ID0gbWVzc2FnZTtcbiAgICAvKipcbiAgICAgKiBvbiBjbG9zZVBsdWdpblxuICAgICAqIGNsb3NlIHBsdWdpbiBhbmQgc2hvdyBub3RpZmljYXRpb24gaWYgYXZhaWxhYmxlXG4gICAgICovXG4gICAgaWYgKGNvbW1hbmQgPT09IGNvbW1hbmRzLmNsb3NlUGx1Z2luKSB7XG4gICAgICAgIC8vIHNob3cgbm90aWZpY2F0aW9uIGlmIHNlbmRcbiAgICAgICAgaWYgKChwYXlsb2FkID09PSBudWxsIHx8IHBheWxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBheWxvYWQubm90aWZpY2F0aW9uKSAhPT0gdW5kZWZpbmVkICYmIChwYXlsb2FkID09PSBudWxsIHx8IHBheWxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBheWxvYWQubm90aWZpY2F0aW9uKSAhPT0gJycpIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShwYXlsb2FkLm5vdGlmaWNhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xvc2UgcGx1Z2luXG4gICAgICAgIGZpZ21hLnVpLmhpZGUoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogb24gc2F2ZVNldHRpbmdzXG4gICAgICogc2F2ZSBzZXR0aW5ncywgYWNjZXNzIHRva2VuIGFuZCBjbG9zZSBwbHVnaW5cbiAgICAgKi9cbiAgICBpZiAoY29tbWFuZCA9PT0gY29tbWFuZHMuc2F2ZVNldHRpbmdzKSB7XG4gICAgICAgIC8vIHN0b3JlIHNldHRpbmdzXG4gICAgICAgIHNldFNldHRpbmdzKHBheWxvYWQuc2V0dGluZ3MpO1xuICAgICAgICAvLyBhY2Nlc3NUb2tlblxuICAgICAgICB5aWVsZCBzZXRBY2Nlc3NUb2tlbihnZXRGaWxlSWQoZmlnbWEpLCBwYXlsb2FkLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgLy8gY2xvc2UgcGx1Z2luXG4gICAgICAgIGlmIChwYXlsb2FkLmNsb3NlUGx1Z2luICYmIHBheWxvYWQuY2xvc2VQbHVnaW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==