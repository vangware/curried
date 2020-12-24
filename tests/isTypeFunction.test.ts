import { suite } from "@vangware/test";
import { isTypeFunction } from "../src/isTypeFunction";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeFunction(BigInt(1)) && isTypeFunction(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeFunction(true) && isTypeFunction(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeFunction(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeFunction(() => undefined),
		...wantedTrue
	},
	{
		given: "a number",
		received: isTypeFunction(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeFunction(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeFunction(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeFunction(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeFunction("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeFunction(Symbol("description")) && isTypeFunction(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeFunction([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeFunction({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeFunction(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeFunction(undefined),
		...wantedFalse
	}
]);
