# Basic Operations

---

<center>
<p>This page contains information on the basics of matrix math. <a href="../../../Home.html">(~/)</a></p>
</center>

## Definition

A matrix is a collection of values in a rectangular sort of list. The values in a matrix are divided into rows and columns and are called the elements of the matrix. Here, an example of a matrix:

\\[
M = 
\begin{bmatrix}
a & b & c \\\
d & e & f \\\
g & h & i \\\
\end{bmatrix} =
\begin{bmatrix}
1 & 2 & 3 \\\
4 & 5 & 6 \\\
7 & 8 & 9 \\\
\end{bmatrix}
\\]

The size of a matrix is decided from it's number of rows and columns. A matrix with \\( m \\) rows and \\( n \\) columns is called an \\( m \times n \\) matrix, where \\( m \\) and \\( n \\) are also sometimes called the matrix's dimensions.

Matrices with only one row, meaning \\( 1 \times n \\) matrices, are called row-vectors or row-matrices, and matrices with only one column, that being \\( m \times 1 \\) matrices, are called column-vectors or column-matrices. Matrices with an equal amount of rows and columns, \\( n \times n \\) matrices, like the matrix \\( M \\) in the example above, are called square-matrices. Often, numerical values are refered to as scalars.

The elements \\( i = j \\) of a matrix are called the matrix's main diagonal, and matrices of which the only none-zero values lies in the main diagonal are called diagonal matrices.

## Nomenclature

Matrices are often enclosed in either brackets or parentheses but it isn't required. An example follows:

\\[
\begin{matrix}
a\_{11} & a\_{12} & \dots  & a\_{1j} \\\
a\_{21} & a\_{22} & \dots  & a\_{2j} \\\
\vdots  & \vdots  & \ddots & \vdots \\\
a\_{i1} & a\_{i2} & \dots  & a\_{ij} \\\
\end{matrix} = 
\begin{bmatrix}
a\_{11} & a\_{12} & \dots  & a\_{1j} \\\
a\_{21} & a\_{22} & \dots  & a\_{2j} \\\
\vdots  & \vdots  & \ddots & \vdots \\\
a\_{i1} & a\_{i2} & \dots  & a\_{ij} \\\
\end{bmatrix} =
\begin{pmatrix}
a\_{11} & a\_{12} & \dots  & a\_{1j} \\\
a\_{21} & a\_{22} & \dots  & a\_{2j} \\\
\vdots  & \vdots  & \ddots & \vdots \\\
a\_{i1} & a\_{i2} & \dots  & a\_{ij} \\\
\end{pmatrix}
\\]

Matrices are often represented by capital letters and their elements by their counterpart, some times with indices (like \\( a\_{11} \\), \\( a\_{12} \\), \\( \dots \\), \\( a\_{ij} \\)).


## Basic operations

Some basic operations of matrices include addition, subtraction and scalar multiplication.

### Addition (and subtraction)

To add to matrices, simply add their corresponding elements. A simple example:

\\[
\begin{bmatrix}
a\_{11} & a\_{12} \\\
a\_{21} & a\_{22} \\\
\end{bmatrix} +
\begin{bmatrix}
b\_{11} & b\_{12} \\\
b\_{21} & b\_{22} \\\
\end{bmatrix} =
\begin{bmatrix}
a\_{11} + b\_{11} & a\_{12} + b\_{12} \\\
a\_{21} + b\_{21} & a\_{22} + b\_{22} \\\
\end{bmatrix}
\\]

### Scalar multiplication

Multiplication by a scalar value with a matrix is called scalar multiplication. Simply multiply each element of the matrix with the scalar value. This will, of course, just scale the matrix.

\\[
s \cdot
\begin{bmatrix}
a\_{11} & a\_{12} \\\
a\_{21} & a\_{22} \\\
\end{bmatrix} =
\begin{bmatrix}
s \cdot a\_{11} & s \cdot a\_{12} \\\
s \cdot a\_{21} & s \cdot a\_{22} \\\
\end{bmatrix}
\\]

