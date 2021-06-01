import Modal, {
	createInlineStyles as inlineStyle} from "@eightfeet/modal";
import { Option } from '@eightfeet/picker';
import Msg from "./../Msg";
import { getIdDom } from "~/utils/htmlFactory";
import validate from "~/validate";
import AddressPicker from "./../AddressSelecter";
import { dormancyFor, countDown } from "~/utils/tools";
import s from "./address.scss";
import { AddressModalParameters, cardIdRequestEnum } from "./Address";
import info from './infoNode';

/**
 *
 * 地址弹窗
 * @class AddressModal
 * @extends {Modal}
 */
class AddressModal extends Modal {
  Msg: any;
  playerPhone: any;
  receiverInfo: any;
  cardIdRequest: any;
  AddressPicker: any;
  formStyle: any;
  showNotebox: boolean;
  checkVerificationCode: any;
  regionsTheme: any;
  addressTrigger: string;
  readyFillBack: boolean;
  AddressPickerConfig: Option;
  id: string;
  /**
   * Creates an instance of AddressModal.
   * @param {*} config
   * @memberof AddressModal
   */
  constructor({
	  AddressModalTheme: {
		  // content,
		  contentTop,
		  contentBottom,
		  submit,
		  header,
		  article,
		  footer,
		  close,
		  regions,
		  row,
		  subTitle,
		  label,
		  input,
		  textarea,
		  codeButton,
		  codeButtonDisable,
		  notice,
		  noticeIcon,
		  noticeArrow,
		  ...other
	  },
	  MessageTheme,
	  playerPhone,
	  outerFrameId,
	  receiverInfo,
	  cardIdRequest,
	  AddressPickerConfig,
	  checkVerificationCode,
	  ...more
  }: AddressModalParameters) {
	  super({
		  closable: false,
		  parentId: outerFrameId,
		  style: other || {},
		  ...more
	  });

	  const stamp = new Date().getTime();

	  this.Msg = new Msg(MessageTheme, outerFrameId);
	  this.playerPhone = playerPhone;
	  this.receiverInfo = receiverInfo || {};
	  this.cardIdRequest = cardIdRequest || cardIdRequestEnum.HideCardId;
	  this.AddressPicker = null;
	  this.formStyle = {
		  // content,
		  contentTop,
		  contentBottom,
		  submit,
		  header,
		  article,
		  footer,
		  close,
		  row,
		  subTitle,
		  label,
		  input,
		  textarea,
		  codeButton,
		  codeButtonDisable,
		  notice,
		  noticeIcon,
		  noticeArrow
	  };
	  this.showNotebox = false;
	  this.checkVerificationCode = checkVerificationCode || null;
	  this.regionsTheme = regions;
	  this.id = more.id;
	  this.addressTrigger = `modal${stamp}-${window.Math.floor(
		  window.Math.random() * 100
	  )}`;
	  this.readyFillBack = true;
	  this.AddressPickerConfig = AddressPickerConfig;
  }

  /**
   *
   * @param { Object } params
   * params = {playerPhone, receiverName, receiverPhone, cardIdRequest, region, regionName, address, idCard}
   * @memberof AddressModal
   */
  updateParams = (params) => {
	  if (Object.prototype.toString.call(params) !== "[object Object]") {
		  return;
	  }
	  const {
		  playerPhone,
		  receiverName,
		  receiverPhone,
		  cardIdRequest,
		  region,
		  regionName,
		  address,
		  idCard
	  } = params;
	  if (playerPhone) {
		  this.playerPhone = playerPhone;
	  }
	  if (cardIdRequest) {
		  this.cardIdRequest = cardIdRequest;
	  }
	  if (idCard) {
		  this.receiverInfo.idCard = idCard;
	  }
	  if (address) {
		  this.receiverInfo.address = address;
	  }
	  if (regionName) {
		  this.receiverInfo.regionName = regionName;
	  }
	  if (region) {
		  this.receiverInfo.region = region;
	  }
	  if (receiverPhone) {
		  this.receiverInfo.receiverPhone = receiverPhone;
	  }
	  if (receiverName) {
		  this.receiverInfo.receiverName = receiverName;
	  }
  };

