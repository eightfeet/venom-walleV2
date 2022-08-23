import AddressModal from './modules/AddressModal';
import ResultModal from './modules/ResultModal';
import Msg from './modules/Msg';
import NoticeModal from './modules/NoticeModal';
import Loading from '@eightfeet/loading';
import Picker from '@eightfeet/picker';
import validate from './validate';
import Message from '@eightfeet/message';
import Modal from '@eightfeet/modal';
import { setEmBase, createDom, removeDom, combineDomByClass } from './utils/htmlFactory';
import { getPositionByDefaultValue } from './utils/regionsWheelsHelper';
import { isObject, countDown, dormancyFor, fixpx } from './utils/tools';
import { onceTransitionEnd, onceAnimationEnd } from './utils/web-animation-club';
declare const htmlFactory: {
    createDom: typeof createDom;
    removeDom: typeof removeDom;
    combineDomByClass: typeof combineDomByClass;
    inlineStyle: (style: import("csstype").Properties<0 | (string & {}), string & {}>) => string;
};
declare const tools: {
    isPC: boolean;
    isObject: typeof isObject;
    countDown: typeof countDown;
    dormancyFor: typeof dormancyFor;
    fixpx: typeof fixpx;
    setEmBase: typeof setEmBase;
};
declare const regionsDataFormat: {
    formatWheelsData: (data: {
        [key: string]: string;
    }) => {
        id: string;
        value: any;
        childs: {
            id: string;
            value: any;
            childs: {
                id: string;
                value: any;
            }[];
        }[];
    }[];
    getPositionByDefaultValue: typeof getPositionByDefaultValue;
};
declare const webAnimation: {
    onceTransitionEnd: typeof onceTransitionEnd;
    onceAnimationEnd: typeof onceAnimationEnd;
};
export { AddressModal, ResultModal, Msg, NoticeModal, Loading, Picker, validate, Message, Modal, htmlFactory, tools, regionsDataFormat, webAnimation };
