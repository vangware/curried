import { suite } from "@vangware/test";
import { instanceOfPromise } from "../src/instanceOfPromise";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received:
			instanceOfPromise(BigInt(1)) && instanceOfPromise(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: instanceOfPromise(true) && instanceOfPromise(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: instanceOfPromise(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: instanceOfPromise(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: instanceOfPromise(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: instanceOfPromise(Promise.resolve()),
		...wantedTrue
	},
	{
		given: "a regular expression",
		received:
			instanceOfPromise(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			instanceOfPromise(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: instanceOfPromise("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			instanceOfPromise(Symbol("description")) &&
			instanceOfPromise(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: instanceOfPromise([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: instanceOfPromise({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: instanceOfPromise(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: instanceOfPromise(undefined),
		...wantedFalse
	}
]);
