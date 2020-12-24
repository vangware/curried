import { suite } from "@vangware/test";
import { isTypeObject } from "../src/isTypeObject";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeObject(BigInt(1)) && isTypeObject(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeObject(true) && isTypeObject(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeObject(new Date()),
		...wantedTrue
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeObject(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeObject(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeObject(Promise.resolve()),
		...wantedTrue
	},
	{
		given: "a regular expression",
		received:
			isTypeObject(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeObject(new RegExp("expression", "u")),
		...wantedTrue
	},
	{
		given: "a string",
		received: isTypeObject("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeObject(Symbol("description")) && isTypeObject(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeObject([]),
		...wantedTrue
	},
	{
		given: "an object",
		received: isTypeObject({}),
		...wantedTrue
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeObject(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeObject(undefined),
		...wantedFalse
	}
]);
