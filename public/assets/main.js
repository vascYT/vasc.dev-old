function type_animation() {
    new Typed(".subtitle", { 
        strings: ["I create web apps.", "I create bots.", "I create plugins."], 
        typeSpeed: 50,
        backDelay: 600, 
        backSpeed: 30,
        loop: true,
        showCursor: false
    });
}

$('document').ready(type_animation);