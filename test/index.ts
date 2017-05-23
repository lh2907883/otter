import VNode from '../src/vnode';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('VNode', () => {
    it('create instance successful', () => {
        expect(VNode.create()).to.be.an.instanceof(VNode);
    });
});