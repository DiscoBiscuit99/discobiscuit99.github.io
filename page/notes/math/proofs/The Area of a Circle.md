# The Area of a Circle

---

<center>
<p>This page outlines an approach to the proving of the area of a circle. <a href="../../../Home.html">(~/)</a></p>
</center>

By rotating a circle's radius, divided into infinitessimally small parts along the x axis, \\( 2 \pi \\) about it's center, the circle's area is produced. This can be described with the following integral:

\\[
A = 2 \pi \int\_{0}^{r} x~\mathrm dx
\\]

\\[ \Downarrow \\]

\\[
A = 2 \pi \left[ \frac{x^{2}}{2} \right]\_{0}^{r}
\\]

\\[ \Downarrow \\]

<div class="answer">
\[ A = \frac{2 \pi r^{2}}{2} = \pi r^{2} \]
</div>

The area of the circle can also be derived from it's curve length. The curve length is given by as follows:

\\[
y = \sqrt{r^{2} - x^{2}}
\\]

Note that the above equation is, of course, the circle's.

\\[
y' = - \frac{x}{\sqrt{r^{2}} - x^{2}} 
\\]

\\[
L = \int\_{-r}^{r} \sqrt{1 + (y')^{2}}~\mathrm dx \Rightarrow 
\int\_{-r}^{r} \sqrt{1 + \left( - \frac{x}{\sqrt{r^{2} - x^{2}}} \right)^{2}}~\mathrm dx \Rightarrow
\int\_{-r}^{r} \sqrt{1 + \frac{x^{2}}{r^{2} - x^{2}}}~\mathrm dx
\\]

Doing some reduction work on the inner part of the squareroot yields:

\\[
1 + \frac{x^{2}}{r^{2} - x^{2}} =
\frac{r^{2} - x^{2}}{r^{2} - x^{2}} + \frac{x^{2}}{r^{2} - x^{2}} =
\frac{r^{2} - x^{2} + x^{2}}{r^{2} - x^{2}} =
x^{2}
\\]

Thus, the integral becomes:

\\[
L = \int\_{-r}^{r} \sqrt{x^{2}}~\mathrm dx \Rightarrow
2 \int\_{0}^{r} x~\mathrm dx
\\]

Since the integral is symmetrical, it's range has been divided by two. Lastly:

\\[
A = 
\pi \cdot L =
\pi \cdot 2 \int\_{0}^{r} x~\mathrm dx 
\\]

\\[ \Downarrow \\]

<div class="answer">
\[
A = 
2 \pi \left[ \frac{x^{2}}{2} \right]_{0}^{2} =
2 \pi \left( \frac{r^{2}}{2} \right) =
\frac{2 \pi r^{2}}{2} =
\pi r^{2}
\]
</div>

