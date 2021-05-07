if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}
// parseFloat polyfill
Number.parseFloat = Number.parseFloat || parseFloat;
// parseFloat polyfill
Number.parseInt = Number.parseInt || parseInt;
// isFinite Polyfill
Number.isFinite =
	Number.isFinite ||
	function (value) {
		return typeof value === 'number' && isFinite(value);
	};


import AddressModal from './modules/AddressModal';
import ResultModal from './modules/ResultModal';
import Msg from './modules/Msg';
import NoticeModal from './modules/NoticeModal';

import Loading from '@eightfeet/loading';
import Picker from '@eightfeet/picker';
import validate from './validate';
import Message from '@eightfeet/message';
import Modal, {createInlineStyles} from '@eightfeet/modal';

// tools
import { isPC, setEmBase, createDom, removeDom, combineDomByClass } from './utils/htmlFactory';
import { formatWheelsData, getPositionByDefaultValue } from './utils/regionsWheelsHelper';
import { isObject, countDown, dormancyFor, fixpx } from './utils/tools';
import { onceTransitionEnd, onceAnimationEnd } from './utils/web-animation-club';

if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

const htmlFactory = {
	createDom,
	removeDom,
	combineDomByClass,
	inlineStyle: createInlineStyles
};

const tools = {
	isPC,
	isObject,
	countDown,
	dormancyFor,
	fixpx,
	setEmBase
};

const regionsDataFormat = {
	formatWheelsData,
	getPositionByDefaultValue
};

const webAnimation = {
	onceTransitionEnd,
	onceAnimationEnd
};

export {
	AddressModal,
	ResultModal,
	Msg,
	NoticeModal,
	Loading,
	Picker,
	validate,
	Message,
	Modal,
	htmlFactory,
	tools,
	regionsDataFormat,
	webAnimation
};