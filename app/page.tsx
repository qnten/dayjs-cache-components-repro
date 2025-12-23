import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);

/** Add your relevant code here for the issue to reproduce */
export default async function page() {
	const date = "2024-11-29T12:33:53+01:00";
	return dayjs.tz(date, "Europe/Berlin").toString();
}
