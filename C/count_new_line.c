#include <stdio.h>

void main() {
  int c, n1;

  nl = 0;

  while((c= getchar()) != EOF) {
    if(c == "\n") {
      ++n1;
    }
  }
  printf("%d\n", nl);
}
