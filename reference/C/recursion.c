#include <stdio.h>

int sum(int n);

int main() {
  int number, result;

  printf("Enter a positive ineger: ");
  scanf("%d", &number);
  
  result = sum(number);
  
  printf("sum = %d \n", result);
  return 0;
}

int sum(int num) {
  if(num != 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}
