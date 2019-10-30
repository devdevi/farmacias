import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Buefy from 'buefy';
import Farmacias from '@/components/Farmacias.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Buefy);

describe('Farmacias.vue', () => {
  let actions;
  let store;
  let state;

  beforeEach(() => {
    actions = {
      FAKE: jest.fn(),
    };
    state = {
      farmacias: [],
    };
    store = new Vuex.Store({
      actions,
      state,
    });
  });

  it('renders props.msg when passed', () => {
    const msg = 'Encuentran farmacias de la región metropolitana.';
    const wrapper = shallowMount(Farmacias, {
      store,
      localVue,
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