  /**
   *
   * 显示地址模块弹窗
   * @param {Function} submit 提交方法
   * @param {Function} cancel 取消方法
   * @param {Function} success 保存成功回调
   * @returns
   * @memberof AddressModal
   */
  showModal = (submit, cancel, success) => {
	  const { id } = this.state;
	  const modalElement = getIdDom(id);
	  const {
		  subTitle,
		  contentTop,
		  contentBottom,
		  header,
		  article,
		  footer,
		  close,
		  row,
		  label,
		  input,
		  textarea,
		  codeButton,
		  codeButtonDisable,
		  notice,
		  noticeIcon
	  } = this.formStyle;

	  const rowStyle = inlineStyle(row);
	  const contentTopStyle = inlineStyle(contentTop);
	  const contentBottomStyle = inlineStyle(contentBottom);
	  const inputStyle = inlineStyle(input);
	  const closeStyle = inlineStyle(close);
	  const headerStyle = inlineStyle(header);
	  const articleStyle = inlineStyle(article);
	  const footerStyle = inlineStyle(footer);
	  const labelStyle = inlineStyle(label);
	  const textareaStyle = inlineStyle(textarea);
	  const submitStyle = inlineStyle(this.formStyle.submit);
	  const codeButtonStyle = inlineStyle(codeButton);
	  const codeButtonDisableStyle = inlineStyle(codeButtonDisable);
	  const noticeStyle = inlineStyle(notice);
	  const noticeIconStyle = inlineStyle(noticeIcon);
	  const subTitleStyle = inlineStyle(subTitle);

	  const playerDom = `
			${
		this.playerPhone
			? `
				<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
					<label class="${s.label} ${id}_label" ${labelStyle ? `style="${labelStyle}"` : ""}>手机：</label>
					<div class="${s.inp}" style="line-height:2.4em; color: inherit;">${this.playerPhone}</div>
				</div>
				`
			: ""
	  }
			${
				this.cardIdRequest === cardIdRequestEnum.HideCardId
					? ""
					: `
					<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
						<label class="${s.label} ${id}_label" ${labelStyle ? `style="${labelStyle}"` : ""}>身份证：</label>
						<input placeholder="身份证号码" maxlength="18" class="${s.idcode} ${s.inpelement} ${id}_input" ${inputStyle ? `style="${inputStyle}"` : ""} type="text" />
						<span class="${s.note} address__note" ${noticeIconStyle ? `style="${noticeIconStyle}"` : ""}>
							${info}
						</span>
						<div class="${s.noteBox}" style="display:none; ${noticeStyle}">
							根据国家税务总局相关规定，企业向消费者赠送礼品，需要依法缴纳个人所得税，因此请您配合提供真实身份信息，身份证信息将严格保管，仅用于纳税使用，感谢您的理解。
						</div>
					</div>
					`
			}
			${
				this.playerPhone && typeof this.checkVerificationCode === "function"
					? `<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
						<label class="${s.label}" ${labelStyle ? `style="${labelStyle}"` : ""}>验证码：</label>
						<input placeholder="手机验证码" class="${s.verificationvode} ${s.inpelement} ${id}_input" type="text" ${inputStyle ? `style="${inputStyle}"` : ""} />
						<div class="${s.code} ${s.inphalfspace} address__verification__code__buttons">
							<button class="${s.btncode} address__check__phone" ${codeButtonStyle ? `style="${codeButtonStyle}"` : ""}>获取验证码</button>
								<button class="${s.btncodedisable} address__check__phone__disable" style="${codeButtonDisableStyle ? codeButtonDisableStyle : ""}; display:none"></button>
							</div>
						</div>
						`
					: ""
			}
		`;

	  if (!modalElement) {
		  return this.create(
			  {
				  article: `
				  <div class="${s.addressBox} address__content">
				  	${contentTopStyle ? `<div class="${s.top} ${id}_top" style="${contentTopStyle}">&nbsp;</div>` : "" }
					${contentBottomStyle ? `<div class="${s.bottom} ${id}_bottom" style="${contentBottomStyle}">&nbsp;</div>` : "" }
					<div class="${s.cancel} address_close ${id}_close" ${closeStyle ? `style="${closeStyle}"` : ""}>&nbsp;</div>
					<div class="${s.formBox}  address__formbox ${id}_formbox">
						<h3 ${headerStyle ? `style="${headerStyle}"` : ""} class="${id}_header">填写地址</h3>
						<div ${articleStyle ? `style="${articleStyle}"` : ""}  class="${id}_article">
							<div class="address__top ${id}_player">${playerDom}</div>
							<h4 ${subTitleStyle ? `style="${subTitleStyle}"` : ""}  class="${id}_subtitle">收货地址(必填)</h4>
							<div>
								<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
									<label class="${s.label} ${id}_label" ${labelStyle ? `style="${labelStyle}"` : ""}>收货人：</label>
									<input maxlength="30" placeholder="收货人姓名" class="${s.receiver} ${s.inpelement} ${id}_input" type="text" ${inputStyle ? `style="${inputStyle}"` : ""} />
								</div>
								<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
									<label class="${s.label} ${id}_label" ${labelStyle ? `style="${labelStyle}"` : ""}>收货电话：</label>
									<input placeholder="收货人手机" class="${s.phone} ${s.inpelement} ${id}_input" type="tel" maxlength="11" ${inputStyle ? `style="${inputStyle}"` : ""} />
								</div>
								<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
									<label class="${s.label} ${id}_label" ${labelStyle ? `style="${labelStyle}"` : ""}>地址：</label>
									<button id="${this.addressTrigger}" class="${s.trigger} address__picker__button ${id}_input" ${inputStyle ? `style="${inputStyle}"` : "" } >请选择收货省市区/县</button>
								</div>
								<div class="${s.item} ${id}_row" ${rowStyle ? `style="${rowStyle}"` : ""}>
									<label class="${s.label} ${id}_label" ${labelStyle ? `style="${labelStyle}"` : ""}>&nbsp;</label>
									<textarea maxlength="250"  placeholder="详细地址" class="${s.inpelement} ${s.address} ${id}_textarea" ${textareaStyle ? `style="${textareaStyle}"` : ""} ></textarea>
								</div>
							</div>
						</div>
						<div class="${s.button} ${id}_footer" ${footerStyle ? `style="${footerStyle}"` : ""}>
							<button class="${s.submit} address_submit ${id}_submit" ${submitStyle ? `style="${submitStyle}"` : ""}>确定</button>
						</div>
					</div>
				</div>
				`
			  },
			  true
		  )
			  .then(() => dormancyFor(500))
			  .then(() => {
				  if (this.readyFillBack) {
					  this.dataFillback();
				  }
			  })
			  .then(() => this.handleDom(submit, cancel, success));
	  }

	  modalElement.querySelector(".address__top").innerHTML = playerDom;
	  return this.show()
		  .then(() => {
			  if (this.readyFillBack) {
				  this.dataFillback();
			  }
		  })
		  .then(() => this.handleDom(submit, cancel, success));
  };

