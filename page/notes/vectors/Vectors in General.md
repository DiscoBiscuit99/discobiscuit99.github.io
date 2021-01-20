# Vectors in General

---

<center>
<p>This page covers general things regarding vectors. <a href="../../Home.html">(../)</a></p>
</center>

## The radius vector

The radius vector is rooted in the origin of the coordinate system. It is typically denoted \\(\vec{r}\\).

## The unit vector

A unit vector has always a value of _1 unit_. That is to say, the magnitude of the vector is always 1: \\(|\vec{v}| = 1\\).

\\( \vec{i} \\), \\( \vec{j} \\), \\( \vec{k} \\) are the names of the unit vectors along the x-axis, y-axis, and z-axis respectively. Knowing this, one can express a vector as follows:

\\[ \vec{v} = x \cdot \vec{i} + y \cdot \vec{j} = \begin{pmatrix} x \\\ y \end{pmatrix} \\]

## Vector addition and subtraction

Vector addition and subtraction is done, as one would expect, by adding or subtracting the corresponding elements of the vector. As an example, assume we have:

\\[ \vec{a} = \begin{pmatrix} 2 \\\ 3 \end{pmatrix} \\]
\\[ \vec{b} = \begin{pmatrix} 1 \\\ 4 \end{pmatrix} \\]

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

## Calculating the angle between two vectors

Calculating the angle between two vectors can be done by first calculating the angles of the vectors from the x-axis and then subtracting them. The difference is then the angle between the two. Starting with:

\\[ 
\vec{a} =
\begin{pmatrix} x_1 \\\ y_1 \end{pmatrix},~~~
\vec{b} =
\begin{pmatrix} x_2 \\\ y_2 \end{pmatrix}
\\]

Calculate the angles from the x-axis:

\\[
tan(\vec{a}\_{\theta}) = \frac{y_1}{x_1} \Rightarrow
\vec{a}\_{\theta} = 
tan^{-1} \left( \frac{y_1}{x_1} \right)
\\]

Subtracting them yields the angle between them, here named \\( \phi \\).

\\[
\phi = | \vec{a}\_{\theta} - \vec{b}\_{\theta} |
\\]

## Vector equilibrium

Vector equilibrium means that the sum of the vectors equal zero:

\\[ \vec{a} + \vec{b} + \vec{c} + \vec{d} = 0 \\]

