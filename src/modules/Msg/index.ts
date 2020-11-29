import Message, {MessageParameters} from '@eightfeet/message';
export type MessageStyle = MessageParameters['style'];

class Msg extends Message {
	constructor(MessageTheme, outerFrameId){
		super({directionFrom: 'top', style: MessageTheme, parentId: outerFrameId});
	}
    
    showMsg = (content: string) => this.create(content, null, true)
    
	hideMsg = () => {
		try {
			this.hide(null);
		} catch (error) {
			console.log(error);
		}
	}
}

export default Msg;