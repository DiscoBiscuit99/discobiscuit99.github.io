# Vectors in General

---

<center>
<p>This page covers general things regarding vectors. <a href="../../../Home.html">(~/)</a></p>
</center>

## The radius vector

The radius vector is rooted in the origin of the coordinate system. It is typically denoted \\(\vec{r}\\).

## The unit vector

A unit vector has always a value of _1 unit_. That is to say, the magnitude of the vector is always 1: \\(|\vec{v}| = 1\\).

\\( \vec{i} \\), \\( \vec{j} \\), \\( \vec{k} \\) are the names of the unit vectors along the x-axis, y-axis, and z-axis respectively. Knowing this, one can express a vector as follows:

\\[ \vec{v} = x \cdot \vec{i} + y \cdot \vec{j} = \begin{pmatrix} x \\\ y \end{pmatrix} \\]

## Vector addition and subtraction

Vector addition and subtraction is done, as one would expect, by adding or subtracting the corresponding elements of the vector. As an example, assume we have:

\\[ 
\vec{a} = 
\begin{pmatrix} 
2 \\\ 
3 \\\
\end{pmatrix} 
~~~~~~~
\vec{b} = 
\begin{pmatrix} 
1 \\\ 
4 \\\
\end{pmatrix}
\\]

Then adding the vectors would look like this:

\\[
\vec{c} = 
\vec{a} + \vec{b} = 
\begin{pmatrix} 2 \\\ 3 \end{pmatrix} + \begin{pmatrix} 1 \\\ 4 \end{pmatrix} = 
\begin{pmatrix} 2 + 1 \\\ 3 + 4 \end{pmatrix} = 
\begin{pmatrix} 3 \\\ 7 \end{pmatrix}
\\]

And subtracting them like this:

\\[
\vec{c} = 
\vec{a} - \vec{b} = 
\begin{pmatrix} 2 \\\ 3 \end{pmatrix} - \begin{pmatrix} 1 \\\ 4 \end{pmatrix} = 
\begin{pmatrix} 2 - 1 \\\ 3 - 4 \end{pmatrix} = 
\begin{pmatrix} 1 \\\ -1 \end{pmatrix}
\\]

## Vector scaling

Vector addition and subtraction is done, as one would expect, by adding or subtracting the corresponding elements of the vector. As an example, assume we have:

\\[ \vec{a} = \begin{pmatrix} x \\\ y \end{pmatrix} \\] 

We then introduce a scalar , effectively scaling the vector in both axes:

\\[ 
s \cdot \vec{a} = 
s \cdot \begin{pmatrix} x \\\ y \end{pmatrix} =
\begin{pmatrix} s \cdot x \\\ s \cdot y \end{pmatrix}
\\]


## Vector equilibrium

Vector equilibrium means that the sum of the vectors equal zero:

\\[ \vec{a} + \vec{b} + \vec{c} + \vec{d} = 0 \\]


## Finding the angle between two vectors

Given two vectors, what is the angle \\( \theta \\) between them? 

\\[
\vec{a} =
\begin{pmatrix}
x\_{1} \\\
y\_{1} \\\
\end{pmatrix}
~~~~~
\vec{b} =
\begin{pmatrix}
x\_{2} \\\
y\_{2} \\\
\end{pmatrix}
\\]

Since we have the vector components, we can use the tan function to extract the angle between each vector and the x-axis; then, by subtracting the two angles --- and taking the absolute value --- we find the angle between them.

\\[
tan(\alpha) = \frac{y\_{1}}{x\_{1}}
~~~~~~~
tan(\beta) = \frac{y\_{2}}{x\_{2}}
\\]

\\[
\alpha = tan^{-1} \frac{y\_{1}}{x\_{1}}
~~~~~~~
\beta = tan^{-1} \frac{y\_{2}}{x\_{2}}
\\]

Thus, \\( \theta \\) is found:

\\[
\theta = || \alpha - \beta ||
\\]


## The dot product

Computing the dot product of two vectors simply means adding the products of the corresponding elements. The notation is as follows:

\\[
\vec{a} \bullet \vec{b} = 
\vec{a\_{x}} \cdot \vec{b\_{x}} + \vec{a\_{y}} \cdot \vec{b\_{y}} 
\\]

The dot product can also be found like so:

\\[
\\vec{a} \bullet \vec{b} = 
|| \vec{a} || \cdot || \vec{b} || \cdot cos(\theta)
\\]

Where \\( \theta \\) is the angle between the vectors.


## Tværvektoren (english translation?)

Tværvektoren står vinkelret på sit udspring og noteres \\( \hat{v} \\). Givet vektoren \\( \vec{v} \\) findes den således:

\\[
\vec{v} =
\begin{pmatrix}
x \\\
y \\\
\end{pmatrix}
~~~~~~~
\hat{v} =
\begin{pmatrix}
-y \\\
 x \\\
\end{pmatrix}
\\]

