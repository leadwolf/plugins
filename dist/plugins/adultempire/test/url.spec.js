"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const plugin = require("../main");
const { expect } = require("chai");
const { createPluginRunner } = require("../../../context");
const runPlugin = createPluginRunner("adultEmpire", plugin);
describe("adultempire", () => {
    describe("Movies", () => {
        it("Should fetch covers & studio name from URL", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield runPlugin({
                movieName: "https://www.adultempire.com/1683550/young-girl-seductions-porn-videos.html?qs=Young%20Girl%20Seductions",
                args: {},
            });
            expect(result).to.be.an("object");
            expect(result.name).to.equal("Young Girl Seductions");
            expect(result.frontCover).to.be.a("string");
            expect(result.backCover).to.be.a("string");
            expect(result.studio).to.be.a("string").equal("Pure Passion");
            expect(result.description)
                .to.be.a("string")
                .equal("Prepare to get spellbound as 5 young hotties showcase their seductive ways. Shot in the highest HD quality, April O'Neil, Faye Reagan, Katie Jordin, Lexi Bloom, and Sasha Hall will stop at nothing to suck you in to get what they want. Get ready for some of the hottest sex as these young girls seduce you and make their dirty fantasies come true.");
            expect(result.releaseDate).to.be.a("number");
            const date = new Date(result.releaseDate);
            expect(date.getDate(), 31);
            expect(date.getMonth(), 3);
            expect(date.getFullYear(), 2013);
        }));
    });
});
