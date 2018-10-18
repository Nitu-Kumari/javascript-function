function power(base, exponent) {
    var exponent = exponent || 0;
    var result = 1;
    for (var count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  console.log(Math.exp(0));