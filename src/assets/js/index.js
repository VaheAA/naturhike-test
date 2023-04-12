import '../../index.html';
import '../scss/style.scss';
import * as bootstrap from 'bootstrap';
import Alpine from 'alpinejs';
import polaroid from './modules/polaroid';
import honeycombs from './modules/honeycombs';

window.Alpine = Alpine;

Alpine.data('polaroid', polaroid);
Alpine.data('honeycombs', honeycombs);

Alpine.start();
