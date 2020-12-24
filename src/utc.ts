import type { UTC } from "./types/UTC";

/**
 * Returns the number of milliseconds between midnight, January 1, 1970
 * Universal Coordinated Time (UTC) (or GMT) and the specified date.
 *
 * @category Date
 * @example
 * ```typescript
 * utc({ year: 1989, month: 10 }); // 625881600000
 * ```
 * @param param0 UTC object.
 * @returns Milliseconds value.
 */
export const utc = ({
	day,
	hours,
	milliseconds,
	minutes,
	month,
	seconds,
	year
}: UTC) => Date.UTC(year, month, day, hours, minutes, seconds, milliseconds);
