#include <stdio.h>
#include <ctype.h>

int main() {
  int c;
  
  while ((c = getchar()) != EOF) {
    putchar(towlower(c));
  } 
  return 0;
}
