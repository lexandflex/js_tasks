// String expansion
interface String
{
  customUpperCase: () => string;
}

String.prototype.customUpperCase = function () {
  return this.toUpperCase()
}
