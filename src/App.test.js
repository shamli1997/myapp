import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'



Enzyme.configure({ adapter: new EnzymeAdapter() })

/**Factory Function to create ShallowWrapper for the
App Component
@Function setup
@param {object} props-Component props specific to this setup
@param {any} state-Initial state for setup
@returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {

  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with given data-test value
 * @param {ShallowWrapper} wrapper -Enzyme shallow wrapper to search within
 * @param {String} val -Value of data-test attribute for search
 * @returns{ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);


});

test('renders increment button', () => {
  const wrapper = setup();
  const increment_button = findByTestAttr(wrapper, 'increment-button')
  expect(increment_button.length).toBe(1);


});

test('renders Counter Display', () => {
  const wrapper = setup();
  const counter_display = findByTestAttr(wrapper, 'counter-display')
  expect(counter_display.length).toBe(1);


});

test('Counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);


});

test('Clicking button increments the counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  //find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update()
  //find counterdisplay an equal to 8
  const counter_display = findByTestAttr(wrapper, 'counter-display');
  expect(counter_display.text()).toContain(counter + 1)


});

describe('Decrement', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  })

  test('Clicking Button decrements counter display', () => {
    //Define counter at 5
    const counter = 5;
    const wrapper = setup(null, { counter });

    //find button and click
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    wrapper.update();

    //Find counter display value to be 4
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1);
  })

  test('error does not show when not needed', () => {
    const wrapper = setup();
    const warningDisplay = findByTestAttr(wrapper, 'warning-display');
    expect(warningDisplay.exists()).toBeFalsy();
  })

  describe('Counter is 0', () => {
    let counter;
    let wrapper;
    let counterDisplay;

    beforeEach(() => {
      counter = 0;
      wrapper = setup(null, { counter });
      counterDisplay = findByTestAttr(wrapper, 'counter-display');
    })

    test('clicking button decrement', () => {
      // find a button to click
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
      wrapper.update();

      //find counterdisplay an equal to 0 and appears a warning message
      const warningDisplay = findByTestAttr(wrapper, 'warning-display');
      expect(wrapper.state().counter).toBeGreaterThanOrEqual(0)
      expect(counterDisplay.text()).toContain(counter);
      expect(warningDisplay.text()).toEqual('It can not be negative');
    })

    test('clicking button increment', () => {
      const warningDisplay = findByTestAttr(wrapper, 'warning-display');
      // find a button to click
      const button = findByTestAttr(wrapper, 'increment-button');
      button.simulate('click');
      wrapper.update();

      //find counterdisplay an equal to 1
      const counterDisplay = findByTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(counter + 1);
      expect(warningDisplay.exists()).toBeFalsy();
    })
  })

})

