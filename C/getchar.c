#include "syscalls.h"

int getchar(void) {
  char c;
  
  return (read(0, &c, 1) == 1) ? (unsigned char) c : EOF;
}
