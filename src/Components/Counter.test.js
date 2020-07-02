import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("Counter comp test", () =>{

    it("increments count by 1 when inc button is clicked", () => {
        const wrapper = shallow(<Counter />);
        const incrementbtn = wrapper.find('button.increment');
        incrementbtn.simulate('click');
        incrementbtn.simulate('click');
        incrementbtn.simulate('click');
        incrementbtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect(text).toEqual('0');
    })
})