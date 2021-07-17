
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/cell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b72dAwNiVAw7li1gDpVV3u', 'cell');
// script/cell.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    colorNode: cc.Node
  },
  setState: function setState(state) {
    if (state === void 0) {
      state = 0;
    }

    this.state = state;

    if (this.state == 0) {
      this.colorNode.color = new cc.Color(255, 255, 255);
    } else {
      this.colorNode.color = new cc.Color(0, 0, 0);
    }
  },
  switchState: function switchState() {
    var state = this.state == 0 ? 1 : 0;
    this.setState(state);
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjZWxsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29sb3JOb2RlIiwiTm9kZSIsInNldFN0YXRlIiwic3RhdGUiLCJjb2xvciIsIkNvbG9yIiwic3dpdGNoU3RhdGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSztBQUROLEdBSFA7QUFRTEMsRUFBQUEsUUFSSyxvQkFRSUMsS0FSSixFQVFlO0FBQUEsUUFBWEEsS0FBVztBQUFYQSxNQUFBQSxLQUFXLEdBQUgsQ0FBRztBQUFBOztBQUNoQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7O0FBQ0EsUUFBSSxLQUFLQSxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsV0FBS0gsU0FBTCxDQUFlSSxLQUFmLEdBQXVCLElBQUlSLEVBQUUsQ0FBQ1MsS0FBUCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FBdkI7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLTCxTQUFMLENBQWVJLEtBQWYsR0FBdUIsSUFBSVIsRUFBRSxDQUFDUyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUF2QjtBQUNIO0FBQ0osR0FmSTtBQWlCTEMsRUFBQUEsV0FqQksseUJBaUJTO0FBQ1YsUUFBSUgsS0FBSyxHQUFHLEtBQUtBLEtBQUwsSUFBYyxDQUFkLEdBQWtCLENBQWxCLEdBQXNCLENBQWxDO0FBQ0EsU0FBS0QsUUFBTCxDQUFjQyxLQUFkO0FBQ0gsR0FwQkk7QUFzQkw7QUFFQTtBQUVBSSxFQUFBQSxLQTFCSyxtQkEwQkcsQ0FFUCxDQTVCSSxDQThCTDs7QUE5QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY29sb3JOb2RlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGUgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvck5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvck5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzd2l0Y2hTdGF0ZSgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlID09IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=