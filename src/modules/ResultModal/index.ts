import Modal, { createInlineStyles as inlineStyle } from "@eightfeet/modal";
import { PrizesItem } from "~/types/prizes";
import s from "./result.scss";
import { ResultModalParameters } from './ResultModal';
class ResultModal extends Modal {
	modalTitle: any;
	submitText: any;
	submitAddressText: any;
	onEnsure: any;
	theme: {
		modalTitle: any;
		prizeAlias: any;
		prizeName: any;
		awardMsg: any;
		prizeImg: any;
		memo: any;
		contentTop: any;
		contentBottom: any;
		submit: any;
		header: any;
		article: any;
		footer: any;
		contentWrap: any;
	};
	constructor({
		style: {
			prizeAlias,
			prizeName,
			awardMsg,
			prizeImg,
			memo,
			contentTop,
			contentBottom,
			submit,
			header,
			article,
			footer,
			contentWrap,
			...other
		},
		modalTitle,
		outerFrameId,
		onCancel,
		submitText,
		onEnsure,
		submitAddressText,
		animation,
		...more
	}: ResultModalParameters) {
		super({ style: other, onCancel, parentId: outerFrameId, animation, ...more });

		this.modalTitle = modalTitle || null;
		this.submitText = submitText || "确定";
		this.submitAddressText = submitAddressText || "去填写地址";
		this.onEnsure = onEnsure || null;

		this.theme = {
			contentWrap,
			modalTitle: other.modalTitle,
			prizeAlias,
			prizeName,
			awardMsg,
			prizeImg,
			memo,
			contentTop,
			contentBottom,
			submit,
			header,
			article,
			footer
		};
	}

	showModal = (prize: PrizesItem) => {
		// state 来自父级
		const { id } = this.state;
		let modalElement = document.getElementById(id);
		const {
			contentWrap,
			modalTitle,
			prizeAlias,
			prizeName,
			awardMsg,
			prizeImg,
			memo,
			contentTop,
			contentBottom,
			submit,
			header,
			article,
			footer
		} = this.theme;
		const contentWrapStyle = inlineStyle(contentWrap);
		const modalTitleStyle = inlineStyle(modalTitle);
		const prizeAliasStyle = inlineStyle(prizeAlias);
		const prizeNameStyle = inlineStyle(prizeName);
		const awardMsgStyle = inlineStyle(awardMsg);
		const prizeImgStyle = inlineStyle(prizeImg);
		const memoStyle = inlineStyle(memo);
		const contentTopStyle = inlineStyle(contentTop);
		const contentBottomStyle = inlineStyle(contentBottom);
		const submitStyle = inlineStyle(submit);
		const headerStyle = inlineStyle(header);
		const articleStyle = inlineStyle(article);
		const footerStyle = inlineStyle(footer);
		const gamedom = `
			${
				contentBottomStyle
					? `<div class="${s.bottom} ${id}_contentbottom" style="${contentBottomStyle}">&nbsp;</div>`
					: ""
			}
			${
				contentTopStyle
					? `<div class="${s.top} ${id}_contenttop" style="${contentTopStyle}">&nbsp;</div>`
					: ""
			}
			<div ${headerStyle ? `style="${headerStyle}"` : ""} class="${id}_header">
				${
					this.modalTitle
						? `<div ${modalTitleStyle ? `style="${modalTitleStyle}"` : ""}  class="${id}_modaltitle">${
							this.modalTitle
						}</div>`
						: ""
				}
			</div>
			<div ${articleStyle ? `style="${articleStyle}"` : ""} class="${id}_article">
				<div ${prizeNameStyle ? `style="${prizeNameStyle}"` : ""}  class="${id}_prizename">${
					prize.prizeName || ""
				}</div>
				${
					prizeAliasStyle
						? `<div style="${prizeAliasStyle}"  class="${id}_prizealias">${prize.prizeAlias || ""}</div>`
						: ""
				}
				<div ${awardMsgStyle ? `style="${awardMsgStyle}"` : ""} class="${id}_awardmsg">${
					prize.awardMsg || ""
				}</div>
				<img ${prizeImgStyle ? `style="${prizeImgStyle}"` : ""} src="${
					prize.prizeImg
				}" class="${id}_prizeimg" />
				<div ${memoStyle ? `style="${memoStyle}"` : ""} class="${id}_memo">${prize.memo || ""}</div>
			</div>
			<div ${footerStyle ? `style="${footerStyle}"` : ""} class="${id}_footer">
				<button class="${s.button} ${id}_submit" ${submitStyle ? `style="${submitStyle}"` : ""}>${
					prize.receiveType === 2 ? this.submitAddressText : this.submitText
				}</button>
			</div>
		`;

		if (!modalElement) {
			return this.create(
				{
					article: `<div class="${s.mainid}  ${id}_contentwrap" style="${contentWrapStyle || ''}">
					${gamedom}
				</div>`
				},
				true
			).then(
				() =>
					new Promise((resolve) => {
						window.setTimeout(() => {
							modalElement = document.getElementById(id);
							const buttonNode: HTMLElement = modalElement.querySelector(`.${s.button}`);
							buttonNode.onclick = () => {
								this.hideModal();
								this.onEnsure && this.onEnsure(prize);
								resolve(prize);
							};
						}, 500);
					})
			);
		}
		const mainElement = modalElement.querySelector(`.${s.mainid}`);
		mainElement.innerHTML = "";
		return this.show().then(
			() =>
				new Promise((resolve) => {
					mainElement.innerHTML = gamedom;
					const buttonNode: HTMLElement = modalElement.querySelector(`.${s.button}`);
					window.setTimeout(() => {
						buttonNode.onclick = () => {
							this.hideModal();
							this.onEnsure && this.onEnsure(prize);
							resolve(prize);
						};
					}, 500);
				})
		);
	};

	hideModal = () => this.hide(true);
}

export default ResultModal;
