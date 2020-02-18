#include <stdio.h>

int computeStringLength(char *ptr)
{
    int i = 0;
    while (ptr[i])
    {
        i++;
    }
    return i;
}

int main(void)
{
    char str[20], m;
    scanf("%[^\n]%*c", str);
    int i = 0, j = 0;
    int len = computeStringLength(str);

    while (i < len - 2)
    {
        j = i + 2;
        m = str[i];
        str[i] = str[j];
        str[j] = m;
        i = i + 1;
        printf("%s \n", str);
    }

    return 0;
}