#include <stdio.h>
#define MAXLINE 1000

int getline(char line[], int max);
int strindex(char source[], char searchfor[]);

char pattern[] = "ould";

int main() {
  char line[MAXLINE];
  int found = 0;

  while(getline(line, MAXLINE) > 0) {
    if (strindex(line, pattern) >= 0) {
       printf("%s", line);;
       found++;
    }
  }
  return found;
}

int getline(char s[], int lim) {
  int c, i;
  
  i = 0;
  while(--lim > 0 && (c=getchar()) != EOF && c != '\n') {
     s[i++] = c;
  }
  if(c == '\n') {
     s[i++] = c;
  }
  s[i] = '\0';
  return i;
}


