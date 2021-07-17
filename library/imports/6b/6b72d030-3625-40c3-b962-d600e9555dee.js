"use strict";
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