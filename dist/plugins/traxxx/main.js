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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studio_1 = __importDefault(require("./studio"));
module.exports = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ctx.args || typeof ctx.args !== "object") {
        ctx.$throw(`Missing args, cannot run plugin`);
        return {};
    }
    if (ctx.event === "studioCreated" || ctx.event === "studioCustom") {
        return studio_1.default(ctx);
    }
    ctx.$throw("Uh oh. You shouldn't use the plugin for this type of event");
    return {};
});
