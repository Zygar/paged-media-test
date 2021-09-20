// exports.onClientEntry = () => {
//     const styledComponents = document.querySelector('style[data-styled]');
//     var isAutomated = navigator.webdriver;

//     if (styledComponents != null && isAutomated == true) {
//         var inlineStyles = styledComponents.innerHTML;
//         var head = document.head || document.getElementsByTagName('head')[0];
//         var style = document.createElement('style');
//         head.appendChild(style);
//         style.type = 'text/css';
//         style.innerHTML = inlineStyles;

//     } else {

//     }

// }