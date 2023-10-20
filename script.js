
function Cursor() {
    let e = document.querySelector("#CursorX"),
        o = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        },
        t = {
            x: o.x,
            y: o.y
        },
        r = gsap.quickSetter(e, "x", "px"),
        a = gsap.quickSetter(e, "y", "px");
    gsap.set("#CursorX", {
        xPercent: -50,
        yPercent: -50
    }), window.addEventListener("mousemove", e => {
        t.x = e.x, t.y = e.y, gsap.to("#CursorX", {
            scale: 1,
            duration: 2.2,
            ease: "power3.out"
        })
    });
    gsap.ticker.add((e, n) => {
        let i = n * (31 / 1300),
            s = 1 - Math.pow(.9, i);
        o.x += (t.x - o.x) * s, o.y += (t.y - o.y) * s, r(o.x), a(o.y)
    });
    let n = document.querySelector("#CursorXC"),
        i = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        },
        s = {
            x: i.x,
            y: i.y
        },
        c = gsap.quickSetter(n, "x", "px"),
        g = gsap.quickSetter(n, "y", "px");
    gsap.set("#CursorXC", {
        xPercent: -50,
        yPercent: -50
    }), window.addEventListener("mousemove", e => {
        s.x = e.x, s.y = e.y
    });
    gsap.ticker.add((e, o) => {
        let t = o * (130 / 2200),
            r = 1 - Math.pow(.9, t);
        i.x += (s.x - i.x) * r, i.y += (s.y - i.y) * r, c(i.x), g(i.y)
    });
    const cursorLinks = document.querySelectorAll(".cursor-link");
    const l = gsap.timeline({
        defaults: {
            ease: "power3.out"
        },
        paused: !0
    });
    l.to(n, {
        scale: 1,
        duration: 1.3
    }), cursorLinks.forEach(e => {
        e.addEventListener("mouseenter", () => {
            l.reversed(!l.timeScale(1).play())
        }), e.addEventListener("mouseleave", () => {
            l.reversed(!l.timeScale(2.2).reversed())
        })
    })
}

function Skills() {
    // Set the 'data-speed' attribute for each icon
    const speedAttributes = {
        'skills-css-icon': '0.9',
        'skills-python-icon': '0.4',
        'skills-react-icon': '0.3',
        'skills-html-icon': '0.4',
        'skills-mongodb-icon': '0.7',
        'skills-git-icon': '0.9',
        'skills-nextjs-icon': '0.1',
        'skills-cpp-icon': '0.2',
        'skills-js-icon': '0.1',
        'skills-vscode-icon': '0.5',
        'skills-tailwindcss-icon': '0.6',
        'skills-wordpress-icon': '0.8',
    };

    // Add animation for each icon
    for (const iconId in speedAttributes) {
        const speed = speedAttributes[iconId];
        const icon = document.getElementById(iconId);

        gsap.from(icon, {
            yPercent: 220 - speed * 100, // Convert data-speed to yPercent
            scrollTrigger: {
                trigger: '#skills',
                scrub: 1.9
            }
        });
    }
}


const load = (overflow, scrollBehavior) => {

    document.body.style.overflowX = overflow; // add overflow-x hidden to body tag
    document.body.classList.add('dark'); // add dark class to body tag
    document.documentElement.style.scrollBehavior = scrollBehavior; // add scroll-behavior: smooth to html tag
    // user-select: none and pointer-events: none to all img tags
    const img = document.getElementsByTagName('img');
    for (let i = 0; i < img.length; i++) {
        img[i].style.userSelect = 'none';
        img[i].style.pointerEvents = 'none';
    }

    // add linear gradient to the gradient-text class
    const gradientText = document.getElementsByClassName('gradient-text');
    for (let i = 0; i < gradientText.length; i++) {
        gradientText[i].style.backgroundImage = 'linear-gradient(180deg, #EFF3F6 0%, #607185 100%)';
        gradientText[i].style.webkitBackgroundClip = 'text';
        gradientText[i].style.webkitTextFillColor = 'transparent';
        gradientText[i].style.opacity = '0.6';
        gradientText[i].style.fontFamily = 'Syne, sans-serif';
        gradientText[i].style.fontWeight = '800';
        // add data-splitting attribute to the gradient-text class
        // gradientText[i].setAttribute('data-splitting', 'chars');
    }



    return null;

}


document.addEventListener("DOMContentLoaded", function () {

    'use strict';

    // add dark class to body tag
    document.body.classList.add('dark');

    // add link tag for Syne font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // add div for #CursorX and #CursorXC and make its shape like the above svgs
    const div = document.createElement('div');
    div.id = 'CursorX';
    div.style.width = '20px';
    div.style.height = '20px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = '#ffffff';
    div.style.position = 'fixed';
    div.style.zIndex = 999999;
    div.style.pointerEvents = 'none';
    div.style.transform = 'scale(0)';
    document.getElementById('main').appendChild(div);

    const div2 = document.createElement('div');
    div2.id = 'CursorXC';
    div2.style.width = '100px';
    div2.style.height = '100px';
    div2.style.borderRadius = '50%';
    div2.style.border = '2px solid #ffffff';
    div2.style.backgroundColor = 'transparent';
    div2.style.position = 'fixed';
    div2.style.zIndex = 99999999;
    div2.style.pointerEvents = 'none';
    div2.style.transform = 'scale(0)';
    document.getElementById('main').appendChild(div2);

    const sectionTitleSquare = document.getElementsByClassName('section-title__square');
    for (let i = 0; i < sectionTitleSquare.length; i++) {
        sectionTitleSquare[i].style.display = 'inline-block';
        sectionTitleSquare[i].style.transform = 'translate(-50%, -50%)';
    }

    // const script = document.createElement('script');
    // script.src = '/splitting.js';
    // script.async = true;
    // script.onload = function () {
    //     Splitting();
    // };
    // document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js';
    script2.async = true;
    script2.onload = function () {
        const script3 = document.createElement('script');
        script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js';
        script3.async = true;
        script3.onload = function () {
            gsap.registerPlugin(ScrollTrigger);

            const gTlHero = gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero',
                    toggleActions: "restart none none reverse"
                }
            });

            const gsapSq = gsap.utils.toArray('.section-title__square');

            gTlHero.from(".title", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
            gTlHero.from(".char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });

            gsap.from("#about-title", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out", scrollTrigger: { trigger: '#about' } });
            gsap.from("#skills-title", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out", scrollTrigger: { trigger: '#skills' } });
            gsap.from("#projects-title", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out", scrollTrigger: { trigger: '#skills' } });

            gsapSq.forEach((gSq, i) => {
                const rotat = gsap.from(gSq, 3, { rotation: 720 });
                ScrollTrigger.create({
                    trigger: gSq,
                    animation: rotat,
                    start: 'top bottom',
                    scrub: 1.9
                });
            });

            Cursor();

            Skills();

            // gsap.to('.title_paralax', {
            //     scrollTrigger: {
            //         trigger: '.header',
            //         start: 'top top',
            //         scrub: 1.9
            //     },
            //     yPercent: -150
            // })

        };

        document.body.appendChild(script3);
    };
    document.body.appendChild(script2);


});


