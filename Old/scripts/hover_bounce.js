class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
        TweenMax.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + (box.width * 0.5);
        this.y = box.top + (box.height * 0.5);
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.hover ? 0.5 : 0.5); // (detach, attach)
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt( x*x + y*y );
        if (distance < (this.width * hoverArea)) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if(!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        TweenMax.to(this.el, 0.05, {
            x: (x - this.x) * 0.05,
            y: (y - this.y) * 0.05,
            scale: 1.00,
            ease: Power2.easeOut
        });
        this.el.style.zIndex = 10;
    }
    onLeave() {
        TweenMax.to(this.el, 0.7, {
            x: 0,
            y: 0,
            scale: 1,
            ease: Elastic.easeOut.config(1.2, 0.4)
        });
        this.el.style.zIndex = 1;
    }
}

const btn1 = document.querySelector('.grid-item:nth-child(1)');
new HoverButton(btn1);
const btn2 = document.querySelector('.grid-item:nth-child(2)');
new HoverButton(btn2);
const btn3 = document.querySelector('.grid-item:nth-child(3)');
new HoverButton(btn3);
const btn4 = document.querySelector('.grid-item:nth-child(4)');
new HoverButton(btn4);
const btn5 = document.querySelector('.grid-item:nth-child(5)');
new HoverButton(btn5);
const btn6 = document.querySelector('.grid-item:nth-child(6)');
new HoverButton(btn6);
