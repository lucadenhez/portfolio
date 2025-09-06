import SplitType from "split-type";
import { animate, stagger } from "motion";

class ScrollText {
    words(querySelector) {
        document.querySelector(querySelector).style.opacity = "100%";
        animate(new SplitType(querySelector,
            { types: "lines, words", lineClass: "line" }).words,
            { opacity: 1, y: ["120%", 0] },
            { duration: 1, delay: stagger(0.075), ease: "circOut" }
        );
    }
     
    chars(querySelector) {
        document.querySelector(querySelector).style.opacity = "100%";
        animate(new SplitType(querySelector,
            { types: "lines, words, chars", lineClass: "line" }).chars,
            { opacity: 1, y: ["150%", 0] },
            { duration: 1.5, delay: stagger(0.1), ease: "circOut" }
        );
    }

    lines(querySelector) {
        document.querySelector(querySelector).style.opacity = "100%";
        animate(new SplitType(querySelector,
            { types: "lines", lineClass: "line" }).lines,
            { opacity: 1, y: ["120%", 0] },
            { duration: 1, delay: stagger(0.075), ease: "circOut" }
        );
    }
}

export default new ScrollText();
