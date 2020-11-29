export function setCssEndEvent(element: HTMLElement, type: string) {
	return new Promise((resolve) => {
		if (!element) {
			resolve(false);
			return;
		}
		let eventName = null;
		const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
		function end(event) {
			const target = event.srcElement || event.target;
			if (target === element) {
				element.removeEventListener(eventName, end);
				resolve(event);
			}
		}
		if (element.style[`Webkit${capitalized}`] !== undefined) {
			eventName = `webkit${capitalized}End`;
		}
		if ((element.style as any).OTransition !== undefined) {
			eventName = `o${type}End`;
		}
		if (element.style[type] !== undefined) {
			eventName = `${type}end`;
		}
		element.addEventListener(eventName, end);
	});
}

/**
 * transition 结束
 * @param element HTMLElement
 */
export function onceTransitionEnd(element: HTMLElement): Promise<any> {
	return new Promise((resolve) => {
		setCssEndEvent(element, 'transition').then(resolve);
	});
}

/**
 * animation 结束
 * @param element HTMLElement
 */
export function onceAnimationEnd(element: HTMLElement): Promise<any> {
	return new Promise((resolve) => {
		setCssEndEvent(element, 'animation').then(resolve);
	});
}