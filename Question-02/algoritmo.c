#include <stdio.h>

void main () {
    int number;
    int fibInitial = 0;
    int fibNext = 1;
    int fibCopy;
    int i;
    
    printf("Informe um numero: ");
    scanf("%d", &number);

    while(fibNext < number) {
        fibCopy = fibNext;
        fibNext = fibInitial + fibNext;
        fibInitial = fibCopy;
        
        if(fibNext == number) {
            printf("O numero %d faz parte da sequencia", number);
            break;
        } 
    }
    
    if(fibNext != number) {
        printf("O numero %d nao faz parte da sequencia", number);
    }
}