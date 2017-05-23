/**
 * 虚拟节点类
 * 
 * @export
 * @class VNode
 */
export default class VNode{
    constructor(
        tag?: string,
        attr?: object,
        children?: VNode[] | string
    ) {
        
    }

    static create (
        tag?: string,
        attr?: object,
        children?: VNode[] | string
    ) {
        return new VNode(tag, attr, children);
    }

    private _ele: string;
    get ele(){
        if(!this._ele){
            this._ele = '';
        }
        return this._ele;
    }
}