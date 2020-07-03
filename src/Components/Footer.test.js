import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('Footer comp test', () =>{
    it('looks for h3 in footer', () =>{
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3').text();
       expect(text).toEqual('Racecar Backwards Is Still Racecar');
    })
    
})