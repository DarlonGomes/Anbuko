import { ipcRenderer } from 'electron';

const minimize = () => {
  ipcRenderer.invoke('minimize-event');
};

const close = () => {
  ipcRenderer.invoke('close-event');
};

const resize = () => {
  console.log('Você não fez');
};

export const titleBarHandler = {
  minimize,
  resize,
  close,
};
