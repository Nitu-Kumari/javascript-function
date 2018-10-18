function power(base, exponent) {
    var exponent = exponent || 2;
    var result = 1;
    for (var count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  