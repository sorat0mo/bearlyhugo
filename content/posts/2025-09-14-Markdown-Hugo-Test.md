---
title: "Markdown Hugo Test"
date: 2025-09-14
tags: ["test", "hugo", "markdown"]
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Paragraph

This is a paragraph with **bold text**, *italic text*, and ***bold italic text***.  
Here is ~~strikethrough~~, and here is `inline code`.

## Blockquotes

> This is a blockquote.
> 
> > Nested blockquote.

## Lists

### Unordered List

- Item 1
  - Subitem 1
    - Sub-subitem 1
- Item 2

### Ordered List

1. First item
2. Second item
   1. Subitem 1
   2. Subitem 2
3. Third item

### Task List

- [x] Checked item
- [ ] Unchecked item

## Code Blocks

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Hugo!")
}
```

    # Indented code block (4 spaces)
    echo "Hello from indented code block!"

## Tables

| Syntax | Description | Test Text |
|--------|-------------|-----------|
| Header | Title       | Here's this |
| Paragraph | Text     | And more   |

## Links

[Hugo Homepage](https://gohugo.io)

<https://gohugo.io>

## Images

![Hugo Logo](https://gohugo.io/images/hugo-logo.png "Hugo")

## Horizontal Rule

---

## Footnotes

Here is a statement that needs a footnote.[^1]

[^1]: This is the footnote.

## Definition Lists

Term 1  
:   Definition 1

Term 2  
:   Definition 2

## Emphasis

*Emphasized text*  
**Strong text**  
***Strong and emphasized text***

## Escaped Characters

\*Not italic\*  
\# Not a heading

## Math (if supported)

$$
E = mc^2
$$

Inline math: $a^2 + b^2 = c^2$

---

End of markdown Hugo test!
