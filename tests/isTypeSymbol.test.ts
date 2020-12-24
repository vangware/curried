import { suite } from "@vangware/test";
import { isTypeSymbol } from "../src/isTypeSymbol";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeSymbol(BigInt(1)) && isTypeSymbol(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeSymbol(true) && isTypeSymbol(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeSymbol(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeSymbol(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeSymbol(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeSymbol(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeSymbol(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeSymbol(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeSymbol("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeSymbol(Symbol("description")) && isTypeSymbol(Symbol(1)),
		...wantedTrue
	},
	{
		given: "an array",
		received: isTypeSymbol([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeSymbol({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeSymbol(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeSymbol(undefined),
		...wantedFalse
	}
]);
