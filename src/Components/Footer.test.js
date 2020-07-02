import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('Footer comp test', () =>{
    it('looks for h3 in footer', () =>{
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3').text();
       expect(text).toEqual('0');
    })
    
})