const md5 = (message) => {
  // Funcția de rotație la stânga, utilizată în calculele MD5
  function leftRotate(value, amount) {
    return (value << amount) | (value >>> (32 - amount));
  }

  // Valorile de shift utilizate în algoritm
  var s = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];

  // Inițializarea tabelului de valori folosit în algoritmul MD5
  var K = [];
  for (var i = 0; i < 64; i++) {
    K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * Math.pow(2, 32));
  }

  // Inițializarea valorilor hash. Acestea sunt valorile de start pentru procesarea MD5
  var H0 = 0x67452301;
  var H1 = 0xefcdab89;
  var H2 = 0x98badcfe;
  var H3 = 0x10325476;

  // Transformarea mesajului într-un array de bytes și adăugarea padding-ului
  var bytes = [];
  for (let i = 0; i < message.length; i++) {
    bytes[i] = message.charCodeAt(i);
  }
  bytes.push(0x80); // Adaugă un bit de 1 la sfârșitul mesajului

  // Asigură-te că lungimea mesajului în bytes este 56 % 64
  while (bytes.length % 64 !== 56) {
    bytes.push(0x00);
  }

  // Adăuga lungimea originală a mesajului în biți la sfârșitul mesajului
  var bitLen = message.length * 8;
  var bitLenBytes = [];
  for (let i = 0; i < 8; i++) {
    bitLenBytes[i] = (bitLen >>> (i * 8)) & 255;
  }
  bytes = bytes.concat(bitLenBytes);

  // Procesarea fiecărui bloc de 64 bytes
  for (let i = 0; i < bytes.length; i += 64) {
    var M = bytes.slice(i, i + 64);
    var W = [];
    for (var j = 0; j < 16; j++) {
      W[j] =
        M[j * 4] +
        (M[j * 4 + 1] << 8) +
        (M[j * 4 + 2] << 16) +
        (M[j * 4 + 3] << 24);
    }

    // Inițializarea variabilelor pentru acest bloc
    var a = H0;
    var b = H1;
    var c = H2;
    var d = H3;

    // Cele 64 de iterații ale algoritmului MD5
    for (let j = 0; j < 64; j++) {
      var f, g;
      if (j < 16) {
        f = (b & c) | (~b & d);
        g = j;
      } else if (j < 32) {
        f = (d & b) | (~d & c);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = b ^ c ^ d;
        g = (3 * j + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * j) % 16;
      }

      var temp = d;
      d = c;
      c = b;
      b =
        b +
        leftRotate(a + f + K[j] + W[g], s[(j % 4) + Math.floor(j / 16) * 4]);
      a = temp;
    }

    // Actualizează valorile hash după procesarea blocului
    H0 = (H0 + a) | 0;
    H1 = (H1 + b) | 0;
    H2 = (H2 + c) | 0;
    H3 = (H3 + d) | 0;
  }

  // Convertește valorile hash într-un string hex

  function toHexString(num) {
    var hex = "";
    for (var i = 0; i < 4; i++) {
      var offset = i * 8;
      hex += ((num >>> offset) & 255).toString(16).padStart(2, "0");
    }
    return hex;
  }

  return toHexString(H0) + toHexString(H1) + toHexString(H2) + toHexString(H3);
};

export default md5;
