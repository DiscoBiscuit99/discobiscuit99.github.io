# The Arc Radius

---

<center>
<p>This page outlines an approach to calculate the radius of an arc. <a href="../../../Home.html">(~/)</a></p>
</center>

The circle and it's arc:

![Geometric representation of the circle and the arc in question](imgs/arc-radius.png "Geometric representation of the circle and the arc in question")

In the figure above, both lines are cords of the circle, the vertical line intersecting the center of the circle and thus being the circle's diameter, that equaling \\( b + c \\). The radius to be decided is that of the blue part. The width is \\( 2a \\) and the height \\( b \\). Since two intersecting cords always yield the same product, you get that \\( a \cdot a = b \cdot c \\).
Reducing this equation yields the following: \\( a^{2} = b \cdot c \\), and isolating \\( c \\) by dividing with the width gives:

\\[ c = \frac{a^{2}}{b} \\]

Since the diameter (\\( d \\)) equals \\( b + c \\), substituting \\( c \\) produces:

\\[ d = b + \frac{a^{2}}{b} \\]

And since the radius (\\( r \\)) is half the diameter, the equation is divided by \\( 2 \\) and as such becomes:

\\[
r = \frac{b}{2} + \frac{a^{2}}{2b}
\\]

The common denominator (\\( b \\)) is found and the equation is reduced by addition of the fractions.

\\[ r = \frac{b^{2}}{2b} + \frac{a^{2}}{2b} \\]

\\[ \Downarrow \\]


<div class="answer">
\[ r = \frac{a^{2} + b^{2}}{2b} \]
</div>
