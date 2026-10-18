import '@fontsource/unbounded/500.css';
import '@fontsource/unbounded/700.css';
import '@fontsource/unbounded/900.css';
import '@fontsource/sora/400.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';
import './styles/main.css';
import './world/props';
import { App } from './App';

const app = new App(document.getElementById('game') as HTMLCanvasElement, document.getElementById('ui') as HTMLElement);
(window as unknown as { __void: App }).__void = app;
