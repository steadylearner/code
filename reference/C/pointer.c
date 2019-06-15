#include <stdio.h>

void main() {
  long int ptr;
  int number = 1;
 
  ptr = (long int) &number;
  
  printf("%ld -> %d\n", ptr, number);
}
