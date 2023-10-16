/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-unsafe-member-access */
/* eslint-disable  @typescript-eslint/no-unsafe-call */
import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

import IMInput from './index';

const onKeyPress = jest.fn();
const onChange = jest.fn();
const onBlur = jest.fn();

const getIMInput = () => (
  <IMInput
    required
    id='input-2'
    name='search'
    value='value'
    inputLabel='search'
    placeHolder='Search value'
    onChange={onChange}
    onKeyPress={onKeyPress}
    onBlur={onBlur}
    type='text'
    variant='outlined'
    leftIcon={SearchOutlinedIcon}
    rightIcon={SearchOutlinedIcon}
    helperText='Helper text'
    defaultValue='default value'
    error='error message'
  />
);

Enzyme.configure({ adapter: new Adapter() });
describe('IMInput component should', () => {
  it('be defined', () => {
    const wrapper = shallow(getIMInput());
    expect(wrapper).toBeDefined();
  });

  it('call onchange function', () => {
    const wrapper = shallow(getIMInput());
    const event = {
      preventDefault() {},
      target: { value: 'Updated IMInput Value' },
    };
    wrapper.childAt(0).simulate('change', event);
    expect(onChange).toHaveBeenCalledWith(event);
  });

  it('call key press function', () => {
    const wrapper = shallow(getIMInput());
    wrapper.childAt(0).simulate('keyPress', { keyCode: 13 });
    expect(onKeyPress).toHaveBeenCalledWith({ keyCode: 13 });
  });

  it('call onchange function', () => {
    const wrapper = shallow(getIMInput());
    const event = {
      preventDefault() {},
      target: { value: '' },
    };
    wrapper.childAt(0).simulate('change', event);
    expect(onChange).toHaveBeenCalledWith(event);
  });

  it('call on blur function', () => {
    const wrapper = shallow(getIMInput());
    wrapper.childAt(0).simulate('focus');
    expect(onBlur).toHaveBeenCalled();
  });
});
