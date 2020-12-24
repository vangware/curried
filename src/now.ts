/**
 * Takes a `Date` constructor and returns the output of `Date.now`. The output
 * is the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 *
 * @category Date
 * @example
 * ```typescript
 * now({ now: () => 01189998819991197200 }); // 1189998819991197200
 * now(Date); // Current timestamp
 * ```
 * @param source A Date constructor (or mock if necessary).
 * @returns Number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 */
export const now = <Source extends Pick<DateConstructor, "now">>(
	source: Source
) => source.now();
