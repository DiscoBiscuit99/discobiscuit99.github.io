# Matrix Multiplication

---

<center>
<p>This page demonstrates the usefulness of matrix multiplication and how to apply it. <a href="../../../Home.html">(~/)</a></p>
</center>

Multiplying two matrices is called matrix multiplication and follows some somewhat special rules. The following rule applies: find the dot products for every row of the first matrix and every column of the second matrix. That is to say, multiply every row of the first matrix by every column of the second matrix. Specifying further, every element in the \\( n \\)'th row of the first matrix is therefore multiplied with the corresponding element of the \\( n \\)'th column of the second matrix. If \\( A \\) is a matrix \\( m \times r \\) and \\( B \\) is a matrix \\( r \times n \\), then \\( AB \\) will be a matrix \\( m \times n \\). An example:

\\[
A =
\begin{bmatrix}
a\_{11} & a\_{12} & a\_{13} \\\
a\_{21} & a\_{22} & a\_{23} \\\
\end{bmatrix} =
\begin{bmatrix}
1 & 2 & 3 \\\
4 & 5 & 6 \\\
\end{bmatrix},~~~
B =
\begin{bmatrix}
b\_{11} & b\_{12} \\\
b\_{21} & b\_{22} \\\
b\_{31} & b\_{32} \\\
\end{bmatrix} =
\begin{bmatrix}
1 & 2 \\\
3 & 4 \\\
5 & 6 \\\
\end{bmatrix}
\\]

Starting at the first row of the first matrix and the first column of the second, we find the dot product and continue until all combinations of the rows and columns are satisfied. Note, the order in which the dot products are calculated is important.

\\[
AB = C =
\begin{bmatrix}
\color{Dandelion}{a\_{11}} & \color{Dandelion}{a\_{12}} & \color{Dandelion}{a\_{13}} \\\
a\_{21} & a\_{22} & a\_{23} \\\
\end{bmatrix} 
\begin{bmatrix}
\color{Dandelion}{b\_{11}} & b\_{12} \\\
\color{Dandelion}{b\_{21}} & b\_{22} \\\
\color{Dandelion}{b\_{31}} & b\_{32} \\\
\end{bmatrix}
\\]

\\[
C\_{11} = 
a\_{11} \cdot b\_{11} + a\_{12} \cdot b\_{21} + a\_{13} \cdot b\_{31}
\\]

\\[ \vdots \\]

\\[
C\_{11} = 
1 \cdot 1 + 2 \cdot 3 + 3 \cdot 5 = 22
\\]

\\[
C\_{12} = 
1 \cdot 2 + 2 \cdot 4 + 3 \cdot 6 = 28
\\]

\\[ \vdots \\]

\\[ \Downarrow \\]

\\[
C =
\begin{bmatrix}
22 & 28 \\\
49 & 64 \\\
\end{bmatrix}
\\]

As expected, we get a matrix consisting of the first matrix (\\( A \\)'s) rows \\( m \\) and the second matrix (\\( B \\)'s) columns \\( n \\). Matrix \\( A \\) has two rows and matrix \\( B \\) has two columns so matrix \\( C \\) therefore becomes a \\( 2 \times 2 \\) matrix.

From this, it can be extrapolated that the order of operations --- as stated above --- matters. If a point is to be translated by a matrix, for example, it is important that the point be the second matrix; otherwise the product would be a new matrix and not the translated point.


