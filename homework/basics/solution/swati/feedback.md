# Homework Feedback

Hi Swati!

Nice looking design.
I like the bold choice of gif.

## `h4` and subheadings

I notice that you have an `h4` element.
I suspect this is because it looked too big as an `h2`.
This is not the purpose of the different heading levels.
If you have an `h2` but you want to make it smaller, you
should change the `font-size` in CSS.

Think of headings and subheadings like the table of contents for a webpage, like below.

**Main Title**

1. `h2` My section heading
   1.  `h3` A subsection in the first major section
   2. `h3` Another subsection in the first major section 
2. `h2` My second section heading
   1. `h3` A subsection in the second major section
      1. `h4` A tiny subsection of the subsection (these are rare)
   2. `h3` Another subsection…
   3. `h3`

You have the main title, the `h1`, then you have major section titles,
`h2`, and within those major sections, you have `h3` subsections,
and in those subsections, `h4` subsections, etc.

## Adapting from other solutions

I can see in a few places, you've adapted the version at [../robin/index.html](../robin/index.html),
which is great to see. Where there are examples that we like,
we can copy small bits of their code and tweak it just like you've done here.

I hope that you had a look at what `ul li:hover` meant.
The `:hover` is a pseudo-selector which affects the element only when the user is hovering.
You could also introduce `a:hover` to change the link text colour when the user is hovering.

It looks like you understood how to use the other new CSS properties,
the only thing I'd note is that `opacity` changes not only the opacity of
the background, but of everything in the element, which is evident in
your webpage.
