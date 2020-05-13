import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Accordion from './Accordion'
import AccordionData from './Accordion-data';

configure({ adapter: new Adapter() });

describe(`Accordion Snapshot Tests`, () => {
  it('Renders empty li when sections is not supplied', () => {
    expect(
      renderer.create(<Accordion />).toJSON()
    ).toMatchSnapshot()
  });

  it('Renders no sections as active by default', () => {
    expect(
      renderer.create(<Accordion sections={AccordionData.sections} />).toJSON()
    ).toMatchSnapshot()
  });

  it('Component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={AccordionData.sections} />)
    wrapper.find('button').at(0).simulate('click')
    expect(wrapper.text().includes('Lorem ipsum')).toBe(true);
  });

  it('Component only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={AccordionData.sections} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')

    expect(wrapper.text().includes('Lorem ipsum')).toBe(false);
    expect(wrapper.text().includes('Cupiditate')).toBe(false);
    expect(wrapper.text().includes('Animi')).toBe(true);
  });
})