  /**
   *
   * 以非移除方式隐藏弹窗
   * @returns
   * @memberof AddressModal
   */
  hideModal = () => {
	  this.Msg.hideMsg();
	  return this.hide(true);
  };

  /**
   *
   * 操作弹窗Dom
   * @param {Function} submit
   * @param {Function} cancel
   * @memberof AddressModal
   */
  handleDom = (submit, cancel, success) => {
	  const { id } = this.state;
	  const modalElement = getIdDom(id);
	  const submitNode: HTMLDivElement = modalElement.querySelector(
		  `.${s.submit}`
	  );
	  const cancelNode: HTMLDivElement = modalElement.querySelector(
		  `.${s.cancel}`
	  );

	  submitNode.onclick = () => this.handleSubmit(submit, success);
	  cancelNode.onclick = () => {
		  cancel && cancel();
		  this.hideModal();
	  };
	  if (this.cardIdRequest !== cardIdRequestEnum.HideCardId) {
		  const noteDom: HTMLDivElement = modalElement.querySelector(`.${s.note}`);
		  const noteBoxDom: HTMLDivElement = modalElement.querySelector(
			  `.${s.noteBox}`
		  );
		  if (noteDom) {
			  const noteNode: HTMLElement = modalElement.querySelector(`.${s.note}`);
			  noteNode.onclick = (e) => {
				  e.stopPropagation();
				  if (this.showNotebox === false) {
					  this.showNotebox = true;
					  noteBoxDom.style.display = "block";
				  } else {
					  this.showNotebox = false;
					  noteBoxDom.style.display = "none";
				  }
			  };
		  }
		  if (noteBoxDom) {
			  const addressBoxNode: HTMLElement = modalElement.querySelector(
				  `.${s.addressBox}`
			  );
			  addressBoxNode.onclick = () => {
				  noteBoxDom.style.display = "none";
			  };
		  }
	  }

	  if (this.playerPhone && typeof this.checkVerificationCode === "function") {
		  const btncode: HTMLDivElement = modalElement.querySelector(
			  `.${s.btncode}`
		  );
		  const btncodedisable: HTMLDivElement = modalElement.querySelector(
			  `.${s.btncodedisable}`
		  );
		  let start = false;
		  btncode.onclick = () => {
			  if (start) return;
			  start = true;
			  this.checkVerificationCode().then(() => {
				  start = false;
				  btncode.style.display = "none";
				  btncodedisable.style.display = "block";
				  countDown(60, (count) => {
					  btncodedisable.innerHTML = `${count}秒后重试`;
					  if (count === 0) {
						  btncode.style.display = "block";
						  btncodedisable.style.display = "none";
					  }
				  });
			  });
		  };
	  }

	  // s.note s.noteBox
  };

