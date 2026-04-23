import SplitType from "split-type";
import { animate, stagger } from "motion";

class ScrollAnimation {
    words(querySelector) {
        animate(new SplitType(querySelector,
            { types: "lines, words", lineClass: "line" }).words,
            { opacity: 1, y: ["120%", 0] },
            { duration: 1, delay: stagger(0.2, { startDelay: 0.5 }), ease: "circOut" }
        );
    }
     
    chars(querySelector) {
        animate(new SplitType(querySelector,
            { types: "lines, words, chars", lineClass: "line" }).chars,
            { opacity: 1, y: ["150%", 0] },
            { duration: 1, delay: stagger(0.05, { startDelay: 0.5 }), ease: "circOut" }
        );
    }
}

export default new ScrollAnimation();
