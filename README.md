# Spinneret
Node.js-based web framework for Polymer

This is a bit of an experiment to see what sort of server-side support Polymer
needs to rapidly build useful web applications.  I'm going to start by
refactoring a number of my existing webapps to use Polymer, and building out
support for the framework as necessary.  Tutorials, documentation, and a
coherent vision will follow later.  This space may not be all that interesting
until I've had a chance to build a fair bit.

## Design philosophy

1. Front-end first.  In contrast to some older frameworks that make you define
   database models before you can build a feature, Spinneret assumes you will
build & assemble your webcomponents first, and then bind them to data to add
interactivity.
2. Progressive refinement.  Spinneret aims to eliminate points in the
   development process where you have to spend a lot of time writing code
without having a user-visible feature to show for it.  You should be able to
start off with quick & dirty approximate solutions and then incrementally refine
them into robust, production-quality code.
3. Loosely-coupled yet well-integrated modules.  When existing best-of-breed
   Node.js modules exist, Spinneret aims to use them.  When they don't,
Spinneret hopes to build the functionality first as a library and then integrate
it into the framework.  However, when a standard is necessary for
interoperability, Spinneret doesn't hesitate to hold an opinion.  Experience in
the Django world shows that having a standard account system, standard ORM, and
standardized middleware & template tag APIs can unlock innovation rather than restraining it.
