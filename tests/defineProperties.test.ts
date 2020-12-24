import { suite } from "@vangware/test";
import { defineProperties } from "../src/defineProperties";

const defineFooBarProperties = defineProperties({
	bar: {
		enumerable: true,
		// eslint-disable-next-line functional/functional-parameters
		get: () => "bar"
	},
	foo: {
		enumerable: true,
		// eslint-disable-next-line functional/functional-parameters
		get: () => "foo"
	}
});

export default suite([
	{
		given: "a set of defined properties",
		must: "return new object with added/changed properties",
		received: defineFooBarProperties({ bar: "nope", baz: "baz" }),
		wanted: { bar: "bar", baz: "baz", foo: "foo" }
	}
]);
