# Differential Calculus II

---

<center>
<p>A continuation on stuff regarding differential calculus. <a href="../../../Home.html">(~/)</a></p>
</center>

## Reciprocal functions

Given the \\( f(x) = \frac{1}{g(x)} = g(x)^{-1} \\), find the derivative \\( f'(x) \\)?

### 1.) The difference

\\[ \Delta y = g(x + \Delta x)^{-1} - g(x)^{-1} \\]

\\[ 
\Delta y = 
\frac{1}{g(x + \Delta x)} \cdot \frac{g(x)}{g(x)} -
\frac{1}{g(x)} \cdot \frac{g(x + \Delta x)}{g(x + \Delta x)}
\\]

\\[
\Delta y =
\frac{g(x) - g(x + \Delta x)}{g(x + \Delta x) \cdot g(x)}
\\]

### 2.) The difference quotient

\\[
\frac{\Delta y}{\Delta x} =
\frac{g(x) - g(x + \Delta x)}{g(x + \Delta x) \cdot g(x) \cdot \Delta x}
\\]

### 3.) The derivative

\\[
\lim\_{\Delta x \to 0} \left[ 
\frac{g(x) - g(x + \Delta x)}{g(x + \Delta x) \cdot g(x) \cdot \Delta x}
\right]
\\]

\\[
\lim\_{\Delta x \to 0} \left[ 
- \frac{\left[ g(x + \Delta x) - g(x) \right]}{g(x + \Delta x) \cdot g(x) \cdot \Delta x}
\right]
\\]

\\[
\lim\_{\Delta x \to 0} \left[ 
g(x + \Delta x) - g(x) \right] \Rightarrow 
g'(x)
\\]

\\[
\lim\_{\Delta x \to 0} \left[ 
g(x + \Delta x) \cdot g(x) \right] \Rightarrow 
g(x) \cdot g(x) = g(x)^{2}
\\]

\\[
f'(x) = - \frac{g'(x)}{g(x)^{2}}
\\]

## Implicit differentiation

