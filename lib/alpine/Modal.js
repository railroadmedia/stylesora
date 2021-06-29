function Modal() {
    return {
        open: false,
        show() {
            this.open = true
            document.body.classList.add('overflow-hidden')
            this.toggleSiblingsInert(true)
            this.setFocus()
        },
        hide() {
            this.open = false
            document.body.classList.remove('overflow-hidden')
            this.toggleSiblingsInert(false)
            this.$nextTick(() => { this.$refs.trigger.focus() })
        },
        focusables() {
            return [...this.$refs.dialog.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')]
                .filter(el => !el.hasAttribute('disabled'))
        },
        setFocus() {
            let focusElement = this.$el.querySelector('[x-focus-first]') ?? this.focusables()[0]
            this.$nextTick(() => { focusElement.focus() })
        },
        toggleSiblingsInert(toState) {
            // Walk up the DOM, toggle inert attribute the siblings at each level
            let el = this.$refs.dialog
            while (el = el.parentElement) {
                if (el === document.body || el.parentElement === null) continue

                [...el.parentElement.children].filter(sibling => sibling !== el).forEach(sibling => {
                    sibling.inert = toState
                })
            }
        },
        overlay: {
            ['x-show']() { return this.open },
            ['x-bind:x-ref']() { return 'overlay' },
            ['x-transition:enter']() { return 'transition ease-out duration-300' },
            ['x-transition:enter-start']() { return 'opacity-0' },
            ['x-transition:enter-end']() { return 'opacity-100' },
            ['x-transition:leave']() { return 'transition ease-in duration-300' },
            ['x-transition:leave-start']() { return 'opacity-100' },
            ['x-transition:leave-end']() { return 'opacity-0' },
        }
    }
}