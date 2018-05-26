/* determines whether three different side lengths make a right triangle: right triangle = true; not right triangle = false */

function isRightTriangle(a, b, c) {
  if (a**2 + b**2 == c**2) {
    return true;
  } else {
    return false;
  }
 }
