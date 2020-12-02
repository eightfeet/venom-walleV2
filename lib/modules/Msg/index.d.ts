import Message, { MessageParameters } from '@eightfeet/message';
export declare type MessageStyle = MessageParameters['style'];
declare class Msg extends Message {
    constructor(MessageTheme: any, outerFrameId: any);
    showMsg: (content: string) => Promise<any>;
    hideMsg: () => void;
}
export default Msg;
