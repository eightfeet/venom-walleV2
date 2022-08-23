export declare function getPositionByDefaultValue(defaultData: any[], wheels: {
    data: any;
}[]): any[];
/** 地址数据格式化 */
export declare const formatWheelsData: (data: {
    [key: string]: string;
}) => {
    id: string;
    value: any;
    childs: {
        id: string;
        value: any;
        childs: {
            id: string;
            value: any;
        }[];
    }[];
}[];
