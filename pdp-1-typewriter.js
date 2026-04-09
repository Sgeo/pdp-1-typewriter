const STYLE = `
    .main {
    
    }
`;

class PDP1Typewriter extends HTMLElement {
    constructor() {
        super();
    }
    
    
    connectedCallback() {
        this._shadow = this.attachShadow({mode: "open"});
        this._column = 1;
        this._spanclass = "black";

        this._maindiv = document.createElement("div");
        this._maindiv.contentEditable = "true";
        this._maindiv.spellcheck = "false";
        this._maindiv.className = "main";
        this._shadow.append(this._maindiv);

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "pdp-1-typewriter.css";
        this._shadow.append(link);

        this._cursor = document.createElement("span");
        this._cursor.textContent = "\u00A0"; // Non-breaking space
        this._cursor.className = "cursor";

        this.newSpan();

        this._maindiv.addEventListener("beforeinput", (e) => {
            e.preventDefault();

            if(e.data) {
                for(let char of e.data) {
                    this.typed(char);
                }
            }

            if(e.inputType === "deleteContentBackward") {
                this.typed("\b");
            }

            if(e.inputType === "insertLineBreak" || e.inputType === "insertParagraph") {
                this.typed("\n");
            }
        });

        this._maindiv.addEventListener("input", function(e) {
            e.preventDefault(); // Attempt to block input not already blocked in beforeinput
        })

    }

    // A character was typed by the user
    typed(char) {
        this.add(char);
    }

    // A character is being added to the page, either due to being typed or via computer
    add(char) {
        if(char === "\n") {
            this._column = 1;
            this._maindiv.append(document.createElement("br"));
            this.newSpan();
            this._maindiv.scrollTop = this._maindiv.scrollHeight; // Stolen from https://github.com/obsolescence/pidp1/blob/main/web_pdp1/srv/typewriter.js
        } else if(char === "\b") {
            if(this._column === 1) {
                return;
            }
            this._column -= 1;
            let backspace = document.createElement("span");
            backspace.className = "backspace";
            backspace.contentEditable = false;
            this._maindiv.append(backspace);
            this.newSpan();
        } else {
            this._column += 1;
            this._current.append(char);
            this._maindiv.append(this._cursor);
        }
    }
    
    newSpan() {
        this._current = document.createElement("span");
        this._current.className = this._spanclass;
        this._current.contentEditable = false;
        this._maindiv.append(this._current);
        this._current.append(this._cursor);
    }

}

customElements.define("pdp-1-typewriter", PDP1Typewriter);
