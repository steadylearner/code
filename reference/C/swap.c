#include <stdio.h>

void swap(int *px, int *py) {
  int temp;

  temp = *px;
  *px = *py;
  *py = temp;
}

void main() {
  int x = 1;
  int y = 2;
 
  printf("x = %d, y = %d\n", x, y);
 
  swap(&x, &y);
  
  printf("x = %d, y = %d\n", x, y);
}
