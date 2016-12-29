function casiPalindrome(palabra) {
    var caracteres = palabra.length;
    var palindrome;
    var count=0;
    for(var i=0, j=caracteres-1; i<caracteres/2, j>caracteres/2; i++, j--)
        {
            if(palabra[i] != palabra[j])
                {
                    count ++;
                }
            }
            if (count<=2)
                {
                    palindrome=true;        
                }
            else
                {
                    palindrome=false;
                }
            return palindrome;
}