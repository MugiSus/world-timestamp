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
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
const worldTimestamp = (timezone = 'Etc/UTC') => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, isomorphic_unfetch_1.default)(`https://worldtimeapi.org/api/timezone/${timezone}`);
    const json = yield res.json();
    const status = res.status;
    if (status >= 400)
        throw Error(res.statusText);
    const utcDatetime = json.utc_datetime;
    const datetimeMicrosecond = +utcDatetime.match(/\.\d{3}(\d*?)\+/)[1];
    const utcMicroseconds = new Date(utcDatetime).getTime() * 1000 + datetimeMicrosecond;
    const microseconds = utcMicroseconds + json.raw_offset * 1000000;
    return {
        response: json,
        timestamp: microseconds / 1000,
        utcTimestamp: utcMicroseconds / 1000,
        microseconds: microseconds,
        utcMicroseconds: utcMicroseconds,
    };
});
exports.default = worldTimestamp;
