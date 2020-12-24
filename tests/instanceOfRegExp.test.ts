import { suite } from "@vangware/test";
import { instanceOfRegExp } from "../src/instanceOfRegExp";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: instanceOfRegExp(BigInt(1)) && instanceOfRegExp(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: instanceOfRegExp(true) && instanceOfRegExp(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: instanceOfRegExp(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: instanceOfRegExp(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: instanceOfRegExp(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: instanceOfRegExp(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			instanceOfRegExp(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			instanceOfRegExp(new RegExp("expression", "u")),
		...wantedTrue
	},
	{
		given: "a string",
		received: instanceOfRegExp("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			instanceOfRegExp(Symbol("description")) &&
			instanceOfRegExp(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: instanceOfRegExp([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: instanceOfRegExp({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: instanceOfRegExp(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: instanceOfRegExp(undefined),
		...wantedFalse
	}
]);
