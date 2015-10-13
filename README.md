# CodeSven
Software Tools in Javascript

[CodeSven Link][CodeSven]
[CodeSven]: https://radiant-sea-1408.herokuapp.com/

## Minimum Viable Product

CodeSven is a tool to play around with Javascript in the browser. It is inspired by  Repl.it / CodePen

CodeSven allows users to:

- [ ] Create and read javascript snippets
- [ ] Execute these javascript snippets in the browser
- [ ] Create an account
- [ ] Log in and log out
- [ ] Sign up or log in to save, edit and delete snippets


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User and Snippet Model (1.5 days)

I will start out with User Authentication. Snippets will first be modeled as plain text blocks that users can later create. Users can watch the snippets of other users.

[Details][phase-one]

### Phase 2: Flux and Snippet CRUD (2 days)

Users must be able to create Snippets right away, but not be allowed to save them unless they are signed in. I will build a dummy button for the snippet (to show the snippet in an alert message for now). Later on, this button will execute the snippet as javascript in a separate window in the browser

[Details][phase-two]

### Phase 3: Javascript execution in the browser (3 days)

A user should be able to hit a 'run' button below their snippet, and as a result the javascript evaluation of the snippet should be displayed at a second window in the screen, much like [Repl.it][replit].
This is the more unique part of my app, and an important part, and I want to make sure to make this work as well as possible.

I already have a basic version working, using the [MochiKit][mochikit] Library.

[Details][phase-three]

[replit]: https://repl.it/languages/javascript
[mochikit]: https://mochi.github.io/mochikit/

### Phase 4: Syntax Highlighting (1 day)

Using something like [CodeMirror][codemirror] or [Highlight][highlight], I would like to give the user input some JavaScript syntax highlighting. If possible I will add indentation as well.

[Details][phase-four]

[codemirror]: https://codemirror.net/
[highlight]: https://highlightjs.org/

### Phase 5: Styling (1.5 days)

In the last days I want to make sure the app looks great. If there is time left, I want to add a 'like' feature, so that users can like the snippets of other users.

[Details][phase-five]

### Extras

If time allows, I want to add the following to CodeSven:

- [ ] Users like other users their Snippets
- [ ] Users can tag their snippets during save (and later on)
- [ ] Add an HTML editor that combines with the JS
- [ ] Add a CSS editor that combines with JS and HTML
- [ ] Add a fork functionality, so that users can fork their snippets and add to the code

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
