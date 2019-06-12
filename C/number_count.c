#include <stdio.h>

void main() {
  long nc = 0;

  while(getcha() != EOF) {
    ++nc;
    printf("%ld\n", nc)
  }
}

// or

void main() {
  double nc;
  
  for(nc = 0; getchar() != EOF; ++nc) 
    ; // null statements
  printf("%.0f\n", nc);
}
