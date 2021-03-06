/**
 * # HTMLPreview
 * 
 * Display of HTML Preview window, the same as the HTMLPreview action step. Returns true if user closed preview with the "Continue" button, false if the user cancelled.
 * 
 * ### Example
 * 
 * ```javascript
 * let html = "<html><body>My Document</body></html>"
 * 
 * let preview = HTMLPreview.create();
 * preview.show(html);
 * ```
 */
declare class HTMLPreview {
    /**
     * Open HTML Preview window displaying the HTML string passed.
     * @param html The HTML content to display. Should be complete HTML document.
     */
    show(html: string): boolean

    static create(): HTMLPreview
}

