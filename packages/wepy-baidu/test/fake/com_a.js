/**
 * Tencent is pleased to support the open source community by making WePY available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * 
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

let assert = require('assert');

let wepy = require('../../lib/wepy.js').default;

let ComAA = require('./com_a_a');


function Car() {

}
Car.prototype.run = function () {}

module.exports = class Com extends wepy.component {


    constructor () {
        super();
        this.data = {
            'a': 1,
            'num': 10,
        };
        this.computed = {
            computedNum: function () {
                return this.num * 2;
            }
        };
        this.methods = {
            'tap': function (a, b, c, evt) {
                assert.strictEqual(evt.name, 'test_com_tap', 'com tap triggered');
                assert.strictEqual(a, 'a', 'com tap triggered with addtional params');
                assert.strictEqual(b, 'b', 'com tap triggered with addtional params');
                assert.strictEqual(c, 'c', 'com tap triggered with addtional params');
            }
        };

        this.components = {
            comaa: ComAA
        }

        this.props = {
            comprop1: String,
            comprop2: [Number, String, Boolean],
            comprop3: {
                coerce: function (v) {
                    return +v;
                },
                default: 50
            },
            comprop4: Object,
            comprop5: {
                default: 60
            },
            onceProp: {
                default: 70
            },
            staticDefault: {
                default: 'static'
            },
            funcProp: {
                default: function () {
                    return 'func';
                }
            },
            staticAndCoerce: {
                default: 1,
                coerce: function (v) {
                    return v + 1;
                }
            },

            syncProp: {
                default: 80
            },
            twoWayProp: {
                default: 70,
                twoWay: true
            },
            comprop10: {
                type: [Boolean, Function, Object, Array, Car],
                coerce: function (v) {
                    return v + 1;
                },
                default: function () {
                    return 50
                }
            },
        };

        this.$props = {
            comaa: { 'v-bind:comaaprop.sync': 'twoWayProp' }
        };
    }

    customMethod () {

    }
}