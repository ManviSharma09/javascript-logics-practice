#include <stdio.h>
#include <math.h>
#include <string.h>

int main(void)
{
    char str[20], m;
    scanf("%[^\n]%*c", str);
    int i = 0, j = 0;
    long int length = strlen(str);
    while (i < length)
    {
        j = i + 1;
        if (!str[j])
        {
            str[j] = ' ';
        }
        m = str[i];
        str[i] = str[j];
        str[j] = m;
        i = i + 2;
    }
    printf("Changed string is %s", str);
    return 0;
}