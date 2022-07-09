"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.addDiary = exports.getEntriesWhithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
var diaries_json_1 = require("./diaries.json");
var diaries = diaries_json_1["default"];
var getEntries = function () { return diaries; };
exports.getEntries = getEntries;
var findById = function (id) {
    var entry = diaries.find(function (d) { return d.id === id; });
    if (entry != null) {
        var comment = entry.comment, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
var getEntriesWhithoutSensitiveInfo = function () {
    return diaries.map(function (_a) {
        var id = _a.id, date = _a.date, visibility = _a.visibility, weather = _a.weather;
        return {
            id: id,
            date: date,
            visibility: visibility,
            weather: weather
        };
    });
};
exports.getEntriesWhithoutSensitiveInfo = getEntriesWhithoutSensitiveInfo;
var addDiary = function (newDiaryEntry) {
    var newDiary = __assign({ id: Math.max.apply(Math, diaries.map(function (d) { return d.id; })) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
