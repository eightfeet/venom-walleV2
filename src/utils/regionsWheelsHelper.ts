export function getPositionByDefaultValue(
	defaultData: any[],
	wheels: { data: any }[]
) {
	const defaultValue = defaultData || [];
	if (!Array.isArray(defaultValue) || defaultValue.length < 1) {
		return;
	}
	const data = wheels[0].data;
	const position = [];
	for (let indexP = 0; indexP < data.length; indexP++) {
		const elementP = data[indexP];
		const elementPChilds = elementP.childs;
		if (defaultValue[0] === elementP.id) {
			position.push(indexP);
		}
		for (let indexCi = 0; indexCi < elementPChilds.length; indexCi++) {
			const elementCi = elementPChilds[indexCi];
			const elementCiChilds = elementCi.childs;
			if (defaultValue[1] === elementCi.id) {
				position.push(indexCi);
			}
			for (let indexC = 0; indexC < elementCiChilds.length; indexC++) {
				const elementC = elementCiChilds[indexC];
				if (defaultValue[2] === elementC.id) {
					position.push(indexC);
					break;
				}
			}
		}
	}
	return position;
}

/** 地址数据格式化 */
export const formatWheelsData = (data: {
	[key: string]: string
}) => {
	const provinces = data['00'];
	const result = Object.keys(provinces).map(rootKey => {
		const province = provinces[rootKey];
		return {
			id: rootKey,
			value: province,
			childs: Object.keys(data[rootKey]).map(cityKey => {
				const city = data[rootKey][cityKey];
				return {
					id: cityKey,
					value: city,
					childs: Object.keys(data[cityKey] || []).map(districtKey => {
						const district = data[cityKey][districtKey];
						return {
							id: districtKey,
							value: district
						};
					})
				};
			})
		};
	});
	return result;
};

