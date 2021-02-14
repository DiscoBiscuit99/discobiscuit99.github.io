# Logical Operations

---

<center>
<p>A brief list of the most common logical operations. <a href="../../../Home.html">(~/)</a></p>
</center>

## Bits and bytes

A single binary digit is called a **bit**. Because it's binary, it can either be **ON (1)** or **OFF (0)**. Eight bits make a **byte**, so a byte can go as high as \\( 2^{8} = 255 \\). In hex that is 0xFF. The common multiples you will see are 1 byte (0xFF), 2 bytes (0xFFFF), 4 bytes (0xFFFFFFFF), and 8 bytes (0xFFFFFFFFFFFFFFFF).

## AND, OR, XOR, NOT

Beyond understanding how to read binary and hex, you need to know how to manipulate them with some common operations: **AND**, **OR**, and **XOR**. (Fun fact: XOR is short for _exclusive-or_.) They are explained most concisely in table form:

```
-------------
| Operation |
----------------------
| bit | bit | result |
----------------------

-------           ------            -------
| AND |           | OR |            | XOR |
-------------     -------------     -------------
| 0 | 0 | 0 |     | 0 | 0 | 0 |     | 0 | 0 | 0 |
| 0 | 1 | 0 |     | 0 | 1 | 1 |     | 0 | 1 | 1 |
| 1 | 0 | 0 |     | 1 | 0 | 1 |     | 1 | 0 | 1 |
| 1 | 1 | 1 |     | 1 | 1 | 1 |     | 1 | 1 | 0 |
-------------     -------------     -------------

-------------        -------
| Operation |        | NOT |
----------------     ---------
| bit | result |     | 0 | 1 |
| bit | result |     | 1 | 0 |
----------------     --------- 
```

**AND** is true if both bits are true. **OR** is true if neither bit is true. **NOT** toggles the bit. **XOR** is true if only a single bit is true. In C-like languages, **AND** is often represented by the symbol `&`, **OR** is often represented by the symbol `|`, **XOR** by the symbol `^`, and **NOT** by the symbol `~`. 

The mathematical notation, respectively, is \\( \land \\), \\( \lor \\), \\( \oplus \\), \\( \lnot \\).

## Bitmasking

AND and OR are especially useful for bitmasking, where you can manipulate a binary number with another binary number.

AND is good for **clearing bits**.

Let's say we have the binary number 0b0110 and we want to clear the second bit. We can AND it with 0b1101. The 0 will clear the bit if it's set (`1 & 0 = 0`), but any set bits will stay the set (`1 & 1 = 1`). Another small example:

```
0b0110
0b1101 &
------
0b0100
```

OR is good for **setting bits**.

Let's say we have, again, the binary number 0b0110 and we want to set the fourth bit. We can OR it with 0b1000; the 1 will set the bit if it's not set (`1 | 0 = 1`), but any unset bits will stay unset (`0 | 1 = 1`). Another small example:

```
0b0110
0b1000 |
------
0b1110
```

XOR is good for many things, but one common application in CPUs is to clear a register by XOR'ing it with itself.

Let's say we have, bear with me now, the binary number 0b0110 and we want to clear it all to zeroes without using any other numbers. We can use XOR:

```
0b0110
0b0110 ^
------
0b0000
```

NOT is good for **toggling bits**.

Let's say we have, for the last time, the binary number 0b0110 and we want to toggle the off bits on and the on bits off. We can use the NOT operation:

```
0b0110 ~
------
0b1001
```

## Bit shifting

**Bit shifting** is the act of moving the bits of a number left or right. A left shift is equivalent to multiplying by 2 and a right shift is equivalent to dividing by 2. In most C-like languages, the symbols used for shifting are `<<` for a left shift, and `>>` for a right shift.

```
0b100 (4) >> 0b010 (2) >> 0b001 (1)
0b001 (1) << 0b010 (2) << 0b100 (4)
```

