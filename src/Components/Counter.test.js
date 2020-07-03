import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

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

describe("Decrement btn test", () =>{
    it("decrements count by 1 when dec button is clicked", () =>{
        const wrapper = shallow(<Counter />);
        const decrementbtn = wrapper.find('button.decremnt');
        decrementbtn.simulate('click');
        const text = wrapper.find('h3').text();
        expect(text).toEqual('0');
    })
})

describe("Alert popup test", () => {
    it("checks if the alerts popup when number exceeeds 3 or below 0", () =>{
        const wrapper = shallow(<counter />);
        
    })
})