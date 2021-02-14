# Sorting Algorithms

---

<center>
<p>A bunch of sorting algorithms. <a href="../../../Home.html">(~/)</a></p>
</center>

## Insertion sort

The insertion sort algorithm sorts a given list essentially by splitting the list into a sorted lower sublist and a (still) unsorted upper sublist. This is done by iterating through the list and checking if the current element is less than the previous --- if the current element is not the first in the list --- and if so, swap them and check this new current element against its previous one and continue this way until the statement checks false. Reiterate these steps until the list is sorted. 

Time complexity: \\( O(n^{2}) \\)

Example implementation:

```
fn insertion_sort(list):
    for (e, i) in list[1..#list]:
        let j := i-1;
        let e_prev := list[j];
        while e < e_prev & j >= 0:
            list.swap(j+1, j);
            j--;
            e_prev := list[j];
```

## Selection sort

The selection sort algorithm iterates through a given list and then iterates again from the current index to the end of the end of the list, while comparing the elements; if the first element is greater than the second, swap them. When the end of the list is reached, the list has been sorted.

Time complexity: \\( O(n^{2}) \\)

Example implementation:

```
fn selection_sort(list):
    for (e0, i) in list:
        for (e1, j) in list[i..#list]:
            if e0 > e1:
                list.swap(i, j);
```

## Merge sort

Time complexity: \\( O(n~log(n)) \\)

## Bubble sort

Time complexity: \\( O(n^{2}) \\)

## Quick sort

Time complexity: \\( O(n^{2}) \\)

## Heap sort

Time complexity: \\( O(n~log(n)) \\)

