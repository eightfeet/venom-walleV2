import Message from '@eightfeet/message';
declare class Msg extends Message {
    constructor(MessageTheme: any, outerFrameId: any);
    showMsg: (content: string) => Promise<any>;
    hideMsg: () => void;
}
export default Msg;
