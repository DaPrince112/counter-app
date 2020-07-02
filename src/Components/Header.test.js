import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('Header comp test', () =>{
    it('looks for h1 in footer', () =>{
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('0');
    })
    
})