# Integral Calculus I

---

<center>
<p>Foundational stuff regarding integral calculus. <a href="../../../Home.html">(~/)</a></p>
</center>

## A simple integral

Geometrically, integrating a function yields the area under it. A function can be integrated with or without limits. An integral of a function \\( f(x) \\) in the range \\( [a;b] \\) looks as follows:

\\[ 
\int\_{a}^{b} f(x)~\mathrm dx 
\\]

Say the function \\( f(x) = x \\) and the range is \\( [1;2] \\). The integral, then, is:

\\[
A =
\int\_{1}^{2} x~\mathrm dx =
\left[ \frac{x^{2}}{2} \right]\_{1}^{2} =
\frac{2^{2}}{2} - \frac{1^{2}}{2} =
2 - \frac{1}{2} =
1.5
\\]

The rule is simple. Given integration with regards to \\( x \\):

\\[
x^{n} \Rightarrow \frac{x^{n+1}}{n+1}
\\]

Here is another simple integral with the range \\( [0;1] \\). The function, a simple linear equation \\( f(x) = 3x+2 \\). The integral becomes:

\\[
A =
\int\_{0}^{1} 3x+2~\mathrm dx =
\left[ \frac{3x^{2}}{2} + 2x \right]_{0}^{1} =
\left( \frac{3 \cdot 1^{2}}{2} + 2 \cdot 1 \right) - \left( \frac{3 \cdot 0^{2}}{2} + 2 \cdot 0 \right)
\\]

\\[
= \left( \frac{3 \cdot 1^{2}}{2} + 2 \cdot 1 \right) =
\frac{3}{2} + 2 =
\frac{3}{2} + \frac{4}{2} =
\frac{3 + 4}{2} =
\frac{7}{2} =
3.5
\\]

If the integral is indefinite, a constant, often \\( C \\) or \\( k \\), is simply added and, thus, the function can be moved along the y-axis. Other than that, the integral is computed the same and looks as follows:

\\[ \int f(x)~\mathrm dx \\]

