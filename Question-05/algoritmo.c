#include <stdio.h>
#include <string.h>

void main() {
    char str[100], temp;
    int i = 0, j;

    printf("Digite uma string: ");
    fgets(str, sizeof(str), stdin);

    int length = strlen(str);
    j = length - 1; 

    while (i < j) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;

        i++;
        j--;
    }

    printf("A string invertida é: %s\n", str);
}
