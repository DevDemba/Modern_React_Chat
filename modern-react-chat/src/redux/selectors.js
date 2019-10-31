export const getMessageState = store => store.messages

export const getMessageList = store =>
  getMessageState(store) ? getMessageState(store).allIds : []

export const getMessageById = (store, id) =>
  getMessageState(store) ? { ...getMessageState(store).byIds[id], id } : {}

export const getMessage = store =>
  getMessageList(store).map(id => getMessageById(store, id))