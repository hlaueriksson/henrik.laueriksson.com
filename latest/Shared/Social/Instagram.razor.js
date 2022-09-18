export function scriptify(element) {
    //<script async src="//www.instagram.com/embed.js"></script>
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function () {
        // remote script has loaded
    };
    script.src = '//www.instagram.com/embed.js';

    element.appendChild(script);
};
