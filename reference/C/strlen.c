#include <stdio.h>

int strlenc(char *s) {
  int n;

  for (n = 0; *s != '\0'; s++) {
     n++;
  }
  return n;
}

void main() {
  printf("%d\n", strlenc("How many chars here?"));
}