  /**
   *
   * 数据回填
   * @memberof AddressModal
   */
  dataFillback = () => {
	  if (!this.AddressPicker) {
		  this.AddressPicker = new AddressPicker({
			  ...this.AddressPickerConfig,
			  id: `addresspicker_${this.id}`,
			  trigger: `#${this.addressTrigger}`,
			  style: this.regionsTheme
		  });
	  }
	  const { id } = this.state;
	  const modalElement = getIdDom(id);
	  const {
		  idCard,
		  receiverName,
		  receiverPhone,
		  region,
		  regionName,
		  address
	  } = this.receiverInfo;

	  const idCardDom: HTMLFormElement = modalElement.querySelector(
		  `.${s.idcode}`
	  );
	  if (idCard && idCardDom) {
		  idCardDom.value = idCard;
	  }
	  if (receiverName) {
		  const receiverNameNode: HTMLFormElement = modalElement.querySelector(
			  `.${s.receiver}`
		  );
		  receiverNameNode.value = receiverName;
	  }
	  if (receiverPhone) {
		  const receiverPhoneNode: HTMLFormElement = modalElement.querySelector(
			  `.${s.phone}`
		  );
		  receiverPhoneNode.value = receiverPhone;
	  }
	  if (address) {
		  const addressNode: HTMLFormElement = modalElement.querySelector(
			  `.${s.address}`
		  );
		  addressNode.value = address;
	  }
	  if (region && regionName) {
		  Promise.resolve()
			  .then(() => dormancyFor(100))
			  .then(() => {
				  const trigger = modalElement.querySelector(`.${s.trigger}`);
				  trigger.setAttribute("data-id", region.join(","));
				  trigger.setAttribute("data-name", regionName.join(","));
				  console.log("region", region);
				  this.AddressPicker.updatePicker(region, () => {});
				  trigger.innerHTML = regionName.join(" ");
			  });
	  }
	  this.readyFillBack = false;
  };

  /**
   * 提交与提交回调
   * 填写收货地址时是否验证身份证:
   * this.cardIdRequest = 1 隐藏身份证，2 验证身份证，3 身份证为空时不验证有填写时验证，4 不验证身份证
   * @param {*} submit
   * @returns
   * @memberof AddressModal
   */
  handleSubmit = (submit, success) => {
	  const { id } = this.state;
	  const modalElement = getIdDom(id);
	  const idcodeNode: HTMLFormElement = modalElement.querySelector(
		  `.${s.idcode}`
	  );
	  const idcode = idcodeNode?.value;
	  const receiverNode: HTMLFormElement = modalElement.querySelector(
		  `.${s.receiver}`
	  );
	  const receiver = receiverNode.value;
	  const phoneNode: HTMLFormElement = modalElement.querySelector(
		  `.${s.phone}`
	  );
	  const phone = phoneNode.value;

	  const regions = modalElement
		  .querySelector(`.${s.trigger}`)
		  .getAttribute("data-id");
	  const regionsName = modalElement
		  .querySelector(`.${s.trigger}`)
		  .getAttribute("data-name");
	  const addressNode: HTMLFormElement = modalElement.querySelector(
		  `.${s.address}`
	  );
	  const address = addressNode.value;

	  const verificationvodeDom: any = modalElement.querySelector(
		  `.${s.verificationvode}`
	  );
	  const verificationvode = verificationvodeDom
		  ? verificationvodeDom.value
		  : undefined;

	  const data: any = { receiver, phone, regions, regionsName, address };

	  if (idcode) {
		  data.idcode = idcode;
	  }

	  let validateData: any = {
		  VName: receiver,
		  VPhone: phone,
		  VRequire_trigger: [regions, "请选择省市区"],
		  VRequire_address: [address, "请输入详细地址"]
	  };

	  if (verificationvodeDom) {
		  data.verificationvode = verificationvode;
		  validateData = {
			  VRequire_verificationvode: [verificationvode, "请输入正确验证码", 4],
			  ...validateData
		  };
	  }

	  if (this.cardIdRequest === cardIdRequestEnum.CheckCardId) {
		  validateData = {
			  VIdCard: idcode,
			  ...validateData
		  };
	  }

	  if (this.cardIdRequest === cardIdRequestEnum.CheckInputCardId) {
		  if (idcode) {
			  validateData = {
				  VIdCard: idcode,
				  ...validateData
			  };
		  }
	  }

	  const error = validate(validateData);

	  if (error) {
		  this.Msg.showMsg(error);
		  return;
	  }

	  if (submit) {
		  Promise.resolve()
			  .then(() => submit(data))
			  .then((res) => {
				  success && success(res, data);
				  return res;
			  });
	  }
	  this.hideModal();
  };
}

export default AddressModal;
