#include <stdio.h>
#include <math.h>

int calculateDigits(number)
{
    int numCopy = number, digit = 0;
    while (numCopy != 0)
    {
        numCopy = numCopy / 10;
        digit++;
    }
    return digit;
}

int main(void)
{
    int number;
    scanf("%d", &number);
    int digit = calculateDigits(number), multiplier = 0, newNumber = 0, remainder = 0, rotatedNumber = 0, copyDigit = digit;
    while (copyDigit)
    {
        copyDigit--;
        multiplier = pow(10, digit - 1);
        newNumber = number / multiplier;
        remainder = number % multiplier;
        rotatedNumber = (remainder * 10) + newNumber;
        number = rotatedNumber;
        printf("rotatedNumber after is %d \n", rotatedNumber);
    }
    return 0;
}