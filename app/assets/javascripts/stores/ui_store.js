import McFly from 'mcfly';
const Flux = new McFly();

// reducer
const initialState = { openKey: null };
function UI(state = initialState, action) {
  switch (action.actionType) {
    case 'OPEN_KEY':
      if (action.data.key === state.openKey) {
        return { ...state, openKey: null };
      }
      return { ...state, openKey: action.data.key };
    default:
      return state;
  }
}

// Store
let uiState = { openKey: null };

const storeMethods = {
  getOpenKey() {
    return uiState.openKey;
  }
};

const UIStore = Flux.createStore(storeMethods, (payload) => {
  uiState = UI(uiState, payload);
  UIStore.emitChange();
  return true;
});

UIStore.setMaxListeners(0);

export default UIStore;
