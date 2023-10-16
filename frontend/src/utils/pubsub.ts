export enum WindowEvents {
  LoggedIn = 'LoggedIn',
  AutoLoggedIn = 'AutoLoggedIn',
  Logout = 'Logout',
}
export const WindowEventService = {
  fire: (event: WindowEvents, body?: CustomEventInit): void => {
    const customEvent = new CustomEvent(event, body);
    window.dispatchEvent(customEvent);
  },
  subscribe: (event: WindowEvents, listener: EventListener) => {
    window.addEventListener(event, listener);
  },
  unsubscribe: (event: WindowEvents, listener: EventListener) => {
    window.removeEventListener(event, listener);
  },
};
