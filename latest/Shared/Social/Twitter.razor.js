export function scriptify(element) {
    //<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function () {
        // remote script has loaded
    };
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';

    element.appendChild(script);
};
