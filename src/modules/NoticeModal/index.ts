import Modal, { createInlineStyles as inlineStyle } from '@eightfeet/modal';
import { NoticeModalStyle } from './NoticeModal';
import s from './NoticeModal.scss';

class NoticeModal extends Modal {
	theme: {
		contentTop: any;
		contentBottom: any;
		submit: any;
		modalTitle: any;
		header: any;
		article: any;
		footer: any;
		contentWrap: any;
	};
	constructor(
		{
			contentTop,
			contentBottom,
			submit,
			header,
			article,
			footer,
			modalTitle,
			contentWrap,
			...other
		}: NoticeModalStyle,
		outerFrameId: string
	) {
		super({ style: other, parentId: outerFrameId });
		this.theme = {
			contentWrap,
			contentTop,
			contentBottom,
			submit,
			modalTitle,
			header,
			article,
			footer
		};
	}

	showModal = ({ title, content, footer }, onCancel) => {
		// state 来自父级
		const { id } = this.state;
		// 配置弹窗回调
		if (onCancel && typeof onCancel === 'function') {
			this.state.onCancel = onCancel;
		} else {
			this.state.onCancel = null;
		}

		let modalElement = document.getElementById(id);
		const {
			contentWrap,
			contentTop,
			contentBottom,
			submit,
			modalTitle,
			header,
			article
		} = this.theme;
		const contentWrapStyle = inlineStyle(contentWrap);
		const contentTopStyle = inlineStyle(contentTop);
		const contentBottomStyle = inlineStyle(contentBottom);
		const modalTitleStyle = inlineStyle(modalTitle);
		const submitStyle = inlineStyle(submit);
		const headerStyle = inlineStyle(header);
		const articleStyle = inlineStyle(article);
		const footerStyle = inlineStyle(this.theme.footer);
		const gamedom = `
			${contentBottomStyle ? `<div class="${s.bottom} ${id}_contentbottom" style="${contentBottomStyle}">&nbsp;</div>` : '' }
			${contentTopStyle ? `<div class="${s.top} ${id}_contenttop" style="${contentTopStyle}">&nbsp;</div>` : '' }
			<div id="${id}_header" ${headerStyle ? `style="${headerStyle}"` : ''} class="${id}_header">
				${title ? `<div ${ modalTitleStyle ? `style="${modalTitleStyle}"` : '' }  class="${id}_modaltitle">${title}</div>` : '' }
			</div>
			<div id="${id}_article" ${articleStyle ? `style="${articleStyle}"` : ''} class="${id}_article"> ${content || ''} </div>
			<div id="${id}_footer" ${footerStyle ? `style="${footerStyle}"` : ''} class="${id}_footer">
				${
					footer
						? footer
						: `<button class="${s.button} ${id}_submit" ${
							submitStyle ? `style="${submitStyle}"` : ''
						}>确定</button>`
				}
			</div>
		`;

		if (!modalElement) {
			return this.create(
				{article:
					`<div class="${s.mainid} successmodal__content ${id}_contentwrap" style="${contentWrapStyle || ''}">
						${gamedom}
					</div>`
				},
				true
			).then(
				() =>
					new Promise<void>((resolve) => {
						modalElement = document.getElementById(id);
						const button: HTMLDivElement = modalElement.querySelector(
							`.${s.button}`
						);
						if (!button) {
							resolve();
							return;
						}
						window.setTimeout(() => {
							button.onclick = () => {
								this.hideModal();
								resolve();
							};
						}, 500);
					})
			);
		}
		const mainElement = modalElement.querySelector(`.${s.mainid}`);
		mainElement.innerHTML = '';
		return this.show().then(
			() =>
				new Promise<void>((resolve) => {
					mainElement.innerHTML = gamedom;
					const button = mainElement.querySelector(`.${s.button}`);
					if (!button) {
						resolve();
						return;
					}
					window.setTimeout(() => {
						const buttonNode: HTMLDivElement = modalElement.querySelector(
							`.${s.button}`
						);
						buttonNode.onclick = () => {
							this.hideModal();
							resolve();
						};
					}, 500);
				})
		);
	};

	hideModal = () => this.hide(true);
}

export default NoticeModal;
