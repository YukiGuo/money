function clone<T>(data: T): T {// 更新clone返回值的类型和输入值得类型一致
        return JSON.parse(JSON.stringify(data));
}
export default clone;