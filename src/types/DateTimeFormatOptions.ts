import type { DayFormat } from "./DayFormat";
import type { EraFormat } from "./EraFormat";
import type { FormatMatcher } from "./FormatMatcher";
import type { HourFormat } from "./HourFormat";
import type { LocaleMatcher } from "./LocaleMatcher";
import type { MinuteFormat } from "./MinuteFormat";
import type { MonthFormat } from "./MonthFormat";
import type { SecondFormat } from "./SecondFormat";
import type { TimeZone } from "./TimeZone";
import type { TimeZoneNameFormat } from "./TimeZoneNameFormat";
import type { WeekdayFormat } from "./WeekdayFormat";
import type { YearFormat } from "./YearFormat";

/**
 * Internationalization DateTime format options.
 */
export type DateTimeFormatOptions = {
	/**
	 * The representation of the day.
	 */
	readonly day?: DayFormat;

	/**
	 * The representation of the era.
	 */
	readonly era?: EraFormat;

	/**
	 * The format matching algorithm to use.
	 * Default: "best fit".
	 */
	readonly formatMatcher?: FormatMatcher;

	/**
	 * The representation of the hour.
	 */
	readonly hour?: HourFormat;

	/**
	 * Whether to use 12-hour time (as opposed to 24-hour time).
	 */
	readonly hour12?: boolean;

	/**
	 * The locale matching algorithm to use.
	 * Default: "best fit".
	 */
	readonly localeMatcher?: LocaleMatcher;

	/**
	 * The representation of the minutes.
	 */
	readonly minute?: MinuteFormat;

	/**
	 * The representation of the month.
	 */
	readonly month?: MonthFormat;

	/**
	 * The representation of the seconds.
	 */
	readonly second?: SecondFormat;

	/**
	 * The time zone to use.
	 */
	readonly timeZone?: TimeZone;

	/**
	 * The representation of the time zone name.
	 */
	readonly timeZoneName?: TimeZoneNameFormat;

	/**
	 * The representation of the weekday.
	 */
	readonly weekday?: WeekdayFormat;

	/**
	 * The representation of the year.
	 */
	readonly year?: YearFormat;
};
