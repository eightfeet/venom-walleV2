import Message from '@eightfeet/message';
import * as CSS from 'csstype';
export declare type MessageStyle = {
    wrap?: CSS.Properties;
    main?: CSS.Properties;
};
declare class Msg extends Message {
    constructor(MessageTheme: any);
    showMsg: (content: string) => Promise<void>;
}
export default Msg;
