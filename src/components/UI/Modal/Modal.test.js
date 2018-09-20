import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal'
import Backdrop from '../Backdrop/Backdrop';

configure({adapter : new Adapter()});

describe('<Modal />',()=>{
    it('renders without crashing', () => {
        shallow(<Modal />);
      });
      
    it('should render backdrop',()=>{
        const wrapper = shallow(<Modal />);
        wrapper.setProps({show: true})
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });
});