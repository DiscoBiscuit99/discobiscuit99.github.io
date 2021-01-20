# Cheat Sheet

---

<center>
<p>This page contains a kind of cheat sheet of elementary calculus. <a href="../../Home.html">(../)</a></p>
</center>

## Differentials

A bunch of differentials to aid the sloppy memory.

<table>
    <tr>
        <td><b>Function \( f(x) \)</b></td>
        <td><b>Differential Quotient \( f'(x) \)</b></td>
    </tr>
    <tr>
        <td>\( a \)</td>
        <td>\( 0 \)</td>
    </tr>
    <tr>
        <td>\( a \cdot x^n \)</td>
        <td>\( a \cdot nx^{n-1} \)</td>
    </tr>
    <tr>
        <td>\( a^x \)</td>
        <td>\( a^x \cdot ln|a| \)</td>
    </tr>
    <tr>
        <td>\( e^x \)</td>
        <td>\( e^x \)</td>
    </tr>
    <tr>
        <td>\( e^{k \cdot x} \)</td>
        <td>\( k \cdot e^{k \cdot x} \)</td>
    </tr>
    <tr>
        <td>\( g(x) \pm h(x) \)</td>
        <td>\( g'(x) \pm h'(x) \)</td>
    </tr>
    <tr>
        <td>\( g(x) \cdot h(x) \)</td>
        <td>\( g'(x) \cdot h(x) + g(x) \cdot h'(x) \)</td>
    </tr>
    <tr>
        <td>\( \frac{g(x)}{h(x)} \)</td>
        <td>\( \frac{g'(x) \cdot h(x) - g(x) \cdot h'(x)}{h(x)^2} \)</td>
    </tr>
    <tr>
        <td>\( g(h(x)) \)</td>
        <td>\( g'(h(x)) \cdot h'(x) \)</td>
    </tr>
    <tr>
        <td>\( g(x)^{-1} \)</td>
        <td>\( - \frac{g'(x)}{g(x)^2} \)</td>
    </tr>
</table>

## Integrals

A bunch of indefinite integrals to counteract forgettening.

<table style="margin-bottom: 1em">
    <tr>
        <td><b>Function \( f(x) \)</b></td>
        <td><b>Integral (indefinite) \( F(x) \)</b></td>
    </tr>
    <tr>
        <td>\( a \)</td>
        <td>\( a \cdot x + k \)</td>
    </tr>
    <tr>
        <td>\( a \cdot x^n \)</td>
        <td>\( \frac{a^{n + 1}}{n + 1} + k \)</td>
    </tr>
    <tr>
        <td>\( e^x \)</td>
        <td>\( e^x + k \)</td>
    </tr>
    <tr>
        <td>\( x^{-1} \)</td>
        <td>\( ln|x| + k \)</td>
    </tr>
    <tr>
        <td>\( x^{- \frac{1}{2}} \)</td>
        <td>\( 2 \sqrt{x} + k \)</td>
    </tr>
    <tr>
        <td>\( g(x) \pm h(x) \)</td>
        <td>\( g'(x) \pm h'(x) \)</td>
    </tr>
    <tr>
        <td>\( ln|x| \)</td>
        <td>\( x \cdot ln|x| - x + k \)</td>
    </tr>
    <tr>
        <td>\( log|x| \)</td>
        <td>\( x \cdot log|x| - x + k \)</td>
    </tr>
    <tr>
        <td>\( sin(x) \)</td>
        <td>\( -cos(x) + k \)</td>
    </tr>
    <tr>
        <td>\( cos(x) \)</td>
        <td>\( sin(x) + k \)</td>
    </tr>
    <tr>
        <td>\( tan(x) \)</td>
        <td>\( -ln|cos(x)| + k \)</td>
    </tr>
    <tr>
        <td>\( g(x) \cdot h(x) \)</td>
        <td>\( G(x) \cdot h(x) - \int G(x) \cdot h'(x) dx + k \)</td>
    </tr>
</table>



