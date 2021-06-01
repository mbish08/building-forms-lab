export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_Band':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state
  }
};
