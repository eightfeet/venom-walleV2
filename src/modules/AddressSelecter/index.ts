import Picker, { Option } from '@eightfeet/picker';
import { formatWheelsData } from '~/utils/regionsWheelsHelper';

// 格式化数据源为AddressPicker的数据结构

const regions = formatWheelsData((window as any).BY_HEALTH_REGIONS);

class AddressSelecter extends Picker {
	constructor(config: Option){

		const operationData = {
			title: '请选择省市区', // 设置标题
			wheels: [{ data: regions }],
			keyMap: { display: 'value', value: 'id', childs: 'childs' },
			...config
		};

		operationData.onConfirm = (result) => {
			const id = [];
			const name = [];
			for (let index = 0; index < result.length; index++) {
				const element = result[index];
				if (typeof element === 'string') {
					id.push(element);
					name.push(element);
				} else {
					id.push(element[operationData.keyMap.value]);
					name.push(element[operationData.keyMap.display]);
				}
			}
			
			// 为提交表单准备数据
			const triggerDom: HTMLElement = document.querySelector(config.trigger);
			triggerDom.setAttribute('data-id', id.join(','));
			triggerDom.setAttribute('data-name', name.join(','));
			triggerDom.innerText = name.join(' ');
		},

		super(operationData);
	}
}

export default AddressSelecter;