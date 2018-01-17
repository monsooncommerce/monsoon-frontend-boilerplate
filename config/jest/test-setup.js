import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

require('babel-polyfill');
require('raf/polyfill');
import 'raf/polyfill';

Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

// this is for making the custom scrolling JS in src/helpers/utils.js work
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
// window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           function( callback ){
//             window.setTimeout(callback, 1000 / 60);
//           };
// })();
