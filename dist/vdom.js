var vdom = (function () {
'use strict';

/**
 * 虚拟节点类
 *
 * @export
 * @class VNode
 */
var VNode = (function () {
    function VNode(tag, attr, children) {
    }
    VNode.create = function (tag, attr, children) {
        return new VNode(tag, attr, children);
    };
    Object.defineProperty(VNode.prototype, "ele", {
        get: function () {
            if (!this._ele) {
                this._ele = '';
            }
            return this._ele;
        },
        enumerable: true,
        configurable: true
    });
    return VNode;
}());

return VNode;

}());
//# sourceMappingURL=vdom.js.map
