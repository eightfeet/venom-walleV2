import Message from '@eightfeet/message';
import * as CSS from 'csstype';
export type MessageStyle = { wrap?: CSS.Properties; main?: CSS.Properties;};

class Msg extends Message {
	constructor(MessageTheme){
		super({directionFrom: 'top', style: MessageTheme});
	}
    
    showMsg = (content: string) => this.create(content, null)
}

export default Msg;