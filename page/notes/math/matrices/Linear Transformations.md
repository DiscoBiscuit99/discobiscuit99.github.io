# Linear Transformations

---

<center>
<p>This page contains information on linear transformations with regards to matrices. <a href="../../../Home.html">(~/)</a></p>
</center>

## Scaling

A matrix can be scaled by a scalar as mentioned in the _Basic Operations_ section. The column vector \\( P \\) for instance, if multiplied by a scalar \\( s \\), becomes \\( sP \\). The scalar can be rewritten as a matrix and matrix multiplication can be applied.

\\[
sP =
\begin{bmatrix}
s & 0 & 0 \\\
0 & s & 0 \\\
0 & 0 & s \\\
\end{bmatrix}
\begin{bmatrix}
P\_{x} \\\
P\_{y} \\\
P\_{z} \\\
\end{bmatrix} =
\begin{bmatrix}
sP\_{x} \\\
sP\_{y} \\\
sP\_{z} \\\
\end{bmatrix}
\\]

This is called uniform scaling since all the vector's elements are scaled the same. Conversely, three different scalar values can be used in place of \\( s \\) and the elements can thereby be scaled independently from each other.

\\[
sP =
\begin{bmatrix}
s & 0 & 0 \\\
0 & t & 0 \\\
0 & 0 & u \\\
\end{bmatrix}
\begin{bmatrix}
P\_{x} \\\
P\_{y} \\\
P\_{z} \\\
\end{bmatrix} =
\begin{bmatrix}
sP\_{x} \\\
tP\_{y} \\\
uP\_{z} \\\
\end{bmatrix}
\\]

Since all elements in the vector \\( P \\) are scaled differently, this is called non-uniform scaling. If all but one scalar value equals one, we have what is called directional scaling --- say, for example, \\( t \\) and \\( u \\) are one.

## Rotation

## Translation

For translation in three dimensions, a four dimensional matrix is needed, where it's diagonal equals one to maintain the xyz components. The translation components reside in the fourth column of the translation matrix. The translated vector is produced by matrix multiplication by the translation matrix, like so:

\\[
\begin{bmatrix}
1 & 0 & 0 & a \\\
0 & 1 & 0 & b \\\
0 & 0 & 1 & c \\\
0 & 0 & 0 & 1 \\\
\end{bmatrix}
\begin{bmatrix}
x \\\
y \\\
z \\\
1 \\\
\end{bmatrix} =
\begin{bmatrix}
x + a \\\
y + b\\\
z + c\\\
1 \\\
\end{bmatrix}
\\]

The vector is hereby translated in all axes, name by \\( a \\), \\( b \\), and \\( c \\) amount. An important note to make is that it matters when the translation matrix is multiplied. It is crucial to decide whether or not to translate before or after a scaling since the translation matrix will also be scaled if it is multiplied last.

## Optimization

