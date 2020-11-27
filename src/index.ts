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

import Loading from '@eightfeet/loading';
import Picker, { Option, Wheels, KeyMap } from '@eightfeet/picker';
import validate from './validate';
import Message from '@eightfeet/message';
import Modal from '@eightfeet/modal';


// import { createInlineStyles } from './inlineStyle';

const keyMap: KeyMap = { display: 'date', value: 'val' };

const wheels: Wheels<{
    display: 'date',
    value: 'val',
}> =  [{
    data: [
        { val: 0, date: '周日' },
        { val: 1, date: '周一' },
        { val: 2, date: '周二' },
        { val: 3, date: '周三' },
        { val: 4, date: '周四' },
        { val: 5, date: '周五' },
        { val: 6, date: '周六' },
    ]
},
{
    data: [
        { val: 8, date: '08:00' },
        { val: 9, date: '09:00' },
        { val: 10, date: '10:00' },
        { val: 11, date: '11:00' },
        { val: 12, date: '12:00' },
        { val: 13, date: '13:00' },
        { val: 14, date: '14:00' }
    ]
}];




const Opt: Option = {
    id: 'mobileId',
    wheels,
    trigger: '#btna',
    keyMap,
    cancelBtnText: 'cancel',
    confirmBtnText: 'ensure',
    onConfirm: function (data) {
        console.log(data);
    },
    onCancel: function (data) {
        console.log(data);
    },
    transitionEnd: function (data) {
        console.log(data);
    },
    onShow: function (e) {},
    onHide: function (e) {
        console.log(e);
    },
    onChange: function (data) {
        console.log(data);
    },
    title: 'json类型',
    style: {
        wrap: {
            color: '#444',
        },
        mask: {
            height: '50em',
        },
        
    },
}

const test = new Picker(Opt);
const error = validate({
    VPhone_A: 'd2312123123',
    VPhone_B: '12312123123',
    VPhone_D: '12312123123',
    VPhone_E: 's2312123123'
}, true)

alert(JSON.stringify(error))

export { Loading, Picker, validate, Message, Modal };
