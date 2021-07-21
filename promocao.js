const precos = [200, 150, 50, 100];

    const soma = precos.reduce((acc, item) => acc + item)
    const desconto = precos.reduce((acc, item) => acc > item ? item : acc);
 


if (precos.length >= 3) {
   console.log(soma - (desconto/2))
} else {
    console.log(soma)
}