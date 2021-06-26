import { suite } from "@vangware/test";
import { createProxy } from "../src/createProxy";

const fooProxy = createProxy({
	// eslint-disable-next-line functional/functional-parameters
	get: () => "foo"
});

export default suite([
	{
		given: "a proxy that always returns foo and an object",
		// eslint-disable-next-line max-len
		must: "return proxy for given object which returns foo with any property",
		received: fooProxy({ bar: "bar" }).bar,
		wanted: "foo"
	}
]);
