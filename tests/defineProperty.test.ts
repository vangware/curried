import { suite } from "@vangware/test";
import { defineProperty } from "../src/defineProperty";

const defineEnumerableFooProperty = defineProperty({
	enumerable: true,
	// eslint-disable-next-line functional/functional-parameters
	get: () => "foo"
});
const defineFooProperty = defineEnumerableFooProperty("foo");

export default suite([
	{
		given: "a defined property",
		must: "return new object with added/changed property",
		received: defineFooProperty({ bar: "bar", baz: "baz" }),
		wanted: { bar: "bar", baz: "baz", foo: "foo" }
	}
]);
