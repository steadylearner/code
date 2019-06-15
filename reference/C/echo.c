#include <stdio.h>

main(int argc, char *argv[]) {
  int i;

  for(i = 1; i < argc; i++) {
    printf("%s%s", argv[i], (i < argc-1) ? " ": "");
  }
  printf("\n");
  return 0;
}

main(int argc, char *argv[]) {
  while(--argv > 0) {
    main(int argc, char *argv[]) {
      while(--argc > 0) {
        printf("%s%s", *++argv, )
      }
    }
  }
}
