"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Day1 = /** @class */ (function () {
    function Day1(filePath) {
        this.filePath = filePath;
    }
    Day1.prototype.part1 = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            fs.readFile(_this.filePath, "utf8", function (err, data) {
                if (err) {
                    return rej(err);
                }
                var d = data.split(/\r?\n/);
                var counter = 0;
                var elves = [];
                for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                    var n = d_1[_i];
                    var num = Number(n);
                    if (num) {
                        counter += num;
                    }
                    else {
                        elves.push(counter);
                        counter = 0;
                    }
                }
                elves.push(counter);
                var finalElves = elves.sort(function (a, b) { return b - a; });
                res(finalElves[0]);
            });
        });
    };
    Day1.prototype.part2 = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            fs.readFile(_this.filePath, "utf8", function (err, data) {
                if (err) {
                    return rej(err);
                }
                var d = data.split(/\r?\n/);
                var counter = 0;
                var elves = [];
                for (var _i = 0, d_2 = d; _i < d_2.length; _i++) {
                    var n = d_2[_i];
                    var num = Number(n);
                    if (num) {
                        counter += num;
                    }
                    else {
                        elves.push(counter);
                        counter = 0;
                    }
                }
                elves.push(counter);
                var finalElves = elves.sort(function (a, b) { return b - a; });
                res(finalElves[0] + finalElves[1] + finalElves[2]);
            });
        });
    };
    return Day1;
}());
exports.Day1 = Day1;
//# sourceMappingURL=day1.js.map