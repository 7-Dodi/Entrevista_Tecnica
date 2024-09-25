#include <stdio.h>

void main () {
    int INDECE = 13;
    int k = 0;
    int SOMA = 0;
    int i;

    for (i = 0; i<INDECE; i++) {
        k= k+1;
        SOMA = SOMA + k; 
    }

    printf("O valor da soma eh: %d", SOMA);
}