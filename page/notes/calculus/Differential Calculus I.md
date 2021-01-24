# Differential Calculus I

---

<center>
<p>Foundational stuff regarding differential calculus. <a href="../../Home.html">(../)</a></p>
</center>

## Differentiable functions

Any given function can be differentiated if, and only if: 

1. a tangent can be produced on the desired point of the function
2. the function doesn't "reflect"
3. the function doesn't "leap"

## The procedure

### I) The difference

\\[ \Delta y = f(x + \Delta x) - f(x) \\]

### II) The difference quotient (or, the rise over run)

\\[
\frac{\Delta y}{\Delta x} = 
\frac{f(x + \Delta x) - f(x)}{\Delta x} 
\\]

### III) The derivative

\\[
\lim\_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = 
\lim\_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x} \Rightarrow 
\frac{\mathrm df(x)}{\mathrm dx} \Rightarrow
f'(x)
\\]

## The product rule

Given the function \\( f(x) = g(x) \cdot h(x) \\), what is the derivative \\( f'(x) \\)?

### I) The difference

\\[
\frac{\Delta y}{\Delta x} =
\frac{g(x + \Delta x) \cdot h(x + \Delta x) - g(x) \cdot h(x)}{\Delta x}
\\]

Add a roundabout zero: \\( g(x) \cdot h(x + \Delta x) - g(x) \cdot h(x + \Delta x) = 0 \\)

\\[
\frac{\Delta y}{\Delta x} =
\frac{g(x + \Delta x) \cdot h(x + \Delta x) - g(x) \cdot h(x) + g(x) \cdot h(x + \Delta x) - g(x) \cdot h(x + \Delta x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} =
\frac{[g(x + \Delta x) - g(x)] \cdot h(x + \Delta x) + g(x) \cdot [h(x + \Delta x) - h(x)]}{\Delta x}
\\]

### II) The difference quotient

\\[
\lim\_{\Delta x \to 0} \frac{g(x + \Delta x) - g(x)}{\Delta x} \cdot
\lim\_{\Delta x \to 0} h(x + \Delta x) + 
\lim\_{\Delta x \to 0} g(x) \cdot 
\lim\_{\Delta x \to 0} \frac{h(x + \Delta x) - h(x)}{\Delta x}
\\]

\\[
\frac{\mathrm dy}{\mathrm dx} =
\frac{\mathrm dg(x)}{\mathrm x} \cdot h(x) + g(x) \cdot \frac{\mathrm dh(x)}{\mathrm dx}
\\]

Or...

<div class="answer">
\[ f'(x) = g'(x) \cdot h(x) + g(x) \cdot h'(x) \]
</div> 

### III) The derivative

## The quotient rule

\\[f(x) = \frac{g(x)}{h(x)}\\]
\\[f'(x) =~?\\]

### I) The difference

\\[\Delta y = \frac{g(x + \Delta x)}{h(x + \Delta x)} - \frac{g(x)}{h(x)}\\]
\\[\Delta y = \frac{g(x + \Delta x) \cdot h(x) - g(x) \cdot h(x + \Delta x)}{h(x + \Delta x) \cdot h(x)}\\]


### II) The difference quotient

\\[\frac{\Delta y}{\Delta x} = \frac{g(x + \Delta x) \cdot h(x) - g(x) \cdot h(x + \Delta x)}{h(x + \Delta x) \cdot h(x) \cdot \Delta x}\\]

\\[\frac{\Delta y}{\Delta x} = \frac{1}{h(x + \Delta x) \cdot h(x)} \cdot \left( \frac{g(x + \Delta x) \cdot h(x) - g(x) \cdot h(x + \Delta x)}{\Delta x} \right)\\]

Throw a complicated zero into the equation: \\( g(x) \cdot h(x) - g(x) \cdot h(x) = 0 \\)

\\[\frac{\Delta y}{\Delta x} = \frac{1}{h(x + \Delta x) \cdot h(x)} \cdot \left( \frac{g(x + \Delta x) \cdot h(x) - g(x) \cdot h(x + \Delta x) + g(x) \cdot h(x) - g(x) \cdot h(x)}{\Delta x} \right)\\]

\\[\frac{\Delta y}{\Delta x} = \frac{1}{h(x + \Delta x) \cdot h(x)} \cdot \left( \frac{g(x + \Delta x) \cdot h(x) - g(x) \cdot h(x) - [g(x) \cdot h(x + \Delta x) - g(x) \cdot h(x)]}{\Delta x} \right)\\]

\\[\frac{\Delta y}{\Delta x} = \frac{1}{h(x + \Delta x) \cdot h(x)} \cdot \left( h(x) \cdot \frac{g(x + \Delta x) - g(x)}{\Delta x} - g(x) \cdot \frac{h(x + \Delta x) - h(x)}{\Delta x} \right)\\]

### III) The derivative

\\[\lim_{\Delta x \to 0} \frac{1}{h(x + \Delta x) \cdot h(x)} \cdot \left( h(x) \cdot \frac{g(x + \Delta x) - g(x)}{\Delta x} - g(x) \cdot \frac{h(x + \Delta x) - h(x)}{\Delta x} \right)\\]

\\[ f'(x) = \frac{1}{h(x)^{2}} \cdot \left[g'(x) \cdot h(x) - g(x) \cdot h'(x)\right] \\]

<div class="answer">
    \[f'(x) = \frac{g'(x) \cdot h(x) - g(x) \cdot h'(x)}{h(x)^2}\]
</div> 

## The chain rule

### Chaining functions

\\[ f(g(x)) = f \circ g(x) \\]

Or...

\\[ \frac{\mathrm df(g(x))}{\mathrm dx} = f'(g(x)) \cdot g'(x) \\]

### The difference quotient

\\[ \frac{g(x + \Delta x) - g(x)}{\Delta x} - g'(x) = v \\]

\\[ \Delta x \to 0 \implies v \to 0 \\]

\\[ y := g(x) \\]
\\[ k := \Delta g(x) \\]

\\[ \frac{f(y - k) - f(y)}{k} - f'(y) = w \\]

\\[ k \to 0 \implies w \to 0 \\]

\\[ \frac{g(x + \Delta x) - g(x)}{\Delta x} - g'(x) = v \\]

\\[ \frac{g(x + \Delta x) - g(x)}{\Delta x} = v + g'(x) \\]

\\[ 
g(x + \Delta x) - g(x) = 
\left[ v + g'(x) \right] \cdot \Delta x
\\]

\\[
g(x + \Delta x) =
\left[ v + g'(x) \right] \cdot \Delta x + g(x)
\\]

\\[ 
g(x + \Delta x) =
g(x) + \Delta x \cdot \left[ g'(x) + v \right]
\\]

\\[ \frac{f(y + k) - f(y)}{k} - f'(y) = w \\]

\\[ \frac{f(y + k) - f(y)}{k} = w + f'(y) \\]

\\[ 
f(y + k) - f(y) = 
\left[ w + f'(y) \right] \cdot k
\\]

\\[
f(y + k) = 
\left[ w + f'(y) \right] \cdot k + f(y)
\\]

\\[
f(y + k) = f(y) + k \cdot \left[ f'(y) + w \right]
\\]

\\[ k = \Delta g(x) \implies k = g(x + \Delta x) - g(x) \\]

Throw a complicated one into the equation: \\( 1 = \frac{\Delta x}{\Delta x} \\)

\\[
k =
\frac{\left[ g(x + \Delta x) - g(x) \right] \cdot \Delta x}{\Delta x}
\\]

And then a complicated zero: \\( g'(x) \cdot \Delta x - g'(x) \cdot \Delta x \\)

\\[
k = 
\frac{\left[ g(x + \Delta x) - g(x) \right] \cdot 
\Delta x}{\Delta x} + g'(x) \cdot \Delta x - g'(x) \cdot \Delta x
\\]

\\[
k =
\left[
\frac{\left[ g(x + \Delta x) - g(x) \right] \cdot \Delta x}{\Delta x} + g'(x) - g'(x)
\right] \cdot \Delta x
\\]

\\[
k =
\left[
g'(x) + \frac{g(x + \Delta x) - g(x)}{\Delta x} - g'(x)
\right] \cdot \Delta x
\\]

\\[ \frac{g(x + \Delta x) - g(x)}{\Delta x} - g'(x) = v \\]

\\[ k = \left[ g'(x) + v \right] \cdot \Delta x \\]

\\[ f(y + k) = f(y) + k \cdot \left[ f'(y) + w \right] \\]

\\[ 
f \left(g(x) + \left[ g'(x) + v \right] \cdot v \right) =
f(y) + k \cdot \left[ f'(y) + w \right]
\\]

\\[
f \left( g(x) + \left[ g'(x) + \frac{g(x + \Delta x) - g(x)}{\Delta x} - g'(x) \right] \cdot \Delta x \right) = 
f(y) + k \cdot \left[ f'(y) + w \right]
\\]

\\[
f \left( g(x) + \left[ \frac{g(x + \Delta x) - g(x)}{\Delta x} \right] \cdot \Delta x \right) = 
f(y) + k \cdot \left[ f'(y) + w \right]
\\]

\\[
f \left( g(x) + g(x + \Delta x) - g(x) \right) =
f(y) + k \cdot \left[ f'(y) + w \right]
\\]

\\[ f \left( g(x + \Delta x) \right) = f(y) + k \cdot \left[ f'(y) + w \right] \\]

\\[ 
f \left( g(x + \Delta x) \right) = 
f(g(x)) + \left[ g'(x) + v \right] \cdot \Delta x \cdot \left[ f'(g(x)) + w \right] 
\\]

\\[ 
f(g(x + \Delta x)) - f(g(x)) = 
f(g(x)) + \left[ f'(g(x)) + w \right] \cdot \left[ g'(x) + v \right] \cdot \Delta x - f(g(x))
\\]

\\[
f(g(x + \Delta x)) - f(g(x)) =
\left[ f'(g(x)) + w \right] \cdot \left[ g'(x) + v \right] \cdot \Delta x
\\]

\\[
\frac{f(g(x + \Delta x)) - f(g(x))}{\Delta x} =
\left[ f'(g(x)) + w \right] \cdot \left[ g'(x) + v \right]
\\]


### The differentail quotient

\\[
\lim\_{\Delta x \to 0} \left[
\frac{f(g(x + \Delta x)) - f(g(x))}{\Delta x}
\right] =
\lim\_{\Delta x \to 0} \left[
\left( f(g(x)) + w \right) \cdot \left( g'(x) + v \right)
\right]
\\]

<div class="answer">
\[ \frac{\mathrm df(g(x))}{\mathrm dx} = f'(g(x)) \cdot g'(x) \]
</div>

# Trigonometric functions

## Sine

\\[f(x) = sin(x)\\]
\\[f'(x) =~?\\]

### I) The difference

\\[\Delta y = sin(x + \Delta x) - sin(x)\\]
\\[\Delta y = sin(x) \cdot cos(\Delta x) + cos(x) \cdot sin(\Delta x) - sin(x)\\]


### II) The difference quotient

\\[
\frac{\Delta y}{\Delta x} = 
\frac{sin(x) \cdot cos(\Delta x) + cos(x) \cdot sin(\Delta x) - sin(x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} = 
\frac{cos(x) \cdot sin(\Delta x) + sin(x) \cdot cos(\Delta x) - sin(x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} = 
\frac{cos(x) \cdot sin(\Delta x) + sin(x) \cdot (cos(\Delta x) - 1)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta y} = 
cos(x) \cdot \frac{sin(\Delta y)}{\Delta x} + sin(x) \cdot \frac{cos(\Delta x) - 1}{\Delta x}
\\]

### III) The derivative

\\[
\lim\_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = 
\lim\_{\Delta x \to 0} cos(x) \cdot \frac{sin(\Delta x)}{\Delta x} + \lim\_{\Delta x \to 0} sin(x) \cdot \frac{cos(\Delta x) - 1}{\Delta x}
\\]

\\[\lim\_{\Delta x \to 0} \frac{sin(\Delta x)}{\Delta x} \Rightarrow 1\\]
\\[\lim\_{\Delta x \to 0} \frac{cos(\Delta x) - 1}{\Delta x} \Rightarrow 0\\]

\\[
\lim\_{\Delta x \to 0} \frac{\Delta y}{\Delta x} =
\lim\_{\Delta x \to 0} cos(x) \cdot 1 + \lim\_{\Delta x \to 0} sin(x) \cdot 0 \Rightarrow \lim\_{\Delta x \to 0} cos(x)
\\]

<div class="answer">
    \[f'(x) = cos(x)\]
</div> 

## Cosine

Given the function \\( f(x) = cos(x) \\), what is the derivative \\( f'(x) \\)?

### The difference

\\[ \Delta y = cos(x + \Delta x) - cos(x) \\]


### The difference quotient

\\[
\frac{\Delta y}{\Delta x} = 
\frac{cos(x + \Delta x) - cos(x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} = 
\frac{cos(x) \cdot cos(\Delta x) - sin(x) \cdot sin(\Delta x) - cos(x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} = 
\frac{cos(x) \cdot \left[ cos(\Delta x) - cos(x) \right] - sin(x) \cdot sin(\Delta x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} = 
\frac{cos(x) \cdot \left[ cos(\Delta x) - 1 \right] - sin(x) \cdot sin(\Delta x)}{\Delta x}
\\]

\\[
\frac{\Delta y}{\Delta x} = 
cos(x) \cdot \frac{cos(\Delta x) - 1}{\Delta x} - sin(x) \cdot \frac{sin(\Delta x)}{\Delta x}
\\]

### The derivative

\\[
\lim\_{\Delta x \to 0} \frac{\Delta y}{\Delta x} =
\lim\_{\Delta x \to 0} \left[ cos(x) \cdot \frac{cos(\Delta x) - 1}{\Delta x} \right] + \lim\_{\Delta x \to 0} \left[ -sin(x) \cdot \frac{sin(\Delta x)}{\Delta x} \right]
\\]

\\[
\lim\_{\Delta x \to 0} \left[ \frac{cos(\Delta x) - 1}{\Delta x} \right] \Rightarrow 0
\\]

\\[
\lim\_{\Delta x \to 0} \left[ \frac{sin(\Delta x)}{\Delta x} \right] \Rightarrow 1
\\]

\\[
\lim\_{\Delta x \to 0} \frac{\Delta y}{\Delta x} =
\lim\_{\Delta x \to 0} cos(x) \cdot 0 - \lim\_{\Delta x \to 0} sin(x) \cdot 1 \Rightarrow \lim\_{\Delta x \to 0} -sin(x)
\\]

\\[ f'(x) = -sin(x) \\]

## Tangent

Given the function \\( f(x) = tan(x) \\), what is the derivative \\( f'(x) \\)?
Knowing that \\( tan(x) = \frac{sin(x)}{cos(x)} \\) will help.

Applying the quotient rule yields:

\\[
f'(x) = \frac{cos(x) \cdot cos(x) - sin(x) \cdot (-sin(x))}{cos(x)^{2}}
\\] 

\\[
f'(x) = \frac{cos(x)^{2} + sin(x)^{2}}{cos(x)^{2}}
\\]

Applying the Pythagorean identity for the numerator now gives:

<div class="answer">
\[ f'(x) = \frac{1}{cos(x)^{2}} = sec(x)^{2} \]
</div>

