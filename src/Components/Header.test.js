import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Header comp test', () =>{
    it('looks for h1 in header', () =>{
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Counter App');
    })
    
})