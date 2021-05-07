
export function fixpx(px: number) {
	// eslint-disable-next-line no-undef
	return px ? `${px/31.25}em`: 0;
}

/** 使休眠 */
export function dormancyFor(time: number) {
	return new Promise<void>(resolve => window.setTimeout(()=>resolve(), time));
}

/** 倒计时 */
export function countDown(times: number, callback: (count: number) => void) {
	let count = times;
	let timer = null;

	const calculation = () => {
		count--;
		callback(count);
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			if (count > 0) {
				calculation();
			}
		}, 1000);
	};

	calculation();
}

/** 对象判断 */
export function isObject(value: any) {
	return Object.prototype.toString.call(value) === "[object Object]";
}